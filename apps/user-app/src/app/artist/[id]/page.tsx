"server only";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { getArtistById } from "@/lib/queries/artist/get-artist-by-id";
import { getAlbums } from "@/lib/queries/album/get-albums";
import ArtistPage from "../_components/artist-page";



export default async function ArtistPageRoute({ params: incomingParam }: { params: Promise<{ id: string }> }){
    const queryClient = new QueryClient();
  
    const {id: artistId} =  await incomingParam;

  // Prefetch the artist by ID
    await queryClient.prefetchQuery({
      queryKey: ['artist', artistId],
      queryFn: () => getArtistById(artistId)
    })

    // Prefetch albums
    await queryClient.prefetchQuery({
      queryKey: ["albums"],
      queryFn: getAlbums,
    })

    return (
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ArtistPage artistId={artistId}/>
      </HydrationBoundary>
    )
}


