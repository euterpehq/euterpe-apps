import useArtistStore from "@/store/artist.store";
import { useAudioPlayerStore } from "@/store/audioplayer.store";
import { useEffect } from "react";
import { Database } from "@/types/database.types";
import { format } from "date-fns";

type Prop = {
  album: Database["public"]["Tables"]["albums"]["Row"];
};

export default function AlbumSongs({ album }: Prop) {
  const { setCurrentSongIndex, playNext, playSong, setDiscovered, albumSongs } =
    useAudioPlayerStore();
  const { artists, fetchArtist } = useArtistStore();

  useEffect(() => {
    fetchArtist();
  }, [fetchArtist]);

  if (!album || !album.id) {
    console.error("Album data is missing or invalid.");
    return null;
  }

  const albumSong = albumSongs.filter((song) => song.album_id === album.id);

  const artist = artists.find((a) => a.id === album?.artist_id);

  if (!artist) {
    console.warn("Artist not found for album:", album);
  }

  const length = albumSong.slice(0, 5).length;

  const handleSongClick = (index: number) => {
    if (albumSong[index]) {
      setCurrentSongIndex(index);
      playSong(albumSong[index].id);
    } else {
      console.error("Song not found at index", index);
    }
    setDiscovered(true);
  };

  return (
    <div className="mt-4">
      {albumSong.map((song, index) => (
        <div
          key={song.id}
          className="flex cursor-pointer items-center gap-6 px-[24px] py-4"
          onClick={() => handleSongClick(index)}
        >
          <p className="text-sm text-[#868B9F]">{index + 1}</p>
          <div className="flex w-full items-center justify-between">
            <div>
              <h1 className="text-[14px] font-medium tracking-[-0.28px]">
                {song.track_title}
              </h1>
              <p className="text-[12px] tracking-[-0.34px] text-[#B1B5C5]">
                {artist?.artist_name}
              </p>
            </div>
            <p className="text-[#B1B5C5]">2:44</p>
          </div>
        </div>
      ))}
      <div className="flex w-full flex-col gap-1 bg-[#181818] px-[24px] py-4">
        <p className="font-figtree text-[12px] text-[#B1B5C5]">
          {length} Songs, 10 minutes
        </p>
        <p className="font-figtree text-[12px] text-[#61667B]">
          {album?.release_date &&
            format(new Date(album.release_date), "dd MMMM yyyy")}
        </p>
      </div>
    </div>
  );
}
