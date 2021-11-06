import axios from 'axios';
import {Album, AlbumCollection} from './albumCollection';

const BASE_URL = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';

const getAlbums = async (url = BASE_URL) => {
  return await axios
    .get(url)
    .then(res => res.data)
    .catch(err => console.log(err));
};

const Top100 = async () => {
  const res = await getAlbums();
  return new AlbumCollection(res.feed.entry);
};

export default Top100;
