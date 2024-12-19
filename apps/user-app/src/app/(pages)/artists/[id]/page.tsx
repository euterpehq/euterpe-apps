"use client";
import { artists, Discography } from "@/data/songs";
import Banner from "../artistDetail/Banner";
import Description from "../artistDetail/Description";
import TopSongs from "../artistDetail/TopSongs";

import HorizontalSlider from "@/app/Components/artist/HorizontalSlider";
import { useEffect, useState } from "react";

import useArtistStore from "@/store/artist.store";
import useAlbumStore from "@/store/album.store";
import { UserInteractionTracker } from "@/partials/UserInteractionTracker";
import { AudioInitializer } from "@/partials/AudioInitializer";
import Header from "@/partials/Header";
import MiniPlayer from "@/app/Components/MiniPlayer";
import SliderPage from "../artistDetail/SliderPage";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import Player from "@/app/Components/Player";
import {AnimatePresence, motion} from "framer-motion"
import { useModalStore } from "@/store/modal.store";
import { useMiniPlayerStore } from "@/store/miniplayer.store";


function ArtistPage(){
  const {isOpen, closeModal} = useModalStore();
  const {isVisible} = useMiniPlayerStore()
  const {albums, fetchAlbum} = useAlbumStore()
  const {artists, fetchArtist} = useArtistStore()
  useEffect(() => {
    fetchArtist();
    fetchAlbum();
  },[fetchArtist, fetchAlbum])
  
  const {id} = useParams()
  const artistId = String(id)

  console.log("params>>",artistId)

  console.log("artists>>",artists)
  console.log("album>>",albums)
  
    
    const artist = artists.find((a) => a.id === artistId )

    if(!artist) return null
    
    return(
        <div className="mb-[10rem]">
          <UserInteractionTracker />
    <AudioInitializer />
      <Header />
      {<AnimatePresence>
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
      )}
</AnimatePresence>}
           <Banner  artist={artist}/>
           <Description artist={artist}/>
           <TopSongs artist={artist} albums={albums}/>
           <div className="pl-[24px] w-full h-[400px] my-20">
            <h1 className="text-[20px] font-figtree tracking-[-0.4px] pb-10">Discograpy</h1>
           <SliderPage />
           </div>
           <div className="pl-[24px] my-[20px]">
           <h1 className="text-[20px] font-figtree tracking-[-0.4px] pb-10">Similar Artists</h1>
           <HorizontalSlider />
           </div>
           { isVisible && <MiniPlayer /> }
        </div>
    )
}
export default ArtistPage;