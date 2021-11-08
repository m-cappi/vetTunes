import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import firebase, {FirebaseContext} from './firebase';
import top100, {ItunesContext} from './utils/itunes';
import Navigation from './navigations/Navigation';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <FirebaseContext.Provider value={{firebase}}>
        <ItunesContext.Provider value={{top100}}>
          <Navigation />
        </ItunesContext.Provider>
      </FirebaseContext.Provider>
    </GestureHandlerRootView>
  );
};

export default App;
