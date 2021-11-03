import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from '../screens/Search/Search';

const Stack = createNativeStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator initialRouteName="adv-search">
      <Stack.Screen
        name="adv-search"
        component={Search}
        options={{title: 'Advanced Search'}}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
