"use client";
import { useEffect } from "react";
import { useAudioPlayerStore } from "@/store/audioplayer.store";

const CLAIM_THRESHOLD = 30;

export const AudioInitializer: React.FC = () => {
  const {
    fetchAndSetSongs,
    currentSongIndex,
    albumSongs,
    setAudio,
    audio,
    setCurrentTime,
    setDuration,
    playNext,
    canClaimReward,
    isClaimed,
    setCanClaimReward,
    isPlaying,
    setIsPlaying,
    hasUserInteraction,
  } = useAudioPlayerStore();

  useEffect(() => {
    // Fetch songs from the external API when the component is mounted
    if (albumSongs.length === 0) {
      console.log("Fetching songs...");
      fetchAndSetSongs();
    }
  }, [fetchAndSetSongs, albumSongs]);

  useEffect(() => {

    // Early return if no user interaction or if audio shouldn't play
    if (!hasUserInteraction || !isPlaying) {
      return;
    }

    const song = albumSongs[currentSongIndex];

    if (!song) {
      console.warn("No song found at current index");
      return;
    }

    /*if(song.audio_file_url){
      const audioInstance = song.audio_file_url ? new Audio(song.audio_file_url) : null;
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
    }
    

    return () => {
      audioInstance.pause();
      audioInstance.src = "";
      audioInstance.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audioInstance.removeEventListener("timeupdate", handleTimeUpdate);
      audioInstance.removeEventListener("ended", playNext);
    };*/
  

    // Handle loaded metadata to set up duration
    const handleLoadedMetadata = (event: Event) => {
      const audioInstance = event.target as HTMLAudioElement;
      console.log("Audio metadata loaded, duration:", audioInstance.duration);
      setDuration(audioInstance.duration);

      if (isPlaying) {
        console.log("Starting playback...");
        audioInstance.play().catch((error) => {
          console.error("Failed to start playback:", error);
        });
      }
    };

    // Handle time updates, update currentTime, and manage reward logic
    const handleTimeUpdate = (event: Event) => {
      const audioInstance = event.target as HTMLAudioElement;
      console.log("Time update event triggered, currentTime:", audioInstance.currentTime);
      setCurrentTime(audioInstance.currentTime);

      if (
        audioInstance.currentTime >= CLAIM_THRESHOLD &&
        !canClaimReward &&
        !isClaimed
      ) {
        console.log("Reward claim threshold reached");
        setCanClaimReward(true);
      }
    };

    console.log("Creating new audio instance for song:", song.audio_file_url);
    console.log("Pre-condition check:", {
      audio,
      audioSrc: audio?.src,
      songAudioFileUrl: song.audio_file_url,
    });

    // If audio is not initialized or the song is different, create a new audio instance
    if (!audio || audio.src !== song.audio_file_url) {
      
      if (audio) {
        console.log("Cleaning up old audio instance");
        audio.pause();
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("ended", playNext);
      }
    
      if (!song.audio_file_url) {
        console.warn("Song audio file URL is missing");
        return;
      }
    
      const newAudio = new Audio(song.audio_file_url);
    
      setAudio(newAudio);

      // Adding event listeners with debug logs
      newAudio.addEventListener("loadedmetadata", handleLoadedMetadata);
      newAudio.addEventListener("timeupdate", handleTimeUpdate);
      newAudio.addEventListener("ended", playNext);
      // Attempting playback with debug logs
      newAudio.play().then(() => {
        console.log("Audio playback started successfully");
      }).catch((error) => {
        console.error("Audio playback failed:", error);
      });
    
      // Cleanup logic
      return () => {
        console.log("Cleaning up audio on unmount");
        newAudio.pause();
        newAudio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        newAudio.removeEventListener("timeupdate", handleTimeUpdate);
        newAudio.removeEventListener("ended", playNext);
      }
    }

   
  }, [currentSongIndex]);

  return null;
};
