import { Database } from "@/types/database.types";
import { createClient } from "../../supabase/client";

const supabase = createClient();

export type ArtistProfile = Database["public"]["Tables"]["artist_profiles"]["Row"];

// Fetch a single artist by ID
export const fetchArtistById = async (artistId: string): Promise<ArtistProfile | null> => {
    const { data, error } = await supabase
        .from("artist_profiles")
        .select("*")
        .eq("id", artistId)
        .single(); // Use .single() to get a single record

    if (error) {
        throw new Error(error.message);
    }

    return data as ArtistProfile | null; // Return null if no artist is found
};

