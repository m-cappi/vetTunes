import React, {useRef} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-easy-toast';
import LoginForm from '../../components/Account/LoginForm';
import colors from '../../styles/palette';

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
        <LoginForm toastRef={toastRef} />
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
    <View style={styles.viewRegister}>
      <Text>First time around?{'\n'}</Text>
      <Text style={styles.link} onPress={() => navigation.navigate('register')}>
        Register now!
      </Text>
    </View>
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
  viewRegister: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  link: {
    color: colors.med3,
    fontWeight: 'bold',
    fontSize: 17,
  },
});
