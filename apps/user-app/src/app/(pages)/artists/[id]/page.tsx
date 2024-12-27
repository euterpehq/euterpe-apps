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
import { AnimatePresence, motion } from "framer-motion";
import { useModalStore } from "@/store/modal.store";
import { useMiniPlayerStore } from "@/store/miniplayer.store";

function ArtistPage() {
  const { isOpen, closeModal } = useModalStore();
  const { isVisible } = useMiniPlayerStore();
  const { albums, fetchAlbum } = useAlbumStore();
  const { artists, fetchArtist } = useArtistStore();
  useEffect(() => {
    fetchArtist();
    fetchAlbum();
  }, [fetchArtist, fetchAlbum]);

  const { id } = useParams();
  const artistId = String(id);

  console.log("params>>", artistId);

  console.log("artists>>", artists);
  console.log("album>>", albums);

  const artist = artists.find((a) => a.id === artistId);

  if (!artist) return null;

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
        <SliderPage />
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
export default ArtistPage;
