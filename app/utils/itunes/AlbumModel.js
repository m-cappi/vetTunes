import {map, find, filter, slice} from 'lodash';
import axios from 'axios';

export class Album {
  constructor({
    id,
    title,
    albumName,
    artist,
    pricing,
    images,
    label,
    nroSongs,
    category,
    releaseDate,
    externalLink,
  }) {
    this.id = id;
    this.title = title;
    this.albumName = albumName;
    this.artist = artist;
    this.pricing = pricing;
    this.images = images;
    this.label = label;
    this.nroSongs = nroSongs;
    this.category = category;
    this.releaseDate = releaseDate;
    this.externalLink = externalLink;
  }
  smImg() {
    return this.images[0];
  }
  mdImg() {
    return this.images[1];
  }
  lgImg() {
    return this.images[2];
  }
}

export class AlbumCollection {
  constructor(url) {
    this.url = url;
    this.collection = [];
    this.paginationPos = 0;
    this.itemCount = this.collection.length;
    this.endOfList = false;
    this.loadData();
  }

  async loadData() {
    const payload = await axios
      .get(this.url)
      .then(res => res.data)
      .then(res => {
        return map(res.feed.entry, data => this.parseAlbum(data));
      })
      .catch(err => console.warn(err));
    this.collection = payload;
  }

  parseAlbum(data) {
    const albumTemp = {};
    albumTemp.id = data.id.attributes['im:id'];
    albumTemp.title = data.title.label;
    albumTemp.albumName = data['im:name'].label;
    albumTemp.artist = {
      name: data['im:artist'].label,
      link: data['im:artist']?.attributes?.href || null,
    };
    albumTemp.pricing = {
      label: data['im:price'].label,
      amount: parseFloat(data['im:price'].attributes.amount),
      currency: data['im:price'].attributes.currency,
    };
    albumTemp.images = map(data['im:image'], img => ({
      url: img.label,
      height: parseInt(img.attributes.height),
    }));
    albumTemp.label = data.rights.label;
    albumTemp.nroSongs = data['im:itemCount'].label;
    albumTemp.category = {
      id: data.category.attributes['im:id'],
      term: data.category.attributes.term,
    };
    albumTemp.releaseDate = {
      date: data['im:releaseDate'].label,
      label: data['im:releaseDate'].attributes.label,
    };
    albumTemp.externalLink = data.id.label;
    return new Album(albumTemp);
  }

  findByPk(id) {
    //returns an Album
    return find(this.collection, album => album.id === id);
  }

  findByArtist(artist) {
    //returns an array of Albums
    const regex = new RegExp(artist, 'i');
    return filter(
      this.collection,
      album => album.artist.name.match(regex) && album,
    );
  }

  findByGenre(genre) {
    //returns an array of Albums
    const regex = new RegExp(genre, 'i');
    return filter(
      this.collection,
      album => album.category.term.match(regex) && album,
    );
  }

  getNextBatch(step = 10) {
    //returns an array of Albums
    let paginationEnd = this.paginationPos + step;
    if (paginationEnd > this.collection.length) {
      paginationEnd = this.collection.length;
    }
    const batch = slice(this.collection, this.paginationPos, paginationEnd);
    this.paginationPos = paginationEnd;
    if (this.paginationPos === this.collection.length) {
      this.endOfList = true;
    }
    return batch;
  }
}
