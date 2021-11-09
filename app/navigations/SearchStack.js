import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from '../screens/Search/Search';
import colors from '../styles/palette';

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
    </Stack.Navigator>
  );
};

export default SearchStack;
