import { create } from "zustand";
import { fetchSongs, Song } from "@/lib/queries/supabaseQueries";

const DEFAULT_BACKGROUND_FALLBACK_COLOR = "transparent";
const CLAIM_THRESHOLD = 30;

type AudioPlayerState = {
  currentSongIndex: number;
  isPlaying: boolean;
  audio: HTMLAudioElement | null;
  currentTime: number;
  duration: number;
  canClaimReward: boolean;
  isClaimed: boolean;
  discovered: boolean;
  showStreamingLinks: boolean;
  backgroundColor: string;
  albumSongs: Song[];
  hasUserInteraction: boolean;

  fetchAndSetSongs: () => Promise<void>;

  setCurrentSongIndex: (index: number) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setDiscovered: (discovered: boolean) => void;
  setIsClaimed: (isClaimed: boolean) => void;
  setCanClaimReward: (canClaimReward: boolean) => void;
  setShowStreamingLinks: (value: boolean) => void;
  setCurrentTime: (time: number) => void;
  setDuration: (duration: number) => void;
  setHasUserInteraction: (hasUserInteraction: boolean) => void;

  togglePlayPause: () => void;
  playSong: (songId: string) => void;
  playNext: () => void;
  playPrevious: () => void;
  handleSeek: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  handleDiscover: () => void;

  setAudio: (newAudio: HTMLAudioElement | null) => void;
};

