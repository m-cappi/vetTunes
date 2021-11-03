import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Favorites from '../screens/Favorites/Favorites';

const Stack = createNativeStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator initialRouteName="favorites">
      <Stack.Screen
        name="favorites"
        component={Favorites}
        options={{title: 'My Favorites'}}
      />
    </Stack.Navigator>
  );
};

export default FavoritesStack;
