import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import colors from '../styles/palette';
import Search from '../screens/Search/Search';
import SearchResults from '../screens/Search/SearchResults';
import AlbumResult from '../screens/Search/AlbumResult';

const Stack = createNativeStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="adv-search"
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
        name="adv-search"
        component={Search}
        options={{title: 'Advanced Search'}}
      />
      <Stack.Screen
        name="search-results"
        component={SearchResults}
        options={{title: 'Search Results'}}
      />
      <Stack.Screen name="album-result" component={AlbumResult} />
    </Stack.Navigator>
  );
};

export default SearchStack;
