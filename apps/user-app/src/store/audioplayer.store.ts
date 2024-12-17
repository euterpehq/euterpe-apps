import { create } from 'zustand';
import { Song, songs } from '@/data/songs';
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
  albumSongs: Song[];
  setAlbumSongs: (songs: Song[]) => void;
  setCurrentSongIndex: (index: number) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setDiscovered: (discovered: boolean) => void;
  setIsClaimed: (isClaimed: boolean) => void;
  setCanClaimReward: (canClaimReward: boolean) => void;
  setShowStreamingLinks: (value: boolean) => void;
  setCurrentTime: (time: number) => void;
  setDuration: (duration: number) => void;
  togglePlayPause: () => void;
  playSong: (songId: number) => void;
  playNext: () => void;
  playPrevious: () => void;
  handleSeek: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  hasUserInteraction: boolean;
  setHasUserInteraction: (hasUserInteraction: boolean) => void;
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
  hasUserInteraction: false,
  albumSongs: songs,

  setAlbumSongs: (songs) => set({ albumSongs: songs }),
  setHasUserInteraction: (value) => set({ hasUserInteraction: value }),
  setCurrentTime: (time) => set({ currentTime: time }),
  setDuration: (duration) => set({ duration }),
  setShowStreamingLinks: (value) => set({ showStreamingLinks: value }),
  setDiscovered: (value) => set({ discovered: value }),
  setCurrentSongIndex: (index) => set({ currentSongIndex: index }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setIsClaimed: (isClaimed) => set({ isClaimed }),
  setCanClaimReward: (canClaimReward) => set({ canClaimReward }),

  /*togglePlayPause: () => {
    const { audio, isPlaying, currentSongIndex, setAudio, albumSongs, playNext } = get();
  
    // Ensure there are songs in the album and the currentSongIndex is valid
    if (albumSongs.length === 0 || currentSongIndex < 0 || currentSongIndex >= albumSongs.length) {
      console.error("Invalid song index. Cannot toggle play/pause.");
      return;
    }
  
    const song = albumSongs[currentSongIndex];
  
    if (!song) {
      console.error("Song not found at current index.");
      return;
    }
  
    if (!audio) {
      const newAudio = new Audio(song.url);
  
      // Handle audio events for time updates and end of song
      newAudio.addEventListener("loadedmetadata", () => set({ duration: newAudio.duration }));
      newAudio.addEventListener("timeupdate", () => set({ currentTime: newAudio.currentTime }));
      newAudio.addEventListener("ended", () => playNext());
  
      setAudio(newAudio);
  
      // Play the audio
      newAudio.play().catch((err) => {
        console.error("Playback error:", err);
      });
  
      set({ isPlaying: true });
    } else {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch((err) => {
          console.error("Playback error:", err);
        });
      }
      set({ isPlaying: !isPlaying });
    }
  },*/
  

  togglePlayPause: () => {
    const { audio, isPlaying, currentSongIndex, setAudio, hasUserInteraction, playNext } = get();
    const song = songs[currentSongIndex];

    if (!song) {
      console.error("Invalid song index. Cannot toggle play/pause.");
      return;
    }

    if (!hasUserInteraction) {
      console.warn("User interaction required to start playback.");
      return;
    }

    let currentAudio = audio;
    if (!currentAudio) {
      currentAudio = new Audio(song.url);

      const handleLoadedMetadata = () => set({ duration: currentAudio?.duration });
      const handleTimeUpdate = () => set({ currentTime: currentAudio?.currentTime });
      const handleAudioEnd = () => playNext();

      currentAudio.addEventListener("loadedmetadata", handleLoadedMetadata);
      currentAudio.addEventListener("timeupdate", handleTimeUpdate);
      currentAudio.addEventListener("ended", handleAudioEnd);

      setAudio(currentAudio);

      if (audio) {
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("ended", handleAudioEnd);
      }
    }

    if (isPlaying) {
      currentAudio.pause();
    } else {
      currentAudio.play().catch((err) => {
        console.error("Playback error:", err);
        if (err.name === "NotAllowedError") {
          console.warn("Autoplay restrictions prevent playback.");
        }
      });
    }

    set({ isPlaying: !isPlaying });
  },

  /*togglePlayPause: () => {
    const { audio, isPlaying, currentSongIndex, setAudio, albumSongs, playNext, hasUserInteraction } = get();
    
    // Ensure there are songs in the album and the currentSongIndex is valid
    /*if (albumSongs.length === 0 || currentSongIndex < 0 || currentSongIndex >= albumSongs.length) {
      console.error("Invalid song index. Cannot toggle play/pause.");
      return;
    }

    const song = songs[currentSongIndex];

    if (!song) {
      console.error("Song not found at current index.");
      return;
    }

    // Handle user interaction check
    if (!hasUserInteraction) {
      console.warn("User interaction required to start playback.");
      return;
    }

    // If there's no existing audio, create a new audio element
    let currentAudio = audio;
    if (!currentAudio) {
      currentAudio = new Audio(song.url);

      // Handle audio events for time updates and end of song
      const handleLoadedMetadata = () => set({ duration: currentAudio?.duration });
      const handleTimeUpdate = () => set({ currentTime: currentAudio?.currentTime });
      const handleAudioEnd = () => playNext();

      currentAudio.addEventListener("loadedmetadata", handleLoadedMetadata);
      currentAudio.addEventListener("timeupdate", handleTimeUpdate);
      currentAudio.addEventListener("ended", handleAudioEnd);

      setAudio(currentAudio);

      // Remove previous audio event listeners if there's any active audio
      if (audio) {
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("ended", handleAudioEnd);
      }
    }

    // Play or pause the audio based on the current state
    if (isPlaying) {
      currentAudio.pause();
    } else {
      currentAudio.play().catch((err) => {
        console.error("Playback error:", err);
        if (err.name === "NotAllowedError") {
          console.warn("Autoplay restrictions prevent playback.");
        }
      });
    }

    // Toggle the playing state
    set({ isPlaying: !isPlaying });
  },*/

  playNext: () => {
    const {
      audio,
      currentSongIndex,
      setAudio,
      isPlaying,
      setCurrentTime,
      setDuration,
      hasUserInteraction,
      setCurrentSongIndex,
      albumSongs,
    } = get();

    if (!hasUserInteraction) {
      console.warn("User interaction required to play the next song.");
      return;
    }

    if (!albumSongs || albumSongs.length === 0) {
      console.warn("No songs available in the album.");
      return;
    }

    if (audio) {
      audio.pause();
      audio.src = "";
      audio.removeEventListener("loadedmetadata", () => {});
      audio.removeEventListener("timeupdate", () => {});
      audio.removeEventListener("ended", get().playNext);
    }

    const nextSongIndex = (currentSongIndex + 1) % albumSongs.length;
    const nextSong = albumSongs[nextSongIndex];

    if (!nextSong) {
      console.warn("No next song found.");
      return;
    }

    const newAudio = new Audio(nextSong.url);

    const handleLoadedMetadata = () => {
      setDuration(newAudio.duration);
      if (isPlaying) {
        newAudio.play().catch((err) => console.error("Playback failed:", err));
      }
    };

    const handleTimeUpdate = () => {
      setCurrentTime(newAudio.currentTime);
    };

    newAudio.addEventListener("loadedmetadata", handleLoadedMetadata);
    newAudio.addEventListener("timeupdate", handleTimeUpdate);
    newAudio.addEventListener("ended", get().playNext);

    setAudio(newAudio);
    setCurrentSongIndex(nextSongIndex);
    set({
      currentTime: 0,
      duration: 0,
      isPlaying: true,
      canClaimReward: false,
      isClaimed: false,
      discovered: false,
      showStreamingLinks: false,
    });
  },

  playSong: (songId: number) => {
    const { setCurrentSongIndex, setAudio, setIsPlaying, setCurrentTime, setDuration } = get();

    const songIndex = songs.findIndex((song) => song.id === songId);
    if (songIndex === -1) return;

    setCurrentSongIndex(songIndex);
    setCurrentTime(0);
    setDuration(0);

    const newAudio = new Audio(songs[songIndex].url);

    // Handle audio events for time updates and end of song
    newAudio.addEventListener("loadedmetadata", () => setDuration(newAudio.duration));
    newAudio.addEventListener("timeupdate", () => setCurrentTime(newAudio.currentTime));
    newAudio.addEventListener("ended", () => get().playNext());

    setAudio(newAudio);
    set({ isPlaying: true });

    newAudio.play().catch((err) => console.error("Playback error:", err));
  },

  playPrevious: () => {
    const { currentSongIndex, setCurrentSongIndex, albumSongs } = get();
    const prevIndex = (currentSongIndex - 1 + albumSongs.length) % albumSongs.length;
    setCurrentSongIndex(prevIndex);
  },

  handleSeek: (e) => {
    const { audio, setCurrentTime } = get();
    if (audio) {
      const rect = e.currentTarget.getBoundingClientRect();
      const seekTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
      audio.currentTime = seekTime;
      setCurrentTime(seekTime);
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

    set({ audio: newAudio });

    if (newAudio) {
      newAudio.play().catch((err) => console.error("Playback failed:", err));
    }
  },
}));
