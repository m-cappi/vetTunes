import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen';

import colors from '../styles/palette';
import TopAlbumsStack from './TopAlbumsStack';
import AccountStack from './AccountStack';
import FavoritesStack from './FavoritesStack';
import SearchStack from './SearchStack';
import {StatusBar} from 'react-native';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={colors.med3} />
      <Tab.Navigator
        initialRouteName="top-albums-stack"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveBackgroundColor: colors.med3,
          tabBarInactiveBackgroundColor: colors.dark2,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#fff',
          tabBarIcon: ({color}) => screenOptions(route, color),
        })}>
        <Tab.Screen
          name="adv-search-stack"
          component={SearchStack}
          options={{title: 'Search'}}
        />
        <Tab.Screen
          name="top-albums-stack"
          component={TopAlbumsStack}
          options={{title: 'Top 100'}}
        />
        <Tab.Screen
          name="account-stack"
          component={AccountStack}
          options={{title: 'My Profile'}}
        />
        <Tab.Screen
          name="favorites-stack"
          component={FavoritesStack}
          options={{title: 'My Favorites'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const screenOptions = (route, color) => {
  let iconName;
  let iconType; //currently available: evilicon, material, material-community
  switch (route.name) {
    case 'adv-search-stack':
      iconName = 'search';
      iconType = 'material';
      break;
    case 'top-albums-stack':
      iconName = 'trophy';
      iconType = 'evilicon';
      break;
    case 'account-stack':
      iconName = 'home-outline';
      iconType = 'material-community';
      break;
    case 'favorites-stack':
      iconName = 'heart-outline';
      iconType = 'material-community';
      break;
    default:
      iconName = 'alert-decagram';
      iconType = 'material-community';
      break;
  }
  return <Icon type={iconType} name={iconName} size={22} color={color} />;
};
