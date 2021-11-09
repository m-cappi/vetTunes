import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Favorites from '../screens/Favorites/Favorites';
import colors from '../styles/palette';

import FavAlbum from '../screens/Favorites/FavAlbum';

const Stack = createNativeStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="favorites"
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: colors.med3,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}>
      <Stack.Screen
        name="favorites"
        component={Favorites}
        options={{title: 'My Favorites'}}
      />
      <Stack.Screen name="fav-album" component={FavAlbum} />
    </Stack.Navigator>
  );
};

export default FavoritesStack;
