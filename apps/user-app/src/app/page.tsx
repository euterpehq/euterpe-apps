
import React from 'react'
import {getArtists } from '@/lib/queries/artist/get-artists'
import { getAlbums } from '@/lib/queries/album/get-albums';
import { UserInteractionTracker } from '@/components/audio-player/UserInteractionTracker';
import { AudioInitializer } from '@/components/audio-player/AudioInitializer';
import Header from "@/components/header";
import FeaturedAlbum from '@/components/Homepage/featured-album';
import Mystery from '@/components/Homepage/mystery';
import Genre from '@/components/Homepage/genre-card';
import FeaturedArtists from '@/components/Homepage/featured-artists';
import ModalPlayer from '@/components/audio-player/modal-player';
import AudioMiniPlayer from '@/components/audio-player/audio-mini-player';



export default async function Home(){
   const artists = await getArtists();
   const albums = await getAlbums();

   return (
    <div>
       <UserInteractionTracker />
    <AudioInitializer />
      <Header />
    <ModalPlayer />
      <FeaturedAlbum albums={albums} artists={artists} />
      <Mystery />
      {/*<Genre />*/}
      <FeaturedArtists artists={artists}/>
      <div className="w-full h-[10vh] md:h-[20vh]"></div>
      <AudioMiniPlayer />
    </div>
  )
}
