"use client";
import React, { useState, useEffect } from "react";
import { getBackgroundColor, type RGB } from "@/lib/colors";
//import { Song, songs } from "@/data/songs";

import NextSongButton from "@/components/NextSongButton";

import HiddenCoverArt from "@/components/HiddenCoverArt";

import { useEarningsStore } from "@/providers/store/earnings.store";
import { url } from "inspector";
import {AnimatePresence,motion} from "framer-motion"
import { useAudioPlayerStore } from '@/store/audioplayer.store';
import { Song } from "@/lib/queries/supabaseQueries";
import useAlbumStore from "@/store/album.store";
import Image from "next/image";
import useArtistStore from "@/store/artist.store";
import { useQuery } from "@tanstack/react-query";
import PlayerControls from "./PlayerControls";
import StreamingLinks from "./StreamingLinks";
import UserActions from "./UserActions";


export type PlayerProps = {
  song: Song;
  currentTime: number;
  duration: number;
  discovered: boolean;
  isPlaying: boolean;
  showStreamingLinks: boolean;
  canClaimReward: boolean;
  isClaimed: boolean;
  backgroundColor: string;
  setShowStreamingLinks: React.Dispatch<React.SetStateAction<boolean>>;
  togglePlayPause: () => void;
  playNext: () => void;
  playPrevious: () => void;
  handleSeek: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  handleClaim: () => void;
  handleDiscover: () => void; 
};



const AudioPlayer: React.FC = () => {
  const updateEarnings = useEarningsStore((state) => state.updateEarnings);
  const {
    currentSongIndex,
    isPlaying,
    currentTime,
    duration,
    discovered,
    backgroundColor,
    showStreamingLinks,
    setShowStreamingLinks,
    canClaimReward,
    isClaimed,
    togglePlayPause,
    playNext,
    playPrevious,
    handleSeek,
    setIsClaimed,
    setCanClaimReward,
    handleDiscover,
    albumSongs,
  } = useAudioPlayerStore();

  const {albums, fetchAlbum} = useAlbumStore()
  const {artists, fetchArtist} = useArtistStore()

  useEffect(() => {
    fetchAlbum()
    fetchArtist()
  },[fetchAlbum, fetchArtist])

  
  const song = albumSongs[currentSongIndex]

  const album = albums.find((a) => a.id === song.album_id);
  const artist = artists.find((f) => f.id === album?.artist_id)
 

  function handleClaim() {
    if (!isClaimed && canClaimReward) {
      updateEarnings(0.2);
      setIsClaimed(true);
      setCanClaimReward(false);
    }
  }

 

  return (

      <div
      className="fixed left-0 top-0 bottom-0 z-40 flex h-screen w-screen flex-col overflow-x-hidden md:overflow-y-scroll overflow-y-hidden md:pt-[3.25rem] text-white transition-all duration-300 ease-in-out">

        <div
          className={`absolute inset-0 transition-transform duration-300 ${
            discovered ? 'bg-gradient-to-b' : ''
          }`}
          style={
            discovered
              ?  {
                  backgroundImage: `url(${album?.cover_image_url})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  filter: 'blur(50px)',
                  transform: 'scale(2)',
                  zIndex: -1,
              }:{
                  background: `linear-gradient(
                    to bottom, 
                    ${backgroundColor.replace('rgb', 'rgba').replace(')', ', 0.1)')} 0%, 
                    ${backgroundColor.replace('rgb', 'rgba').replace(')', ', 0)')} 100%
                  )`,
                }
          }
        ></div>

      <div className="relative z-10">

      <div className="mr-6 mt-6 flex justify-end">
        <div className="invisible md:visible">
          <NextSongButton playNext={playNext} />
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 px-6">
        <div className="flex flex-col items-center gap-6">
          {discovered ? (
            album?.cover_image_url && (
              <Image
                src={album.cover_image_url}
                alt="Album Art"
                className="h-[360px] w-[360px] object-cover rounded-[16px]"
                crossOrigin="anonymous"
                width={360}
                height={360}
              />
            )
          ) : (
            <HiddenCoverArt />
          )}
          <div className="flex flex-col items-center gap-2 font-inter">
            <h2 className="text-xl font-semibold tracking-[0.04em]">
              {discovered ? song.track_title : "*************"}
            </h2>

            <p className="text-base font-medium tracking-[0.04em] text-[#BDBDBD]">
              {discovered ? artist?.artist_name : "********"}
            </p>
          </div>
        </div>
        <PlayerControls
          isPlaying={isPlaying}
          togglePlayPause={togglePlayPause}
          playPrevious={playPrevious}
          playNext={playNext}
          currentTime={currentTime}
          duration={duration}
          handleSeek={handleSeek}
        />
         <div className="hidden">
          <NextSongButton playNext={playNext} />
        </div>
        <div className="pt-[3rem] md:pt-0">
        {showStreamingLinks ? (
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#BDBDBD"
              className="size-4 cursor-pointer"
              onClick={() => setShowStreamingLinks(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>

            <StreamingLinks song={song} artist={artist} />
          </div>
        ) : (
          <UserActions
            claimAction={handleClaim}
            discoverArtistAction={handleDiscover}
            canClaimReward={canClaimReward && !isClaimed}
          />
        )}
        </div>
       
       
      </div>
      
      </div>
      </div>
  
  );
};

export default AudioPlayer;


