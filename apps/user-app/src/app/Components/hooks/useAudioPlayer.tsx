import { useState, useEffect, useCallback } from "react";
import { songs } from "@/data/songs";
import { useEarningsStore } from "@/providers/store/earnings.store";
import { getBackgroundColor, RGB } from "@/lib/colors";

const DEFAULT_BACKGROUND_FALLBACK_COLOR = "transparent";
const CLAIM_THRESHOLD = 30;

export function useAudioPlayer() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [canClaimReward, setCanClaimReward] = useState(false);
  const [isClaimed, setIsClaimed] = useState(false);
  const [discovered, setDiscovered] = useState(false);
  const [showStreamingLinks, setShowStreamingLinks] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState<string>(
    DEFAULT_BACKGROUND_FALLBACK_COLOR,
  );
  const updateEarnings = useEarningsStore((state) => state.updateEarnings);
  const song = songs[currentSongIndex];

  /*useEffect(() => {
    const song = songs[currentSongIndex];
    const audioInstance = new Audio(song.url);
    setAudio(audioInstance);

    const handleLoadedMetadata = () => {
      setDuration(audioInstance.duration);
    };

    /*const handleTimeUpdate = () => {
      setCurrentTime(audioInstance.currentTime);
    };/

    const handleTimeUpdate = useCallback(() => {
        setCurrentTime(audioInstance.currentTime);
        if (
          audioInstance.currentTime >= CLAIM_THRESHOLD &&
          !canClaimReward &&
          !isClaimed
        ) {
          setCanClaimReward(true);
        }
      }, [audioInstance, canClaimReward, isClaimed, setCurrentTime, setCanClaimReward]);

      
    const handleEnded = () => {
      playNext();
    };

    audioInstance.addEventListener("loadedmetadata", handleLoadedMetadata);
    audioInstance.addEventListener("timeupdate", handleTimeUpdate);
    audioInstance.addEventListener("ended", handleEnded);

    return () => {
      audioInstance.pause();
      audioInstance.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audioInstance.removeEventListener("timeupdate", handleTimeUpdate);
      audioInstance.removeEventListener("ended", handleEnded);
      setAudio(null);
    };
  }, [currentSongIndex]);*/

  useEffect(() => {
    const song = songs[currentSongIndex];
    const audioInstance = new Audio(song.url);
    setAudio(audioInstance);
  
    const handleLoadedMetadata = () => {
      setDuration(audioInstance.duration);
    };
  
    const handleTimeUpdate = () => {
      setCurrentTime(audioInstance.currentTime);
      if (
        audioInstance.currentTime >= CLAIM_THRESHOLD &&
        !canClaimReward &&
        !isClaimed
      ) {
        setCanClaimReward(true);
      }
    };
  
    
  
    audioInstance.addEventListener("loadedmetadata", handleLoadedMetadata);
    audioInstance.addEventListener("timeupdate", handleTimeUpdate);
    audioInstance.addEventListener("ended", playNext);
  
    return () => {
      audioInstance.pause();
      audioInstance.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audioInstance.removeEventListener("timeupdate", handleTimeUpdate);
      audioInstance.removeEventListener("ended", playNext);
      setAudio(null);
    };
  }, [currentSongIndex, canClaimReward, isClaimed, setCurrentTime, setCanClaimReward]);
  
  useEffect(() => {
    if (isPlaying && audio) {
      audio.play();
    }
  }, [audio, isPlaying]);

  const resolveBackgroundColor = useCallback((image: HTMLImageElement) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (ctx) {
      canvas.width = image.width;
      canvas.height = image.height;

      ctx.drawImage(image, 0, 0, image.width, image.height);
      const imageData = ctx.getImageData(0, 0, image.width, image.height).data;

      const rgbColor: RGB = getBackgroundColor(imageData, image.width, image.height);
      setBackgroundColor(`rgb(${rgbColor.join(",")})`);
    } else {
      setBackgroundColor(DEFAULT_BACKGROUND_FALLBACK_COLOR);
    }
  }, []);

  useEffect(() => {
    if (song.albumArt) {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.src = song.albumArt;
      image.onload = () => {
        resolveBackgroundColor(image);
      };
    }
  }, [song.albumArt, resolveBackgroundColor]);


  const togglePlayPause = useCallback(() => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying((prev) => !prev);
    }
  }, [audio, isPlaying]);

  const playNext = useCallback(() => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setCanClaimReward(false);
    setIsClaimed(false);
    setDiscovered(false);
    setShowStreamingLinks(false);
    setBackgroundColor(DEFAULT_BACKGROUND_FALLBACK_COLOR);
    setCurrentTime(0);
    setDuration(0);
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(true);
    setIsPlaying(true);

  }, []);

  const playPrevious = useCallback(() => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  }, []);

  /*const seek = useCallback(
    (seekTime: number) => {
      if (audio) {
        audio.currentTime = seekTime;
        setCurrentTime(seekTime);
      }
    },
    [audio]
  );*/

  const handleSeek = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (audio) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const seekTime = (x / width) * audio.duration;
  
        // Update audio currentTime and state
        audio.currentTime = seekTime;
        setCurrentTime(seekTime);
      }
    },
    [audio, setCurrentTime] // dependencies
  );

  const handleClaim = useCallback(() => {
    if (!isClaimed && canClaimReward) {
      updateEarnings(0.2); 
      setIsClaimed(true);
      setCanClaimReward(false);
    }
  }, [canClaimReward, isClaimed, updateEarnings]);


  const handleDiscover = useCallback(() => {
    setDiscovered(true);
    setShowStreamingLinks(true);
  }, []);

  return {
    currentSongIndex,
    isPlaying,
    currentTime,
    duration,
    togglePlayPause,
    playNext,
    playPrevious,
    handleSeek,
    handleClaim,
    handleDiscover,
    song: songs[currentSongIndex],
    discovered,
    showStreamingLinks,
    setShowStreamingLinks,
    canClaimReward,
    isClaimed,
    backgroundColor
  };
}
