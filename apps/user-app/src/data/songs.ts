import aylo from "@/assets/images/aylo.jpg";
import bloody from "@/assets/images/bloody.jpg";
import saba from "@/assets/images/saba.jpg";
import popi from "@/assets/images/popi.jpg";
import moliy from "@/assets/images/moliy.jpg";
import ella from "@/assets/images/ella.jpg";
import ward from "@/assets/images/ward.jpg";
import trophy from "@/assets/icons/trophy.png";
import star from "@/assets/icons/star.png";
import mic from "@/assets/icons/mic.png";
import disco1 from "@/assets/images/disco1.png";
import disco2 from "@/assets/images/disco2.png";
import disco3 from "@/assets/images/disco3.png";
import disco4 from "@/assets/images/disco4.png";
import disco5 from "@/assets/images/disco5.png";
import disco6 from "@/assets/images/disco6.png";
import disco7 from "@/assets/images/disco7.png";

import { StaticImageData } from "next/image";

export type Song = {
  id: number;
  title: string;
  artistId: number; // Links to Artist
  albumId: number; // Links to Album
  albumArt: string;
  url: string;
  apple: string;
  spotify: string;
  youtube: string;
  isTopSong: boolean;
};

export type Artist = {
  id: number;
  name: string;
  img: string | StaticImageData;
  title: string; // e.g., a tagline or key description
  desc: string; // Short bio or description
};

export type Album = {
  id: number;
  title: string;
  artistId: number; // Links to Artist
  albumArt: string;
  releaseType: "Single" | "EP" | "Album"; // Defines the type of release
  songs: number[]; // Array of Song IDs
  releaseDate: string; // Date of release
};

export type TopPick = {
  id: number;
  title: string;
  artist: string;
  image: string;
  icon: string | StaticImageData;
  eut: number;
};

export type Disco = {
  id: number;
  title: string;
  artist: string;
  image: string | StaticImageData;
  icon: string | StaticImageData;
  eut: number;
};

export const songs: Song[] = [
  {
    id: 1,
    title: "Starfield",
    artistId: 5,
    albumId: 5,
    isTopSong: true,
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b27371d2fc7860fb53a382a7bb88",
    url: "https://res.cloudinary.com/din8cizsb/video/upload/v1731357200/Euterpe/jo8rm5hqmlc4erp1vokv.mp3",
    apple: "https://music.apple.com/ng/artist/bunmi/1690945658",
    spotify: "https://open.spotify.com/artist/1qktTPa4kJCpNl2hIr8mTP",
    youtube: "https://www.youtube.com/channel/UCC6K0qHba5YN15-0OQAR_5Q",
  },
  {
    id: 2,
    title: "Abeg",
    artistId: 7,
    albumId: 7,
    isTopSong: true,
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b273514e92e8ef2361ad12f08a0e",
    url: "https://res.cloudinary.com/din8cizsb/video/upload/v1731360743/Euterpe/gbtq0dqjlwul4vpmjejg.mp3",
    apple: "https://music.apple.com/ng/artist/solis4evr/1739436116",
    spotify: "https://open.spotify.com/artist/3ZbW5RPoVdTdsR7JmRtoms",
    youtube: "https://www.youtube.com/channel/UC9ok1F-7f3Wl1TaSf3G2AUg",
  },
  {
    id: 3,
    title: "love is like Lagos traffic",
    artistId: 2,
    albumId: 2,
    isTopSong: true,
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b273aa621853807a728c8e23fd20",
    url: "https://res.cloudinary.com/din8cizsb/video/upload/v1731362621/Euterpe/o0qjyd4e6drddkmertan.mp3",
    apple: "https://music.apple.com/ng/artist/tega-ethan/1529809681",
    spotify: "https://open.spotify.com/artist/2B55Oxm3cmN2SsD17Oikz1",
    youtube: "https://www.youtube.com/channel/UCdQOX6l9kjF1q25EXi0kw8g",
  },
  {
    id: 4,
    title: "New to Me",
    artistId: 6,
    albumId: 6,
    isTopSong: true,
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b2732f32bbc80b869a2e58556be3",
    url: "https://res.cloudinary.com/din8cizsb/video/upload/v1731363451/Euterpe/lmrp052dntjle7x6oilp.mp3",
    apple: "https://music.apple.com/ng/artist/toriah/1742664885",
    spotify: "https://open.spotify.com/artist/1BtsNTvXfcdez7G645tESW",
    youtube: "https://www.youtube.com/channel/UCmnUB750WMn4i1PYfDRX-yA",
  },
  {
    id: 5,
    title: "Sugarcane",
    artistId: 1,
    albumId: 1,
    isTopSong: true,
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b273676e212f1dd862ca14d40a0e",
    url: "https://res.cloudinary.com/din8cizsb/video/upload/v1731364760/Euterpe/jco75vmhncm263s4m3qr.mp3",
    apple: "https://music.apple.com/ng/artist/xpacegirl/1637759963",
    spotify: "https://open.spotify.com/artist/1Gvq4XMDBLFHSZd1yu1UnN",
    youtube: "https://www.youtube.com/channel/UCUapV_99kcS04jAG1qlXKmA",
  },
  {
    id: 6,
    title: "Paradise",
    artistId: 3,
    albumId: 3,
    isTopSong: true,
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b2738fb7d77d029169c9e47ba644",
    url: "https://res.cloudinary.com/din8cizsb/video/upload/v1731365437/Euterpe/u7ef0hyykknfxkrmfcyg.mp3",
    apple: "https://music.apple.com/ng/artist/superjazzclub/1467672052",
    spotify: "https://open.spotify.com/artist/5CINjDZoikcuTmtw3wgPfp",
    youtube: "https://www.youtube.com/channel/UCwVE8-7xH5EdymHi7UxVAIA",
  },
  {
    id: 7,
    title: "I Think We Danced (But I Can't Be Sure)",
    artistId: 4,
    albumId: 4,
    isTopSong: true,
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b273961da7b10704a2b6efe45593",
    url: "https://res.cloudinary.com/din8cizsb/video/upload/v1731366787/Euterpe/elqnfrruyba2maqxzgke.mp3",
    apple: "https://music.apple.com/ng/artist/rand/1503095243",
    spotify: "https://open.spotify.com/artist/4MfmEl26HVlsJDUDLsjTXp",
    youtube: "https://www.youtube.com/channel/UC5T1_1lzm1M-uWbnJlyUJkg",
  },
];

