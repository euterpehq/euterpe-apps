"use client";

import { useQuery } from "@tanstack/react-query";
import SearchResults from "../_component/search-result";
import { Album, ArtistProfile, Song } from "@/lib/queries/supabaseQueries";
import { fetchSearchResults } from "@/hooks/search-action";

type SearchResultItem =
  | (ArtistProfile & { type: "Artist" })
  | (Album & { type: "Album" })
  | (Song & { type: "Song" });

interface SearchResultsWrapperProps {
  query: string;
}

export default function SearchResultsWrapper({ query }: SearchResultsWrapperProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["searchResults", query],
    queryFn: async () => {
      if (!query.trim()) return { artists: [], tracks: [], albums: [] };
      return fetchSearchResults(query);
    },
    enabled: !!query.trim(),
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  if (isError) return <p>Error fetching search results.</p>;

  const combinedResults: SearchResultItem[] = data
    ? [
        ...(data.artists ?? []).map((item) => ({ ...item, type: "Artist" as const })),
        ...(data.tracks ?? []).map((item) => ({ ...item, type: "Song" as const })),
        ...(data.albums ?? []).map((item) => ({ ...item, type: "Album" as const })),
      ]
    : [];

  return <SearchResults results={combinedResults} />;
}
