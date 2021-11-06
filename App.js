import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import firebase, {FirebaseContext} from './app/firebase';
import Navigation from './app/navigations/Navigation';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core ']);

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <FirebaseContext.Provider value={{firebase}}>
        <Navigation />
      </FirebaseContext.Provider>
    </GestureHandlerRootView>
  );
};

export default App;
