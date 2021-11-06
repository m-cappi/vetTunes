import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Loading from '../../components/Loading';
import getAlbums from '../../utils/itunes';

const TopAlbums = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [albums, setAlbums] = useState([]);
  const [pseudoPagination, setPseudoPagination] = useState({from: 0, to: 20});
  useEffect(() => {
    setAlbums(getAlbums());
    setIsLoading(false);
  }, []);
  return (
    <ScrollView>
      {isLoading ? (
        <Loading
          isVisible={isLoading}
          text="We are getting the best albums for you"
        />
      ) : (
        <Text>Top Albums Screen...</Text>
      )}
    </ScrollView>
  );
};

export default TopAlbums;
