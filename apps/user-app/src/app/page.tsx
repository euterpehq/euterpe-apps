import React from "react";
import Header from "@/partials/Header";
import Player from "./Components/Player";
import Main from "./Components/TopPicks/Main";
import Lucky from "./Components/discover/Lucky";
import Genre from "./Components/genre/Genre";
import Artists from "./Components/artist/Artists";
//import Player from "./Component/Player";
//import FullScreenPlayer from "@/partials/feed/FullScreenPlayer";
//import Lucky from "@/app/Component/discover/Lucky";
//import Main from "@/app/Component/TopPicks/Main";
//import Genre from "@/app/Component/genre/Genre";
//import Artists from "./Component/artists/Artists";


export default function Home() {
  return (
    <>
      <Header />
      {/*<FullScreenPlayer />*/}
      <Main />
      <Lucky />
      <Genre />
      <Artists />
      {/*<Player />*/}
    </>
  );
}
