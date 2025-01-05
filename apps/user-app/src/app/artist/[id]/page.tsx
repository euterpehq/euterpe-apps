import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { fetchArtistById } from "@/lib/queries/artist/get-artist";
import { fetchAlbums } from "@/lib/queries/album/get-albums";
import { fetchArtistProfiles } from "@/lib/queries/artist/get-artists";
import ArtistPage from "../components/artist-page";

// Pre-fetch static paths at build time
export async function generateStaticParams() {
  const artists = await fetchArtistProfiles();
  return artists.map((artist) => ({
    id: artist.id.toString(), 
  }));
}

export default async function ArtistPageRoute({ params: incomingParam }: { params: Promise<{ id: string }> }){
    const queryClient = new QueryClient();
  
    const {id: artistId} =  await incomingParam;

  // Prefetch the artist by ID
    await queryClient.prefetchQuery({
      queryKey: ['artist', artistId],
      queryFn: () => fetchArtistById(artistId)
    })

    // Prefetch albums
    await queryClient.prefetchQuery({
      queryKey: ["albums"],
      queryFn: fetchAlbums,
    })

    return (
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ArtistPage artistId={artistId}/>
      </HydrationBoundary>
    )
}


