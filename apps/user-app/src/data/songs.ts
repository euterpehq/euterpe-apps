import img1 from "@/assets/images/img1.png"
import img2 from "@/assets/images/img2.png"
import img3 from "@/assets/images/img3.png"
import img4 from "@/assets/images/img4.png"
import img5 from "@/assets/images/img5.png"
import img6 from "@/assets/images/img6.png"
import img7 from "@/assets/images/img7.png"
import trophy from "@/assets/icons/trophy.png"

import { StaticImageData } from "next/image"

export type Song = {
  id: number;
  title: string;
  artist: string;
  albumArt: string;
  url: string;
  apple: string;
  spotify: string;
  youtube: string;
};

export type TopPick = {
  id: number;
  title: string;
  artist: string;
  image: string | StaticImageData;
  icon: string | StaticImageData;
  eut: number;
}

export const songs: Song[] = [
  {
    id: 1,
    title: "Starfield",
    artist: "Bunmi.",
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
    artist: "SOLIS4EVR",
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
    artist: "Tega Ethan",
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
    artist: "Toriah",
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
    artist: "Xpacegirl",
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
    artist: "SuperJazzClub",
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
    artist: "itsjustrand",
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
      image: img1,
      icon: trophy,
      eut: 1.3,
    },
    {
      id: 2,
      title: "Hesitate",
      artist: "Golden Vessel",
      image: img2,
      icon: trophy,
      eut: 1.3,
    },
    {
      id: 3,
      title: "Do You Really Need Me",
      artist: "Charlie",
      image: img3,
      icon: trophy,
      eut: 1.3,
    },
    {
      id: 4,
      title: "Small",
      artist: "Siv Jakobsen",
      image: img4,
      icon: trophy,
      eut: 1.3,
    },
    {
      id: 5,
      title: "In Love with a Ghost",
      artist: "Bash the Piper",
      image: img5,
      icon: trophy,
      eut: 1.3,
    },
    {
      id: 6,
      title: "Eleyele",
      artist: "taves",
      image: img6,
      icon: trophy,
      eut: 1.3,
    },
    {
      id: 7,
      title: "Clicquot Shower",
      artist: "Caleborate",
      image: img7,
      icon: trophy,
      eut: 1.3,
    },
]


