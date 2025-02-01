import { create, StateCreator } from "zustand";
import { fetchAlbums, Album } from "@/lib/queries/supabaseQueries";

type AlbumStore = {
  albums: Album[];
  loading: boolean;
  error: string | null;
  fetchAlbum: () => Promise<void>;
};

const useAlbumStore = create<AlbumStore>(
  (set: Parameters<StateCreator<AlbumStore>>[0]) => ({
    albums: [],
    loading: false,
    error: null,
    fetchAlbum: async () => {
      set({ loading: true, error: null });
      try {
        const data = await fetchAlbums();
        set({ albums: data, loading: false });
      } catch (error: any) {
        set({ error: error.message, loading: false });
      }
    },
  }),
);

export default useAlbumStore;
