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
  } = useAudioPlayerStore();

  useEffect(() => {
    const song = songs[currentSongIndex];

    // Define the event handlers first
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

    // Create new audio instance if necessary
    if (!audio || audio.src !== song.url) {
      // If there's already an audio instance, pause and clean it up
      if (audio) {
        audio.pause();
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("ended", playNext);
      }

      // Create new audio instance and set it
      const audioInstance = new Audio(song.url);
      setAudio(audioInstance);

      // Add necessary event listeners
      audioInstance.addEventListener("loadedmetadata", handleLoadedMetadata);
      audioInstance.addEventListener("timeupdate", handleTimeUpdate);
      audioInstance.addEventListener("ended", playNext);

      // Ensure audio plays immediately
      if (isPlaying) {
        audioInstance.play().catch((error) => {
          console.error("Playback failed:", error);
        });
      } else {
        // If we are not in the `isPlaying` state, make sure play is triggered on next render
        setIsPlaying(true);
      }

      // Cleanup function to remove event listeners and pause audio
      return () => {
        audioInstance.pause();
        audioInstance.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata,
        );
        audioInstance.removeEventListener("timeupdate", handleTimeUpdate);
        audioInstance.removeEventListener("ended", playNext);
      };
    }

    // If audio is already available, no new audio instance is created
    // and no unnecessary cleanup occurs.
  }, [
    currentSongIndex,
    setAudio,
    setDuration,
    setCurrentTime,
    playNext,
    audio,
    isPlaying,
    setIsPlaying,
  ]);

  return null;
};
