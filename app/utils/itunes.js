import axios from 'axios';
import {Album, AlbumCollection} from './albumCollection';

const BASE_URL = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';

const getAlbums = async (url = BASE_URL) => {
  return await axios
    .get(url)
    .then(res => res.data)
    .catch(err => console.warn(err));
};

const Top100 = async () => {
  const res = await getAlbums();
  const top = new AlbumCollection(res.feed.entry);
  return top;
};

export default Top100;
