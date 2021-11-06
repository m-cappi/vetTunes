import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Album = ({navigation, route}) => {
  const {id, albumName} = route.params;

  navigation.setOptions({title: albumName});
  return (
    <View>
      <Text>Single Album Screen...</Text>
    </View>
  );
};

export default Album;

const styles = StyleSheet.create({});
