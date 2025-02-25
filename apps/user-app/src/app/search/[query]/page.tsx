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
  params: Promise<{ query: string }>; 
}

export default async function SearchPage({ params }: SearchPageProps) {
  const { query: searchTerm } = await params;

  const decodedQuery = decodeURIComponent(searchTerm);

  if (!decodedQuery.trim()) {
    return notFound(); // Show 404 if there's no query
  }
        
 
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