export const useAudioPlayerStore = create<AudioPlayerState>((set, get) => {
  const cleanUpOldAudio = (oldAudio: HTMLAudioElement) => {
    oldAudio.pause();
    oldAudio.src = "";
    oldAudio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    oldAudio.removeEventListener("timeupdate", handleTimeUpdate);
    oldAudio.removeEventListener("ended", handleAudioEnd);
  };

  const handleLoadedMetadata = () => {
    const { audio } = get();
    if (audio) {
      set({ duration: audio.duration });
    }
  };

  const handleTimeUpdate = () => {
    const { audio, canClaimReward, isClaimed } = get();
    if (audio) {
      set({ currentTime: audio.currentTime });

      if (
        audio.currentTime >= CLAIM_THRESHOLD &&
        !canClaimReward &&
        !isClaimed
      ) {
        set({ canClaimReward: true });
        console.log("Reward claim threshold reached");
      }
    }
  };

  const handleAudioEnd = () => {
    get().playNext();
  };

  const setupNewAudio = (audioInstance: HTMLAudioElement) => {
    audioInstance.addEventListener("loadedmetadata", handleLoadedMetadata);
    audioInstance.addEventListener("timeupdate", handleTimeUpdate);
    audioInstance.addEventListener("ended", handleAudioEnd);
  };

  const createAudioInstance = (songUrl: string): HTMLAudioElement => {
    const newAudio = new Audio(songUrl);
    setupNewAudio(newAudio);
    return newAudio;
  };

  return {
    currentSongIndex: 0,
    isPlaying: false,
    audio: null,
    currentTime: 0,
    duration: 0,
    canClaimReward: false,
    isClaimed: false,
    discovered: false,
    showStreamingLinks: false,
    backgroundColor: DEFAULT_BACKGROUND_FALLBACK_COLOR,
    hasUserInteraction: false,
    albumSongs: [],

    fetchAndSetSongs: async () => {
      try {
        const songs = await fetchSongs();
        set({ albumSongs: songs });
      } catch (error) {
        console.error("Failed to fetch songs:", error);
      }
    },

    setHasUserInteraction: (value) => set({ hasUserInteraction: value }),
    setCurrentTime: (time) => set({ currentTime: time }),
    setDuration: (duration) => set({ duration }),
    setShowStreamingLinks: (value) => set({ showStreamingLinks: value }),
    setDiscovered: (value) => set({ discovered: value }),
    setCurrentSongIndex: (index) => set({ currentSongIndex: index }),
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setIsClaimed: (isClaimed) => set({ isClaimed }),
    setCanClaimReward: (canClaimReward) => set({ canClaimReward }),

    setAudio: (newAudio) => {
      const { audio: oldAudio } = get();

      if (oldAudio) {
        cleanUpOldAudio(oldAudio);
      }

      set({ audio: newAudio });

      // Optionally auto-play the new audio if we're already in a 'playing' state
      // (or if we want to always auto-play upon setting the audio).
      if (newAudio) {
        newAudio
          .play()
          .catch((err) =>
            console.error("Playback failed while setting audio:", err),
          );
      }
    },

    togglePlayPause: () => {
      const {
        audio,
        isPlaying,
        albumSongs,
        currentSongIndex,
        hasUserInteraction,
      } = get();

      if (!albumSongs.length) {
        console.error("No songs available to play.");
        return;
      }

      const song = albumSongs[currentSongIndex];
      if (!song) {
        console.error("Invalid song index. Cannot toggle play/pause.");
        return;
      }

      // Per HTML5 Autoplay policy, user interaction is required before playing audio.
      if (!hasUserInteraction) {
        console.warn("User interaction required to start playback.");
        return;
      }

      // If there's no valid URL for the current song.
      if (!song.audio_file_url) {
        console.warn("Current song has no audio file URL.");
        return;
      }

      // If no audio instance, create one.
      if (!audio) {
        const newAudio = createAudioInstance(song.audio_file_url);
        set({ audio: newAudio });
        // We'll rely on the "auto-play" logic inside setAudio or createAudioInstance
        set({ isPlaying: true });
        return;
      }

      // If we do have an audio instance, simply toggle play/pause
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch((err) => {
          console.error("Playback error:", err);
        });
      }

      set({ isPlaying: !isPlaying });
    },

    playSong: (songId: string) => {
      const { albumSongs, setCurrentSongIndex, setAudio, setIsPlaying } = get();
      const songIndex = albumSongs.findIndex((song) => song.id === songId);

      if (songIndex === -1) {
        console.warn(
          `Song with id ${songId} not found in the albumSongs array.`,
        );
        return;
      }

      setCurrentSongIndex(songIndex);
      set({
        currentTime: 0,
        duration: 0,
        canClaimReward: false,
        isClaimed: false,
      });

      const song = albumSongs[songIndex];
      if (!song.audio_file_url) {
        console.warn("Selected song has no audio file URL.");
        return;
      }

      const newAudio = createAudioInstance(song.audio_file_url);
      setAudio(newAudio);
      setIsPlaying(true);
    },

    playNext: () => {
      const {
        albumSongs,
        currentSongIndex,
        setCurrentSongIndex,
        setAudio,
        isPlaying,
      } = get();

      if (!albumSongs.length) {
        console.warn("No songs in the albumSongs array to play next.");
        return;
      }

      const nextSongIndex = (currentSongIndex + 1) % albumSongs.length;
      const nextSong = albumSongs[nextSongIndex];

      if (!nextSong.audio_file_url) {
        console.warn("No valid audio URL for the next song.");
        return;
      }

      setCurrentSongIndex(nextSongIndex);
      set({
        currentTime: 0,
        duration: 0,
        canClaimReward: false,
        isClaimed: false,
        discovered: false,
        showStreamingLinks: false,
      });

      const newAudio = createAudioInstance(nextSong.audio_file_url);
      setAudio(newAudio);
      set({ isPlaying: isPlaying });
    },

    playPrevious: () => {
      const { albumSongs, currentSongIndex, setCurrentSongIndex } = get();

      if (!albumSongs.length) {
        console.warn("No songs in the albumSongs array to play previous.");
        return;
      }

      const prevIndex =
        (currentSongIndex - 1 + albumSongs.length) % albumSongs.length;
      setCurrentSongIndex(prevIndex);

      // The next "togglePlayPause" or subsequent call can handle actually playing that song,
      // or you could mimic playNext here if you want to automatically set audio for the previous track.
    },

    handleSeek: (e) => {
      const { audio } = get();
      if (audio) {
        const rect = e.currentTarget.getBoundingClientRect();
        const seekTime =
          ((e.clientX - rect.left) / rect.width) * audio.duration;
        audio.currentTime = seekTime;
        set({ currentTime: seekTime });
      }
    },

    handleDiscover: () => {
      set({ discovered: true, showStreamingLinks: true });
    },
  };
});
