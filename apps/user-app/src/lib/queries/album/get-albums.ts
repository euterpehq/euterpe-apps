import "server-only";
import { Database } from "@/types/database.types";
import { createClient } from "../../supabase/server";



export type Album = Database["public"]["Tables"]["albums"]["Row"];

// Fetch all albums
export const getAlbums = async (): Promise<Album[]> => {
    const supabase = await createClient();
    const { data, error } = await supabase.from("albums").select("*").order('created_at', { ascending: true });
    if (error) {
        throw new Error(error.message);
    }
    return data as Album[];
};