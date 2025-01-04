"use client"
import { useEffect, useState } from "react";

import MiniPlayer from "@/components/audio-mini-player";
import { AudioInitializer } from "@/partials/AudioInitializer";
import Header from "@/partials/Header";
import { UserInteractionTracker } from "@/partials/UserInteractionTracker";
import useAlbumStore from "@/store/album.store";
import { useMiniPlayerStore } from "@/store/miniplayer.store";
import { useModalStore } from "@/store/modal.store";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import {AnimatePresence, motion} from "framer-motion"
import Player from "@/components/audio-player";
import AlbumHead, { AlbumHeadSkeleton } from "../components/album-header";
import AlbumSongs from "../components/album-track-list";
import { useQuery } from "@tanstack/react-query";
import { fetchAlbumById } from "@/lib/queries/album/get-album";


export default function AlbumPage(){
    const {isOpen, closeModal} = useModalStore();
    const {isVisible} = useMiniPlayerStore()
    
    const {id} = useParams()
    const albumId = String(id)
   
    const {data: album, isLoading: albumLoading} = useQuery({
        queryKey: ["album", albumId],
        queryFn: () => fetchAlbumById(albumId),
        enabled: !!albumId
    })
  
    if(albumLoading) return <div><AlbumHeadSkeleton /></div>
   
    if(!album) return <div>Album not Found</div>
  

    return(
        <div>
            <AudioInitializer />
            <UserInteractionTracker />
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
            <AlbumHead album={album}/>
            <AlbumSongs album={album}/>
           { isVisible && <MiniPlayer /> }
        </div>
    )
}