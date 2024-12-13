"use client"
import React from "react";
import Header from "@/partials/Header";
import Player from "./Components/Player";
import Main from "./Components/TopPicks/Main";
import Lucky from "./Components/discover/Lucky";
import Genre from "./Components/genre/Genre";
import Artists from "./Components/artist/Artists";
import MiniPlayer from "./Components/MiniPlayer";
import {AnimatePresence, motion} from "framer-motion"
import { useModalStore } from "@/store/modal.store";
import { useMiniPlayerStore } from "@/store/miniplayer.store";


export default function Home() {
  const {isOpen, closeModal} = useModalStore();
  const { isVisible } = useMiniPlayerStore()

  return (
    <>
      <Header />
        {<AnimatePresence>
              {isOpen && 
                (
                  <motion.div 
                  initial={{ y: "100%", opacity: 0 }} 
                    animate={{ y: "0%", opacity: 1 }} 
                    exit={{ y: "100%", opacity: 0 }} 
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 bg-white z-30"
                  
                  >
                    <div onClick={closeModal} className="absolute text-black  z-50 top-20 left-20 cursor-pointer">X</div>
                  <Player />
                  </motion.div>
                )
              }
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
