import React, {useState, useCallback, useContext} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {FirebaseContext} from '../../firebase';
import {ItunesContext} from '../../utils/itunes';
import UserNotLogged from '../../components/Favorites/UserNotLogged';
import NoFavorites from '../../components/Favorites/NoFavorites';
import FavoritesList from '../../components/Favorites/FavoritesList';

const Favorites = ({navigation}) => {
  const [isUserLogged, setIsUserLogged] = useState(null);
  const [favoriteAlbums, setFavoriteAlbums] = useState(null);
  const [reloadData, setReloadData] = useState(null);

  const {firebase} = useContext(FirebaseContext);
  const top100 = useContext(ItunesContext);

  firebase.auth.onAuthStateChanged(user => {
    user ? setIsUserLogged(true) : setIsUserLogged(false);
  });

  useFocusEffect(
    useCallback(() => {
      if (isUserLogged) {
        (async () => {
          const idList = await firebase.getFavoritesId();
          const albumList = [];
          idList.forEach(albumId => {
            albumList.push(top100.findByPk(albumId));
          });
          setFavoriteAlbums(albumList);
        })();
      }
    }, [isUserLogged, reloadData]),
  );

  if (!isUserLogged) return <UserNotLogged navigation={navigation} />;
  if (!favoriteAlbums) return <NoFavorites navigation={navigation} />;
  return (
    <FavoritesList
      navigation={navigation}
      favoriteAlbums={favoriteAlbums}
      setReloadData={setReloadData}
    />
  );
};

export default Favorites;
