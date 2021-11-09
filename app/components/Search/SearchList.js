import React, {useContext, useRef, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {isEmpty} from 'lodash';
import Toast from 'react-native-easy-toast';

import {FirebaseContext} from '../../firebase';
import colors from '../../styles/palette';
import AlbumItem from './AlbumItem';

const SearchList = ({albums, navigation}) => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const toastRef = useRef();

  const {firebase} = useContext(FirebaseContext);

  firebase.auth.onAuthStateChanged(user => {
    user ? setIsUserLogged(true) : setIsUserLogged(false);
  });

  return (
    <View>
      {!isEmpty(albums) ? (
        <FlatList
          data={albums}
          renderItem={album => (
            <AlbumItem
              album={album}
              navigation={navigation}
              isUserLogged={isUserLogged}
              firebase={firebase}
              toastRef={toastRef}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={styles.viewLoading}>
          <ActivityIndicator size="large" color={colors.dark1} />
          <Text>Loading...</Text>
        </View>
      )}
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </View>
  );
};

export default SearchList;

const styles = StyleSheet.create({});
