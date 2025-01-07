"use client";
import { UserInteractionTracker } from "@/partials/UserInteractionTracker";
import { AudioInitializer } from "@/partials/AudioInitializer";
import Header from "@/partials/Header";
import MiniPlayer from "@/components/audio-mini-player";
import Player from "@/components/audio-player";
import { AnimatePresence, motion } from "framer-motion";
import { useModalStore } from "@/store/modal.store";
import { useMiniPlayerStore } from "@/store/miniplayer.store";
import HorizontalSlider from "@/app/explore/_components/artists/artists-horizontal-slider";
import { getArtistById } from "@/lib/queries/artist/get-artist-by-id";
import { getAlbums } from "@/lib/queries/album/get-albums";
import { Skeleton } from '@/components/ui/skeleton';
import { useQuery } from "@tanstack/react-query";
import Banner from "./artist-header";
import Description from "./artist-description";
import TopSongs from "./artist-songs";
import ArtistDiscography from "./artist-discography";

export const  BannerSkeleton = () => {
  return (
    <Skeleton className="relative h-[250px] w-full">
      <Skeleton className="absolute right-10 top-[75%] h-[140px] w-[140px] rounded-[24px]" />
    </Skeleton>
  );
}

export default function ArtistPage({artistId}: {artistId: string}) {
    const { isOpen, closeModal } = useModalStore();
    const { isVisible } = useMiniPlayerStore();
  
  
    const {data: artist, isLoading: artistLoading} = useQuery({
      queryKey: ["artist", artistId],
      queryFn: () => getArtistById(artistId),
    })
  
    const {data: albums, isLoading: albumLoading} = useQuery({
      queryKey: ["albums"],
      queryFn: getAlbums,
    })
    
  
    if(artistLoading || albumLoading) return <div><BannerSkeleton /></div>;
  
    if(!artist) return <div>Artist not found</div>
    
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
          <HorizontalSlider />
        </div>
        {isVisible && <MiniPlayer />}
      </div>
    );
  }