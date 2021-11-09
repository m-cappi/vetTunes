import React, {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import {isEmpty} from 'lodash';

import {ItunesContext} from '../../utils/itunes';

import ListAlbums from '../../components/Albums/ListAlbums';
import Loading from '../../components/Loading';

const TopAlbums = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [albums, setAlbums] = useState(null);

  const top100 = useContext(ItunesContext);

  useEffect(() => {
    (async () => {
      if (isEmpty(top100.collection)) {
        await top100.loadData();
        setAlbums(top100);
      } else {
        setAlbums(top100);
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <View>
      {isLoading || isEmpty(albums.collection) ? (
        <Loading
          isVisible={isLoading}
          text="We are getting the best albums for you"
        />
      ) : (
        albums && !isEmpty(albums.collection) && <ListAlbums albums={albums} />
      )}
    </View>
  );
};

export default TopAlbums;
