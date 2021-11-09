import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon, Image} from 'react-native-elements';
import ImageView from 'react-native-image-viewing';

const AlbumShowcase = ({album}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imgFullScreen, setImgFullScreen] = useState(false);
  const {
    albumName,
    artist,
    category,
    label,
    title,
    nroSongs,
    pricing,
    releaseDate,
    externalLink,
  } = album;
  const image = album.lgImg();

  const handleFavorite = () => {
    if (isFavorite) {
      console.log('Remove from favorite');
      setIsFavorite(false);
    } else {
      console.log('Add to favorite');
      setIsFavorite(true);
    }
  };

  return (
    <View>
      <View style={styles.viewFavorite}>
        <Icon
          type="material-community"
          name={isFavorite ? 'heart' : 'heart-outline'}
          onPress={() => handleFavorite()}
          color={isFavorite ? '#f00' : '#000'}
          size={35}
          underlayColor="transparent"
        />
      </View>
      <Image
        source={{uri: image.url}}
        style={styles.img}
        onPress={() => setImgFullScreen(true)}
      />
      <ImageView
        images={[{uri: image.url}]}
        imageIndex={0}
        visible={imgFullScreen}
        onRequestClose={() => setImgFullScreen(false)}
        presentationStyle="overFullScreen"
      />
      <View style={styles.viewPrimary}>
        <Text style={styles.album}>{albumName}</Text>
        <Text style={styles.artist}>Artist/s: {artist.name}</Text>
        <Text style={styles.detailPrimary}>Category: {category.term}</Text>
      </View>
      <View style={styles.viewSecondary}>
        <Text style={styles.detailPrimary}>
          {pricing.label} {pricing.currency}
        </Text>
        <Text style={styles.detailSecondary}>
          Released on: {releaseDate.label}
        </Text>
        <Text style={styles.detailSecondary}>{label}</Text>
      </View>
    </View>
  );
};

export default AlbumShowcase;

const styles = StyleSheet.create({
  viewFavorite: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 100,
    padding: 5,
    paddingLeft: 15,
  },
  img: {height: 170},
  viewPrimary: {paddingHorizontal: 15},
  viewSecondary: {paddingHorizontal: 15},
  album: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingVertical: 10,
  },
  artist: {fontSize: 20, fontWeight: 'bold', paddingVertical: 5},
  detailPrimary: {marginTop: 5, color: 'grey', fontSize: 15},
  detailSecondary: {marginTop: 5, color: 'grey'},
});
