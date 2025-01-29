import { Database } from "@/types/database.types";
import { createClient } from "../supabase/client";


const supabase = createClient();

export type ArtistProfile= Database["public"]["Tables"]["artist_profiles"]["Row"]
export type Album= Database["public"]["Tables"]["albums"]["Row"]


export const fetchArtistProfiles = async (): Promise<ArtistProfile[]> =>{
    const {data, error} = await supabase.from("artist_profiles").select("*")
    if(error){
        throw new Error(error.message)
    }

    return data as ArtistProfile[]
} 

export const fetchAlbums = async (): Promise<Album[]> =>{
    const {data, error} = await supabase.from("albums").select("*")
    if(error){
        throw new Error(error.message)
    }

    return data as Album[]
} 

export type Song = Database["public"]["Tables"]["tracks"]["Row"]

export const fetchSongs = async (): Promise<Song[]> =>{
    const {data, error} = await supabase.from("tracks").select("*")
    if(error){
        throw new Error(error.message)
    }

    return data as Song[]
} 
