import React, {useContext, useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon, Image} from 'react-native-elements';
import ImageView from 'react-native-image-viewing';
import Toast from 'react-native-easy-toast';

import {FirebaseContext} from '../../firebase';

const AlbumShowcase = ({album}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imgFullScreen, setImgFullScreen] = useState(false);
  const [isUserLogged, setIsUserLogged] = useState(false);
  const toastRef = useRef();
  const {albumName, artist, category, label, pricing, releaseDate, id} = album;
  const image = album.lgImg();

  const {firebase} = useContext(FirebaseContext);

  firebase.auth.onAuthStateChanged(user => {
    user ? setIsUserLogged(true) : setIsUserLogged(false);
  });

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
  }, [isUserLogged]);

  const handleFavorite = () => {
    if (isFavorite) {
      firebase
        .removeFavorite(id)
        .then(() => {
          setIsFavorite(false);
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
    <View>
      <View style={styles.viewFavorite}>
        {isUserLogged && (
          <Icon
            type="material-community"
            name={isFavorite ? 'heart' : 'heart-outline'}
            onPress={() => handleFavorite()}
            color={isFavorite ? '#f00' : '#000'}
            size={35}
            underlayColor="transparent"
          />
        )}
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
      <Toast ref={toastRef} position="center" opacity={0.9} />
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
