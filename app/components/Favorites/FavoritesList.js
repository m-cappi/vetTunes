import React, {useState, useRef, useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Toast from 'react-native-easy-toast';
import { FirebaseContext } from '../../firebase';

import Loading from '../Loading';
import FavoriteAlbum from './FavoriteAlbum';

const FavoritesList = ({navigation, favoriteAlbums, setReloadData}) => {
  const [isLoading, setIsLoading] = useState(false);
  const toastRef = useRef();

  const {firebase} = useContext(FirebaseContext);

  return (
    <View>
      {favoriteAlbums ? (
        <FlatList
          data={favoriteAlbums}
          renderItem={album => (
            <FavoriteAlbum
              album={album}
              setIsLoading={setIsLoading}
              toastRef={toastRef}
              setReloadData={setReloadData}
              navigation={navigation}
              firebase={firebase}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={styles.albumLoader}>
          <ActivityIndicator size="large" />
          <Text style={{textAlign: 'center'}}>
            Loading your favorite albums...
          </Text>
        </View>
      )}
      <Toast ref={toastRef} position="center" opacity={0.9} />
      <Loading text="Deleting album..." isVisible={isLoading} />
    </View>
  );
};

export default FavoritesList;

const styles = StyleSheet.create({
  albumLoader: {
    marginTop: 10,
    marginBottom: 10,
  },
});
