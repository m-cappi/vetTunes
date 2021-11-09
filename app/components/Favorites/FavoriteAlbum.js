import React, {useState, useRef, useCallback, useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Image, Icon} from 'react-native-elements';
import {isEmpty} from 'lodash';
import colors from '../../styles/palette';
import {FirebaseContext} from '../../firebase';

const FavoriteAlbum = ({
  album,
  navigation,
  setIsLoading,
  toastRef,
  setReloadData,
}) => {
  const {
    item: {id, albumName, artist, category, pricing},
  } = album;
  const image = album.item.mdImg();
  const artistName = artist.name;
  const categoryName = category.term;
  const price = pricing.label;

  const {firebase} = useContext(FirebaseContext);

  const goAlbum = () => {
    navigation.navigate('album', {
      id,
      albumName,
    });
  };

  const confirmRemoveFavorite = () => {
    Alert.alert(
      'Remove Album from your Favorites',
      'Are you certain about removing this album from your favorites?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: removeFavorite,
        },
      ],
      {cancelable: false},
    );
  };

  const removeFavorite = () => {
    setIsLoading(true);
    firebase
      .removeFavorite(id)
      .then(() => {
        toastRef.current.show(
          'Album successfully remove from your favorites',
          3000,
        );
        setReloadData(current => !current);
      })
      .catch(err => {
        console.warn(err);
        toastRef.current.show(
          "There's been an error handling your request",
          3000,
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <TouchableOpacity onPress={() => goAlbum()}>
      <View style={styles.viewAlbum}>
        <Icon
          type="material-community"
          name="heart"
          color="#f00"
          size={30}
          containerStyle={styles.favorite}
          onPress={confirmRemoveFavorite}
          underlayColor="transparent"
        />
        <View style={styles.viewAlbumImg}>
          <Image
            resizeMode="cover"
            PlaceholderContent={<ActivityIndicator color={colors.dark1} />}
            source={
              !isEmpty(image)
                ? {uri: image.url}
                : require('../../../assets/img/no-image.png')
            }
            style={styles.imgAlbum}
          />
        </View>
        <View style={styles.viewInfo}>
          <Text style={styles.albumName}>{albumName}</Text>
          <Text style={styles.artist}>{artistName}</Text>
          <View style={styles.viewDetails}>
            <Text style={styles.details}>{categoryName}</Text>
            <Text style={styles.details}>{price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FavoriteAlbum;

const styles = StyleSheet.create({
  viewAlbum: {flexDirection: 'row', margin: 10},
  favorite: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#0000',
    padding: 20,
    borderRadius: 120,
    zIndex: 2,
  },
  viewAlbumImg: {marginRight: 10},
  imgAlbum: {width: 100, height: 100},
  viewInfo: {width: '70%'},
  albumName: {fontWeight: 'bold'},
  artist: {paddingTop: 2, color: 'grey'},
  viewDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
  details: {paddingTop: 2, color: 'grey', fontSize: 12},
});
