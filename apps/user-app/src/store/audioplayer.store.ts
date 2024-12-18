import { create } from 'zustand';
import { fetchSongs, Song } from '@/lib/queries/supabaseQueries';

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
  fetchAndSetSongs: () => Promise<void>;
  setCurrentSongIndex: (index: number) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setDiscovered: (discovered: boolean) => void;
  setIsClaimed: (isClaimed: boolean) => void;
  setCanClaimReward: (canClaimReward: boolean) => void;
  setShowStreamingLinks: (value: boolean) => void;
  setCurrentTime: (time: number) => void;
  setDuration: (duration: number) => void;
  togglePlayPause: () => void;
  playSong: (songId: string) => void;
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
  albumSongs: [],

  fetchAndSetSongs: async () => {
    try {
      const songs = await fetchSongs(); // Fetch songs from external API
      set({ albumSongs: songs });
    } catch (error) {
      console.error('Failed to fetch songs:', error);
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

  togglePlayPause: () => {
    const {
      audio,
      isPlaying,
      currentSongIndex,
      setAudio,
      hasUserInteraction,
      playNext,
      albumSongs,
    } = get();

    if (!albumSongs.length) {
      console.error('No songs available to play.');
      return;
    }

    const song = albumSongs[currentSongIndex];
    if (!song) {
      console.error('Invalid song index. Cannot toggle play/pause.');
      return;
    }

    if (!hasUserInteraction) {
      console.warn('User interaction required to start playback.');
      return;
    }

    if (!song.audio_file_url) {
      console.warn('No next song found.');
      return;
    }

    let currentAudio = audio;
    if (!currentAudio) {
      currentAudio = new Audio(song.audio_file_url);

      const handleLoadedMetadata = () => set({ duration: currentAudio?.duration });
      const handleTimeUpdate = () => set({ currentTime: currentAudio?.currentTime });
      const handleAudioEnd = () => playNext();

      currentAudio.addEventListener('loadedmetadata', handleLoadedMetadata);
      currentAudio.addEventListener('timeupdate', handleTimeUpdate);
      currentAudio.addEventListener('ended', handleAudioEnd);

      setAudio(currentAudio);
    }

    if (isPlaying) {
      currentAudio.pause();
    } else {
      currentAudio.play().catch((err) => {
        console.error('Playback error:', err);
      });
    }

    set({ isPlaying: !isPlaying });
  },

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
      console.warn('User interaction required to play the next song.');
      return;
    }

    

    const nextSongIndex = (currentSongIndex + 1) % albumSongs.length;
    const nextSong = albumSongs[nextSongIndex];

    if (!nextSong.audio_file_url) {
      console.warn('No next song found.');
      return;
    }

    

    if (audio) {
      audio.pause();
      audio.src = '';
      audio.removeEventListener('ended', get().playNext);
    }

    const newAudio = new Audio(nextSong.audio_file_url);

    newAudio.addEventListener('loadedmetadata', () => {
      setDuration(newAudio.duration);
      if (isPlaying) {
        newAudio.play().catch((err) => console.error('Playback failed:', err));
      }
    });

    newAudio.addEventListener('timeupdate', () => set({ currentTime: newAudio.currentTime }));
    newAudio.addEventListener('ended', get().playNext);

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

  playSong: (songId: string) => {
    const { setCurrentSongIndex, setAudio, setIsPlaying, setCurrentTime, setDuration, albumSongs } = get();

    const songIndex = albumSongs.findIndex((song) => song.id === songId);
    if (songIndex === -1) return;

    setCurrentSongIndex(songIndex);
    setCurrentTime(0);
    setDuration(0);

    const song = albumSongs[songIndex];
    
    if (!song.audio_file_url) {
      console.warn('No next song found.');
      return;
    }
    const newAudio = new Audio(song.audio_file_url);

    newAudio.addEventListener('loadedmetadata', () => setDuration(newAudio.duration));
    newAudio.addEventListener('timeupdate', () => setCurrentTime(newAudio.currentTime));
    newAudio.addEventListener('ended', () => get().playNext());

    setAudio(newAudio);
    set({ isPlaying: true });

    newAudio.play().catch((err) => console.error('Playback error:', err));
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
      oldAudio.src = '';
    }

    set({ audio: newAudio });

    if (newAudio) {
      newAudio.play().catch((err) => console.error('Playback failed:', err));
    }
  },
}));