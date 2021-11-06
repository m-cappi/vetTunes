import React, {useEffect, useRef, useState, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import Toast from 'react-native-easy-toast';
import {FirebaseContext} from '../../firebase';
import Loading from '../../components/Loading';

const User = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingInfo, setLoadingInfo] = useState('');
  const [reloadUser, setReloadUser] = useState(false);

  const {firebase} = useContext(FirebaseContext);

  const toastRef = useRef();

  useEffect(() => {
    (async () => {
      const user = await firebase.auth.currentUser;
      setUserInfo(user);
    })();
    setReloadUser(false);
  }, [reloadUser]);

  return (
    <View style={styles.viewUserInfo}>
      {userInfo && <Text>User screen...</Text>}
      <Button
        title="Log out"
        buttonStyle={styles.btnLogout}
        titleStyle={styles.btnLogoutText}
        onPress={() => firebase.auth.signOut()}
      />
      <Toast ref={toastRef} position="center" opacity={0.9} />
      <Loading isVisible={isLoading} text={loadingInfo} />
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  viewUserInfo: {minHeight: '100%', backgroundColor: '#f2f2f2'},
  btnLogout: {
    marginTop: 30,
    borderRadius: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e3e3e3',
    borderBottomColor: '#e3e3e3',
    paddingTop: 10,
    paddingBottom: 10,
  },
  btnLogoutText: {color: '#00a680'},
});
