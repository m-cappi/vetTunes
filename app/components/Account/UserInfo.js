import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, Accessory} from 'react-native-elements';
import {launchImageLibrary} from 'react-native-image-picker';

import requestStoragePermission from '../../utils/permissions/requestStoragePermission';

const UserInfo = ({toastRef, userInfo: {photoURL, displayName, email}}) => {
  const changeAvatar = async () => {
    const userResponse = await requestStoragePermission();
    if (userResponse === 'GRANTED') {
      const res = await launchImageLibrary({
        mediaType: 'photo',
        maxHeight: 480,
        maxWidth: 852,
      });
      if (res.errorCode) {
        toastRef.current.show(
          'There was an error accessing your media library',
        );
      } else {
        console.log('Upload image');
      }
    }
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
