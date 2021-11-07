import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Input, Icon, Button} from 'react-native-elements';
import {Formik} from 'formik';

import {FirebaseContext} from '../../firebase';
import Loading from '../Loading';
import colors from '../../styles/palette';
import {SignupSchema} from '../../utils/validation';

const RegistrationForm = ({toastRef}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {firebase} = useContext(FirebaseContext);
  const navigation = useNavigation();
  const register = values => {
    setIsLoading(true);
    console.log(values);
    firebase.auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        //setIsLoading(false);
        navigation.navigate('account');
      })
      .catch(() => {
        setIsLoading(false);
        toastRef.current.show('Email is already in use!', 4000);
      });
  };
  return (
    <>
      <Formik
        initialValues={{email: '', password: '', confirmationPassword: ''}}
        validationSchema={SignupSchema}
        onSubmit={values => register(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formContainer}>
            <Input
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Your email"
              containerStyle={styles.inputForm}
              rightIcon={
                <Icon
                  type="material-community"
                  name="at"
                  iconStyle={styles.iconRight}
                />
              }
            />
            {errors.email && touched.email && (
              <View style={styles.viewErrors}>
                <Text style={styles.textErrors}>{errors.email}</Text>
              </View>
            )}
            <Input
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
              password={true}
              secureTextEntry={showPassword ? false : true}
              containerStyle={styles.inputForm}
              rightIcon={
                <Icon
                  type="material-community"
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  onPress={() => {
                    setShowPassword(!showPassword);
                  }}
                  iconStyle={styles.iconRight}
                />
              }
            />
            {errors.password && touched.password && (
              <View style={styles.viewErrors}>
                <Text style={styles.textErrors}>{errors.password}</Text>
              </View>
            )}
            <Input
              onChangeText={handleChange('confirmationPassword')}
              onBlur={handleBlur('confirmationPassword')}
              value={values.confirmationPassword}
              placeholder="Password Confirmation"
              password={true}
              secureTextEntry={showPassword ? false : true}
              containerStyle={styles.inputForm}
              rightIcon={
                <Icon
                  type="material-community"
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  onPress={() => {
                    setShowPassword(!showPassword);
                  }}
                  iconStyle={styles.iconRight}
                />
              }
            />
            {errors.confirmationPassword && touched.confirmationPassword && (
              <View style={styles.viewErrors}>
                <Text style={styles.textErrors}>
                  {errors.confirmationPassword}
                </Text>
              </View>
            )}
            <Button
              title="Register!"
              containerStyle={styles.btnContainerRegister}
              buttonStyle={styles.btnRegister}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
      <Loading isVisible={isLoading} text="Creating your account..." />
    </>
  );
};

export default RegistrationForm;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
  },
  inputForm: {
    width: '100%',
    marginTop: 20,
  },
  btnContainerRegister: {
    marginTop: 20,
    width: '95%',
  },
  btnRegister: {
    backgroundColor: colors.light1,
  },
  iconRight: {
    color: colors.dark1,
  },
  viewErrors: {
    backgroundColor: `${colors.med3}a0`,
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  textErrros: {fontWeight: 'bold'},
});
