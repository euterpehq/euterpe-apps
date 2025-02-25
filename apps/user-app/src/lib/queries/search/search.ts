import "server-only";
import { createClient } from "../../supabase/server";
import { Album, ArtistProfile, Song } from "../supabaseQueries";




export const searchMusic = async (searchTerm: string) => {
  const supabase = await createClient();

  // Fetch all data upfront (used for fallback)
  const { data: allArtists } = await supabase.from("artist_profiles").select("*");
  const { data: allTracks } = await supabase.from("tracks").select("*");
  const { data: allAlbums } = await supabase.from("albums").select("*");

  // If no search term, return all data
  if (!searchTerm) {
    return { artists: allArtists, tracks: allTracks, albums: allAlbums };
  }

  //  Search for matching Artists
  const { data: artists } = await supabase
    .from("artist_profiles")
    .select("*")
    .ilike("artist_name", `%${searchTerm}%`);

  // Step 2: Search for matching Tracks
  const { data: tracks } = await supabase
    .from("tracks")
    .select("*")
    .ilike("track_title", `%${searchTerm}%`);

  // Search for matching Albums
  const { data: albums } = await supabase
    .from("albums")
    .select("*")
    .ilike("title", `%${searchTerm}%`);

  //If artists are found, fetch their related tracks and albums
  let extendedTracks = tracks || [];
  let extendedAlbums = albums || [];
  let extendedArtists = artists || [];

  if (artists && artists.length > 0) {
    const artistIds = artists.map((artist) => artist.id);

    const { data: artistAlbums } = await supabase
      .from("albums")
      .select("*")
      .in("artist_id", artistIds);

      const albumIds = artistAlbums?.map((album) => album.id) || [];
      const { data: artistTracks } = await supabase
      .from("tracks")
      .select("*")
      .in("album_id", albumIds);

    extendedTracks = [...extendedTracks, ...(artistTracks || [])];
    extendedAlbums = [...extendedAlbums, ...(artistAlbums || [])];
  }

  // If albums are found, fetch the related artist and tracks
  if (albums && albums.length > 0) {
    const albumIds = albums.map((album) => album.id);

    // Fetch the artist related to these albums
    const { data: albumArtists } = await supabase
      .from("albums")
      .select("artist_id")
      .in("id", albumIds);

    const artistIds = albumArtists?.map((album) => album.artist_id) || [];

    // Fetch tracks for these albums
    const { data: albumTracks } = await supabase
      .from("tracks")
      .select("*")
      .in("album_id", albumIds);

    // Fetch the artists related to the found tracks
    const { data: artistTracks } = await supabase
      .from("tracks")
      .select("*")
      .in("album_id", albumIds);

    extendedTracks = [...extendedTracks, ...(albumTracks || [])];
    extendedAlbums = [...extendedAlbums, ...(albums || [])];

    // Fetch the artists for the found album tracks
    if (artistIds.length > 0) {
      const { data: albumArtistsDetails } = await supabase
        .from("artist_profiles")
        .select("*")
        .in("id", artistIds);
      
      extendedArtists = [...extendedArtists, ...(albumArtistsDetails || [])];
    }
  }

  // If tracks are found, fetch the related album and artist
  if (tracks && tracks.length > 0) {
    const trackAlbumIds = tracks.map((track) => track.album_id);

 
    const { data: trackAlbums } = await supabase
      .from("albums")
      .select("*")
      .in("id", trackAlbumIds);

    
    const artistIds = trackAlbums?.map((album) => album.artist_id) || [];

    
    const { data: trackArtistTracks } = await supabase
      .from("tracks")
      .select("*")
      .in("album_id", trackAlbumIds);

    extendedTracks = [...extendedTracks, ...(trackArtistTracks || [])];
    extendedAlbums = [...extendedAlbums, ...(trackAlbums || [])];

    
    if (artistIds.length > 0) {
      const { data: trackArtistsDetails } = await supabase
        .from("artist_profiles")
        .select("*")
        .in("id", artistIds);
      
      extendedArtists = [...extendedArtists, ...(trackArtistsDetails || [])];
    }
  }



  const totalResults =
    (artists?.length || 0) + (extendedTracks?.length || 0) + (extendedAlbums?.length || 0);

  if (totalResults < 7) {
    return {
      artists: [...extendedArtists, ...(allArtists || [])],
      tracks: [...extendedTracks, ...(allTracks || [])],
      albums: [...extendedAlbums, ...(allAlbums || [])],
    };
  }

  return {
    artists: extendedArtists,
    tracks: extendedTracks,
    albums: extendedAlbums,
  };
};




