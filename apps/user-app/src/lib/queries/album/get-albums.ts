import { Database } from "@/types/database.types";
import { createClient } from "../../supabase/client";

const supabase = createClient();

export type Album = Database["public"]["Tables"]["albums"]["Row"];

// Fetch all albums
export const fetchAlbums = async (): Promise<Album[]> => {
    const { data, error } = await supabase.from("albums").select("*");
    if (error) {
        throw new Error(error.message);
    }
    return data as Album[];
};