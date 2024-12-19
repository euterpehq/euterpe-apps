"use client"
import { useEffect, useState } from "react";
import AlbumHead from "@/app/(pages)/Layers/AlbumHead";
import AlbumSongs from "@/app/(pages)/Layers/AlbumSongs";
import MiniPlayer from "@/app/Components/MiniPlayer";
import { AudioInitializer } from "@/partials/AudioInitializer";
import Header from "@/partials/Header";
import { UserInteractionTracker } from "@/partials/UserInteractionTracker";
import useAlbumStore from "@/store/album.store";
import { useMiniPlayerStore } from "@/store/miniplayer.store";
import { useModalStore } from "@/store/modal.store";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import {AnimatePresence, motion} from "framer-motion"
import Player from "@/app/Components/Player";


export default function AlbumPage(){
const {isOpen, closeModal} = useModalStore();
    const {albums, fetchAlbum} = useAlbumStore()
    useEffect(() => {
        fetchAlbum()
      },[fetchAlbum])
    
    const {id} = useParams()
    const albumId = String(id)
   
    const {isVisible} = useMiniPlayerStore()
   

   const album = albums.find((a) => a.id === albumId);  

  
   
   if(!album) return null

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