export const topPicks: TopPick[] = [
  {
    id: 1,
    title: "Endorphins",
    artist: "tobi lou",
    image: "https://i.scdn.co/image/ab67616d0000b273676e212f1dd862ca14d40a0e",
    icon: trophy,
    eut: 1.3,
  },
  {
    id: 2,
    title: "Hesitate",
    artist: "Golden Vessel",
    image: "https://i.scdn.co/image/ab67616d0000b273aa621853807a728c8e23fd20",
    icon: trophy,
    eut: 1.3,
  },
  {
    id: 3,
    title: "Do You Really Need Me",
    artist: "Charlie",
    image: "https://i.scdn.co/image/ab67616d0000b2738fb7d77d029169c9e47ba644",
    icon: trophy,
    eut: 1.3,
  },
  {
    id: 4,
    title: "Small",
    artist: "Siv Jakobsen",
    image: "https://i.scdn.co/image/ab67616d0000b273961da7b10704a2b6efe45593",
    icon: trophy,
    eut: 1.3,
  },
  {
    id: 5,
    title: "In Love with a Ghost",
    artist: "Bash the Piper",
    image: "https://i.scdn.co/image/ab67616d0000b27371d2fc7860fb53a382a7bb88",
    icon: trophy,
    eut: 1.3,
  },
  {
    id: 6,
    title: "Eleyele",
    artist: "taves",
    image: "https://i.scdn.co/image/ab67616d0000b2732f32bbc80b869a2e58556be3",
    icon: trophy,
    eut: 1.3,
  },
  {
    id: 7,
    title: "Clicquot Shower",
    artist: "Caleborate",
    image: "https://i.scdn.co/image/ab67616d0000b273514e92e8ef2361ad12f08a0e",
    icon: trophy,
    eut: 1.3,
  },
];

