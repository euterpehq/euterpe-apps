"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useModalStore } from "@/store/modal.store";
import { useMiniPlayerStore } from "@/store/miniplayer.store";
import HorizontalSlider from "@/components/Homepage/artists-horizontal-slider";
import { getArtistById } from "@/lib/queries/artist/get-artist-by-id";
import { getAlbums } from "@/lib/queries/album/get-albums";
import { Skeleton } from '@/components/ui/skeleton';
import { useQuery } from "@tanstack/react-query";
import Banner from "./artist-header";
import Description from "./artist-description";
import TopSongs from "./artist-songs";
import ArtistDiscography from "./artist-discography";
import { UserInteractionTracker } from "@/components/audio-player/UserInteractionTracker";
import { AudioInitializer } from "@/components/audio-player/AudioInitializer";
import Header from "@/components/Header";
import Player from "@/components/audio-player/audio-player";
import MiniPlayer from "@/components/audio-player/audio-mini-player";
import { getArtists } from "@/lib/queries/artist/get-artists";

export type ArtistPageProps = {
  artist: NonNullable<Awaited<ReturnType<typeof getArtistById>>>;
  albums: NonNullable<Awaited<ReturnType<typeof getAlbums>>>;
  artists: NonNullable<Awaited<ReturnType<typeof getArtists>>>;
  
};

export default function ArtistPage({ artist, albums, artists }: ArtistPageProps) {
    const { isOpen, closeModal } = useModalStore();
    const { isVisible } = useMiniPlayerStore();
    
    if (!albums) {
        return <div>No albums found</div>;
    }
  
    return (
      <div className="mb-[10rem]">
        <UserInteractionTracker />
        <AudioInitializer />
        <Header />
        {
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="fixed bottom-0 left-0 right-0 top-0 z-40 h-screen w-screen bg-black"
              >
                <button
                  onClick={closeModal}
                  className="absolute left-20 top-20 z-50 cursor-pointer rounded-[8px] bg-[#ffffff14] px-[12px] py-[8px] text-white"
                >
                  X close
                </button>
                <Player />
              </motion.div>
            )}
          </AnimatePresence>
        }
        <Banner artist={artist} />
        <Description artist={artist} />
        <TopSongs artist={artist} albums={albums} />
        <div className="my-20 h-[400px] w-full pl-[24px]">
          <h1 className="pb-10 font-figtree text-[20px] font-semibold tracking-[-0.4px]">
            Discograpy
          </h1>
          <ArtistDiscography />
        </div>
        <div className="my-[20px] pl-[24px]">
          <h1 className="pb-10 font-figtree text-[20px] font-semibold tracking-[-0.4px]">
            Similar Artists
          </h1>
          <HorizontalSlider artists={artists} />
        </div>
        {isVisible && <MiniPlayer />}
      </div>
    );
  }