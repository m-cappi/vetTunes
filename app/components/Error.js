import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../styles/palette';

const Error = ({error}) => {
  return (
    <View style={styles.viewErrors}>
      <Text style={styles.textErrros}>{error}</Text>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  viewErrors: {
    backgroundColor: `${colors.med3}a0`,
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  textErrros: {fontWeight: 'bold', color: '#000'},
});
