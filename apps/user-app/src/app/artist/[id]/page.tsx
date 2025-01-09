import "server-only";
import { getArtistById } from "@/lib/queries/artist/get-artist-by-id";
import { getAlbums } from "@/lib/queries/album/get-albums";
import ArtistPage from "../_components/artist-page";
import { getArtists } from "@/lib/queries/artist/get-artists";

export type ArtistPageRouteProps = {
  params: Promise<{ id: string }>;
};

export default async function ArtistPageRoute({ params }: ArtistPageRouteProps){
  const { id: artistId } = await params;

  const artist = await getArtistById(artistId);
  if (!artist) {
    return <div>Artist not found</div>;
  }

  const albums = await getAlbums();

  const artists = await getArtists();
 

    return (
      <>
       <ArtistPage artist={artist} albums={albums} artists={artists}/>
      </>
      
    )
}


