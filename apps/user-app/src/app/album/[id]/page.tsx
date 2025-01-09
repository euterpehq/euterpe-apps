import "server-only";
import AlbumPage from "../_components/album-page";
import { getAlbumById } from "@/lib/queries/album/get-album-by-id";

export type AlbumPageRouteProps = {
  params: Promise<{ id: string }>;
};


export default async function AlbumPageRoute({ params }: AlbumPageRouteProps){
  const { id: albumId } = await params;
  const album = await getAlbumById(albumId);

  if (!album) {
    return <div>Album not found</div>;
  }

  return (
    <>
      <AlbumPage album={album} />
    </>
  );
}


