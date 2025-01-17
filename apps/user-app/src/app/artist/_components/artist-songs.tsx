/* eslint-disable @next/next/no-img-element */
"use client";
import { Album} from "@/lib/queries/supabaseQueries";
import { useAudioPlayerStore } from "@/store/audioplayer.store";
import { useMiniPlayerStore } from "@/store/miniplayer.store";


type Prop = {
  artist: any;
  albums: Album[];
};

export default function ArtistSongs({ artist, albums }: Prop) {
  const { setCurrentSongIndex, playNext, playSong, setDiscovered, albumSongs } =
    useAudioPlayerStore();

  const { showMiniPlayer } = useMiniPlayerStore();
  // Filter albums for the selected artist
  const artistAlbums = albums.filter((album) => album.artist_id === artist.id);
  const albumIDD = artistAlbums.find((a) => a.id);

  const albumSong = artistAlbums.flatMap((album) => {
    const song = albumSongs.find((song) => song.album_id === album.id);
    return song ? [song] : [];
  });

  const handleSongClick = (index: number) => {
    if (albumSong[index]) {
      setCurrentSongIndex(index);
      playSong(albumSong[index].id);
    } else {
      console.error("Song not found at index", index);
    }
    showMiniPlayer();
    setDiscovered(true);
  };

  return (
    <div className="mt-0 w-full px-[24px]">
      <div className="border-b-[0.5px] border-t-[0.5px] border-[#303033] pb-4 pt-8">
        <div className="flex flex-col gap-8">
          <h1 className="font-figtree text-[20px] font-semibold tracking-[-0.4px]">
            Top Songs
          </h1>
          <div className="grid w-full md:grid-cols-2 grid-cols-1 md:gap-20 gap-10 px-[30px]">
            <div className="flex flex-col md:gap-[24px] gap-10">
              {albumSong.slice(0, 3).map((song, index) => {
                const findAlbum = artistAlbums.find(
                  (album) => album.id === song.album_id,
                );
                return (
                  <div
                    key={song.id}
                    className="flex h-[67px] items-center justify-between cursor-pointer"
                    onClick={() => handleSongClick(index)}
                  >
                    <div className="flex items-center gap-4">
                      <p className="text-sm text-[#868B9F]">{index + 1}</p>
                      <div className="h-[50px] w-[50px]">
                        <img
                          src={findAlbum?.cover_image_url ?? ""}
                          alt={findAlbum?.title || "Album Cover"}
                          className="h-full w-full rounded-[4px] object-cover"
                        />
                      </div>
                      <div>
                        <h1 className="font-figtree text-[14px] tracking-[-0.28px]">
                          {song.track_title}
                        </h1>
                        <p className="font-figtree text-[12px] tracking-[-0.24px] text-[#B1B5C5]">
                          {artist.artist_name}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="font-figtree text-[12px] tracking-[-0.24px] text-[#B1B5C5]">
                        2:44
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col md:gap-[24px] gap-10">
              {albumSong.slice(3, 6).map((song, index) => {
                const findAlbum = artistAlbums.find(
                  (album) => album.id === song.album_id,
                );
                return (
                  <div
                    key={song.id}
                    className="flex items-center justify-between"
                    onClick={() => handleSongClick(index)}
                  >
                    <div className="flex items-center gap-[10px]">
                      <p className="text-[#B1B5C5]">{index + 1}</p>
                      <div className="h-[50px] w-[50px]">
                        <img
                          src={findAlbum?.cover_image_url ?? ""}
                          alt={findAlbum?.title || "Album Cover"}
                        />
                      </div>
                      <div>
                        <h1 className="font-figtree text-[14px] tracking-[-0.28px]">
                          {song.track_title}
                        </h1>
                        <p className="font-figtree text-[12px] tracking-[-0.24px] text-[#B1B5C5]">
                          {artist.artist_name}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="font-figtree text-[12px] tracking-[-0.24px] text-[#B1B5C5]">
                        2:44
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
