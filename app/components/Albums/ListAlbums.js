import React from 'react';
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

const ListAlbums = ({albums, handleLoadMore, isLoading}) => {
  const navigation = useNavigation();
  return (
    <View>
      {!isEmpty(albums) ? (
        <FlatList
          data={albums}
          renderItem={album => (
            <AlbumItem album={album} navigation={navigation} />
          )}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={ListFooter}
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
  const {id, albumName, artist, image} = album;
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
                ? {uri: image}
                : require('../../../assets/img/no-image.png')
            }
            style={styles.imgAlbum}
          />
        </View>
        <View>
          <Text style={styles.albumName}>{albumName}</Text>
          <Text style={styles.artist}>{artist}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ListFooter = ({isLoading}) => {
  return (
    <>
      {isLoading && (
        <View style={styles.viewLoading}>
          <ActivityIndicator size="large" color={colors.dark1} />
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
  albumName: {fontWeight: 'bold'},
  artist: {paddingTop: 2, color: 'grey'},
});
