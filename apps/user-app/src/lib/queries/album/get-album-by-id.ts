import "server-only";
import { Database } from "@/types/database.types";
import { createClient } from "../../supabase/server";
import { Album } from "./get-albums";



// Fetch a single album by ID
export const getAlbumById = async (albumId: string): Promise<Album | null> => {
    const supabase = await createClient();
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