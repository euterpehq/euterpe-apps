import { useEffect } from "react";
import { useAudioPlayerStore } from "@/store/audioplayer.store";
import { songs } from "@/data/songs";
const CLAIM_THRESHOLD = 30;

export const AudioInitializer: React.FC = () => {
  const {
    currentSongIndex,
    setAudio,
    audio,
    setCurrentTime,
    setDuration,
    playNext,
    canClaimReward,
    isClaimed,
    setCanClaimReward,
    isPlaying, // Bring in isPlaying from the store
    setIsPlaying, // Action to set the isPlaying state
    hasUserInteraction,
  } = useAudioPlayerStore();

  useEffect(() => {
    // Early return if no user interaction or if audio shouldn't play
    if (!hasUserInteraction || !isPlaying) return;

    const song = songs[currentSongIndex];

    // Handle loaded metadata to set up duration
    const handleLoadedMetadata = (event: Event) => {
      const audioInstance = event.target as HTMLAudioElement;
      setDuration(audioInstance.duration);

      // Play the audio immediately after loading metadata
      if (isPlaying) {
        audioInstance.play().catch((error) => {
          console.error("Failed to start playback:", error);
        });
      }
    };

    // Handle time updates, update currentTime, and manage reward logic
    const handleTimeUpdate = (event: Event) => {
      const audioInstance = event.target as HTMLAudioElement;
      setCurrentTime(audioInstance.currentTime);
      if (
        audioInstance.currentTime >= CLAIM_THRESHOLD &&
        !canClaimReward &&
        !isClaimed
      ) {
        setCanClaimReward(true);
      }
    };

    // If audio is not initialized or the song is different, create a new audio instance
    if (!audio || audio.src !== song.url) {
      if (audio) {
        // Pause and clean up the old audio instance if it exists
        audio.pause();
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("ended", playNext);
      }

      // Create and set the new audio instance
      const newAudio = new Audio(song.url);
      setAudio(newAudio);

      // Set up event listeners
      newAudio.addEventListener("loadedmetadata", handleLoadedMetadata);
      newAudio.addEventListener("timeupdate", handleTimeUpdate);
      newAudio.addEventListener("ended", playNext);

      // Immediately play the audio if it's in the `isPlaying` state
      newAudio.play().catch((error) => {
        console.error("Playback error:", error);
      });

      // If the `isPlaying` state is false, ensure play is triggered on the next render
      if (!isPlaying) {
        setIsPlaying(true);
      }

      // Cleanup: remove event listeners and pause audio when the component unmounts
      return () => {
        newAudio.pause();
        newAudio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        newAudio.removeEventListener("timeupdate", handleTimeUpdate);
        newAudio.removeEventListener("ended", playNext);
      };
    }

    // If audio is already initialized and matches the current song, no need to recreate it
  }, [
    currentSongIndex,
    setAudio,
    setDuration,
    setCurrentTime,
    playNext,
    audio,
    isPlaying,
    setIsPlaying,
    hasUserInteraction,
    canClaimReward,
    isClaimed,
  ]);

  return null;
};
