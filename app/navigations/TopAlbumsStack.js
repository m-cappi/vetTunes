import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TopAlbums from '../screens/TopAlbums/TopAlbums';
import Album from '../screens/TopAlbums/Album';

const Stack = createNativeStackNavigator();

const TopAlbumsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="top-albums"
        component={TopAlbums}
        options={{title: '100th Top Albums'}}
      />
      <Stack.Screen
        name="album"
        component={Album}
        options={{title: '100th Top Albums'}}
      />
    </Stack.Navigator>
  );
};

export default TopAlbumsStack;
