import { Database } from "@/types/database.types";
import { createClient } from "../../supabase/client";

const supabase = createClient();

export type ArtistProfile = Database["public"]["Tables"]["artist_profiles"]["Row"];

// Fetch all artist profiles
export const getArtists = async (): Promise<ArtistProfile[]> => {
    const { data, error } = await supabase.from("artist_profiles").select("*");
    if (error) {
        throw new Error(error.message);
    }
    return data as ArtistProfile[];
};