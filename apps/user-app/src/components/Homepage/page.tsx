"use client";
import React from 'react'
import FeaturedAlbum from './featured-album'
import Mystery from './mystery'
import Genre from './genre-card'
import FeaturedArtists from './featured-artists'
import {motion, AnimatePresence } from 'framer-motion';

import { useModalStore } from '@/store/modal.store';
import { useMiniPlayerStore } from '@/store/miniplayer.store';
import { UserInteractionTracker } from '../audio-player/UserInteractionTracker';
import { AudioInitializer } from '../audio-player/AudioInitializer';
import Header from '../Header';
import Player from '../audio-player/audio-player';
import MiniPlayer from '../audio-player/audio-mini-player';
import { getAlbums } from '@/lib/queries/album/get-albums';
import { getArtists } from '@/lib/queries/artist/get-artists';

export type ArtistsProps = NonNullable<
  Awaited<ReturnType<typeof getArtists>>
>;

export type AlbumsProps = NonNullable<
  Awaited<ReturnType<typeof getAlbums>>
>;

export type HomePageProps = {
  artists: ArtistsProps;
  albums: AlbumsProps;
};


export default function HomePage({artists, albums}: HomePageProps) {
    const {isOpen, closeModal} = useModalStore();
    const { isVisible } = useMiniPlayerStore();
  return (
    <div>
       <UserInteractionTracker />
    <AudioInitializer />
      <Header />
      {
          <AnimatePresence>
          {isOpen && 
            (
              <motion.div 
                initial={{ y: "100%" }} 
                animate={{ y: "0%" }} 
                exit={{ y: "100%" }} 
                transition={{ duration: 0.5, ease: "easeInOut" }} 
                className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 bg-black z-40"
              >
              <button onClick={closeModal} className="absolute text-white py-[8px] px-[12px] bg-[#ffffff14] z-50 top-20 left-20 cursor-pointer rounded-[8px]">X close</button>
              <Player />
              </motion.div>
            )
          }
          </AnimatePresence>
        }
      <FeaturedAlbum albums={albums} artists={artists} />
      <Mystery />
      <Genre />
      <FeaturedArtists artists={artists}/>
      <div className="w-full h-[20vh]"></div>
      <MiniPlayer />
    </div>
  )
}


