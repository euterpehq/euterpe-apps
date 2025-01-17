"use client";
import React, { useEffect, useState } from "react";
import { getBackgroundColor, type RGB } from "@/lib/colors";
//import { artists } from "@/data/songs";
import { useMediaQuery } from "react-responsive";
import { useEarningsStore } from "@/providers/store/earnings.store";
import { url } from "inspector";
import MiniHiddenCoverArt from "@/components/MiniHiddenCoverArt";
import { useAudioPlayerStore } from "@/store/audioplayer.store";
import { useModalStore } from "@/store/modal.store";
import useAlbumStore from "@/store/album.store";
import Image from "next/image";
import useArtistStore from "@/store/artist.store";
import StreamingLinks from "./StreamingLinks";
import UserActions from "./UserActions";
import { useMiniPlayerStore } from "@/store/miniplayer.store";
import { usePathname } from "next/navigation";
import MiniPlayerControls from "./MiniPlayerControl";

const AudioMiniPlayer: React.FC = () => {
  const updateEarnings = useEarningsStore((state) => state.updateEarnings);

  const { openModal } = useModalStore();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const {
    currentSongIndex,
    albumSongs,
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

  const { albums, fetchAlbum } = useAlbumStore();
  const { artists, fetchArtist } = useArtistStore();

  useEffect(() => {
    fetchAlbum();
    fetchArtist();
  }, [fetchAlbum, fetchArtist]);

  const song = albumSongs[currentSongIndex];

  const album = song ? albums.find((a) => a.id === song.album_id) : null;
  const artist = album ? artists.find((f) => f.id === album?.artist_id) : null;

  const pathname = usePathname();
  const { isVisible } = useMiniPlayerStore();

  function handleClaim() {
    if (!isClaimed && canClaimReward) {
      updateEarnings(0.2);
      setIsClaimed(true);
      setCanClaimReward(false);
    }
  }

  if (!song || !album || !artist) return null;

  if(pathname === "/" || isVisible) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 md:w-full w-[98%] rounded-[14px] md:rounded-none mx-auto bg-[#181818] px-4 md:px-6 md:py-4 pt-3 mb-1 md:mb-0"  onClick={isMobile ? openModal : undefined}>
      <div className="flex md:flex-row flex-col w-full items-start md:items-center justify-between md:gap-0 gap-5">
        <div className="flex items-center gap-3">
          {discovered ? (
            album?.cover_image_url && (
              <Image
                src={album.cover_image_url}
                alt="Album Art"
                className="w-[40px] h-[40px] md:h-[60px] md:w-[60px] object-cover rounded-[4px]"
                crossOrigin="anonymous"
                width={60}
                height={60}
              />
            )
          ) : (
            <MiniHiddenCoverArt />
          )}
          <div className="flex flex-col items-start font-inter">
            <h2 className="text-[14px] md:text-[18px] font-semibold tracking-[0.04em]">
              {discovered ? song.track_title : "*************"}
            </h2>

            <p className="text-[12px] md:text-[16px] font-medium tracking-[0.04em] text-[#BDBDBD]">
              {discovered ? artist?.artist_name : "********"}
            </p>
          </div>
        </div>
        <div className="w-full   md:w-auto">
          <MiniPlayerControls
            isPlaying={isPlaying}
            togglePlayPause={togglePlayPause}
            playPrevious={playPrevious}
            playNext={playNext}
            currentTime={currentTime}
            duration={duration}
            handleSeek={handleSeek}
          />
        </div>
        <div className=" items-center gap-5 hidden md:flex">
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
          <div className="cursor-pointer" onClick={openModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M11.6667 8.33333L17.5 2.5M17.5 2.5H13.75M17.5 2.5V6.25M8.33333 11.6667L2.5 17.5M2.5 17.5H6.25M2.5 17.5V13.75"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}else {
  return null;
}
};

export default AudioMiniPlayer;
