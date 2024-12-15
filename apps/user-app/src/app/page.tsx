"use client"
import React from "react";
import Header from "@/partials/Header";
import Player from "./Components/Player";
import Main from "./Components/TopPicks/Main";
import Lucky from "./Components/discover/Lucky";
import Genre from "./Components/genre/Genre";
import Artists from "./Components/artist/Artists";
import { useModalStore } from "@/store/modal.store";
import MiniPlayer from "./Components/MiniPlayer";
import {AnimatePresence, motion} from "framer-motion"
import { useMiniPlayerStore } from "@/store/miniplayer.store";
import { AudioInitializer } from "@/partials/AudioInitializer";



export default function Home() {
  const {isOpen, closeModal} = useModalStore();
  const { isVisible } = useMiniPlayerStore();
  
  

  return (
    <>
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
      
      
    
      
      {/*<FullScreenPlayer />*/}
      <Main />
      <Lucky />
      <Genre />
      <Artists />
      {isVisible && <MiniPlayer />}
    </>
  );
}
