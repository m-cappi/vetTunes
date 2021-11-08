import {AlbumCollection} from './AlbumModel';

const BASE_URL = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';

const top100 = new AlbumCollection(BASE_URL);

export default top100;
