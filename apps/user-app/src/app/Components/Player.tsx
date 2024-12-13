"use client";
import React, { useState, useEffect } from "react";
import { getBackgroundColor, type RGB } from "@/lib/colors";
import { Song, songs } from "@/data/songs";
import PlayerControls from "@/partials/feed/PlayerControls";
import NextSongButton from "@/components/NextSongButton";
import UserActions from "@/partials/feed/UserActions";
import HiddenCoverArt from "@/components/HiddenCoverArt";
import StreamingLinks from "@/partials/feed/StreamingLinks";
import { useEarningsStore } from "@/providers/store/earnings.store";
import { url } from "inspector";
import {AnimatePresence,motion} from "framer-motion"


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



const Player: React.FC<PlayerProps> = ({
  song,
  currentTime,
  duration,
  discovered,
  isPlaying,
  backgroundColor,
  showStreamingLinks,
  canClaimReward,
  isClaimed,
  setShowStreamingLinks,
  togglePlayPause,
  playNext,
  playPrevious,
  handleSeek,
  handleClaim,
  handleDiscover
}) => {



  return (

      <div
      className="fixed left-0 top-0 bottom-0 z-40 flex h-screen w-screen flex-col overflow-x-hidden overflow-y-scroll pt-[3.25rem] text-white transition-all duration-300 ease-in-out">

        <div
          className={`absolute inset-0 transition-transform duration-300 ${
            discovered ? 'bg-gradient-to-b' : ''
          }`}
          style={
            discovered
              ?  {
                  backgroundImage: `url(${song.albumArt})`,
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
            song.albumArt && (
              <img
                src={song.albumArt}
                alt="Album Art"
                className="h-[360px] w-[360px] rounded-[16px]"
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
              {discovered ? song.title : "*************"}
            </h2>

            <p className="text-base font-medium tracking-[0.04em] text-[#BDBDBD]">
              {!discovered ? song.artist : "********"}
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

            <StreamingLinks song={song} />
          </div>
        ) : (
          <UserActions
            claimAction={handleClaim}
            discoverArtistAction={handleDiscover}
            canClaimReward={canClaimReward && !isClaimed}
          />
        )}
        <div className="md:hidden">
          <NextSongButton playNext={playNext} />
        </div>
      </div>
      </div>
      </div>
  
  );
};

export default Player;


