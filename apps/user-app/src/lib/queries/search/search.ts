import "server-only";
import { createClient } from "../../supabase/server";
import { Album, ArtistProfile, Song } from "../supabaseQueries";

export async function fetchAllData(): Promise<{
  artists: ArtistProfile[];
  songs: Song[];
  albums: Album[];
}> {
  console.log("Fetching all data..."); // Debugging
  const supabase = await createClient();

  // Fetch all artists
  const { data: artistResults, error: artistError } = await supabase
    .from("artist_profiles")
    .select("*");

  // Fetch all albums with artist information
  const { data: albumResults, error: albumError } = await supabase
    .from("albums")
    .select("*, artist_profiles(*)");

  // Fetch all songs with album and artist information
  const { data: songResults, error: songError } = await supabase
    .from("tracks")
    .select("*, albums(artist_profiles(*))");

  // Handle potential errors
  if (artistError || songError || albumError) {
    console.error("Fetching errors:", { artistError, songError, albumError });
  }

  return {
    artists: artistResults ?? [],
    songs: songResults ?? [],
    albums: albumResults ?? [],
  };
}
