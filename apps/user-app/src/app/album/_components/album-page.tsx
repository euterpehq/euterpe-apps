"use client";

import { useMiniPlayerStore } from "@/store/miniplayer.store";
import { useModalStore } from "@/store/modal.store";
import {AnimatePresence, motion} from "framer-motion"

import { useQuery } from "@tanstack/react-query";
import { getAlbumById } from "@/lib/queries/album/get-album-by-id";
import AlbumHead, { AlbumHeadSkeleton } from "./album-header";
import AlbumSongs from "./album-track-list";
import { AudioInitializer } from "@/components/audio-player/AudioInitializer";
import { UserInteractionTracker } from "@/components/audio-player/UserInteractionTracker";
import Header from "@/components/Header";
import MiniPlayer from "@/components/audio-player/audio-mini-player";
import Player from "@/components/audio-player/audio-player";

export type AlbumPageProps = NonNullable<
  Awaited<ReturnType<typeof getAlbumById>>
>;

export default function AlbumPage({album}:{album: AlbumPageProps}){
    const {isOpen, closeModal} = useModalStore();
    const {isVisible} = useMiniPlayerStore()
   
    
   
    if(!album) return <div>Album not Found</div>
  

    return(
        <div>
            <AudioInitializer />
            <UserInteractionTracker />
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
            <AlbumHead album={album}/>
            <AlbumSongs album={album}/>
           { isVisible && <MiniPlayer /> }
        </div>
    )
}