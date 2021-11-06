import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const Guest = () => {
  const navigation = useNavigation();
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        source={require('../../../assets/img/user-guest.jpg')}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>Call to Action</Text>
      <Text style={styles.description}>
        Motivational speech Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Nemo nostrum quaerat odio saepe ipsam molestias at corrupti
        sapiente! In alias quidem eaque debitis pariatur, a rem fugiat
        cupiditate corporis assumenda cumque esse, ipsum libero minima
        aspernatur modi tempora numquam perferendis.
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
    backgroundColor: '#00a680',
  },
  btnContainer: {
    width: '70%',
  },
});