export const Discography: Disco[] = [
  {
    id: 1,
    title: "Endorphins",
    artist: "tobi lou",
    image: disco1,
    icon: trophy,
    eut: 1.3,
  },
  {
    id: 2,
    title: "Hesitate",
    artist: "Golden Vessel",
    image: disco2,
    icon: trophy,
    eut: 1.3,
  },
  {
    id: 3,
    title: "Do You Really Need Me",
    artist: "Charlie",
    image: disco3,
    icon: trophy,
    eut: 1.3,
  },
  {
    id: 4,
    title: "Small",
    artist: "Siv Jakobsen",
    image: disco4,
    icon: trophy,
    eut: 1.3,
  },
  {
    id: 5,
    title: "In Love with a Ghost",
    artist: "Bash the Piper",
    image: disco5,
    icon: trophy,
    eut: 1.3,
  },
  {
    id: 6,
    title: "Eleyele",
    artist: "taves",
    image: disco6,
    icon: trophy,
    eut: 1.3,
  },
  {
    id: 7,
    title: "Clicquot Shower",
    artist: "Caleborate",
    image: disco7,
    icon: trophy,
    eut: 1.3,
  },
  {
    id: 3,
    title: "Do You Really Need Me",
    artist: "Charlie",
    image: disco3,
    icon: trophy,
    eut: 1.3,
  },
  {
    id: 5,
    title: "In Love with a Ghost",
    artist: "Bash the Piper",
    image: disco5,
    icon: trophy,
    eut: 1.3,
  },
];

export const genres = [
  {
    id: 1,
    emoji: "🎤",
    label: "Pop",
    icon: star,
  },
  {
    id: 2,
    emoji: "🎧",
    label: "Hip-Hop/Rap",
    icon: mic,
  },
  {
    id: 3,
    emoji: "🎹",
    label: "Electronic/EDM",
    icon: mic,
  },
  {
    id: 4,
    emoji: "🎸",
    label: "Rock",
    icon: star,
  },
  {
    id: 5,
    emoji: "🎷",
    label: "Jazz",
    icon: mic,
  },
  {
    id: 6,
    emoji: "🎻",
    label: "Classical",
    icon: mic,
  },
  {
    id: 7,
    emoji: "🤠",
    label: "Country",
    icon: mic,
  },
  {
    id: 8,
    emoji: "🌴",
    label: "Reggae",
    icon: mic,
  },
  {
    id: 9,
    emoji: "🎺",
    label: "Blues",
    icon: mic,
  },
  {
    id: 10,
    emoji: "🎙️",
    label: "R&B/Soul",
    icon: mic,
  },
  {
    id: 11,
    emoji: "🌾",
    label: "Folk",
    icon: mic,
  },
  {
    id: 12,
    emoji: "💖",
    label: "K-Pop",
    icon: mic,
  },
  {
    id: 13,
    emoji: "🎶",
    label: "Latin",
    icon: mic,
  },
];

