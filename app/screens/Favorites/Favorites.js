import React, {useState, useContext} from 'react';
import {View, Text} from 'react-native';

import {FirebaseContext} from '../../firebase';
import colors from '../../styles/palette';
import UserNotLogged from '../../components/Favorites/UserNotLogged';
import NoFavorites from '../../components/Favorites/NoFavorites';

const Favorites = ({navigation}) => {
  const [isUserLogged, setIsUserLogged] = useState(null);
  const [favoriteList, setFavoriteList] = useState(null);

  const {firebase} = useContext(FirebaseContext);

  firebase.auth.onAuthStateChanged(user => {
    user ? setIsUserLogged(true) : setIsUserLogged(false);
  });

  if (!isUserLogged) return <UserNotLogged navigation={navigation} />;
  if (!favoriteList) return <NoFavorites navigation={navigation} />;
  return (
    <View>
      <Text>Favorites Screen...</Text>
    </View>
  );
};

export default Favorites;
