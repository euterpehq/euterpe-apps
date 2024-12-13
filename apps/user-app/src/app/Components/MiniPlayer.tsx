"use client"
import React, { useEffect, useState } from 'react'
import { getBackgroundColor, type RGB } from "@/lib/colors";
import { songs } from "@/data/songs";
import PlayerControls from "@/partials/feed/PlayerControls";
import NextSongButton from "@/components/NextSongButton";
import UserActions from "@/partials/feed/UserActions";
import HiddenCoverArt from "@/components/HiddenCoverArt";
import StreamingLinks from "@/partials/feed/StreamingLinks";
import { useEarningsStore } from "@/providers/store/earnings.store";
import { url } from "inspector";
import { PlayerProps } from './Player';
import MiniHiddenCoverArt from '@/components/MiniHiddenCoverArt';



const MiniPlayer: React.FC<PlayerProps> = ({
  song,
  currentTime,
  duration,
  discovered,
  isPlaying,
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
    <div className='bg-[#181818]  w-full fixed bottom-0 left-0 right-0 z-30 px-6 py-4'>
      <div className='w-full  flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                {discovered ? (
                    song.albumArt && (
                    <img
                        src={song.albumArt}
                        alt="Album Art"
                        className="h-[60px] w-[60px] rounded-[4px]"
                        crossOrigin="anonymous"
                        width={60}
                        height={60}
                    />
                    )
                ) : (
                    <MiniHiddenCoverArt />
                )}
                <div className="flex flex-col items-start font-inter">
                    <h2 className="text-[18px] font-semibold tracking-[0.04em]">
                    {discovered ? song.title : "*************"}
                    </h2>

                    <p className="text-[16px] font-medium tracking-[0.04em] text-[#BDBDBD]">
                    {discovered ? song.artist : "********"}
                    </p>
                </div>
            </div>
            <div>
            <PlayerControls
          isPlaying={isPlaying}
          togglePlayPause={togglePlayPause}
          playPrevious={playPrevious}
          playNext={playNext}
          currentTime={currentTime}
          duration={duration}
          handleSeek={handleSeek}
        />
            </div>
            <div>
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
            </div>
      </div>
    </div>
  )
}

export default MiniPlayer
