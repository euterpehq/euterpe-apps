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
// import NextImage from "next/image";

const DEFAULT_BACKGROUND_FALLBACK_COLOR = "transparent";
const CLAIM_THRESHOLD = 30;
const MiniPlayer: React.FC = () => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState<string>(
    DEFAULT_BACKGROUND_FALLBACK_COLOR,
  );
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [discovered, setDiscovered] = useState(false);
  const [showStreamingLinks, setShowStreamingLinks] = useState(false);
  const [canClaimReward, setCanClaimReward] = useState(false);
  const [isClaimed, setIsClaimed] = useState(false);
  const updateEarnings = useEarningsStore((state) => state.updateEarnings);

  const song = songs[currentSongIndex];

  useEffect(() => {
    const audioInstance = new Audio(song.url);
    setAudio(audioInstance);
    function handleLoadedMetadata() {
      setDuration(audioInstance.duration);
    }
    function handleTimeUpdate() {
      setCurrentTime(audioInstance.currentTime);
      if (
        audioInstance.currentTime >= CLAIM_THRESHOLD &&
        !canClaimReward &&
        !isClaimed
      ) {
        setCanClaimReward(true);
      }
    }
    audioInstance.addEventListener("loadedmetadata", handleLoadedMetadata);
    audioInstance.addEventListener("timeupdate", handleTimeUpdate);
    audioInstance.addEventListener("ended", playNext);

    return () => {
      audioInstance.pause();
      audioInstance.src = "";
      audioInstance.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audioInstance.removeEventListener("timeupdate", handleTimeUpdate);
      audioInstance.removeEventListener("ended", playNext);
    };
  }, [currentSongIndex]);

  useEffect(() => {
    if (isPlaying && audio) {
      audio.play();
    }
  }, [audio]);

  const resolveBackgroundColor = (image: HTMLImageElement) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (ctx) {
      canvas.width = image.width;
      canvas.height = image.height;

      ctx.drawImage(image, 0, 0, image.width, image.height);
      const imageData = ctx.getImageData(0, 0, image.width, image.height).data;

      const rgbColor: RGB = getBackgroundColor(
        imageData,
        image.width,
        image.height,
      );
      setBackgroundColor(`rgb(${rgbColor.join(",")})`);
    } else {
      setBackgroundColor(DEFAULT_BACKGROUND_FALLBACK_COLOR);
    }
  };

  useEffect(() => {
    if (song.albumArt) {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.src = song.albumArt;
      image.onload = () => {
        resolveBackgroundColor(image);
      };
    }
  }, [song.albumArt]);

  const togglePlayPause = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  function playNext() {
    setCanClaimReward(false);
    setIsClaimed(false);
    setDiscovered(false);
    setShowStreamingLinks(false);
    setBackgroundColor(DEFAULT_BACKGROUND_FALLBACK_COLOR);
    setCurrentTime(0);
    setDuration(0);
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(true);
  }

  function playPrevious() {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + songs.length) % songs.length,
    );
    setIsPlaying(true);
  }

  function handleSeek(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (audio) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      const seekTime = (x / width) * audio.duration;
      audio.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  }

  function handleClaim() {
    if (!isClaimed && canClaimReward) {
      updateEarnings(0.2);
      setIsClaimed(true);
      setCanClaimReward(false);
    }
  }

  function handleDiscover() {
    setDiscovered(true);
    setShowStreamingLinks(true);
  }

  return (
    <div className='bg-[#181818]  w-full fixed bottom-0 left-0 right-0 z-30 px-6 py-4'>
      <div className='w-full  flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                {!discovered ? (
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
                    <HiddenCoverArt />
                )}
                <div className="flex flex-col items-start font-inter">
                    <h2 className="text-[18px] font-semibold tracking-[0.04em]">
                    {!discovered ? song.title : "*************"}
                    </h2>

                    <p className="text-[16px] font-medium tracking-[0.04em] text-[#BDBDBD]">
                    {!discovered ? song.artist : "********"}
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
