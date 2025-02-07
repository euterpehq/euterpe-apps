import { fetchAllData } from "@/lib/queries/search/search"; // import the server-side data fetching function
import { Album, ArtistProfile, Song } from "@/lib/queries/supabaseQueries";
import React from "react";
import SearchResults from "../_component/search-result"; // Import SearchResults component
import Header from "@/components/header";

interface SearchPageProps {
  params: Promise<{ query: string }>; // Search query parameter
}

export default async function SearchPage({ params }: SearchPageProps) {
  const { query: searchTerm } = await params;

  // Fetch all data from the server-side
  const { artists, songs, albums } = await fetchAllData();

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
  ];

  return (
    <div>
      <Header />
      {searchTerm ? (
        <SearchResults results={combinedResults} />
      ) : (
        <p>Please provide a search term in the query string.</p>
      )}
    </div>
  );
}
