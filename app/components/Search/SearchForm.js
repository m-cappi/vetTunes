import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import {ButtonGroup, Input, Icon, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {isEmpty} from 'lodash';

import {ItunesContext} from '../../utils/itunes';
import colors from '../../styles/palette';
import Error from '../Error';
import Loading from '../Loading';
import {SearchSchema} from '../../utils/validation';

const SearchForm = () => {
  const [searchTypesIndex, setSearchTypesIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [albums, setAlbums] = useState(null);

  const navigation = useNavigation();
  const top100 = useContext(ItunesContext);

  useEffect(() => {
    (async () => {
      if (isEmpty(top100.collection)) {
        await top100.loadData();
        setAlbums(top100);
      } else {
        setAlbums(top100);
      }
    })();
  }, []);

  const handleSearch = async values => {
    setIsLoading(true);
    let payload;
    console.log('Search for me!', values, searchTypesIndex);
    switch (searchTypesIndex) {
      case 0:
        console.log('Search by Genre! ', values);
        payload = await albums.findByGenre(values.searchValue);
        console.log(payload);
        break;

      case 1:
        console.log('Search by Album! ', values);
        payload = await albums.findByAlbum(values.searchValue);
        console.log(payload);
        break;

      case 2:
        console.log('Search by Artist! ', values);
        payload = await albums.findByArtist(values.searchValue);
        console.log(payload);
        break;

      default:
        console.log('General search! ', values);
        payload = await albums.findAny(values.searchValue);
        console.log(payload);
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
              selectedButtonStyle={styles.btnFilter}
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
  btnFilter: {
    backgroundColor: colors.light2,
  },
});
