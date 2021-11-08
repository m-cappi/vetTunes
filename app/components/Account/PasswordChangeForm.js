import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Button, Icon} from 'react-native-elements';
import {Formik} from 'formik';

import {FirebaseContext} from '../../firebase';
import colors from '../../styles/palette';
import {UpdatePasswordSchema} from '../../utils/validation';
import Error from '../Error';

const PasswordChangeForm = ({setShowModal, toastRef}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {firebase} = useContext(FirebaseContext);

  const updatePassword = values => {
    setIsLoading(true);
    firebase
      .updatePassword(values.password, values.newPassword)
      .then(() => {
        toastRef.current.show('Password updated successfully!');
        setShowModal(false);
        firebase.auth.signOut();
      })
      .catch(err => {
        setIsLoading(false);
        console.warn(err);
        setError("There's been an error updating your password");
      });
  };
  return (
    <Formik
      initialValues={{
        password: '',
        newPassword: '',
        newConfirmationPassword: '',
      }}
      validationSchema={UpdatePasswordSchema}
      onSubmit={values => updatePassword(values)}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.formContainer}>
          {error && <Error error={error} />}
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
            <Error error={errors.password} />
          )}
          <Input
            onChangeText={handleChange('newPassword')}
            onBlur={handleBlur('newPassword')}
            value={values.newPassword}
            placeholder="New Password"
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
          {errors.newPassword && touched.newPassword && (
            <Error error={errors.newPassword} />
          )}
          <Input
            onChangeText={handleChange('newConfirmationPassword')}
            onBlur={handleBlur('newConfirmationPassword')}
            value={values.newConfirmationPassword}
            placeholder="New Password Confirmation"
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
          {errors.newConfirmationPassword &&
            touched.newConfirmationPassword && (
              <Error error={errors.newConfirmationPassword} />
            )}
          <Button
            title="Submit"
            containerStyle={styles.btnContainerRegister}
            buttonStyle={styles.btnRegister}
            onPress={handleSubmit}
            loading={isLoading}
          />
        </View>
      )}
    </Formik>
  );
};

export default PasswordChangeForm;

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
