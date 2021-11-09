import React, {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';

import Loading from '../../components/Loading';
import AlbumShowcase from '../../components/Albums/AlbumShowcase';
import {ItunesContext} from '../../utils/itunes';

const AlbumResult = ({navigation, route}) => {
  const [album, setAlbum] = useState(null);
  const {id, albumName} = route.params;

  const top100 = useContext(ItunesContext);

  useEffect(() => {
    navigation.setOptions({title: albumName});
    setAlbum(top100.findByPk(id));
  }, [id]);

  return (
    <View>
      <Loading isVisible={!album ? true : false} text="Loading..." />
      {album && <AlbumShowcase album={album} />}
    </View>
  );
};

export default AlbumResult;
