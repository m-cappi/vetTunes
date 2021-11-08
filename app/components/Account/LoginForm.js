import React, {useState, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Input, Icon, Button} from 'react-native-elements';
import {Formik} from 'formik';

import {FirebaseContext} from '../../firebase';
import Loading from '../Loading';
import {SigninSchema} from '../../utils/validation';
import colors from '../../styles/palette';
import Error from '../Error';

const LoginForm = ({toastRef}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  const {firebase} = useContext(FirebaseContext);

  const login = values => {
    setIsLoading(true);
    firebase.auth
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        navigation.navigate('account');
      })
      .catch(() => {
        setIsLoading(false);
        toastRef.current.show('Invalid credentials!', 4000);
      });
  };

  return (
    <>
      <Formik
        initialValues={{
          email: 'demo@mail.com',
          password: 'demo123',
        }}
        validationSchema={SigninSchema}
        onSubmit={values => login(values)}>
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
              title="Sign In!"
              containerStyle={styles.btnContainerLogin}
              buttonStyle={styles.btnLogin}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
      <Loading isVisible={isLoading} text="Signing in..." />
    </>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  inputForm: {width: '100%', marginTop: 20},
  btnContainerLogin: {marginTop: 20, width: '95%'},
  btnLogin: {
    backgroundColor: colors.light1,
  },
  iconRight: {color: '#c1c1c1'},
});
