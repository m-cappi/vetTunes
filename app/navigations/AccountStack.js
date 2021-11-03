import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Account from '../screens/Account/Account';

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator initialRouteName="account">
      <Stack.Screen
        name="account"
        component={Account}
        options={{title: 'My Account'}}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
