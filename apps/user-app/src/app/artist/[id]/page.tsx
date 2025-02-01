
import { getArtistById } from "@/lib/queries/artist/get-artist-by-id";
import { getAlbums } from "@/lib/queries/album/get-albums";
import { getArtists } from "@/lib/queries/artist/get-artists";
import { UserInteractionTracker } from "@/components/audio-player/UserInteractionTracker";
import { AudioInitializer } from "@/components/audio-player/AudioInitializer";
import Header from "@/components/header";
import ArtistDiscography from "../_components/artist-discography";
import ModalPlayer from "@/components/audio-player/modal-player";
import ArtistHeader from "../_components/artist-header";
import ArtistDescription from "../_components/artist-description";
import ArtistSongs from "../_components/artist-songs";
import ArtistHorizontalSlider from "@/components/Homepage/artists-horizontal-slider";
import AudioMiniPlayer from "@/components/audio-player/audio-mini-player";

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

  
  if (!albums) {
      return <div>No albums found</div>;
  }

  return (
    <div className="mb-[10rem]">
      <UserInteractionTracker />
      <AudioInitializer />
      <Header />
     <ModalPlayer />
      <ArtistHeader artist={artist} />
      <ArtistDescription artist={artist} />
      <ArtistSongs artist={artist} albums={albums} />
      <div className="md:my-20 my-10 h-[400px] w-full ">
        <h1 className="pb-10 font-figtree text-[20px] font-semibold tracking-[-0.4px] pl-[24px]">
          Discograpy
        </h1>
        <ArtistDiscography />
      </div>
      <div className="md:my-[20px] ">
        <h1 className="pb-10 font-figtree text-[20px] font-semibold tracking-[-0.4px] pl-[24px]">
          Similar Artists
        </h1>
        <ArtistHorizontalSlider artists={artists} />
      </div>
       <AudioMiniPlayer />
    </div>
  );
}


