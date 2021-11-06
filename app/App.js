import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import firebase, {FirebaseContext} from './firebase';
import Navigation from './navigations/Navigation';

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