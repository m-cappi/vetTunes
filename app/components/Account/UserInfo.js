import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, Accessory} from 'react-native-elements';
import {launchImageLibrary} from 'react-native-image-picker';

import {FirebaseContext} from '../../firebase';
import requestStoragePermission from '../../utils/permissions/requestStoragePermission';

const UserInfo = ({
  toastRef,
  setIsLoading,
  setLoadingInfo,
  setReloadUser,
  userInfo: {photoURL, displayName, email, uid},
}) => {
  const {firebase} = useContext(FirebaseContext);

  const changeAvatar = async () => {
    const userResponse = await requestStoragePermission();
    if (userResponse === 'GRANTED') {
      await launchImageLibrary(
        {
          mediaType: 'photo',
          maxHeight: 480,
          maxWidth: 852,
        },
        res => {
          if (res.errorCode) {
            console.warn('@changeAvatar>launchImageLibrary.errorCode: ', res);
            toastRef.current.show(
              'There was an error accessing your media library',
              3000,
            );
          } else if (!res.didCancel) {
            setLoadingInfo('Updating your avatar');
            setIsLoading(true);
            uploadImage(res.assets[0].uri)
              .then(() => updatePhotoUrl())
              .catch(err => {
                console.warn('@uploadImage.catch: ', err);
                toastRef.current.show(
                  "There's been an error while handling your request",
                  3000,
                );
              })
              .finally(() => setIsLoading(false));
          }
        },
      );
    }
  };

  const uploadImage = async uri => {
    const res = await fetch(uri);
    const blob = await res.blob();
    return firebase.storage.ref().child(`avatar/${uid}`).put(blob);
  };

  const updatePhotoUrl = () => {
    return firebase.storage
      .ref(`avatar/${uid}`)
      .getDownloadURL()
      .then(async res => {
        const update = {photoURL: res};
        await firebase.auth.currentUser.updateProfile(update);
        setReloadUser(current => !current);
      })
      .catch(err => {
        console.log('@updatePhotoUrl.catch: ', err);
        toastRef.current.show(
          "There's been an error while updating your account",
        );
      });
  };

  return (
    <View style={styles.viewUserInfo}>
      <Avatar
        rounded
        size="large"
        showEditButton
        containerStyle={styles.avatarContainer}
        source={
          photoURL
            ? {uri: photoURL}
            : require('../../../assets/img/avatar-default.jpg')
        }>
        <Accessory onPress={changeAvatar} size={25} />
      </Avatar>
      <View>
        <Text style={styles.userName}>
          {displayName ? displayName : 'Anonymous'}
        </Text>
        {email && <Text>{email}</Text>}
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    paddingVertical: 30,
  },
  avatarContainer: {
    marginRight: 20,
    backgroundColor: '#f2f2f2',
  },
  userName: {
    fontWeight: 'bold',
    paddingBottom: 5,
  },
});
