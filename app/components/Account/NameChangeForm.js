import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input, Button, Icon} from 'react-native-elements';
import {Formik} from 'formik';

import {FirebaseContext} from '../../firebase';
import colors from '../../styles/palette';
import {NameChangeSchema} from '../../utils/validation';

const NameChangeForm = ({
  displayName,
  setShowModal,
  setReloadUser,
  toastRef,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {firebase} = useContext(FirebaseContext);

  const updateName = values => {
    if (displayName === values.displayName) {
      toastRef.current.show("Your name hasn't changed!");
      return;
    }
    setIsLoading(true);
    const update = {displayName: values.displayName};
    firebase
      .updateProfile(update)
      .then(() => {
        setReloadUser(current => !current);
        setShowModal(false);
      })
      .catch(err => {
        setIsLoading(false);
        console.warn('@updateName.catch: ', err);
        toastRef.current.show(
          "There's been an error updating your account",
          5000,
        );
      });
  };
  return (
    <Formik
      initialValues={{
        displayName: displayName || 'Anonymous',
      }}
      validationSchema={NameChangeSchema}
      onSubmit={values => updateName(values)}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.formContainer}>
          <Input
            onChangeText={handleChange('displayName')}
            onBlur={handleBlur('displayName')}
            value={values.displayName}
            placeholder="User name"
            containerStyle={styles.inputForm}
            rightIcon={
              <Icon
                type="material-community"
                name="account-circle-outline"
                iconStyle={styles.iconRight}
              />
            }
          />
          {errors.displayName && touched.displayName && (
            <View style={styles.viewErrors}>
              <Text style={styles.textErrors}>{errors.displayName}</Text>
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

export default NameChangeForm;

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
