"server only";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { getArtists } from "@/lib/queries/artist/get-artists";
import AlbumPage from "../_components/album-page";
import { getAlbumById } from "@/lib/queries/album/get-album-by-id";

export default async function AlbumPageRoute({ params: incomingParam }: { params: Promise<{ id: string }> }){
    const queryClient = new QueryClient();
  
    const {id: albumId} =  await incomingParam;

  // Prefetch the artist by ID
    await queryClient.prefetchQuery({
      queryKey: ['album', albumId],
      queryFn: () => getAlbumById(albumId)
    })

    // Prefetch albums
    await queryClient.prefetchQuery({
      queryKey: ["artists"],
      queryFn: getArtists,
    })

    return (
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AlbumPage albumId={albumId}/>
      </HydrationBoundary>
    )
}


