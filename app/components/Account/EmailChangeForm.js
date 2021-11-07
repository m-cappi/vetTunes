import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input, Button, Icon} from 'react-native-elements';
import {Formik} from 'formik';

import {FirebaseContext} from '../../firebase';
import colors from '../../styles/palette';
import {SigninSchema} from '../../utils/validation';

const EmailChangeForm = ({email, setShowModal, setReloadUser, toastRef}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {firebase} = useContext(FirebaseContext);

  const updateEmail = values => {
    if (email === values.email) {
      toastRef.current.show("Email hasn't changed!", 3000);
      return;
    }
    setIsLoading(true);
    firebase
      .reauthenticate(values.password)
      .then(res => {
        firebase.auth.currentUser
          .updateEmail(values.email)
          .then(() => {
            toastRef.current.show('Email update successful!');
            setReloadUser(current => !current);
            setShowModal(false);
          })
          .catch(() => {
            setIsLoading(false);
            toastRef.current.show(
              "There's been an error updating your email",
              5000,
            );
          });
      })
      .catch(() => {
        setIsLoading(false);
        toastRef.current.show('Invalid password!', 5000);
      });
  };
  return (
    <Formik
      initialValues={{email: email, password: ''}}
      validationSchema={SigninSchema}
      onSubmit={values => updateEmail(values)}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.formContainer}>
          <Input
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Your new email"
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

export default EmailChangeForm;

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
