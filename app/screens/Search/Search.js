import React from 'react';
import {Image, StyleSheet, ScrollView} from 'react-native';
import SearchForm from '../../components/Search/SearchForm';

const Search = () => {
  return (
    <ScrollView>
      <Image
        source={require('../../../assets/img/logo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      <SearchForm />
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 150,
    marginTop: 20,
  },
});
