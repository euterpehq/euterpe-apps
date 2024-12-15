import { create } from 'zustand';
import { songs } from '@/data/songs';
import { useEarningsStore } from '@/providers/store/earnings.store';

const DEFAULT_BACKGROUND_FALLBACK_COLOR = 'transparent';
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
  setCurrentSongIndex: (index: number) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setIsClaimed: (isClaimed: boolean) => void;
  setCanClaimReward: (canClaimReward: boolean) => void;
  setShowStreamingLinks: (value: boolean) => void;
  setCurrentTime: (time: number) => void;
  setDuration: (duration: number) => void;
  togglePlayPause: () => void;
  playNext: () => void;
  playPrevious: () => void;
  handleSeek: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

  handleDiscover: () => void;
  setAudio: (audio: HTMLAudioElement | null) => void;

};

export const useAudioPlayerStore = create<AudioPlayerState>((set, get) => ({
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

  setCurrentTime: (time) => set({ currentTime: time }),
  setDuration: (duration) => set({ duration }),
  setShowStreamingLinks: (value) => set({ showStreamingLinks: value }),
  setCurrentSongIndex: (index: number) => set({ currentSongIndex: index }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setIsClaimed: (isClaimed) => set({ isClaimed }),
  setCanClaimReward: (canClaimReward) => set({ canClaimReward }),

  togglePlayPause: () => {
    const { audio, isPlaying, currentTime } = get();
    if (audio) {
      if (isPlaying) {
        audio.pause();
        set({ currentTime: audio.currentTime });
      } else {
        audio.currentTime = currentTime;
        audio.play().catch((error) => console.error("Playback failed:", error));
      }
      set({ isPlaying: !isPlaying });
    }
  },

  playNext: () => {
    const { audio, currentSongIndex, isPlaying, setAudio, setCurrentTime, setDuration } = get();
    
    if (audio) {
      audio.pause();
      audio.src = ""; 
      audio.removeEventListener("loadedmetadata", () => {});
      audio.removeEventListener("timeupdate", () => {});
      audio.removeEventListener("ended", get().playNext);
    }

    const newIndex = (currentSongIndex + 1) % songs.length;
    const newSong = songs[newIndex];
    const newAudio = new Audio(newSong.url);

    const handleLoadedMetadata = () => {
      setDuration(newAudio.duration);
      if (isPlaying) {
        newAudio.play().catch((err) => console.error("Playback failed:", err));
      }
    };

    const handleTimeUpdate = () => {
      setCurrentTime(newAudio.currentTime);
      if (newAudio.currentTime >= CLAIM_THRESHOLD && !get().canClaimReward && !get().isClaimed) {
        set({ canClaimReward: true });
      }
    };

    newAudio.addEventListener("loadedmetadata", handleLoadedMetadata);
    newAudio.addEventListener("timeupdate", handleTimeUpdate);
    newAudio.addEventListener("ended", get().playNext);

    setAudio(newAudio);
    set({
      currentSongIndex: newIndex,
      canClaimReward: false,
      isClaimed: false,
      discovered: false,
      showStreamingLinks: false,
      backgroundColor: DEFAULT_BACKGROUND_FALLBACK_COLOR,
      currentTime: 0,
      duration: 0,
    });
  },

  playPrevious: () => {
    const newIndex = (get().currentSongIndex - 1 + songs.length) % songs.length;
    set({ currentSongIndex: newIndex, isPlaying: true });
  },

  handleSeek: (e: { currentTarget: { getBoundingClientRect: () => any; }; clientX: number; }) => {
    const { audio, setCurrentTime } = get();
    if (audio) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      const seekTime = (x / width) * audio.duration;
      audio.currentTime = seekTime;
      set({ currentTime: seekTime });
    }
  },


  handleDiscover: () => {
    set({ discovered: true, showStreamingLinks: true });
  },

  setAudio: (newAudio) => {
    const { audio: oldAudio } = get();
    if (oldAudio) {
      oldAudio.pause();
      oldAudio.src = "";
      oldAudio.removeEventListener("loadedmetadata", () => {});
      oldAudio.removeEventListener("timeupdate", () => {});
      oldAudio.removeEventListener("ended", get().playNext);
    }

    if (newAudio) {
      set({ audio: newAudio });
      newAudio.play().catch((error) => console.error("Playback failed:", error));
    } else {
      console.error("newAudio is null");
    }
  },

 
}));
