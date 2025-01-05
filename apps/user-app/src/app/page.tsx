"use client"
import React from "react";
import Header from "@/partials/Header";
import Player from "../components/audio-player";
import { useModalStore } from "@/store/modal.store";
import MiniPlayer from "../components/audio-mini-player";
import {AnimatePresence, motion} from "framer-motion"
import { useMiniPlayerStore } from "@/store/miniplayer.store";
import { AudioInitializer } from "@/partials/AudioInitializer";
import { UserInteractionTracker } from "@/partials/UserInteractionTracker";
import  { ExplorePage } from "./explore/page";



export default function Home() {
  const {isOpen, closeModal} = useModalStore();
  const { isVisible } = useMiniPlayerStore();
  
  

  return (
    <>
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
      <ExplorePage />
      <div className="w-full h-[20vh]"></div>
      <MiniPlayer />
    </>
  );
}
