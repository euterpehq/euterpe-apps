import { Database } from "@/types/database.types";
import { createClient } from "../../supabase/client";

const supabase = createClient();


export type Song = Database["public"]["Tables"]["tracks"]["Row"];

// Fetch all songs
export const fetchSongs = async (): Promise<Song[]> => {
    const { data, error } = await supabase.from("tracks").select("*");
    if (error) {
        throw new Error(error.message);
    }
    return data as Song[];
};