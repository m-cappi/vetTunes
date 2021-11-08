import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {Image} from 'react-native-elements';
import {isEmpty} from 'lodash';
import {useNavigation} from '@react-navigation/native';
import colors from '../../styles/palette';

const ListAlbums = ({albums}) => {
  const [displayedAlbums, setDisplayedAlbums] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setDisplayedAlbums(albums.getNextBatch());
  }, [albums]);

  const handleLoadMore = () => {
    if (!albums.endOfList) {
      setisLoading(true);
      setDisplayedAlbums([...displayedAlbums, ...albums.getNextBatch()]);
      setisLoading(false);
    }
  };

  return (
    <View>
      {!isEmpty(displayedAlbums) ? (
        <FlatList
          data={displayedAlbums}
          renderItem={album => (
            <AlbumItem album={album} navigation={navigation} />
          )}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={<ListFooter isLoading={isLoading} />}
        />
      ) : (
        <View style={styles.viewLoading}>
          <ActivityIndicator size="large" color={colors.dark1} />
          <Text>Loading...</Text>
        </View>
      )}
    </View>
  );
};

export default ListAlbums;

const AlbumItem = ({album, navigation}) => {
  const {
    item: {id, albumName, artist, category, pricing},
  } = album;
  const image = album.item.smImg();
  const artistName = artist.name;
  const categoryName = category.term;
  const price = pricing.label;
  const goAlbum = () => {
    navigation.navigate('album', {
      id,
      albumName,
    });
  };
  return (
    <TouchableOpacity onPress={() => goAlbum()}>
      <View style={styles.viewAlbum}>
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

const ListFooter = ({isLoading}) => {
  return (
    <>
      {isLoading ? (
        <View style={styles.viewLoading}>
          <ActivityIndicator size="large" color={colors.dark1} />
        </View>
      ) : (
        <View style={styles.endOfList}>
          <Text>End of list.</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  viewLoading: {marginVertical: 10, alignItems: 'center'},
  viewAlbum: {flexDirection: 'row', margin: 10},
  viewAlbumImg: {marginRight: 15},
  imgAlbum: {width: 80, height: 80},
  viewInfo: {width: '70%'},
  albumName: {fontWeight: 'bold'},
  artist: {paddingTop: 2, color: 'grey'},
  viewDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
  details: {paddingTop: 2, color: 'grey', fontSize: 12},
  endOfList: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
});
