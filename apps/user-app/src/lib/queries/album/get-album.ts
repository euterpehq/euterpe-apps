import { Database } from "@/types/database.types";
import { createClient } from "../../supabase/client";
import { Album } from "./get-albums";

const supabase = createClient();

// Fetch a single album by ID
export const fetchAlbumById = async (albumId: string): Promise<Album | null> => {
    const { data, error } = await supabase
        .from("albums")
        .select("*")
        .eq("id", albumId)
        .single(); // Use .single() to get a single record

    if (error) {
        throw new Error(error.message);
    }

    return data as Album | null; // Return null if no album is found
};