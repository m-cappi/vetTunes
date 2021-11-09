import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SearchResults = ({navigation, route}) => {
  const albums = route.params;
  return (
    <View>
      <Text>Albums List</Text>
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({});
