import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

import TopAlbumsStack from './TopAlbumsStack';
import AccountStack from './AccountStack';
import FavoritesStack from './FavoritesStack';
import SearchStack from './SearchStack';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="top-albums"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: '#00a680',
          tabBarInactiveTintColor: '#646464',
          tabBarIcon: ({color}) => screenOptions(route, color),
        })}>
        <Tab.Navigator name="top-albums" component={TopAlbumsStack} />
        <Tab.Navigator name="account" component={AccountStack} />
        <Tab.Navigator name="favorites" component={FavoritesStack} />
        <Tab.Navigator name="adv-search" component={SearchStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const screenOptions = (route, color) => {
  let iconName;
  let iconType;
  switch (route.name) {
    default:
      iconName = 'alert-decagram';
      iconType = 'material-community';
      break;
  }
  return <Icon type={iconType} name={iconName} size={22} color={color} />;
};