export const artists: Artist[] = [
  {
    id: 1,
    name: "Xpacegirl",
    img: aylo,
    title: "Artist",
    desc: 'At 22 years of age, Grammy nominated Luc Bradford aka ford. has surfaced as a standout producer in the flourishing lo-fi indie / electronic scene. Since signing with ODESZA’s imprint Foreign Family Collective in 2018, ford. has released two full length albums "(The) Evening" & "The Color of Nothing" which have amassed over 70 million+ streams. Over the last two years ford.’s music has been praised by tastemaker outlets such as BIllboard, COMPLEX, NUDE, found airtime on acclaimed stations such as BBC Radio 1, KCRW, Sirius XM HMU & Sirius XM Chill, landed major sy...',
  },
  {
    id: 2,
    name: "Tega Ethan",
    img: bloody,
    title: "Artist",
    desc: 'At 22 years of age, Grammy nominated Luc Bradford aka ford. has surfaced as a standout producer in the flourishing lo-fi indie / electronic scene. Since signing with ODESZA’s imprint Foreign Family Collective in 2018, ford. has released two full length albums "(The) Evening" & "The Color of Nothing" which have amassed over 70 million+ streams. Over the last two years ford.’s music has been praised by tastemaker outlets such as BIllboard, COMPLEX, NUDE, found airtime on acclaimed stations such as BBC Radio 1, KCRW, Sirius XM HMU & Sirius XM Chill, landed major sy...',
  },
  {
    id: 3,
    name: "SuperJazzClub",
    img: saba,
    title: "Artist",
    desc: 'At 22 years of age, Grammy nominated Luc Bradford aka ford. has surfaced as a standout producer in the flourishing lo-fi indie / electronic scene. Since signing with ODESZA’s imprint Foreign Family Collective in 2018, ford. has released two full length albums "(The) Evening" & "The Color of Nothing" which have amassed over 70 million+ streams. Over the last two years ford.’s music has been praised by tastemaker outlets such as BIllboard, COMPLEX, NUDE, found airtime on acclaimed stations such as BBC Radio 1, KCRW, Sirius XM HMU & Sirius XM Chill, landed major sy...',
  },
  {
    id: 4,
    name: "itsjustrand",
    img: popi,
    title: "Artist",
    desc: 'At 22 years of age, Grammy nominated Luc Bradford aka ford. has surfaced as a standout producer in the flourishing lo-fi indie / electronic scene. Since signing with ODESZA’s imprint Foreign Family Collective in 2018, ford. has released two full length albums "(The) Evening" & "The Color of Nothing" which have amassed over 70 million+ streams. Over the last two years ford.’s music has been praised by tastemaker outlets such as BIllboard, COMPLEX, NUDE, found airtime on acclaimed stations such as BBC Radio 1, KCRW, Sirius XM HMU & Sirius XM Chill, landed major sy...',
  },
  {
    id: 5,
    name: "Bunmi.",
    img: moliy,
    title: "Artist",
    desc: 'At 22 years of age, Grammy nominated Luc Bradford aka ford. has surfaced as a standout producer in the flourishing lo-fi indie / electronic scene. Since signing with ODESZA’s imprint Foreign Family Collective in 2018, ford. has released two full length albums "(The) Evening" & "The Color of Nothing" which have amassed over 70 million+ streams. Over the last two years ford.’s music has been praised by tastemaker outlets such as BIllboard, COMPLEX, NUDE, found airtime on acclaimed stations such as BBC Radio 1, KCRW, Sirius XM HMU & Sirius XM Chill, landed major sy...',
  },
  {
    id: 6,
    name: "Toriah",
    img: ella,
    title: "Artist",
    desc: 'At 22 years of age, Grammy nominated Luc Bradford aka ford. has surfaced as a standout producer in the flourishing lo-fi indie / electronic scene. Since signing with ODESZA’s imprint Foreign Family Collective in 2018, ford. has released two full length albums "(The) Evening" & "The Color of Nothing" which have amassed over 70 million+ streams. Over the last two years ford.’s music has been praised by tastemaker outlets such as BIllboard, COMPLEX, NUDE, found airtime on acclaimed stations such as BBC Radio 1, KCRW, Sirius XM HMU & Sirius XM Chill, landed major sy... Read more',
  },
  {
    id: 7,
    name: "SOLIS4EVR",
    img: ward,
    title: "Artist",
    desc: 'At 22 years of age, Grammy nominated Luc Bradford aka ford. has surfaced as a standout producer in the flourishing lo-fi indie / electronic scene. Since signing with ODESZA’s imprint Foreign Family Collective in 2018, ford. has released two full length albums "(The) Evening" & "The Color of Nothing" which have amassed over 70 million+ streams. Over the last two years ford.’s music has been praised by tastemaker outlets such as BIllboard, COMPLEX, NUDE, found airtime on acclaimed stations such as BBC Radio 1, KCRW, Sirius XM HMU & Sirius XM Chill, landed major sy... Read more',
  },
];

export const albums: Album[] = [
  {
    id: 1,
    title: "Sugarcane ",
    artistId: 1,
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b273676e212f1dd862ca14d40a0e",
    releaseType: "Single",
    songs: [1],
    releaseDate: "2024-12-17",
  },
  {
    id: 2,
    title: "love is like Lagos traffic ",
    artistId: 2,
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b273aa621853807a728c8e23fd20",
    releaseType: "Single",
    songs: [2],
    releaseDate: "2024-12-17",
  },
  {
    id: 3,
    title: "Paradise ",
    artistId: 3,
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b2738fb7d77d029169c9e47ba644",
    releaseType: "Single",
    songs: [3],
    releaseDate: "2024-12-17",
  },
  {
    id: 4,
    title: "I Think We Danced (But I Can't Be Sure) ",
    artistId: 4,
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b273961da7b10704a2b6efe45593",
    releaseType: "Single",
    songs: [4],
    releaseDate: "2024-12-17",
  },
  {
    id: 5,
    title: "Starfield ",
    artistId: 5,
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b27371d2fc7860fb53a382a7bb88",
    releaseType: "Single",
    songs: [5],
    releaseDate: "2024-12-17",
  },
  {
    id: 6,
    title: "New to Me ",
    artistId: 6,
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b2732f32bbc80b869a2e58556be3",
    releaseType: "Single",
    songs: [6],
    releaseDate: "2024-12-17",
  },
  {
    id: 7,
    title: "Abeg ",
    artistId: 7,
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b273514e92e8ef2361ad12f08a0e",
    releaseType: "Single",
    songs: [7],
    releaseDate: "2024-12-17",
  },
];
