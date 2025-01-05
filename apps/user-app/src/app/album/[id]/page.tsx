import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { fetchArtistProfiles } from "@/lib/queries/artist/get-artists";
import AlbumPage from "../components/album-page";
import { fetchAlbumById } from "@/lib/queries/album/get-album";
import { fetchAlbums } from "@/lib/queries/album/get-albums";

// Pre-fetch static paths at build time
export async function generateStaticParams() {
  const albums = await fetchAlbums();
  return albums.map((album) => ({
    id: album.id.toString(), 
  }));
}


export default async function AlbumPageRoute({ params: incomingParam }: { params: Promise<{ id: string }> }){
    const queryClient = new QueryClient();
  
    const {id: albumId} =  await incomingParam;

  // Prefetch the artist by ID
    await queryClient.prefetchQuery({
      queryKey: ['album', albumId],
      queryFn: () => fetchAlbumById(albumId)
    })

    // Prefetch albums
    await queryClient.prefetchQuery({
      queryKey: ["artists"],
      queryFn: fetchArtistProfiles,
    })

    return (
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AlbumPage albumId={albumId}/>
      </HydrationBoundary>
    )
}


