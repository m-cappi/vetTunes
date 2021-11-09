import React, {useState, useRef, useCallback, useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Image, Icon, Button} from 'react-native-elements';
import {useFocusEffect} from '@react-navigation/native';
import Toast from 'react-native-easy-toast';

import colors from '../../styles/palette';
import Loading from '../Loading';
import FavoriteAlbum from './FavoriteAlbum';

const FavoritesList = ({navigation, favoriteAlbums, setReloadData}) => {
  const [isLoading, setIsLoading] = useState(false);
  const toastRef = useRef();

  return (
    <View style={styles.viewBody}>
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
