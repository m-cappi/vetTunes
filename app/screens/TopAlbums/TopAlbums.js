import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';

import {ItunesContext} from '../../utils/itunes';

import ListAlbums from '../../components/Albums/ListAlbums';
import Loading from '../../components/Loading';

const TopAlbums = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [albums, setAlbums] = useState([]);

  const top100 = useContext(ItunesContext);

  useEffect(() => {
    (async () => {
      const albumList = top100;
      setTimeout(() => {
        setAlbums(albumList);
        setIsLoading(false);
      }, 3000);
    })();
  }, []);
  
  return (
    <View>
      {isLoading ? (
        <Loading
          isVisible={isLoading}
          text="We are getting the best albums for you"
        />
      ) : (
        <ListAlbums albums={albums} />
      )}
    </View>
  );
};

export default TopAlbums;
