import {map, find, filter} from 'lodash';

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
    this.id = id; //str at .id.attributes["im:id"]
    this.title = title; //str at .title.label
    this.albumName = albumName; //str at ['im:name'].label
    this.artist = artist; //at ['im:artist']{name:str at label, link:str at attributes.href}
    this.pricing = pricing; //at ['im:price']{label:str at .label,amount:parseFloat at attributes.amount, currency:str at attributes.currency}
    this.images = images; // at ['im:image'] [{url:str at [index].label, height:parseInt at [index].attributes.height}]
    this.label = label; //str at .rights.label
    this.nroSongs = nroSongs; //str at ['im:itemCount'].label
    this.category = category; // at .category.attributes {id:str at ['im:id'], term:str at .term}
    this.releaseDate = releaseDate; //at ['im:releaseDate'] {date:str at .label, label:str at .attributes.label}
    this.externalLink = externalLink; //href:str at .id.label
  }
  get smImg() {
    return this.images[0];
  }
  get mdImg() {
    return this.images[1];
  }
  get lgImg() {
    return this.images[2];
  }
}

export class AlbumCollection {
  constructor(rawData) {
    this.collection = map(rawData, data => this.parseAlbum(data));
  }

  parseAlbum(data) {
    const albumTemp = {};
    albumTemp.id = data.id.attributes['im:id'];
    albumTemp.title = data.title.label;
    albumTemp.albumName = data['im:name'].label;
    albumTemp.artist = {
      name: data['im:artist'].label,
      link: data['im:artist']?.attributes?.href,
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
    //returns an object
    return find(this.collection, album => album.id === id);
  }

  findByArtist(artist) {
    //returns an array
    const regex = new RegExp(artist, 'i');
    return filter(
      this.collection,
      album => album.artist.name.match(regex) && album,
    );
  }

  findByGenre(genre) {
    //returns an array
    const regex = new RegExp(genre, 'i');
    return filter(
      this.collection,
      album => album.category.term.match(regex) && album,
    );
  }
}
