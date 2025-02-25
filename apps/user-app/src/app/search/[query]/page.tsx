import { searchMusic } from "@/lib/queries/search/search"; // import the server-side data fetching function
import { Album, ArtistProfile, Song } from "@/lib/queries/supabaseQueries";
import React from "react";
import SearchResults from "../_component/search-result"; // Import SearchResults component
import Header from "@/components/header";
import { notFound } from "next/navigation";
import AudioMiniPlayer from "@/components/audio-player/audio-mini-player";
import { UserInteractionTracker } from "@/components/audio-player/UserInteractionTracker";
import { AudioInitializer } from "@/components/audio-player/AudioInitializer";
import ModalPlayer from "@/components/audio-player/modal-player";
import SearchResultsWrapper from "../_component/search-result-wrapper";

interface SearchPageProps {
  params: Promise<{ query: string }>; // Search query parameter
}

export default async function SearchPage({ params }: SearchPageProps) {
  const { query: searchTerm } = await params;

  const decodedQuery = decodeURIComponent(searchTerm);

  if (!decodedQuery.trim()) {
    return notFound(); // Show 404 if there's no query
  }

  /*let { artists, tracks, albums } = await searchMusic(decodedQuery);

  artists = artists || [];
  tracks = tracks || [];
  albums = albums || [];

  console.log({artists, tracks, albums})

  const combinedResults = [
    ...artists.map((item) => ({ ...item, type: "Artist" as const })),
    ...tracks.map((item) => ({ ...item, type: "Song" as const })),
    ...albums.map((item) => ({ ...item, type: "Album" as const })),
  ];*/
        
 
  return (
    <div>
       <UserInteractionTracker />
            <AudioInitializer />
            <ModalPlayer />
      <Header />
      {searchTerm ? (
       <SearchResultsWrapper query={decodedQuery} />
       
      ) : (
        <p>Please provide a search term in the query string.</p>
      )}
     <AudioMiniPlayer />
    </div>
  );
}
{/*<SearchResults results={combinedResults} />*/}











 // Fetch all data from the server-side
 /* const { artists, songs, albums } = await fetchAllData();

  // Client-side filtering based on the search term
  const filteredArtists = artists.filter((artist) =>
    artist.artist_name?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const filteredAlbums = albums.filter((album) =>
    album.title?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const filteredSongs = songs.filter((song) =>
    song.track_title?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Combine all filtered results
  const combinedResults = [
    ...filteredArtists.map((item) => ({ ...item, type: "Artist" as const })),
    ...filteredSongs.map((item) => ({ ...item, type: "Song" as const })),
    ...filteredAlbums.map((item) => ({ ...item, type: "Album" as const })),
  ];*/
