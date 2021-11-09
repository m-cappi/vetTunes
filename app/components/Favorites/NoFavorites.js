import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import colors from '../../styles/palette';

const NoFavorites = ({navigation}) => {
  const goAlbums = () => {
    navigation.navigate('top-albums-stack');
  };
  return (
    <View style={styles.view}>
      <Icon
        type="material-community"
        name="alert-outline"
        size={50}
        onPress={goAlbums}
      />
      <Text style={styles.text}>You don't have any favorite albums{'\n'}</Text>
      <Text style={styles.link} onPress={goAlbums}>
        Let's add some!
      </Text>
    </View>
  );
};

export default NoFavorites;

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
