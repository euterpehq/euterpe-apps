"use client"
import React, { useEffect, useState } from 'react'
import { getBackgroundColor, type RGB } from "@/lib/colors";
import { artists, songs } from "@/data/songs";
import PlayerControls from "@/partials/feed/PlayerControls";
import NextSongButton from "@/components/NextSongButton";
import UserActions from "@/partials/feed/UserActions";
import HiddenCoverArt from "@/components/HiddenCoverArt";
import StreamingLinks from "@/partials/feed/StreamingLinks";
import { useEarningsStore } from "@/providers/store/earnings.store";
import { url } from "inspector";
import MiniHiddenCoverArt from '@/components/MiniHiddenCoverArt';
import { useAudioPlayerStore } from '@/store/audioplayer.store';
import { useModalStore } from '@/store/modal.store';


const MiniPlayer: React.FC = () => {
 const updateEarnings = useEarningsStore((state) => state.updateEarnings);
 
  const {openModal}= useModalStore()
  const {
    currentSongIndex,
    isPlaying,
    currentTime,
    duration,
    discovered,
    showStreamingLinks,
    setShowStreamingLinks,
    canClaimReward,
    isClaimed,
    togglePlayPause,
    setIsClaimed,
    setCanClaimReward,
    playNext,
    playPrevious,
    handleSeek,
    handleDiscover,
  } = useAudioPlayerStore();

  const song = songs[currentSongIndex]

  function handleClaim() {
    if (!isClaimed && canClaimReward) {
      updateEarnings(0.2);
      setIsClaimed(true);
      setCanClaimReward(false);
    }
  }

  
  //const artist = songs.find((s) => s.id)

 const artist = artists.find((a) => a.id === song.artistId)

   
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
                    {discovered ? artist?.name : "********"}
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
            <div className='flex items-center gap-5'>
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
        <div className='cursor-pointer' onClick={openModal}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M11.6667 8.33333L17.5 2.5M17.5 2.5H13.75M17.5 2.5V6.25M8.33333 11.6667L2.5 17.5M2.5 17.5H6.25M2.5 17.5V13.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
            </div>
      </div>
    </div>
  )
}

export default MiniPlayer
