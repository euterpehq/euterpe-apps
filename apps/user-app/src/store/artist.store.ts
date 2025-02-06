import {create, StateCreator } from "zustand"
import {  ArtistProfile, fetchArtistProfiles } from "@/lib/queries/supabaseQueries"

type ArtistStore = {
    artists: ArtistProfile[];
    loading: boolean;
    error: string | null;
    fetchArtist: () => Promise<void>;
}

const useArtistStore = create<ArtistStore>((set: Parameters<StateCreator<ArtistStore>>[0]) => ({
    artists: [],
    loading: false,
    error: null,
    fetchArtist: async () => {
        set({loading: true, error: null});
        try{
            const data = await fetchArtistProfiles();
            set({artists: data, loading: false});
        } catch (error: any) {
            set({error: error.message, loading: false});
        }
        
    }
}))


export default useArtistStore

