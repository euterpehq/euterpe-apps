
import { getAlbumById } from "@/lib/queries/album/get-album-by-id";
import { AudioInitializer } from "@/components/audio-player/AudioInitializer";
import { UserInteractionTracker } from "@/components/audio-player/UserInteractionTracker";
import Header from "@/components/header";
import ModalPlayer from "@/components/audio-player/modal-player";
import AlbumHeader from "../_components/album-header";
import AlbumTrackList from "../_components/album-track-list";
import AudioMiniPlayer from "@/components/audio-player/audio-mini-player";


export type AlbumPageRouteProps = {
  params: Promise<{ id: string }>;
};

export default async function AlbumPageRoute({ params }: AlbumPageRouteProps) {
  const { id: albumId } = await params;
  const album = await getAlbumById(albumId);

  if (!album) {
    return <div>Album not found</div>;
  }

 
  

  return (
    <div>
      <AudioInitializer />
      <UserInteractionTracker />
      <Header />
      <ModalPlayer />
      <AlbumHeader album={album} />
      <AlbumTrackList album={album} />
      <AudioMiniPlayer />
    </div>
  );
}