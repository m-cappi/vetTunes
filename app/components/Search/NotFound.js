import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import colors from '../../styles/palette';

const NotFound = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Icon
        type="material-community"
        name="alert-outline"
        size={50}
        onPress={()=>navigation.goBack()}
      />
      <Text style={styles.text}>We couldn't find any such thing{'\n'}</Text>
      <Text style={styles.link} onPress={()=>navigation.goBack()} >
        Let's try again!
      </Text>
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {marginTop: 15, alignSelf: 'center', fontSize: 20},
  link: {
    color: colors.light1,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 20,
  },
});
