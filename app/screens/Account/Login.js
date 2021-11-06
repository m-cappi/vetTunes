import React, {useRef} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-easy-toast';
import LoginForm from '../../components/Account/LoginForm';

const Login = () => {
  const toastRef = useRef();
  return (
    <ScrollView>
      <Image
        source={require('../../../assets/img/logo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewContainer}>
        <LoginForm toastRef={toastRef}/>
        <CreateAccount />
      </View>
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </ScrollView>
  );
};

export default Login;

const CreateAccount = () => {
  const navigation = useNavigation();

  return (
    <Text style={styles.textRegister}>
      First time around?{' '}
      <Text
        style={styles.btnRegister}
        onPress={() => navigation.navigate('register')}>
        Register now!
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 150,
    marginTop: 20,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  textRegister: {
    marginTop: 15,
    alignSelf: 'center',
  },
  btnRegister: {
    color: '#00a680',
    fontWeight: 'bold',
  },
  divider: {
    backgroundColor: '#00a680',
    margin: 40,
  },
});
