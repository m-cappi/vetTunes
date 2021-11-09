import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import colors from '../../styles/palette';

const Guest = () => {
  const navigation = useNavigation();
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        source={require('../../../assets/img/user-guest.jpg')}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>Join our team!</Text>
      <Text style={styles.description}>
        Connect with us in order to access our latest features and enjoy the
        best music app out there!
      </Text>
      <View style={styles.viewBtn}>
        <Button
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          title="Connect!"
          onPress={() => navigation.navigate('login')}
        />
      </View>
    </ScrollView>
  );
};

export default Guest;

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: '100%',
    marginBottom: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {textAlign: 'center', marginBottom: 20},
  viewBtn: {
    flex: 1,
    alignItems: 'center',
  },
  btnStyle: {
    backgroundColor: colors.light1,
  },
  btnContainer: {
    width: '70%',
  },
});
