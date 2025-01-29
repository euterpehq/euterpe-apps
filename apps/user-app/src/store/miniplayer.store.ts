import { create } from 'zustand';

interface MiniPlayerState {
  isVisible: boolean; // Tracks visibility of MiniPlayer
  showMiniPlayer: () => void; // Action to show MiniPlayer
  hideMiniPlayer: () => void; // Action to hide MiniPlayer
}

export const useMiniPlayerStore = create<MiniPlayerState>((set) => ({
  isVisible: false, // Default state is hidden
  showMiniPlayer: () => set({ isVisible: true }),
  hideMiniPlayer: () => set({ isVisible: false }),
}));
