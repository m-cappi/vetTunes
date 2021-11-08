import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Button, Icon} from 'react-native-elements';
import {Formik} from 'formik';

import {FirebaseContext} from '../../firebase';
import colors from '../../styles/palette';
import {NameChangeSchema} from '../../utils/validation';
import Error from '../Error';

const NameChangeForm = ({
  displayName,
  setShowModal,
  setReloadUser,
  toastRef,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {firebase} = useContext(FirebaseContext);

  const updateName = values => {
    if (displayName === values.displayName) {
      setError("Your name hasn't changed!");
      return;
    }
    setIsLoading(true);
    setError(null);
    const update = {displayName: values.displayName};
    firebase
      .updateProfile(update)
      .then(() => {
        toastRef.current.show('Name updated successfully!');
        setReloadUser(current => !current);
        setShowModal(false);
      })
      .catch(err => {
        setIsLoading(false);
        console.warn('@updateName.catch: ', err);
        setError("There's been an error updating your account");
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
          {error && <Error error={error} />}
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
            <Error error={errors.displayName} />
          )}
          <Button
            title="Update Name"
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
});
