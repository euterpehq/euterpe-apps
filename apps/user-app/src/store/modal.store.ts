import { create } from 'zustand';
import { useMiniPlayerStore } from './miniplayer.store';

interface ModalState {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    setModalState: (isOpen: boolean) => void;
}

export const useModalStore = create<ModalState>((set) => ({
    isOpen: false,
    openModal: () => {
        set({ isOpen: true })
        useMiniPlayerStore.getState().showMiniPlayer()
    },
    closeModal: () => {
        set({ isOpen: false })
        useMiniPlayerStore.getState().showMiniPlayer()
    },
    setModalState: (isOpen: boolean) => set({ isOpen }),
}));
