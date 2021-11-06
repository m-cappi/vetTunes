import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TopAlbums from '../screens/TopAlbums/TopAlbums';

const Stack = createNativeStackNavigator();

const TopAlbumsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="top-albums"
        component={TopAlbums}
        options={{title: '100th Top Albums'}}
      />
    </Stack.Navigator>
  );
};

export default TopAlbumsStack;
