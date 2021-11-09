import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image, Icon} from 'react-native-elements';
import {isEmpty} from 'lodash';

import colors from '../../styles/palette';

const AlbumItem = ({album, isUserLogged, firebase, navigation, toastRef}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [reloadFavorite, setReloadFavorite] = useState(null);
  const {
    item: {id, albumName, artist, category, pricing},
  } = album;
  const image = album.item.mdImg();
  const artistName = artist.name;
  const categoryName = category.term;
  const price = pricing.label;

  useEffect(() => {
    if (isUserLogged) {
      firebase
        .checkFavoriteStatus(id)
        .then(res => {
          if (res.docs.length === 1) {
            setIsFavorite(true);
          }
        })
        .catch();
    }
  }, [isUserLogged, reloadFavorite]);

  const goAlbum = () => {
    navigation.navigate('album-result', {
      id,
      albumName,
    });
  };

  const handleFavorite = () => {
    if (isFavorite) {
      firebase
        .removeFavorite(id)
        .then(() => {
          setIsFavorite(false);
          setReloadFavorite(current => !current);
          toastRef.current.show(
            'Album successfully remove from your favorites',
            3000,
          );
        })
        .catch(err => {
          console.warn(err);
          toastRef.current.show(
            "There's been an error handling your request",
            3000,
          );
        });
    } else {
      firebase
        .addFavorite(id)
        .then(() => {
          setIsFavorite(true);
          setReloadFavorite(current => !current);
          toastRef.current.show(
            'Album successfully added to your favorites',
            3000,
          );
        })
        .catch(err => {
          console.warn(err);
          toastRef.current.show(
            "There's been an error handling your request",
            3000,
          );
        });
    }
  };

  return (
    <TouchableOpacity onPress={() => goAlbum()}>
      <View style={styles.viewAlbum}>
        <Icon
          type="material-community"
          name={isFavorite ? 'heart' : 'heart-outline'}
          color="#f00"
          size={30}
          containerStyle={styles.favorite}
          onPress={handleFavorite}
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

export default AlbumItem;

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
