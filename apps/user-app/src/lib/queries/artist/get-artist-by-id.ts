import "server-only";
import { Database } from "@/types/database.types";
import { createClient } from "../../supabase/server";



export type ArtistProfile = Database["public"]["Tables"]["artist_profiles"]["Row"];

// Fetch a single artist by ID
export const getArtistById = async (artistId: string): Promise<ArtistProfile | null> => {
    const supabase = await createClient();
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

