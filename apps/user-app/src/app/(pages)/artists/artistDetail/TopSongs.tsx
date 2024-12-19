/* eslint-disable @next/next/no-img-element */

import { Album, ArtistProfile } from "@/lib/queries/supabaseQueries";
import { useAudioPlayerStore } from "@/store/audioplayer.store";
import { useMiniPlayerStore } from "@/store/miniplayer.store";
import Image from "next/image";



type Prop = {
    artist: any;
    albums: Album[];
  };

export default function TopSongs({artist, albums}: Prop) {
  const {setCurrentSongIndex, playNext, playSong, setDiscovered, albumSongs} = useAudioPlayerStore()

     const {showMiniPlayer} = useMiniPlayerStore()
   // Filter albums for the selected artist
  const artistAlbums = albums.filter((album) => album.artist_id === artist.id);
  const albumIDD = artistAlbums.find((a) => a.id)



const albumSong = albumSongs.filter((song) => song.album_id === albumIDD?.id);

const handleSongClick = (index: number) => {
  if (albumSong[index]) {
    setCurrentSongIndex(index); 
    playSong(albumSong[index].id); 
  } else {
    console.error("Song not found at index", index);
  }
  showMiniPlayer()
  setDiscovered(true)
};


    return(
        <div className="w-full px-[24px] mt-2 ">
           <div className="border-t border-b py-10">
           <h1 className="text-[20px] tracking-[-0.4px] font-figtree py-5">Top Songs</h1>
            <div className="w-full px-[30px] grid grid-cols-2 gap-20 mt-5 ">
            <div className="flex flex-col gap-[24px]">

                {
                    albumSong.slice(0,3).map((song, index) => {
                        const findAlbum = artistAlbums.find(
                            (album) => album.id === song.album_id
                          );
                        return(
                <div key={song.id} className="flex items-center justify-between" onClick={() => handleSongClick(index)}>
                  <div className="flex items-center gap-[10px]">
                    <p className="text-[#B1B5C5]">{index + 1}</p>
                    <div className="w-[50px] h-[50px]">
                      <img
                        src={findAlbum?.cover_image_url ?? ""}
                        alt={findAlbum?.title || "Album Cover"}
                        
                      />
                    </div>
                    <div>
                      <h1 className="text-[14px] font-figtree tracking-[-0.28px]">
                        {song.track_title}
                      </h1>
                      <p className="text-[12px] font-figtree tracking-[-0.24px] text-[#B1B5C5]">
                        {artist.artist_name}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[12px] font-figtree tracking-[-0.24px] text-[#B1B5C5]">
                      2:44
                    </p>
                  </div>
                </div>
                )})
                }
            </div>
            <div className="flex flex-col gap-[24px]">
            {
                    albumSong.slice(3,6).map((song, index) => {
                        const findAlbum = artistAlbums.find(
                            (album) => album.id === song.album_id
                          );
                        return(
                <div key={song.id} className="flex items-center justify-between" onClick={() => handleSongClick(index)}>
                  <div className="flex items-center gap-[10px]">
                    <p className="text-[#B1B5C5]">{index + 1}</p>
                    <div className="w-[50px] h-[50px]">
                      <img
                        src={findAlbum?.cover_image_url ?? ""}
                        alt={findAlbum?.title || "Album Cover"}
                        
                      />
                    </div>
                    <div>
                      <h1 className="text-[14px] font-figtree tracking-[-0.28px]">
                        {song.track_title}
                      </h1>
                      <p className="text-[12px] font-figtree tracking-[-0.24px] text-[#B1B5C5]">
                        {artist.artist_name}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[12px] font-figtree tracking-[-0.24px] text-[#B1B5C5]">
                      2:44
                    </p>
                  </div>
                </div>
                )})
                }
            </div>
            </div>
           </div>
        </div>
    )
}