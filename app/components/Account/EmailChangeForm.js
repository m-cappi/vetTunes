import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Button, Icon} from 'react-native-elements';
import {Formik} from 'formik';

import {FirebaseContext} from '../../firebase';
import colors from '../../styles/palette';
import {SigninSchema} from '../../utils/validation';
import Error from '../Error';

const EmailChangeForm = ({email, setShowModal, setReloadUser, toastRef}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const {firebase} = useContext(FirebaseContext);

  const updateEmail = values => {
    if (email === values.email) {
      setError("Email hasn't changed!");
      return;
    }
    setIsLoading(true);
    setError(null);
    firebase
      .updateEmail(values.password, values.email)
      .then(() => {
        toastRef.current.show('Email updated successfully!');
        setReloadUser(current => !current);
        setShowModal(false);
      })
      .catch(err => {
        console.warn('@updateEmail.catch: ', err);
        setError("There's been an error updating your email");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <Formik
      initialValues={{email: email, password: ''}}
      validationSchema={SigninSchema}
      onSubmit={values => updateEmail(values)}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.formContainer}>
          {error && <Error error={error} />}
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
          {errors.email && touched.email && <Error error={errors.email} />}
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
});
