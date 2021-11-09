import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import {ButtonGroup, Input, Icon, Button} from 'react-native-elements';

import colors from '../../styles/palette';
import Error from '../Error';
import Loading from '../Loading';
import { SearchSchema } from '../../utils/validation';

const SearchForm = () => {
  const [searchTypesIndex, setSearchTypesIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const handleSearch = values => {
    setIsLoading(true);
    console.log('Search for me!', values, searchTypesIndex);
    switch (searchTypesIndex) {
      case 0:
        console.log('Search by Genre! ', values);
        break;

      case 1:
        console.log('Search by Album! ', values);
        break;

      case 2:
        console.log('Search by Artist! ', values);
        break;

      default:
        break;
    }
    setIsLoading(false);
  };
  const searchTypes = ['Genre', 'Album', 'Artist'];
  return (
    <>
      <Formik
        initialValues={{searchValue: ''}}
        validationSchema={SearchSchema}
        onSubmit={values => handleSearch(values)}>
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
              onChangeText={handleChange('searchValue')}
              onBlur={handleBlur('searchValue')}
              value={values.searchValue}
              placeholder="What are you looking for?"
              containerStyle={styles.inputForm}
              rightIcon={
                <Icon
                  type="material"
                  name="search"
                  iconStyle={styles.iconRight}
                  onPress={handleSubmit}
                />
              }
            />
            {errors.searchValue && touched.searchValue && (
              <Error error={errors.searchValue} />
            )}
            <ButtonGroup
              onPress={index => setSearchTypesIndex(index)}
              selectedIndex={searchTypesIndex}
              buttons={searchTypes}
              containerStyle={styles.btnContainerSearch}
              selectedButtonStyle={styles.btnSearch}
            />
            <Button
              title="Search!"
              containerStyle={styles.btnContainerSearch}
              buttonStyle={styles.btnSearch}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
      <Loading isVisible={isLoading} text="Let us check on some records" />
    </>
  );
};

export default SearchForm;

const styles = StyleSheet.create({
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
  },
  inputForm: {
    width: '100%',
    marginTop: 20,
  },
  iconRight: {
    color: colors.dark1,
  },
  btnContainerSearch: {
    marginTop: 20,
    width: '95%',
  },
  btnSearch: {
    backgroundColor: colors.light1,
  },
});
