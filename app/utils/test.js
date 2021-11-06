const raw = [
  // The whole albums packages are in here
  {
    'im:name': {
      // album name
      label: '=',
    },
    'im:image': [
      //images
      {
        //Top100 list
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/c5/d8/c6/c5d8c675-63e3-6632-33db-2401eabe574d/190296491412.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        //Favorites list
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/c5/d8/c6/c5d8c675-63e3-6632-33db-2401eabe574d/190296491412.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        //Album screen
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/c5/d8/c6/c5d8c675-63e3-6632-33db-2401eabe574d/190296491412.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      //nro of songs
      label: '14',
    },
    'im:price': {
      //price
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      //ignore
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        'An Asylum Records UK release, a division of Atlantic Records UK, ℗ 2021 Warner Music UK Limited',
    },
    title: {
      //stack title
      label: '= - Ed Sheeran',
    },
    link: {
      //external link
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/1581087024?uo=2',
      },
    },
    id: {
      //external link
      label: 'https://music.apple.com/us/album/1581087024?uo=2',
      attributes: {
        'im:id': '1581087024',
      },
    },
    'im:artist': {
      //rename artist
      label: 'Ed Sheeran',
      attributes: {
        href: 'https://music.apple.com/us/artist/ed-sheeran/183313439?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '14',
        term: 'Pop',
        scheme: 'https://music.apple.com/us/genre/music-pop/id14?uo=2',
        label: 'Pop',
      },
    },
    'im:releaseDate': {
      //rename releasedAt
      label: '2021-10-29T00:00:00-07:00',
      attributes: {
        label: 'October 29, 2021',
      },
    },
  }, // The end of the first album's payload
  ////////////////////////////////////////////////
  ////////////////////////////////////////////////
  ////////////////////////////////////////////////
  ////////////////////////////////////////////////
  {
    'im:name': {
      label: 'Evergreen',
    },
    'im:image': [
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/a0/73/27/a07327f9-a7ab-ef7c-32e5-a8c7b1a2420e/886449547548.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a0/73/27/a07327f9-a7ab-ef7c-32e5-a8c7b1a2420e/886449547548.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/a0/73/27/a07327f9-a7ab-ef7c-32e5-a8c7b1a2420e/886449547548.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '14',
    },
    'im:price': {
      label: '$10.99',
      attributes: {
        amount: '10.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2021 RCA Records, a division of Sony Music Entertainment',
    },
    title: {
      label: 'Evergreen - Pentatonix',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/evergreen/1586855816?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/evergreen/1586855816?uo=2',
      attributes: {
        'im:id': '1586855816',
      },
    },
    'im:artist': {
      label: 'Pentatonix',
      attributes: {
        href: 'https://music.apple.com/us/artist/pentatonix/466047278?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '8',
        term: 'Holiday',
        scheme: 'https://music.apple.com/us/genre/music-holiday/id8?uo=2',
        label: 'Holiday',
      },
    },
    'im:releaseDate': {
      label: '2021-10-29T00:00:00-07:00',
      attributes: {
        label: 'October 29, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'I Don’t Live Here Anymore',
    },
    'im:image': [
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/d0/bb/db/d0bbdb88-33f5-1ead-5d18-a21985135ede/075679781666.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/d0/bb/db/d0bbdb88-33f5-1ead-5d18-a21985135ede/075679781666.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/d0/bb/db/d0bbdb88-33f5-1ead-5d18-a21985135ede/075679781666.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '10',
    },
    'im:price': {
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2021 Atlantic Recording Corporation',
    },
    title: {
      label: 'I Don’t Live Here Anymore - The War on Drugs',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/i-dont-live-here-anymore/1576851901?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/i-dont-live-here-anymore/1576851901?uo=2',
      attributes: {
        'im:id': '1576851901',
      },
    },
    'im:artist': {
      label: 'The War on Drugs',
      attributes: {
        href: 'https://music.apple.com/us/artist/the-war-on-drugs/282078681?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '20',
        term: 'Alternative',
        scheme: 'https://music.apple.com/us/genre/music-alternative/id20?uo=2',
        label: 'Alternative',
      },
    },
    'im:releaseDate': {
      label: '2021-10-29T00:00:00-07:00',
      attributes: {
        label: 'October 29, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'In These Silent Days',
    },
    'im:image': [
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0e/83/6f/0e836f03-ca3c-0688-d813-385658d909ca/075679786333.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/0e/83/6f/0e836f03-ca3c-0688-d813-385658d909ca/075679786333.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/0e/83/6f/0e836f03-ca3c-0688-d813-385658d909ca/075679786333.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '10',
    },
    'im:price': {
      label: '$7.99',
      attributes: {
        amount: '7.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        'A Low Country Sound/Elektra Records release. Under exclusive license to Elektra Records LLC, ℗ 2021 Brandi Carlile Band LLC',
    },
    title: {
      label: 'In These Silent Days - Brandi Carlile',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/in-these-silent-days/1577159552?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/in-these-silent-days/1577159552?uo=2',
      attributes: {
        'im:id': '1577159552',
      },
    },
    'im:artist': {
      label: 'Brandi Carlile',
      attributes: {
        href: 'https://music.apple.com/us/artist/brandi-carlile/64387579?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '10',
        term: 'Singer/Songwriter',
        scheme:
          'https://music.apple.com/us/genre/music-singer-songwriter/id10?uo=2',
        label: 'Singer/Songwriter',
      },
    },
    'im:releaseDate': {
      label: '2021-10-01T00:00:00-07:00',
      attributes: {
        label: 'October 1, 2021',
      },
    },
  },
  {
    'im:name': {
      label: "The Essential NOW That's What I Call Christmas",
    },
    'im:image': [
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/8d/02/e7/8d02e704-99b0-6dfb-215c-38181d453b33/08UMGIM20016.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/8d/02/e7/8d02e704-99b0-6dfb-215c-38181d453b33/08UMGIM20016.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/8d/02/e7/8d02e704-99b0-6dfb-215c-38181d453b33/08UMGIM20016.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '25',
    },
    'im:price': {
      label: '$6.99',
      attributes: {
        amount: '6.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        'This Compilation ℗ 2008 EMI Music North America / Sony BMG Music / UMG Recordings, Inc.',
    },
    title: {
      label: "The Essential NOW That's What I Call Christmas - Various Artists",
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/the-essential-now-thats-what-i-call-christmas/1440793555?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/the-essential-now-thats-what-i-call-christmas/1440793555?uo=2',
      attributes: {
        'im:id': '1440793555',
      },
    },
    'im:artist': {
      label: 'Various Artists',
    },
    category: {
      attributes: {
        'im:id': '8',
        term: 'Holiday',
        scheme: 'https://music.apple.com/us/genre/music-holiday/id8?uo=2',
        label: 'Holiday',
      },
    },
    'im:releaseDate': {
      label: '2008-01-01T00:00:00-07:00',
      attributes: {
        label: 'January 1, 2008',
      },
    },
  },
  {
    'im:name': {
      label: 'Good Things',
    },
    'im:image': [
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/3f/d6/e7/3fd6e73a-fe3b-3115-5a51-bf335c88b757/093624880301.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/3f/d6/e7/3fd6e73a-fe3b-3115-5a51-bf335c88b757/093624880301.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/3f/d6/e7/3fd6e73a-fe3b-3115-5a51-bf335c88b757/093624880301.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '12',
    },
    'im:price': {
      label: '$4.99',
      attributes: {
        amount: '4.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2020, 2021 Warner Music Nashville LLC',
    },
    title: {
      label: 'Good Things - Dan + Shay',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/good-things/1576236633?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/good-things/1576236633?uo=2',
      attributes: {
        'im:id': '1576236633',
      },
    },
    'im:artist': {
      label: 'Dan + Shay',
      attributes: {
        href: 'https://music.apple.com/us/artist/dan-shay/690319057?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '6',
        term: 'Country',
        scheme: 'https://music.apple.com/us/genre/music-country/id6?uo=2',
        label: 'Country',
      },
    },
    'im:releaseDate': {
      label: '2021-08-13T00:00:00-07:00',
      attributes: {
        label: 'August 13, 2021',
      },
    },
  },
  {
    'im:name': {
      label: "NOW That's What I Call Music! Vol. 80",
    },
    'im:image': [
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/56/c7/18/56c71836-b13c-7abc-bc2d-6296ef21cbe9/21UM1IM14899.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/56/c7/18/56c71836-b13c-7abc-bc2d-6296ef21cbe9/21UM1IM14899.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/56/c7/18/56c71836-b13c-7abc-bc2d-6296ef21cbe9/21UM1IM14899.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '21',
    },
    'im:price': {
      label: '$7.99',
      attributes: {
        amount: '7.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        'This Compilation ℗ 2021 UMG Recordings, Inc. and Sony Music Entertainment',
    },
    title: {
      label: "NOW That's What I Call Music! Vol. 80 - Various Artists",
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/now-thats-what-i-call-music-vol-80/1587029952?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/now-thats-what-i-call-music-vol-80/1587029952?uo=2',
      attributes: {
        'im:id': '1587029952',
      },
    },
    'im:artist': {
      label: 'Various Artists',
    },
    category: {
      attributes: {
        'im:id': '14',
        term: 'Pop',
        scheme: 'https://music.apple.com/us/genre/music-pop/id14?uo=2',
        label: 'Pop',
      },
    },
    'im:releaseDate': {
      label: '2021-10-29T00:00:00-07:00',
      attributes: {
        label: 'October 29, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'When Christmas Comes Around...',
    },
    'im:image': [
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/31/1c/4e/311c4e60-af75-321d-7323-1a31ffd08eb0/075679773852.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/31/1c/4e/311c4e60-af75-321d-7323-1a31ffd08eb0/075679773852.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/31/1c/4e/311c4e60-af75-321d-7323-1a31ffd08eb0/075679773852.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '15',
    },
    'im:price': {
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        '℗ 2021 Kelly Clarkson under exclusive license to Atlantic Recording Corporation',
    },
    title: {
      label: 'When Christmas Comes Around... - Kelly Clarkson',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/when-christmas-comes-around/1586039341?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/when-christmas-comes-around/1586039341?uo=2',
      attributes: {
        'im:id': '1586039341',
      },
    },
    'im:artist': {
      label: 'Kelly Clarkson',
      attributes: {
        href: 'https://music.apple.com/us/artist/kelly-clarkson/316265?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '8',
        term: 'Holiday',
        scheme: 'https://music.apple.com/us/genre/music-holiday/id8?uo=2',
        label: 'Holiday',
      },
    },
    'im:releaseDate': {
      label: '2021-10-15T00:00:00-07:00',
      attributes: {
        label: 'October 15, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'Greatest Hits (1981 UK Edition)',
    },
    'im:image': [
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/fb/93/0f/fb930f12-74b1-ef6e-774e-fb22302f33e9/14DMGIM05636.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/fb/93/0f/fb930f12-74b1-ef6e-774e-fb22302f33e9/14DMGIM05636.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/fb/93/0f/fb930f12-74b1-ef6e-774e-fb22302f33e9/14DMGIM05636.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '17',
    },
    'im:price': {
      label: '$6.99',
      attributes: {
        amount: '6.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: 'This Compilation ℗ 2014 Hollywood Records, Inc.',
    },
    title: {
      label: 'Greatest Hits (1981 UK Edition) - Queen',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/greatest-hits-1981-uk-edition/1422650667?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/greatest-hits-1981-uk-edition/1422650667?uo=2',
      attributes: {
        'im:id': '1422650667',
      },
    },
    'im:artist': {
      label: 'Queen',
      attributes: {
        href: 'https://music.apple.com/us/artist/queen/3296287?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '21',
        term: 'Rock',
        scheme: 'https://music.apple.com/us/genre/music-rock/id21?uo=2',
        label: 'Rock',
      },
    },
    'im:releaseDate': {
      label: '1981-10-26T00:00:00-07:00',
      attributes: {
        label: 'October 26, 1981',
      },
    },
  },
  {
    'im:name': {
      label: 'Starting Over',
    },
    'im:image': [
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/34/12/78/34127801-ad2b-4469-4916-d661bba34a94/20UMGIM71875.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/34/12/78/34127801-ad2b-4469-4916-d661bba34a94/20UMGIM71875.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/34/12/78/34127801-ad2b-4469-4916-d661bba34a94/20UMGIM71875.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '14',
    },
    'im:price': {
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        'A Mercury Nashville Release; ℗ 2020 Sound Records, under exclusive license to UMG Recordings, Inc.',
    },
    title: {
      label: 'Starting Over - Chris Stapleton',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/starting-over/1528423147?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/starting-over/1528423147?uo=2',
      attributes: {
        'im:id': '1528423147',
      },
    },
    'im:artist': {
      label: 'Chris Stapleton',
      attributes: {
        href: 'https://music.apple.com/us/artist/chris-stapleton/1752134?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '6',
        term: 'Country',
        scheme: 'https://music.apple.com/us/genre/music-country/id6?uo=2',
        label: 'Country',
      },
    },
    'im:releaseDate': {
      label: '2020-11-13T00:00:00-07:00',
      attributes: {
        label: 'November 13, 2020',
      },
    },
  },
  {
    'im:name': {
      label: 'Dune (Original Motion Picture Soundtrack)',
    },
    'im:image': [
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/6a/c4/e6/6ac4e60d-5e29-da16-d312-d4cb486e68f3/794043205743.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/6a/c4/e6/6ac4e60d-5e29-da16-d312-d4cb486e68f3/794043205743.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/6a/c4/e6/6ac4e60d-5e29-da16-d312-d4cb486e68f3/794043205743.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '22',
    },
    'im:price': {
      label: '$10.99',
      attributes: {
        amount: '10.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        '℗ 2021 This compilation WaterTower Music as licensee for Legendary Features Productions US, LLC',
    },
    title: {
      label: 'Dune (Original Motion Picture Soundtrack) - Hans Zimmer',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/dune-original-motion-picture-soundtrack/1583651332?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/dune-original-motion-picture-soundtrack/1583651332?uo=2',
      attributes: {
        'im:id': '1583651332',
      },
    },
    'im:artist': {
      label: 'Hans Zimmer',
      attributes: {
        href: 'https://music.apple.com/us/artist/hans-zimmer/454295032?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '16',
        term: 'Soundtrack',
        scheme: 'https://music.apple.com/us/genre/music-soundtrack/id16?uo=2',
        label: 'Soundtrack',
      },
    },
    'im:releaseDate': {
      label: '2021-09-17T00:00:00-07:00',
      attributes: {
        label: 'September 17, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'Brandon Davis - EP',
    },
    'im:image': [
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/36/c9/4c/36c94c5e-b8be-70ca-0790-3e1241521263/artwork.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/36/c9/4c/36c94c5e-b8be-70ca-0790-3e1241521263/artwork.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/36/c9/4c/36c94c5e-b8be-70ca-0790-3e1241521263/artwork.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '5',
    },
    'im:price': {
      label: '$5.99',
      attributes: {
        amount: '5.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2021 Brandon Davis',
    },
    title: {
      label: 'Brandon Davis - EP - Brandon Davis',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/brandon-davis-ep/1580612530?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/brandon-davis-ep/1580612530?uo=2',
      attributes: {
        'im:id': '1580612530',
      },
    },
    'im:artist': {
      label: 'Brandon Davis',
      attributes: {
        href: 'https://music.apple.com/us/artist/brandon-davis/1546081166?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '6',
        term: 'Country',
        scheme: 'https://music.apple.com/us/genre/music-country/id6?uo=2',
        label: 'Country',
      },
    },
    'im:releaseDate': {
      label: '2021-09-08T00:00:00-07:00',
      attributes: {
        label: 'September 8, 2021',
      },
    },
  },
  {
    'im:name': {
      label: "NOW That's What I Call Music! Christmas Classics",
    },
    'im:image': [
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/1b/67/20/1b6720c6-085a-5f48-21f6-b9e986c4a4ee/21UMGIM56335.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/1b/67/20/1b6720c6-085a-5f48-21f6-b9e986c4a4ee/21UMGIM56335.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/1b/67/20/1b6720c6-085a-5f48-21f6-b9e986c4a4ee/21UMGIM56335.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '20',
    },
    'im:price': {
      label: '$6.99',
      attributes: {
        amount: '6.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        'This Compilation ℗ 2021 UMG Recordings, Inc. and Sony Music Entertainment',
    },
    title: {
      label:
        "NOW That's What I Call Music! Christmas Classics - Various Artists",
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/now-thats-what-i-call-music-christmas-classics/1575783571?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/now-thats-what-i-call-music-christmas-classics/1575783571?uo=2',
      attributes: {
        'im:id': '1575783571',
      },
    },
    'im:artist': {
      label: 'Various Artists',
    },
    category: {
      attributes: {
        'im:id': '8',
        term: 'Holiday',
        scheme: 'https://music.apple.com/us/genre/music-holiday/id8?uo=2',
        label: 'Holiday',
      },
    },
    'im:releaseDate': {
      label: '2021-09-10T00:00:00-07:00',
      attributes: {
        label: 'September 10, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'Chronicle: The 20 Greatest Hits',
    },
    'im:image': [
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/3a/5a/88/3a5a884d-3c83-ad53-35c2-92e968cdfbeb/00888072341630.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/3a/5a/88/3a5a884d-3c83-ad53-35c2-92e968cdfbeb/00888072341630.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/3a/5a/88/3a5a884d-3c83-ad53-35c2-92e968cdfbeb/00888072341630.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '20',
    },
    'im:price': {
      label: '$11.99',
      attributes: {
        amount: '11.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: 'This Compilation ℗ 2011 Concord Music Group, Inc.',
    },
    title: {
      label: 'Chronicle: The 20 Greatest Hits - Creedence Clearwater Revival',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/chronicle-the-20-greatest-hits/1440955595?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/chronicle-the-20-greatest-hits/1440955595?uo=2',
      attributes: {
        'im:id': '1440955595',
      },
    },
    'im:artist': {
      label: 'Creedence Clearwater Revival',
      attributes: {
        href: 'https://music.apple.com/us/artist/creedence-clearwater-revival/2083606?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '21',
        term: 'Rock',
        scheme: 'https://music.apple.com/us/genre/music-rock/id21?uo=2',
        label: 'Rock',
      },
    },
    'im:releaseDate': {
      label: '1976-01-01T00:00:00-07:00',
      attributes: {
        label: 'January 1, 1976',
      },
    },
  },
  {
    'im:name': {
      label: 'Ocean to Ocean',
    },
    'im:image': [
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/1f/ab/ff/1fabff27-a759-b9d4-45b8-dc1b03b7a315/21UM1IM07740.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/1f/ab/ff/1fabff27-a759-b9d4-45b8-dc1b03b7a315/21UM1IM07740.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/1f/ab/ff/1fabff27-a759-b9d4-45b8-dc1b03b7a315/21UM1IM07740.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '11',
    },
    'im:price': {
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        'A Decca Records Release; ℗ 2021 Tori Amos, under exclusive licence to Universal Music Operations Limited',
    },
    title: {
      label: 'Ocean to Ocean - Tori Amos',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/ocean-to-ocean/1586228889?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/ocean-to-ocean/1586228889?uo=2',
      attributes: {
        'im:id': '1586228889',
      },
    },
    'im:artist': {
      label: 'Tori Amos',
      attributes: {
        href: 'https://music.apple.com/us/artist/tori-amos/163916?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '14',
        term: 'Pop',
        scheme: 'https://music.apple.com/us/genre/music-pop/id14?uo=2',
        label: 'Pop',
      },
    },
    'im:releaseDate': {
      label: '2021-10-29T00:00:00-07:00',
      attributes: {
        label: 'October 29, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'Time Clocks',
    },
    'im:image': [
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/12/79/f8/1279f867-0d87-941a-b543-6488a726ac19/192641681783_Cover.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/12/79/f8/1279f867-0d87-941a-b543-6488a726ac19/192641681783_Cover.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/12/79/f8/1279f867-0d87-941a-b543-6488a726ac19/192641681783_Cover.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '10',
    },
    'im:price': {
      label: '$10.99',
      attributes: {
        amount: '10.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2021 J&R Adventures',
    },
    title: {
      label: 'Time Clocks - Joe Bonamassa',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/time-clocks/1581563952?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/time-clocks/1581563952?uo=2',
      attributes: {
        'im:id': '1581563952',
      },
    },
    'im:artist': {
      label: 'Joe Bonamassa',
      attributes: {
        href: 'https://music.apple.com/us/artist/joe-bonamassa/878402?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '1010',
        term: 'Contemporary Blues',
        scheme:
          'https://music.apple.com/us/genre/music-blues-contemporary-blues/id1010?uo=2',
        label: 'Contemporary Blues',
      },
    },
    'im:releaseDate': {
      label: '2021-10-29T00:00:00-07:00',
      attributes: {
        label: 'October 29, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'ABBA Gold: Greatest Hits',
    },
    'im:image': [
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/60/f8/a6/60f8a6bc-e875-238d-f2f8-f34a6034e6d2/14UMGIM07615.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/60/f8/a6/60f8a6bc-e875-238d-f2f8-f34a6034e6d2/14UMGIM07615.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/60/f8/a6/60f8a6bc-e875-238d-f2f8-f34a6034e6d2/14UMGIM07615.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '19',
    },
    'im:price': {
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: 'This Compilation ℗ 2014 Polar Music International AB',
    },
    title: {
      label: 'ABBA Gold: Greatest Hits - ABBA',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/abba-gold-greatest-hits/1422648512?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/abba-gold-greatest-hits/1422648512?uo=2',
      attributes: {
        'im:id': '1422648512',
      },
    },
    'im:artist': {
      label: 'ABBA',
      attributes: {
        href: 'https://music.apple.com/us/artist/abba/372976?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '14',
        term: 'Pop',
        scheme: 'https://music.apple.com/us/genre/music-pop/id14?uo=2',
        label: 'Pop',
      },
    },
    'im:releaseDate': {
      label: '1992-09-21T00:00:00-07:00',
      attributes: {
        label: 'September 21, 1992',
      },
    },
  },
  {
    'im:name': {
      label: 'Traveller',
    },
    'im:image': [
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/e2/4b/60/e24b6016-8278-bb18-cf5d-d44bf68371da/00602547223838.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/e2/4b/60/e24b6016-8278-bb18-cf5d-d44bf68371da/00602547223838.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/e2/4b/60/e24b6016-8278-bb18-cf5d-d44bf68371da/00602547223838.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '14',
    },
    'im:price': {
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2015 Mercury Records, a Division of UMG Recordings, Inc.',
    },
    title: {
      label: 'Traveller - Chris Stapleton',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/traveller/1440827477?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/traveller/1440827477?uo=2',
      attributes: {
        'im:id': '1440827477',
      },
    },
    'im:artist': {
      label: 'Chris Stapleton',
      attributes: {
        href: 'https://music.apple.com/us/artist/chris-stapleton/1752134?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '6',
        term: 'Country',
        scheme: 'https://music.apple.com/us/genre/music-country/id6?uo=2',
        label: 'Country',
      },
    },
    'im:releaseDate': {
      label: '2015-05-04T00:00:00-07:00',
      attributes: {
        label: 'May 4, 2015',
      },
    },
  },
  {
    'im:name': {
      label: 'The Comeback',
    },
    'im:image': [
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/f0/77/68/f07768cd-706c-9b2c-d594-fd4e630f0993/093624877516.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/f0/77/68/f07768cd-706c-9b2c-d594-fd4e630f0993/093624877516.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/f0/77/68/f07768cd-706c-9b2c-d594-fd4e630f0993/093624877516.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '15',
    },
    'im:price': {
      label: '$11.99',
      attributes: {
        amount: '11.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        '℗ 2021 Home Grown Music under exclusive license to Warner Music Nashville LLC',
    },
    title: {
      label: 'The Comeback - Zac Brown Band',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/the-comeback/1582050000?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/the-comeback/1582050000?uo=2',
      attributes: {
        'im:id': '1582050000',
      },
    },
    'im:artist': {
      label: 'Zac Brown Band',
      attributes: {
        href: 'https://music.apple.com/us/artist/zac-brown-band/129045039?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '6',
        term: 'Country',
        scheme: 'https://music.apple.com/us/genre/music-country/id6?uo=2',
        label: 'Country',
      },
    },
    'im:releaseDate': {
      label: '2021-10-15T00:00:00-07:00',
      attributes: {
        label: 'October 15, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'Human: The Double Album',
    },
    'im:image': [
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/8b/4d/54/8b4d545d-feee-c91c-992c-cecd16677f6e/093624879381.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/8b/4d/54/8b4d545d-feee-c91c-992c-cecd16677f6e/093624879381.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/8b/4d/54/8b4d545d-feee-c91c-992c-cecd16677f6e/093624879381.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '18',
    },
    'im:price': {
      label: '$13.99',
      attributes: {
        amount: '13.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        '℗ 2021 CoJo Music LLC under exclusive license to Warner Music Nashville LLC.',
    },
    title: {
      label: 'Human: The Double Album - Cody Johnson',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/human-the-double-album/1582024378?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/human-the-double-album/1582024378?uo=2',
      attributes: {
        'im:id': '1582024378',
      },
    },
    'im:artist': {
      label: 'Cody Johnson',
      attributes: {
        href: 'https://music.apple.com/us/artist/cody-johnson/331459657?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '6',
        term: 'Country',
        scheme: 'https://music.apple.com/us/genre/music-country/id6?uo=2',
        label: 'Country',
      },
    },
    'im:releaseDate': {
      label: '2021-10-08T00:00:00-07:00',
      attributes: {
        label: 'October 8, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'Christmas',
    },
    'im:image': [
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/37/2d/6e/372d6e16-7a32-91f0-1a03-0f2d9dbe389e/093624942788.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/37/2d/6e/372d6e16-7a32-91f0-1a03-0f2d9dbe389e/093624942788.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/37/2d/6e/372d6e16-7a32-91f0-1a03-0f2d9dbe389e/093624942788.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '16',
    },
    'im:price': {
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2011 Reprise Records',
    },
    title: {
      label: 'Christmas - Michael Bublé',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/christmas/669854820?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/christmas/669854820?uo=2',
      attributes: {
        'im:id': '669854820',
      },
    },
    'im:artist': {
      label: 'Michael Bublé',
      attributes: {
        href: 'https://music.apple.com/us/artist/michael-bubl%C3%A9/799597?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '8',
        term: 'Holiday',
        scheme: 'https://music.apple.com/us/genre/music-holiday/id8?uo=2',
        label: 'Holiday',
      },
    },
    'im:releaseDate': {
      label: '2011-10-14T00:00:00-07:00',
      attributes: {
        label: 'October 14, 2011',
      },
    },
  },
  {
    'im:name': {
      label: 'Last Night In Soho (Original Motion Picture Soundtrack)',
    },
    'im:image': [
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/da/80/67/da80675b-dc98-4707-70d3-0719b23cfd09/478.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/da/80/67/da80675b-dc98-4707-70d3-0719b23cfd09/478.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/da/80/67/da80675b-dc98-4707-70d3-0719b23cfd09/478.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '21',
    },
    'im:price': {
      label: '$10.99',
      attributes: {
        amount: '10.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        '℗ 2021 This Compilation, Back Lot Music, a division of Universal Studios Music LLLP',
    },
    title: {
      label:
        'Last Night In Soho (Original Motion Picture Soundtrack) - Various Artists',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/last-night-in-soho-original-motion-picture-soundtrack/1587737487?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/last-night-in-soho-original-motion-picture-soundtrack/1587737487?uo=2',
      attributes: {
        'im:id': '1587737487',
      },
    },
    'im:artist': {
      label: 'Various Artists',
    },
    category: {
      attributes: {
        'im:id': '16',
        term: 'Soundtrack',
        scheme: 'https://music.apple.com/us/genre/music-soundtrack/id16?uo=2',
        label: 'Soundtrack',
      },
    },
    'im:releaseDate': {
      label: '2021-10-22T00:00:00-07:00',
      attributes: {
        label: 'October 22, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'Greatest Hits',
    },
    'im:image': [
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/cd/43/e7/cd43e76f-4ff1-f700-d84f-86eeea7fa5bb/828768588925.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/cd/43/e7/cd43e76f-4ff1-f700-d84f-86eeea7fa5bb/828768588925.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/cd/43/e7/cd43e76f-4ff1-f700-d84f-86eeea7fa5bb/828768588925.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '16',
    },
    'im:price': {
      label: '$10.99',
      attributes: {
        amount: '10.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ This compilation (P) 1988 Sony Music Entertainment',
    },
    title: {
      label: 'Greatest Hits - Journey',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/greatest-hits/169003304?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/greatest-hits/169003304?uo=2',
      attributes: {
        'im:id': '169003304',
      },
    },
    'im:artist': {
      label: 'Journey',
      attributes: {
        href: 'https://music.apple.com/us/artist/journey/486597?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '21',
        term: 'Rock',
        scheme: 'https://music.apple.com/us/genre/music-rock/id21?uo=2',
        label: 'Rock',
      },
    },
    'im:releaseDate': {
      label: '1988-11-15T00:00:00-07:00',
      attributes: {
        label: 'November 15, 1988',
      },
    },
  },
  {
    'im:name': {
      label:
        'Guardians of the Galaxy: Awesome Mix, Vol. 1 (Original Motion Picture Soundtrack)',
    },
    'im:image': [
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/3b/46/fe/3b46fe36-3fc6-8aca-8953-71f504fd0222/14DMGIM05236.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/3b/46/fe/3b46fe36-3fc6-8aca-8953-71f504fd0222/14DMGIM05236.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/3b/46/fe/3b46fe36-3fc6-8aca-8953-71f504fd0222/14DMGIM05236.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '12',
    },
    'im:price': {
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: 'This Compilation ℗ 2014 Marvel Music, Inc.',
    },
    title: {
      label:
        'Guardians of the Galaxy: Awesome Mix, Vol. 1 (Original Motion Picture Soundtrack) - Various Artists',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/guardians-of-the-galaxy-awesome-mix-vol-1/1440657117?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/guardians-of-the-galaxy-awesome-mix-vol-1/1440657117?uo=2',
      attributes: {
        'im:id': '1440657117',
      },
    },
    'im:artist': {
      label: 'Various Artists',
    },
    category: {
      attributes: {
        'im:id': '16',
        term: 'Soundtrack',
        scheme: 'https://music.apple.com/us/genre/music-soundtrack/id16?uo=2',
        label: 'Soundtrack',
      },
    },
    'im:releaseDate': {
      label: '2014-01-01T00:00:00-07:00',
      attributes: {
        label: 'January 1, 2014',
      },
    },
  },
  {
    'im:name': {
      label: 'A View from the Top of the World',
    },
    'im:image': [
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/55/e2/c6/55e2c647-748c-3dc7-6b90-42af96a45704/886449065479.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/55/e2/c6/55e2c647-748c-3dc7-6b90-42af96a45704/886449065479.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/55/e2/c6/55e2c647-748c-3dc7-6b90-42af96a45704/886449065479.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '7',
    },
    'im:price': {
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        '℗ 2021 Ytse Jams, Inc., under exclusive license to InsideOutMusic',
    },
    title: {
      label: 'A View from the Top of the World - Dream Theater',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/a-view-from-the-top-of-the-world/1576732163?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/a-view-from-the-top-of-the-world/1576732163?uo=2',
      attributes: {
        'im:id': '1576732163',
      },
    },
    'im:artist': {
      label: 'Dream Theater',
      attributes: {
        href: 'https://music.apple.com/us/artist/dream-theater/730091?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '1153',
        term: 'Heavy Metal',
        scheme: 'https://music.apple.com/us/genre/music-rock-metal/id1153?uo=2',
        label: 'Metal',
      },
    },
    'im:releaseDate': {
      label: '2021-10-22T00:00:00-07:00',
      attributes: {
        label: 'October 22, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'Kin',
    },
    'im:image': [
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/67/36/e4/6736e4f4-a031-dc8e-91e3-bd200832d5aa/Whitechapel_-_Kin.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/67/36/e4/6736e4f4-a031-dc8e-91e3-bd200832d5aa/Whitechapel_-_Kin.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/67/36/e4/6736e4f4-a031-dc8e-91e3-bd200832d5aa/Whitechapel_-_Kin.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '11',
    },
    'im:price': {
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2021 Metal Blade Records',
    },
    title: {
      label: 'Kin - Whitechapel',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/kin/1579782691?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/kin/1579782691?uo=2',
      attributes: {
        'im:id': '1579782691',
      },
    },
    'im:artist': {
      label: 'Whitechapel',
      attributes: {
        href: 'https://music.apple.com/us/artist/whitechapel/127084107?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '1153',
        term: 'Heavy Metal',
        scheme: 'https://music.apple.com/us/genre/music-rock-metal/id1153?uo=2',
        label: 'Metal',
      },
    },
    'im:releaseDate': {
      label: '2021-10-29T00:00:00-07:00',
      attributes: {
        label: 'October 29, 2021',
      },
    },
  },
  {
    'im:name': {
      label: '25',
    },
    'im:image': [
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/fa/47/60/fa47608a-b5ef-0064-1d61-6509ea8788f7/191404113974.png/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/fa/47/60/fa47608a-b5ef-0064-1d61-6509ea8788f7/191404113974.png/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/fa/47/60/fa47608a-b5ef-0064-1d61-6509ea8788f7/191404113974.png/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '11',
    },
    'im:price': {
      label: '$10.99',
      attributes: {
        amount: '10.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2015 XL Recordings Ltd',
    },
    title: {
      label: '25 - Adele',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/25/1544494115?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/25/1544494115?uo=2',
      attributes: {
        'im:id': '1544494115',
      },
    },
    'im:artist': {
      label: 'Adele',
      attributes: {
        href: 'https://music.apple.com/us/artist/adele/262836961?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '14',
        term: 'Pop',
        scheme: 'https://music.apple.com/us/genre/music-pop/id14?uo=2',
        label: 'Pop',
      },
    },
    'im:releaseDate': {
      label: '2015-11-20T00:00:00-07:00',
      attributes: {
        label: 'November 20, 2015',
      },
    },
  },
  {
    'im:name': {
      label: 'The Greatest Showman (Original Motion Picture Soundtrack)',
    },
    'im:image': [
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/a6/63/54/a6635418-7d49-b237-d1c9-ba85fa57dbc6/075679886613.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/a6/63/54/a6635418-7d49-b237-d1c9-ba85fa57dbc6/075679886613.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/a6/63/54/a6635418-7d49-b237-d1c9-ba85fa57dbc6/075679886613.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '11',
    },
    'im:price': {
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        '℗ 2017 This compilation Atlantic Recording Corporation for the United States and WEA International Inc. for the world outside of the United States. Motion Picture Artwork, Photos, and Fox Trademarks and Logos TM and © 2017 Twentieth Century Fox Film Corporation.',
    },
    title: {
      label:
        'The Greatest Showman (Original Motion Picture Soundtrack) - Benj Pasek & Justin Paul, Hugh Jackman, Keala Settle, Zac Efron, Zendaya',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/the-greatest-showman-original-motion-picture-soundtrack/1299856714?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/the-greatest-showman-original-motion-picture-soundtrack/1299856714?uo=2',
      attributes: {
        'im:id': '1299856714',
      },
    },
    'im:artist': {
      label:
        'Benj Pasek & Justin Paul, Hugh Jackman, Keala Settle, Zac Efron, Zendaya',
      attributes: {
        href: 'https://music.apple.com/us/artist/benj-pasek-justin-paul/1343414759?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '1166',
        term: 'Musicals',
        scheme:
          'https://music.apple.com/us/genre/music-soundtrack-musicals/id1166?uo=2',
        label: 'Musicals',
      },
    },
    'im:releaseDate': {
      label: '2017-12-08T00:00:00-07:00',
      attributes: {
        label: 'December 8, 2017',
      },
    },
  },
  {
    'im:name': {
      label: 'The Platinum Collection (Greatest Hits I, II & III)',
    },
    'im:image': [
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/4d/08/2a/4d082a9e-7898-1aa1-a02f-339810058d9e/14DMGIM05632.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/4d/08/2a/4d082a9e-7898-1aa1-a02f-339810058d9e/14DMGIM05632.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/4d/08/2a/4d082a9e-7898-1aa1-a02f-339810058d9e/14DMGIM05632.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '51',
    },
    'im:price': {
      label: '$24.99',
      attributes: {
        amount: '24.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2014 Hollywood Records, Inc.',
    },
    title: {
      label: 'The Platinum Collection (Greatest Hits I, II & III) - Queen',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/the-platinum-collection-greatest-hits-i-ii-iii/1440650428?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/the-platinum-collection-greatest-hits-i-ii-iii/1440650428?uo=2',
      attributes: {
        'im:id': '1440650428',
      },
    },
    'im:artist': {
      label: 'Queen',
      attributes: {
        href: 'https://music.apple.com/us/artist/queen/3296287?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '21',
        term: 'Rock',
        scheme: 'https://music.apple.com/us/genre/music-rock/id21?uo=2',
        label: 'Rock',
      },
    },
    'im:releaseDate': {
      label: '2000-11-13T00:00:00-07:00',
      attributes: {
        label: 'November 13, 2000',
      },
    },
  },
  {
    'im:name': {
      label: 'SOMETHING ABOUT CHRISTMAS TIME',
    },
    'im:image': [
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/38/04/10/380410a9-cc2f-d436-074f-4410824b702d/075679772510.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/38/04/10/380410a9-cc2f-d436-074f-4410824b702d/075679772510.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/38/04/10/380410a9-cc2f-d436-074f-4410824b702d/075679772510.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '10',
    },
    'im:price': {
      label: '$7.99',
      attributes: {
        amount: '7.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        '℗ 2021 Atlantic Recording Corporation for the United States and WEA International for the world outside of the United States. A Warner Music Group Company.',
    },
    title: {
      label: 'SOMETHING ABOUT CHRISTMAS TIME - Rob Thomas',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/something-about-christmas-time/1589859857?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/something-about-christmas-time/1589859857?uo=2',
      attributes: {
        'im:id': '1589859857',
      },
    },
    'im:artist': {
      label: 'Rob Thomas',
      attributes: {
        href: 'https://music.apple.com/us/artist/rob-thomas/217178?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '8',
        term: 'Holiday',
        scheme: 'https://music.apple.com/us/genre/music-holiday/id8?uo=2',
        label: 'Holiday',
      },
    },
    'im:releaseDate': {
      label: '2021-10-22T00:00:00-07:00',
      attributes: {
        label: 'October 22, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'WE ARE',
    },
    'im:image': [
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/cc/e6/f3/cce6f334-44c2-0570-3b95-05942cd9dcaf/21UMGIM00518.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/cc/e6/f3/cce6f334-44c2-0570-3b95-05942cd9dcaf/21UMGIM00518.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/cc/e6/f3/cce6f334-44c2-0570-3b95-05942cd9dcaf/21UMGIM00518.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '13',
    },
    'im:price': {
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        'A Verve Records release; ℗ 2021 Naht Jona, LLC, under exclusive license to Verve Label Group, a division of UMG Recordings, Inc.',
    },
    title: {
      label: 'WE ARE - Jon Batiste',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/we-are/1548291743?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/we-are/1548291743?uo=2',
      attributes: {
        'im:id': '1548291743',
      },
    },
    'im:artist': {
      label: 'Jon Batiste',
      attributes: {
        href: 'https://music.apple.com/us/artist/jon-batiste/211400086?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '15',
        term: 'R&B/Soul',
        scheme: 'https://music.apple.com/us/genre/music-r-b-soul/id15?uo=2',
        label: 'R&B/Soul',
      },
    },
    'im:releaseDate': {
      label: '2021-03-19T00:00:00-07:00',
      attributes: {
        label: 'March 19, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'If I Know Me',
    },
    'im:image': [
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ac/f5/19/acf51942-e001-2d6e-e0e6-49b3fd09cac4/842812106569_01_img001.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/ac/f5/19/acf51942-e001-2d6e-e0e6-49b3fd09cac4/842812106569_01_img001.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/ac/f5/19/acf51942-e001-2d6e-e0e6-49b3fd09cac4/842812106569_01_img001.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '14',
    },
    'im:price': {
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2018 Big Loud Records',
    },
    title: {
      label: 'If I Know Me - Morgan Wallen',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/if-i-know-me/1440111976?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/if-i-know-me/1440111976?uo=2',
      attributes: {
        'im:id': '1440111976',
      },
    },
    'im:artist': {
      label: 'Morgan Wallen',
      attributes: {
        href: 'https://music.apple.com/us/artist/morgan-wallen/829142092?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '6',
        term: 'Country',
        scheme: 'https://music.apple.com/us/genre/music-country/id6?uo=2',
        label: 'Country',
      },
    },
    'im:releaseDate': {
      label: '2018-04-27T00:00:00-07:00',
      attributes: {
        label: 'April 27, 2018',
      },
    },
  },
  {
    'im:name': {
      label: "Fully Loaded: God's Country",
    },
    'im:image': [
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/c2/50/ce/c250ce37-4daf-3ce7-e6a4-050e0a16d09d/093624896586.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/c2/50/ce/c250ce37-4daf-3ce7-e6a4-050e0a16d09d/093624896586.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/c2/50/ce/c250ce37-4daf-3ce7-e6a4-050e0a16d09d/093624896586.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '12',
    },
    'im:price': {
      label: '$4.99',
      attributes: {
        amount: '4.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        '℗ 2019 Ten Point Productions, Inc. under exclusive license to Warner Records Inc.',
    },
    title: {
      label: "Fully Loaded: God's Country - Blake Shelton",
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/fully-loaded-gods-country/1489235169?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/fully-loaded-gods-country/1489235169?uo=2',
      attributes: {
        'im:id': '1489235169',
      },
    },
    'im:artist': {
      label: 'Blake Shelton',
      attributes: {
        href: 'https://music.apple.com/us/artist/blake-shelton/189204?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '6',
        term: 'Country',
        scheme: 'https://music.apple.com/us/genre/music-country/id6?uo=2',
        label: 'Country',
      },
    },
    'im:releaseDate': {
      label: '2019-12-13T00:00:00-07:00',
      attributes: {
        label: 'December 13, 2019',
      },
    },
  },
  {
    'im:name': {
      label: "NOW That's What I Call Power Ballads Hits",
    },
    'im:image': [
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music49/v4/8a/40/3b/8a403bf8-f82e-43fe-10c2-b59d5335d572/886445640830.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music49/v4/8a/40/3b/8a403bf8-f82e-43fe-10c2-b59d5335d572/886445640830.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music49/v4/8a/40/3b/8a403bf8-f82e-43fe-10c2-b59d5335d572/886445640830.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '18',
    },
    'im:price': {
      label: '$6.99',
      attributes: {
        amount: '6.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2016 UMG Recordings, Inc. and Sony Music Entertainment',
    },
    title: {
      label: "NOW That's What I Call Power Ballads Hits - Various Artists",
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/now-thats-what-i-call-power-ballads-hits/1075992086?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/now-thats-what-i-call-power-ballads-hits/1075992086?uo=2',
      attributes: {
        'im:id': '1075992086',
      },
    },
    'im:artist': {
      label: 'Various Artists',
    },
    category: {
      attributes: {
        'im:id': '14',
        term: 'Pop',
        scheme: 'https://music.apple.com/us/genre/music-pop/id14?uo=2',
        label: 'Pop',
      },
    },
    'im:releaseDate': {
      label: '2016-02-05T00:00:00-07:00',
      attributes: {
        label: 'February 5, 2016',
      },
    },
  },
  {
    'im:name': {
      label: 'The Country And The Coast Side A - EP',
    },
    'im:image': [
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/2e/4e/90/2e4e906f-275c-a332-06fa-5a6ba53668f5/093624875970.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/2e/4e/90/2e4e906f-275c-a332-06fa-5a6ba53668f5/093624875970.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/2e/4e/90/2e4e906f-275c-a332-06fa-5a6ba53668f5/093624875970.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '6',
    },
    'im:price': {
      label: '$4.99',
      attributes: {
        amount: '4.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2021 Warner Music Nashville LLC.',
    },
    title: {
      label: 'The Country And The Coast Side A - EP - Morgan Evans',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/the-country-and-the-coast-side-a-ep/1586011488?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/the-country-and-the-coast-side-a-ep/1586011488?uo=2',
      attributes: {
        'im:id': '1586011488',
      },
    },
    'im:artist': {
      label: 'Morgan Evans',
      attributes: {
        href: 'https://music.apple.com/us/artist/morgan-evans/262665075?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '6',
        term: 'Country',
        scheme: 'https://music.apple.com/us/genre/music-country/id6?uo=2',
        label: 'Country',
      },
    },
    'im:releaseDate': {
      label: '2021-10-29T00:00:00-07:00',
      attributes: {
        label: 'October 29, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'Fine Line',
    },
    'im:image': [
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '12',
    },
    'im:price': {
      label: '$10.99',
      attributes: {
        amount: '10.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        '℗ 2019 Erskine Records Limited, under exclusive license to Columbia Records, a Division of Sony Music Entertainment',
    },
    title: {
      label: 'Fine Line - Harry Styles',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/fine-line/1485802965?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/fine-line/1485802965?uo=2',
      attributes: {
        'im:id': '1485802965',
      },
    },
    'im:artist': {
      label: 'Harry Styles',
      attributes: {
        href: 'https://music.apple.com/us/artist/harry-styles/471260289?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '14',
        term: 'Pop',
        scheme: 'https://music.apple.com/us/genre/music-pop/id14?uo=2',
        label: 'Pop',
      },
    },
    'im:releaseDate': {
      label: '2019-12-13T00:00:00-07:00',
      attributes: {
        label: 'December 13, 2019',
      },
    },
  },
  {
    'im:name': {
      label: 'Into The Mystery',
    },
    'im:image': [
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/f5/48/5f/f5485f4c-458e-425e-fa60-e3ce2871cb00/075679788856.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/f5/48/5f/f5485f4c-458e-425e-fa60-e3ce2871cb00/075679788856.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/f5/48/5f/f5485f4c-458e-425e-fa60-e3ce2871cb00/075679788856.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '12',
    },
    'im:price': {
      label: '$7.99',
      attributes: {
        amount: '7.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2021 Elektra Records LLC',
    },
    title: {
      label: 'Into The Mystery - NEEDTOBREATHE',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/into-the-mystery/1566670096?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/into-the-mystery/1566670096?uo=2',
      attributes: {
        'im:id': '1566670096',
      },
    },
    'im:artist': {
      label: 'NEEDTOBREATHE',
      attributes: {
        href: 'https://music.apple.com/us/artist/needtobreathe/113247214?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '21',
        term: 'Rock',
        scheme: 'https://music.apple.com/us/genre/music-rock/id21?uo=2',
        label: 'Rock',
      },
    },
    'im:releaseDate': {
      label: '2021-07-30T00:00:00-07:00',
      attributes: {
        label: 'July 30, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'What A Song Can Do (Bonus Videos Edition)',
    },
    'im:image': [
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d8/92/46/d89246de-9a9e-78cc-649d-74a96a65d3d1/21BMR0002771.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/d8/92/46/d89246de-9a9e-78cc-649d-74a96a65d3d1/21BMR0002771.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/d8/92/46/d89246de-9a9e-78cc-649d-74a96a65d3d1/21BMR0002771.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '16',
    },
    'im:price': {
      label: '$6.99',
      attributes: {
        amount: '6.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2021 Big Machine Label Group, LLC',
    },
    title: {
      label: 'What A Song Can Do (Bonus Videos Edition) - Lady A',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/what-a-song-can-do-bonus-videos-edition/1580136215?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/what-a-song-can-do-bonus-videos-edition/1580136215?uo=2',
      attributes: {
        'im:id': '1580136215',
      },
    },
    'im:artist': {
      label: 'Lady A',
      attributes: {
        href: 'https://music.apple.com/us/artist/lady-a/215542909?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '6',
        term: 'Country',
        scheme: 'https://music.apple.com/us/genre/music-country/id6?uo=2',
        label: 'Country',
      },
    },
    'im:releaseDate': {
      label: '2021-10-22T00:00:00-07:00',
      attributes: {
        label: 'October 22, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'Country Stuff - EP',
    },
    'im:image': [
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/01/04/77/01047793-f93c-14a6-6819-4f429c50ec1a/886449239658.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/01/04/77/01047793-f93c-14a6-6819-4f429c50ec1a/886449239658.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/01/04/77/01047793-f93c-14a6-6819-4f429c50ec1a/886449239658.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '6',
    },
    'im:price': {
      label: '$6.99',
      attributes: {
        amount: '6.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2021 Monument Records, a division of Sony Music Entertainment',
    },
    title: {
      label: 'Country Stuff - EP - Walker Hayes',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/country-stuff-ep/1565414763?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/country-stuff-ep/1565414763?uo=2',
      attributes: {
        'im:id': '1565414763',
      },
    },
    'im:artist': {
      label: 'Walker Hayes',
      attributes: {
        href: 'https://music.apple.com/us/artist/walker-hayes/382876655?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '6',
        term: 'Country',
        scheme: 'https://music.apple.com/us/genre/music-country/id6?uo=2',
        label: 'Country',
      },
    },
    'im:releaseDate': {
      label: '2021-06-04T00:00:00-07:00',
      attributes: {
        label: 'June 4, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'Time, Tequila & Therapy',
    },
    'im:image': [
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/ea/a4/db/eaa4dbe1-cb80-3214-7db8-096d419e502c/886449461394.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/ea/a4/db/eaa4dbe1-cb80-3214-7db8-096d419e502c/886449461394.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/ea/a4/db/eaa4dbe1-cb80-3214-7db8-096d419e502c/886449461394.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '13',
    },
    'im:price': {
      label: '$11.99',
      attributes: {
        amount: '11.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2021 Sony Music Entertainment. All rights reserved.',
    },
    title: {
      label: 'Time, Tequila & Therapy - Old Dominion',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/time-tequila-therapy/1580902692?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/time-tequila-therapy/1580902692?uo=2',
      attributes: {
        'im:id': '1580902692',
      },
    },
    'im:artist': {
      label: 'Old Dominion',
      attributes: {
        href: 'https://music.apple.com/us/artist/old-dominion/495761008?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '6',
        term: 'Country',
        scheme: 'https://music.apple.com/us/genre/music-country/id6?uo=2',
        label: 'Country',
      },
    },
    'im:releaseDate': {
      label: '2021-10-08T00:00:00-07:00',
      attributes: {
        label: 'October 8, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'Acoustic Covers',
    },
    'im:image': [
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e3/3f/2f/e33f2f6a-a5cb-e94d-f361-61212d6e5927/093624877158.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/e3/3f/2f/e33f2f6a-a5cb-e94d-f361-61212d6e5927/093624877158.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e3/3f/2f/e33f2f6a-a5cb-e94d-f361-61212d6e5927/093624877158.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '9',
    },
    'im:price': {
      label: '$4.99',
      attributes: {
        amount: '4.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2021 Warren Zeiders',
    },
    title: {
      label: 'Acoustic Covers - Warren Zeiders',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/acoustic-covers/1579798903?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/acoustic-covers/1579798903?uo=2',
      attributes: {
        'im:id': '1579798903',
      },
    },
    'im:artist': {
      label: 'Warren Zeiders',
      attributes: {
        href: 'https://music.apple.com/us/artist/warren-zeiders/1545729343?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '6',
        term: 'Country',
        scheme: 'https://music.apple.com/us/genre/music-country/id6?uo=2',
        label: 'Country',
      },
    },
    'im:releaseDate': {
      label: '2021-08-06T00:00:00-07:00',
      attributes: {
        label: 'August 6, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'Eternals (Original Motion Picture Soundtrack)',
    },
    'im:image': [
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/51/f1/70/51f170a1-18da-9832-658e-f35669642634/21UM1IM29299.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/51/f1/70/51f170a1-18da-9832-658e-f35669642634/21UM1IM29299.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/51/f1/70/51f170a1-18da-9832-658e-f35669642634/21UM1IM29299.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '20',
    },
    'im:price': {
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2021 Marvel Music, Inc.',
    },
    title: {
      label: 'Eternals (Original Motion Picture Soundtrack) - Ramin Djawadi',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/eternals-original-motion-picture-soundtrack/1590946281?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/eternals-original-motion-picture-soundtrack/1590946281?uo=2',
      attributes: {
        'im:id': '1590946281',
      },
    },
    'im:artist': {
      label: 'Ramin Djawadi',
      attributes: {
        href: 'https://music.apple.com/us/artist/ramin-djawadi/5581431?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '16',
        term: 'Soundtrack',
        scheme: 'https://music.apple.com/us/genre/music-soundtrack/id16?uo=2',
        label: 'Soundtrack',
      },
    },
    'im:releaseDate': {
      label: '2021-11-03T00:00:00-07:00',
      attributes: {
        label: 'November 3, 2021',
      },
    },
  },
  {
    'im:name': {
      label:
        'Vol. 2 Guardians of the Galaxy: Awesome Mix Vol. 2 (Original Motion Picture Soundtrack)',
    },
    'im:image': [
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/cb/59/f4/cb59f4e3-69b5-f95c-cc5d-22637b29e139/00050087368777.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/cb/59/f4/cb59f4e3-69b5-f95c-cc5d-22637b29e139/00050087368777.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/cb/59/f4/cb59f4e3-69b5-f95c-cc5d-22637b29e139/00050087368777.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '14',
    },
    'im:price': {
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: 'This Compilation ℗ 2017 Marvel Music, Inc.',
    },
    title: {
      label:
        'Vol. 2 Guardians of the Galaxy: Awesome Mix Vol. 2 (Original Motion Picture Soundtrack) - Various Artists',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/vol-2-guardians-of-the-galaxy-awesome-mix-vol-2/1440629897?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/vol-2-guardians-of-the-galaxy-awesome-mix-vol-2/1440629897?uo=2',
      attributes: {
        'im:id': '1440629897',
      },
    },
    'im:artist': {
      label: 'Various Artists',
    },
    category: {
      attributes: {
        'im:id': '16',
        term: 'Soundtrack',
        scheme: 'https://music.apple.com/us/genre/music-soundtrack/id16?uo=2',
        label: 'Soundtrack',
      },
    },
    'im:releaseDate': {
      label: '2017-04-21T00:00:00-07:00',
      attributes: {
        label: 'April 21, 2017',
      },
    },
  },
  {
    'im:name': {
      label: 'Hot Rocks 1964-1971',
    },
    'im:image': [
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/77/fc/b4/77fcb492-2938-a288-dd58-b0649d48c1bc/00018771895725.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/77/fc/b4/77fcb492-2938-a288-dd58-b0649d48c1bc/00018771895725.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/77/fc/b4/77fcb492-2938-a288-dd58-b0649d48c1bc/00018771895725.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '21',
    },
    'im:price': {
      label: '$14.99',
      attributes: {
        amount: '14.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2013 ABKCO Music & Records, Inc.',
    },
    title: {
      label: 'Hot Rocks 1964-1971 - The Rolling Stones',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/hot-rocks-1964-1971/1440764786?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/hot-rocks-1964-1971/1440764786?uo=2',
      attributes: {
        'im:id': '1440764786',
      },
    },
    'im:artist': {
      label: 'The Rolling Stones',
      attributes: {
        href: 'https://music.apple.com/us/artist/the-rolling-stones/1249595?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '21',
        term: 'Rock',
        scheme: 'https://music.apple.com/us/genre/music-rock/id21?uo=2',
        label: 'Rock',
      },
    },
    'im:releaseDate': {
      label: '1972-01-11T00:00:00-07:00',
      attributes: {
        label: 'January 11, 1972',
      },
    },
  },
  {
    'im:name': {
      label: 'Mercury - Act 1',
    },
    'im:image': [
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/01/8a/c2/018ac22e-1756-2dd1-03e7-74a55e92ea2c/21UMGIM58932.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/01/8a/c2/018ac22e-1756-2dd1-03e7-74a55e92ea2c/21UMGIM58932.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/01/8a/c2/018ac22e-1756-2dd1-03e7-74a55e92ea2c/21UMGIM58932.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '13',
    },
    'im:price': {
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2021 KIDinaKORNER/Interscope Records',
    },
    title: {
      label: 'Mercury - Act 1 - Imagine Dragons',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/mercury-act-1/1574210519?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/mercury-act-1/1574210519?uo=2',
      attributes: {
        'im:id': '1574210519',
      },
    },
    'im:artist': {
      label: 'Imagine Dragons',
      attributes: {
        href: 'https://music.apple.com/us/artist/imagine-dragons/358714030?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '20',
        term: 'Alternative',
        scheme: 'https://music.apple.com/us/genre/music-alternative/id20?uo=2',
        label: 'Alternative',
      },
    },
    'im:releaseDate': {
      label: '2021-09-03T00:00:00-07:00',
      attributes: {
        label: 'September 3, 2021',
      },
    },
  },
  {
    'im:name': {
      label: '÷ (Deluxe)',
    },
    'im:image': [
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/15/e6/e8/15e6e8a4-4190-6a8b-86c3-ab4a51b88288/190295851286.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/15/e6/e8/15e6e8a4-4190-6a8b-86c3-ab4a51b88288/190295851286.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/15/e6/e8/15e6e8a4-4190-6a8b-86c3-ab4a51b88288/190295851286.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '16',
    },
    'im:price': {
      label: '$12.99',
      attributes: {
        amount: '12.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        '℗ 2017 Asylum Records UK, a division of Atlantic Records UK, a Warner Music Group company.',
    },
    title: {
      label: '÷ (Deluxe) - Ed Sheeran',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/deluxe/1193701079?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/deluxe/1193701079?uo=2',
      attributes: {
        'im:id': '1193701079',
      },
    },
    'im:artist': {
      label: 'Ed Sheeran',
      attributes: {
        href: 'https://music.apple.com/us/artist/ed-sheeran/183313439?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '14',
        term: 'Pop',
        scheme: 'https://music.apple.com/us/genre/music-pop/id14?uo=2',
        label: 'Pop',
      },
    },
    'im:releaseDate': {
      label: '2017-03-03T00:00:00-07:00',
      attributes: {
        label: 'March 3, 2017',
      },
    },
  },
  {
    'im:name': {
      label: 'Mothership (Remastered)',
    },
    'im:image': [
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music62/v4/7e/17/e3/7e17e33f-2efa-2a36-e916-7f808576cf6b/mzm.fyigqcbs.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music62/v4/7e/17/e3/7e17e33f-2efa-2a36-e916-7f808576cf6b/mzm.fyigqcbs.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music62/v4/7e/17/e3/7e17e33f-2efa-2a36-e916-7f808576cf6b/mzm.fyigqcbs.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '24',
    },
    'im:price': {
      label: '$14.99',
      attributes: {
        amount: '14.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        '℗ 2007 Atlantic Recording Corporation, a Warner Music Group Company.',
    },
    title: {
      label: 'Mothership (Remastered) - Led Zeppelin',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/mothership-remastered/1052497413?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/mothership-remastered/1052497413?uo=2',
      attributes: {
        'im:id': '1052497413',
      },
    },
    'im:artist': {
      label: 'Led Zeppelin',
      attributes: {
        href: 'https://music.apple.com/us/artist/led-zeppelin/994656?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '21',
        term: 'Rock',
        scheme: 'https://music.apple.com/us/genre/music-rock/id21?uo=2',
        label: 'Rock',
      },
    },
    'im:releaseDate': {
      label: '2007-11-09T00:00:00-07:00',
      attributes: {
        label: 'November 9, 2007',
      },
    },
  },
  {
    'im:name': {
      label: 'Diamonds',
    },
    'im:image': [
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/89/fe/2d/89fe2d04-f3d7-e1f9-eb1f-23fb08756e84/17UM1IM23523.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/89/fe/2d/89fe2d04-f3d7-e1f9-eb1f-23fb08756e84/17UM1IM23523.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/89/fe/2d/89fe2d04-f3d7-e1f9-eb1f-23fb08756e84/17UM1IM23523.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '17',
    },
    'im:price': {
      label: '$7.99',
      attributes: {
        amount: '7.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        'A Virgin EMI Records Release; This Compilation ℗ 2017 Universal Music Operations Limited',
    },
    title: {
      label: 'Diamonds - Elton John',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/diamonds/1440903115?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/diamonds/1440903115?uo=2',
      attributes: {
        'im:id': '1440903115',
      },
    },
    'im:artist': {
      label: 'Elton John',
      attributes: {
        href: 'https://music.apple.com/us/artist/elton-john/54657?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '14',
        term: 'Pop',
        scheme: 'https://music.apple.com/us/genre/music-pop/id14?uo=2',
        label: 'Pop',
      },
    },
    'im:releaseDate': {
      label: '2017-11-10T00:00:00-07:00',
      attributes: {
        label: 'November 10, 2017',
      },
    },
  },
  {
    'im:name': {
      label: 'Greatest Hits',
    },
    'im:image': [
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/be/4d/86/be4d86bd-a8ce-f3cb-e58d-1d84f33f615e/15UMGIM69649.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/be/4d/86/be4d86bd-a8ce-f3cb-e58d-1d84f33f615e/15UMGIM69649.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/be/4d/86/be4d86bd-a8ce-f3cb-e58d-1d84f33f615e/15UMGIM69649.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '18',
    },
    'im:price': {
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: 'This Compilation ℗ 2014 Geffen Records',
    },
    title: {
      label: 'Greatest Hits - Tom Petty & The Heartbreakers',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/greatest-hits/1469579555?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/greatest-hits/1469579555?uo=2',
      attributes: {
        'im:id': '1469579555',
      },
    },
    'im:artist': {
      label: 'Tom Petty & The Heartbreakers',
      attributes: {
        href: 'https://music.apple.com/us/artist/tom-petty-the-heartbreakers/161527?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '21',
        term: 'Rock',
        scheme: 'https://music.apple.com/us/genre/music-rock/id21?uo=2',
        label: 'Rock',
      },
    },
    'im:releaseDate': {
      label: '1993-11-16T00:00:00-07:00',
      attributes: {
        label: 'November 16, 1993',
      },
    },
  },
  {
    'im:name': {
      label: 'All Over the World: The Very Best of Electric Light Orchestra',
    },
    'im:image': [
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/c8/13/ea/c813ea8b-0caa-2a8f-0efa-4d2442c20704/dj.mjqtnksw.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/c8/13/ea/c813ea8b-0caa-2a8f-0efa-4d2442c20704/dj.mjqtnksw.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Features125/v4/c8/13/ea/c813ea8b-0caa-2a8f-0efa-4d2442c20704/dj.mjqtnksw.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '20',
    },
    'im:price': {
      label: '$10.99',
      attributes: {
        amount: '10.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        '℗ 1973, 1975, 1981, 1983, 2000, 2001, 2005 Sony Music Entertainment',
    },
    title: {
      label:
        'All Over the World: The Very Best of Electric Light Orchestra - Electric Light Orchestra',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/all-over-the-world-the-very-best-of-electric-light-orchestra/196426681?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/all-over-the-world-the-very-best-of-electric-light-orchestra/196426681?uo=2',
      attributes: {
        'im:id': '196426681',
      },
    },
    'im:artist': {
      label: 'Electric Light Orchestra',
      attributes: {
        href: 'https://music.apple.com/us/artist/electric-light-orchestra/471528?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '21',
        term: 'Rock',
        scheme: 'https://music.apple.com/us/genre/music-rock/id21?uo=2',
        label: 'Rock',
      },
    },
    'im:releaseDate': {
      label: '2005-06-06T00:00:00-07:00',
      attributes: {
        label: 'June 6, 2005',
      },
    },
  },
  {
    'im:name': {
      label: 'Coco (Original Motion Picture Soundtrack)',
    },
    'im:image': [
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/ae/48/dd/ae48dded-15cc-c0ba-13a0-f7fb58281bba/00050087376345.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/ae/48/dd/ae48dded-15cc-c0ba-13a0-f7fb58281bba/00050087376345.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/ae/48/dd/ae48dded-15cc-c0ba-13a0-f7fb58281bba/00050087376345.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '38',
    },
    'im:price': {
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2017 Walt Disney Records/Pixar',
    },
    title: {
      label: 'Coco (Original Motion Picture Soundtrack) - Various Artists',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/coco-original-motion-picture-soundtrack/1440671241?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/coco-original-motion-picture-soundtrack/1440671241?uo=2',
      attributes: {
        'im:id': '1440671241',
      },
    },
    'im:artist': {
      label: 'Various Artists',
    },
    category: {
      attributes: {
        'im:id': '16',
        term: 'Soundtrack',
        scheme: 'https://music.apple.com/us/genre/music-soundtrack/id16?uo=2',
        label: 'Soundtrack',
      },
    },
    'im:releaseDate': {
      label: '2017-11-10T00:00:00-07:00',
      attributes: {
        label: 'November 10, 2017',
      },
    },
  },
  {
    'im:name': {
      label: 'My Savior',
    },
    'im:image': [
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/c2/6b/78/c26b783d-6a56-b182-e367-d9035dda3c78/21UMGIM00560.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/c2/6b/78/c26b783d-6a56-b182-e367-d9035dda3c78/21UMGIM00560.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/c2/6b/78/c26b783d-6a56-b182-e367-d9035dda3c78/21UMGIM00560.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '13',
    },
    'im:price': {
      label: '$6.99',
      attributes: {
        amount: '6.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: 'A Capitol Records Nashville Release; ℗ 2021 UMG Recordings, Inc.',
    },
    title: {
      label: 'My Savior - Carrie Underwood',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/my-savior/1551855429?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/my-savior/1551855429?uo=2',
      attributes: {
        'im:id': '1551855429',
      },
    },
    'im:artist': {
      label: 'Carrie Underwood',
      attributes: {
        href: 'https://music.apple.com/us/artist/carrie-underwood/63399334?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '6',
        term: 'Country',
        scheme: 'https://music.apple.com/us/genre/music-country/id6?uo=2',
        label: 'Country',
      },
    },
    'im:releaseDate': {
      label: '2021-03-26T00:00:00-07:00',
      attributes: {
        label: 'March 26, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'Old Church Basement',
    },
    'im:image': [
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/ac/fb/2e/acfb2e1b-5a2a-6ad2-401f-aeb16df85673/886449130207.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ac/fb/2e/acfb2e1b-5a2a-6ad2-401f-aeb16df85673/886449130207.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ac/fb/2e/acfb2e1b-5a2a-6ad2-401f-aeb16df85673/886449130207.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '25',
    },
    'im:price': {
      label: '$19.99',
      attributes: {
        amount: '19.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2021 Elevation Worship Records',
    },
    title: {
      label: 'Old Church Basement - Elevation Worship & Maverick City Music',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/old-church-basement/1557087895?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/old-church-basement/1557087895?uo=2',
      attributes: {
        'im:id': '1557087895',
      },
    },
    'im:artist': {
      label: 'Elevation Worship & Maverick City Music',
      attributes: {
        href: 'https://music.apple.com/us/artist/elevation-worship/287874918?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '22',
        term: 'Christian & Gospel',
        scheme: 'https://music.apple.com/us/genre/music-christian/id22?uo=2',
        label: 'Christian',
      },
    },
    'im:releaseDate': {
      label: '2021-04-30T00:00:00-07:00',
      attributes: {
        label: 'April 30, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'Dearly Beloved',
    },
    'im:image': [
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/21/ce/7c/21ce7ce9-4788-4521-4d0b-047ce7fb012f/190296641688.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/21/ce/7c/21ce7ce9-4788-4521-4d0b-047ce7fb012f/190296641688.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/21/ce/7c/21ce7ce9-4788-4521-4d0b-047ce7fb012f/190296641688.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '13',
    },
    'im:price': {
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2021 Dogtree Records',
    },
    title: {
      label: 'Dearly Beloved - Daughtry',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/dearly-beloved/1576753200?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/dearly-beloved/1576753200?uo=2',
      attributes: {
        'im:id': '1576753200',
      },
    },
    'im:artist': {
      label: 'Daughtry',
      attributes: {
        href: 'https://music.apple.com/us/artist/daughtry/748174?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '21',
        term: 'Rock',
        scheme: 'https://music.apple.com/us/genre/music-rock/id21?uo=2',
        label: 'Rock',
      },
    },
    'im:releaseDate': {
      label: '2021-09-17T00:00:00-07:00',
      attributes: {
        label: 'September 17, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'Something for Thee Hotties',
    },
    'im:image': [
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/0d/90/1e/0d901e59-b594-0f11-897d-69d7bc149a1b/810043688246.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/0d/90/1e/0d901e59-b594-0f11-897d-69d7bc149a1b/810043688246.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/0d/90/1e/0d901e59-b594-0f11-897d-69d7bc149a1b/810043688246.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '21',
    },
    'im:price': {
      label: '$7.99',
      attributes: {
        amount: '7.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2021 1501 Certified Ent. LLC / 300 Entertainment',
    },
    title: {
      label: 'Something for Thee Hotties - Megan Thee Stallion',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/something-for-thee-hotties/1593469423?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/something-for-thee-hotties/1593469423?uo=2',
      attributes: {
        'im:id': '1593469423',
      },
    },
    'im:artist': {
      label: 'Megan Thee Stallion',
      attributes: {
        href: 'https://music.apple.com/us/artist/megan-thee-stallion/1258989914?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '18',
        term: 'Hip Hop/Rap',
        scheme: 'https://music.apple.com/us/genre/music-hip-hop-rap/id18?uo=2',
        label: 'Hip-Hop/Rap',
      },
    },
    'im:releaseDate': {
      label: '2021-10-28T00:00:00-07:00',
      attributes: {
        label: 'October 28, 2021',
      },
    },
  },
  {
    'im:name': {
      label: '1 (2015 Version)',
    },
    'im:image': [
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/5e/2e/ac/5e2eacaf-1aa0-02bb-eb0d-611808988279/00602547657725.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/5e/2e/ac/5e2eacaf-1aa0-02bb-eb0d-611808988279/00602547657725.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/5e/2e/ac/5e2eacaf-1aa0-02bb-eb0d-611808988279/00602547657725.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '27',
    },
    'im:price': {
      label: '$12.99',
      attributes: {
        amount: '12.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        'This Compilation ℗ 2015 Calderstone Productions Limited (a division of Universal Music Group) / Apple Corps Ltd.',
    },
    title: {
      label: '1 (2015 Version) - The Beatles',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/1-2015-version/1440833098?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/1-2015-version/1440833098?uo=2',
      attributes: {
        'im:id': '1440833098',
      },
    },
    'im:artist': {
      label: 'The Beatles',
      attributes: {
        href: 'https://music.apple.com/us/artist/the-beatles/136975?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '21',
        term: 'Rock',
        scheme: 'https://music.apple.com/us/genre/music-rock/id21?uo=2',
        label: 'Rock',
      },
    },
    'im:releaseDate': {
      label: '2000-11-13T00:00:00-07:00',
      attributes: {
        label: 'November 13, 2000',
      },
    },
  },
  {
    'im:name': {
      label: "That's Christmas To Me",
    },
    'im:image': [
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music1/v4/f7/88/0f/f7880fb0-8087-de0f-c9b3-821a5d3733d7/886444686716.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music1/v4/f7/88/0f/f7880fb0-8087-de0f-c9b3-821a5d3733d7/886444686716.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music1/v4/f7/88/0f/f7880fb0-8087-de0f-c9b3-821a5d3733d7/886444686716.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '11',
    },
    'im:price': {
      label: '$7.99',
      attributes: {
        amount: '7.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2014 RCA Records, a division of Sony Music Entertainment',
    },
    title: {
      label: "That's Christmas To Me - Pentatonix",
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/thats-christmas-to-me/918377263?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/thats-christmas-to-me/918377263?uo=2',
      attributes: {
        'im:id': '918377263',
      },
    },
    'im:artist': {
      label: 'Pentatonix',
      attributes: {
        href: 'https://music.apple.com/us/artist/pentatonix/466047278?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '8',
        term: 'Holiday',
        scheme: 'https://music.apple.com/us/genre/music-holiday/id8?uo=2',
        label: 'Holiday',
      },
    },
    'im:releaseDate': {
      label: '2014-10-21T00:00:00-07:00',
      attributes: {
        label: 'October 21, 2014',
      },
    },
  },
  {
    'im:name': {
      label:
        'A Charlie Brown Christmas (Original 1965 TV Soundtrack) [Expanded Edition]',
    },
    'im:image': [
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/21/a2/25/21a22546-c6c1-1682-d115-c15513d93a1d/00888072340299.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/21/a2/25/21a22546-c6c1-1682-d115-c15513d93a1d/00888072340299.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/21/a2/25/21a22546-c6c1-1682-d115-c15513d93a1d/00888072340299.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '14',
    },
    'im:price': {
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2012 Concord Music Group, Inc.',
    },
    title: {
      label:
        'A Charlie Brown Christmas (Original 1965 TV Soundtrack) [Expanded Edition] - Vince Guaraldi Trio',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/a-charlie-brown-christmas-original-1965-tv/1440948781?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/a-charlie-brown-christmas-original-1965-tv/1440948781?uo=2',
      attributes: {
        'im:id': '1440948781',
      },
    },
    'im:artist': {
      label: 'Vince Guaraldi Trio',
      attributes: {
        href: 'https://music.apple.com/us/artist/vince-guaraldi-trio/2084011?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '1080',
        term: 'Christmas',
        scheme:
          'https://music.apple.com/us/genre/music-holiday-christmas/id1080?uo=2',
        label: 'Christmas',
      },
    },
    'im:releaseDate': {
      label: '1965-12-09T00:00:00-07:00',
      attributes: {
        label: 'December 9, 1965',
      },
    },
  },
  {
    'im:name': {
      label: 'Best of Josh Turner',
    },
    'im:image': [
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/ae/36/fb/ae36fba7-834c-5605-9b02-6fb7093b4b5c/11UMGIM03938.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ae/36/fb/ae36fba7-834c-5605-9b02-6fb7093b4b5c/11UMGIM03938.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/ae/36/fb/ae36fba7-834c-5605-9b02-6fb7093b4b5c/11UMGIM03938.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '11',
    },
    'im:price': {
      label: '$4.99',
      attributes: {
        amount: '4.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: 'This Compilation ℗ 2011 MCA Nashville',
    },
    title: {
      label: 'Best of Josh Turner - Josh Turner',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/best-of-josh-turner/1440739084?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/best-of-josh-turner/1440739084?uo=2',
      attributes: {
        'im:id': '1440739084',
      },
    },
    'im:artist': {
      label: 'Josh Turner',
      attributes: {
        href: 'https://music.apple.com/us/artist/josh-turner/1883437?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '6',
        term: 'Country',
        scheme: 'https://music.apple.com/us/genre/music-country/id6?uo=2',
        label: 'Country',
      },
    },
    'im:releaseDate': {
      label: '2011-01-01T00:00:00-07:00',
      attributes: {
        label: 'January 1, 2011',
      },
    },
  },
  {
    'im:name': {
      label: 'Donda',
    },
    'im:image': [
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/62/13/7b/62137b3f-7722-59f5-2ee1-b5aff9426869/21UMGIM64738.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/62/13/7b/62137b3f-7722-59f5-2ee1-b5aff9426869/21UMGIM64738.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/62/13/7b/62137b3f-7722-59f5-2ee1-b5aff9426869/21UMGIM64738.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '27',
    },
    'im:price': {
      label: '$14.99',
      attributes: {
        amount: '14.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        '℗ 2021 Getting Out Our Dreams II, LLC Distributed By Def Jam Recordings,  A Division of UMG Recordings, Inc.',
    },
    title: {
      label: 'Donda - Kanye West',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/donda/1587795158?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/donda/1587795158?uo=2',
      attributes: {
        'im:id': '1587795158',
      },
    },
    'im:artist': {
      label: 'Kanye West',
      attributes: {
        href: 'https://music.apple.com/us/artist/kanye-west/2715720?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '18',
        term: 'Hip Hop/Rap',
        scheme: 'https://music.apple.com/us/genre/music-hip-hop-rap/id18?uo=2',
        label: 'Hip-Hop/Rap',
      },
    },
    'im:releaseDate': {
      label: '2021-08-29T00:00:00-07:00',
      attributes: {
        label: 'August 29, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'The Phantom Tomorrow',
    },
    'im:image': [
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/10/da/67/10da67d5-f633-924f-7b99-c9d8b58c4c32/810016763864.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/10/da/67/10da67d5-f633-924f-7b99-c9d8b58c4c32/810016763864.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/10/da/67/10da67d5-f633-924f-7b99-c9d8b58c4c32/810016763864.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '12',
    },
    'im:price': {
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2021 Sumerian Records',
    },
    title: {
      label: 'The Phantom Tomorrow - Black Veil Brides',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/the-phantom-tomorrow/1559543329?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/the-phantom-tomorrow/1559543329?uo=2',
      attributes: {
        'im:id': '1559543329',
      },
    },
    'im:artist': {
      label: 'Black Veil Brides',
      attributes: {
        href: 'https://music.apple.com/us/artist/black-veil-brides/276789923?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '1152',
        term: 'Hard Rock',
        scheme:
          'https://music.apple.com/us/genre/music-rock-hard-rock/id1152?uo=2',
        label: 'Hard Rock',
      },
    },
    'im:releaseDate': {
      label: '2021-10-29T00:00:00-07:00',
      attributes: {
        label: 'October 29, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'Postcards from Ireland',
    },
    'im:image': [
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/c3/10/ca/c310ca28-1b43-8a7a-0f20-2f394bd102f2/21UMGIM85290.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/10/ca/c310ca28-1b43-8a7a-0f20-2f394bd102f2/21UMGIM85290.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/c3/10/ca/c310ca28-1b43-8a7a-0f20-2f394bd102f2/21UMGIM85290.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '13',
    },
    'im:price': {
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        'Manhattan Records; ℗ 2021 Celtic Woman Limited, under exclusive license to UMG Recordings, Inc.',
    },
    title: {
      label: 'Postcards from Ireland - Celtic Woman',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/postcards-from-ireland/1583651986?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/postcards-from-ireland/1583651986?uo=2',
      attributes: {
        'im:id': '1583651986',
      },
    },
    'im:artist': {
      label: 'Celtic Woman',
      attributes: {
        href: 'https://music.apple.com/us/artist/celtic-woman/47384572?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '19',
        term: 'World',
        scheme: 'https://music.apple.com/us/genre/music-worldwide/id19?uo=2',
        label: 'Worldwide',
      },
    },
    'im:releaseDate': {
      label: '2021-10-29T00:00:00-07:00',
      attributes: {
        label: 'October 29, 2021',
      },
    },
  },
  {
    'im:name': {
      label: '29: Written In Stone (Video Deluxe)',
    },
    'im:image': [
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/17/ac/34/17ac349e-2d3d-2893-1d51-748f6f0bc486/21BMR0002708.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/17/ac/34/17ac349e-2d3d-2893-1d51-748f6f0bc486/21BMR0002708.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/17/ac/34/17ac349e-2d3d-2893-1d51-748f6f0bc486/21BMR0002708.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '18',
    },
    'im:price': {
      label: '$6.99',
      attributes: {
        amount: '6.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2021 Big Machine Label Group, LLC',
    },
    title: {
      label: '29: Written In Stone (Video Deluxe) - Carly Pearce',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/29-written-in-stone-video-deluxe/1578523673?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/29-written-in-stone-video-deluxe/1578523673?uo=2',
      attributes: {
        'im:id': '1578523673',
      },
    },
    'im:artist': {
      label: 'Carly Pearce',
      attributes: {
        href: 'https://music.apple.com/us/artist/carly-pearce/206684981?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '6',
        term: 'Country',
        scheme: 'https://music.apple.com/us/genre/music-country/id6?uo=2',
        label: 'Country',
      },
    },
    'im:releaseDate': {
      label: '2021-09-17T00:00:00-07:00',
      attributes: {
        label: 'September 17, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'COUNTDOWN - The 1st Album',
    },
    'im:image': [
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/d2/33/3d/d2333d23-114d-0084-dbaa-07e3dd1221cf/Digital_Cover_SUPER_JUNIOR-D_E_COUNTDOWN.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/d2/33/3d/d2333d23-114d-0084-dbaa-07e3dd1221cf/Digital_Cover_SUPER_JUNIOR-D_E_COUNTDOWN.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/d2/33/3d/d2333d23-114d-0084-dbaa-07e3dd1221cf/Digital_Cover_SUPER_JUNIOR-D_E_COUNTDOWN.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '10',
    },
    'im:price': {
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2021 SM Entertainment, Label SJ',
    },
    title: {
      label: 'COUNTDOWN - The 1st Album - SUPER JUNIOR-D&E',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/countdown-the-1st-album/1592218511?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/countdown-the-1st-album/1592218511?uo=2',
      attributes: {
        'im:id': '1592218511',
      },
    },
    'im:artist': {
      label: 'SUPER JUNIOR-D&E',
      attributes: {
        href: 'https://music.apple.com/us/artist/super-junior-d-e/972910437?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '51',
        term: 'K-Pop',
        scheme: 'https://music.apple.com/us/genre/music-pop-k-pop/id51?uo=2',
        label: 'K-Pop',
      },
    },
    'im:releaseDate': {
      label: '2021-11-02T00:00:00-07:00',
      attributes: {
        label: 'November 2, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'WE ARE (The Deluxe Edition)',
    },
    'im:image': [
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/95/8e/8c/958e8cbb-7975-8f5b-1377-1610a4fc00be/21UMGIM81539.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/95/8e/8c/958e8cbb-7975-8f5b-1377-1610a4fc00be/21UMGIM81539.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/95/8e/8c/958e8cbb-7975-8f5b-1377-1610a4fc00be/21UMGIM81539.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '19',
    },
    'im:price': {
      label: '$14.99',
      attributes: {
        amount: '14.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        'A Verve Records release; ℗ 2021 Naht Jona, LLC, under exclusive license to Verve Label Group, a division of UMG Recordings, Inc.',
    },
    title: {
      label: 'WE ARE (The Deluxe Edition) - Jon Batiste',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/we-are-the-deluxe-edition/1582653750?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/we-are-the-deluxe-edition/1582653750?uo=2',
      attributes: {
        'im:id': '1582653750',
      },
    },
    'im:artist': {
      label: 'Jon Batiste',
      attributes: {
        href: 'https://music.apple.com/us/artist/jon-batiste/211400086?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '15',
        term: 'R&B/Soul',
        scheme: 'https://music.apple.com/us/genre/music-r-b-soul/id15?uo=2',
        label: 'R&B/Soul',
      },
    },
    'im:releaseDate': {
      label: '2021-10-15T00:00:00-07:00',
      attributes: {
        label: 'October 15, 2021',
      },
    },
  },
  {
    'im:name': {
      label: 'Boston',
    },
    'im:image': [
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/1c/3f/58/1c3f583c-1fe6-cb8a-fa68-2176e283ed3e/886444824972.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1c/3f/58/1c3f583c-1fe6-cb8a-fa68-2176e283ed3e/886444824972.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/1c/3f/58/1c3f583c-1fe6-cb8a-fa68-2176e283ed3e/886444824972.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '8',
    },
    'im:price': {
      label: '$8.99',
      attributes: {
        amount: '8.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        '℗ 1976, 2006 Epic Records, a division of Sony Music Entertainment',
    },
    title: {
      label: 'Boston - Boston',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/boston/913902091?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/boston/913902091?uo=2',
      attributes: {
        'im:id': '913902091',
      },
    },
    'im:artist': {
      label: 'Boston',
      attributes: {
        href: 'https://music.apple.com/us/artist/boston/60960?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '21',
        term: 'Rock',
        scheme: 'https://music.apple.com/us/genre/music-rock/id21?uo=2',
        label: 'Rock',
      },
    },
    'im:releaseDate': {
      label: '1976-08-25T00:00:00-07:00',
      attributes: {
        label: 'August 25, 1976',
      },
    },
  },
  {
    'im:name': {
      label: 'Merry Christmas',
    },
    'im:image': [
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/c6/b7/27/c6b727f7-3a32-6b43-cee2-05bb71daf1cf/dj.itfmdeif.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/c6/b7/27/c6b727f7-3a32-6b43-cee2-05bb71daf1cf/dj.itfmdeif.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/c6/b7/27/c6b727f7-3a32-6b43-cee2-05bb71daf1cf/dj.itfmdeif.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '10',
    },
    'im:price': {
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 1994 Sony Music Entertainment',
    },
    title: {
      label: 'Merry Christmas - Mariah Carey',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/merry-christmas/585972750?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/merry-christmas/585972750?uo=2',
      attributes: {
        'im:id': '585972750',
      },
    },
    'im:artist': {
      label: 'Mariah Carey',
      attributes: {
        href: 'https://music.apple.com/us/artist/mariah-carey/91853?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '8',
        term: 'Holiday',
        scheme: 'https://music.apple.com/us/genre/music-holiday/id8?uo=2',
        label: 'Holiday',
      },
    },
    'im:releaseDate': {
      label: '1994-10-28T00:00:00-07:00',
      attributes: {
        label: 'October 28, 1994',
      },
    },
  },
  {
    'im:name': {
      label: 'Look Up Child',
    },
    'im:image': [
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/aa/2b/b9/aa2bb92a-4ace-da16-5118-21b78935e185/829619167054.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/aa/2b/b9/aa2bb92a-4ace-da16-5118-21b78935e185/829619167054.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/aa/2b/b9/aa2bb92a-4ace-da16-5118-21b78935e185/829619167054.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '13',
    },
    'im:price': {
      label: '$7.99',
      attributes: {
        amount: '7.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        '℗ 2018 Centricity Music, exclusively marketed and distributed by Warner Records Inc.',
    },
    title: {
      label: 'Look Up Child - Lauren Daigle',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/look-up-child/1447184494?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/look-up-child/1447184494?uo=2',
      attributes: {
        'im:id': '1447184494',
      },
    },
    'im:artist': {
      label: 'Lauren Daigle',
      attributes: {
        href: 'https://music.apple.com/us/artist/lauren-daigle/722177758?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '22',
        term: 'Christian & Gospel',
        scheme: 'https://music.apple.com/us/genre/music-christian/id22?uo=2',
        label: 'Christian',
      },
    },
    'im:releaseDate': {
      label: '2018-09-07T00:00:00-07:00',
      attributes: {
        label: 'September 7, 2018',
      },
    },
  },
  {
    'im:name': {
      label: 'Cole Swindell',
    },
    'im:image': [
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/11/5b/87/115b87cd-475b-ea93-f03f-cac139ff69ba/093624939290.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/11/5b/87/115b87cd-475b-ea93-f03f-cac139ff69ba/093624939290.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/11/5b/87/115b87cd-475b-ea93-f03f-cac139ff69ba/093624939290.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '12',
    },
    'im:price': {
      label: '$4.99',
      attributes: {
        amount: '4.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        '℗ 2014 Warner Music Nashville LLC and WEA International Inc. for the world outside the U.S.',
    },
    title: {
      label: 'Cole Swindell - Cole Swindell',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/cole-swindell/791588126?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/cole-swindell/791588126?uo=2',
      attributes: {
        'im:id': '791588126',
      },
    },
    'im:artist': {
      label: 'Cole Swindell',
      attributes: {
        href: 'https://music.apple.com/us/artist/cole-swindell/354625084?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '6',
        term: 'Country',
        scheme: 'https://music.apple.com/us/genre/music-country/id6?uo=2',
        label: 'Country',
      },
    },
    'im:releaseDate': {
      label: '2014-02-18T00:00:00-07:00',
      attributes: {
        label: 'February 18, 2014',
      },
    },
  },
  {
    'im:name': {
      label: 'Metallica (Remastered)',
    },
    'im:image': [
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/9e/80/1b/9e801b06-67fa-0990-2d15-85480ad3cd46/850007452025.png/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/9e/80/1b/9e801b06-67fa-0990-2d15-85480ad3cd46/850007452025.png/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/9e/80/1b/9e801b06-67fa-0990-2d15-85480ad3cd46/850007452025.png/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '12',
    },
    'im:price': {
      label: '$9.99',
      attributes: {
        amount: '9.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: '℗ 2021 Blackened Recordings Inc.',
    },
    title: {
      label: 'Metallica (Remastered) - Metallica',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/metallica-remastered/1572046434?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/metallica-remastered/1572046434?uo=2',
      attributes: {
        'im:id': '1572046434',
      },
    },
    'im:artist': {
      label: 'Metallica',
      attributes: {
        href: 'https://music.apple.com/us/artist/metallica/3996865?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '1153',
        term: 'Heavy Metal',
        scheme: 'https://music.apple.com/us/genre/music-rock-metal/id1153?uo=2',
        label: 'Metal',
      },
    },
    'im:releaseDate': {
      label: '1991-08-12T00:00:00-07:00',
      attributes: {
        label: 'August 12, 1991',
      },
    },
  },
  {
    'im:name': {
      label:
        'The Nightmare Before Christmas (Original Motion Picture Soundtrack) [Special Edition]',
    },
    'im:image': [
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/3a/cd/7f/3acd7f48-b462-12b5-bb40-d7a9389ef44a/00050087100827.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/3a/cd/7f/3acd7f48-b462-12b5-bb40-d7a9389ef44a/00050087100827.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/3a/cd/7f/3acd7f48-b462-12b5-bb40-d7a9389ef44a/00050087100827.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '29',
    },
    'im:price': {
      label: '$11.99',
      attributes: {
        amount: '11.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label: 'This Compilation ℗ 2006 Walt Disney Records',
    },
    title: {
      label:
        "The Nightmare Before Christmas (Original Motion Picture Soundtrack) [Special Edition] - Danny Elfman, Catherine O'Hara & Ken Page",
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/the-nightmare-before-christmas-original-motion/1440662430?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/the-nightmare-before-christmas-original-motion/1440662430?uo=2',
      attributes: {
        'im:id': '1440662430',
      },
    },
    'im:artist': {
      label: "Danny Elfman, Catherine O'Hara & Ken Page",
      attributes: {
        href: 'https://music.apple.com/us/artist/danny-elfman/486493?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '1169',
        term: 'Soundtrack',
        scheme:
          'https://music.apple.com/us/genre/music-soundtrack-soundtrack/id1169?uo=2',
        label: 'Soundtrack',
      },
    },
    'im:releaseDate': {
      label: '1993-10-12T00:00:00-07:00',
      attributes: {
        label: 'October 12, 1993',
      },
    },
  },
  {
    'im:name': {
      label:
        '20th Century Masters: The Millennium Collection: Best Of Lynyrd Syknyrd',
    },
    'im:image': [
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/57/7c/6b/577c6b61-992d-736b-c4df-1821394ddd6f/06UMGIM04103.rgb.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/57/7c/6b/577c6b61-992d-736b-c4df-1821394ddd6f/06UMGIM04103.rgb.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/57/7c/6b/577c6b61-992d-736b-c4df-1821394ddd6f/06UMGIM04103.rgb.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '10',
    },
    'im:price': {
      label: '$6.99',
      attributes: {
        amount: '6.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        'A Geffen Records Release; This Compilation ℗ 1999 UMG Recordings Inc.',
    },
    title: {
      label:
        '20th Century Masters: The Millennium Collection: Best Of Lynyrd Syknyrd - Lynyrd Skynyrd',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/20th-century-masters-the-millennium-collection-best/1423285451?uo=2',
      },
    },
    id: {
      label:
        'https://music.apple.com/us/album/20th-century-masters-the-millennium-collection-best/1423285451?uo=2',
      attributes: {
        'im:id': '1423285451',
      },
    },
    'im:artist': {
      label: 'Lynyrd Skynyrd',
      attributes: {
        href: 'https://music.apple.com/us/artist/lynyrd-skynyrd/97262?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '21',
        term: 'Rock',
        scheme: 'https://music.apple.com/us/genre/music-rock/id21?uo=2',
        label: 'Rock',
      },
    },
    'im:releaseDate': {
      label: '1999-03-09T00:00:00-07:00',
      attributes: {
        label: 'March 9, 1999',
      },
    },
  },
  {
    'im:name': {
      label: 'Dan + Shay',
    },
    'im:image': [
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/63/43/35/634335a8-2026-9587-bd78-8e29e3f80416/093624906407.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/63/43/35/634335a8-2026-9587-bd78-8e29e3f80416/093624906407.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/63/43/35/634335a8-2026-9587-bd78-8e29e3f80416/093624906407.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    'im:itemCount': {
      label: '11',
    },
    'im:price': {
      label: '$4.99',
      attributes: {
        amount: '4.99',
        currency: 'USD',
      },
    },
    'im:contentType': {
      'im:contentType': {
        attributes: {
          term: 'Album',
          label: 'Album',
        },
      },
      attributes: {
        term: 'Music',
        label: 'Music',
      },
    },
    rights: {
      label:
        '℗ 2018 Warner Music Nashville LLC for the U.S. and WEA International Inc. for the world outside the U.S.',
    },
    title: {
      label: 'Dan + Shay - Dan + Shay',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://music.apple.com/us/album/dan-shay/1383989073?uo=2',
      },
    },
    id: {
      label: 'https://music.apple.com/us/album/dan-shay/1383989073?uo=2',
      attributes: {
        'im:id': '1383989073',
      },
    },
    'im:artist': {
      label: 'Dan + Shay',
      attributes: {
        href: 'https://music.apple.com/us/artist/dan-shay/690319057?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '6',
        term: 'Country',
        scheme: 'https://music.apple.com/us/genre/music-country/id6?uo=2',
        label: 'Country',
      },
    },
    'im:releaseDate': {
      label: '2018-06-22T00:00:00-07:00',
      attributes: {
        label: 'June 22, 2018',
      },
    },
  },
];

class Album {
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

class AlbumCollection {
  constructor(rawData) {
    this.collection = rawData.map(data => this.parseAlbum(data));
  }

  parseAlbum(data) {
    const albumTemp = {};
    albumTemp.id = data.id.attributes['im:id'];
    albumTemp.title = data.title.label;
    albumTemp.albumName = data['im:name'].label;
    albumTemp.artist = {
      name: data['im:artist'].label,
      link: data['im:artist'].attributes?.href || '',
    };
    albumTemp.pricing = {
      label: data['im:price'].label,
      amount: parseFloat(data['im:price'].attributes.amount),
      currency: data['im:price'].attributes.currency,
    };
    albumTemp.images = data['im:image'].map(img => ({
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
    return this.collection.filter(album => {
      return album.id === id;
    });
  }

  findByArtist(artist) {
    //returns an array
    const regex = new RegExp(artist, 'i');
    return this.collection.filter(
      album => album.artist.name.match(regex) && album,
    );
  }

  findByGenre(genre) {
    //returns an array
    const regex = new RegExp(genre, 'i');
    return this.collection.filter(
      album => album.category.term.match(regex) && album,
    );
  }
}

const tryMe = new AlbumCollection(raw);

console.log(tryMe.findByArtist('she'));
