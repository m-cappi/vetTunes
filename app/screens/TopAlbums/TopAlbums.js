import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import ListAlbums from '../../components/Albums/ListAlbums';
import Loading from '../../components/Loading';
import getAlbums from '../../utils/itunes';

const TopAlbums = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    (async () => {
      const top100 = await getAlbums();
      setAlbums(top100);
      setIsLoading(false);
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
