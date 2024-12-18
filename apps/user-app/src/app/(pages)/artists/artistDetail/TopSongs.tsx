/* eslint-disable @next/next/no-img-element */

import { Album, ArtistProfile } from "@/lib/queries/supabaseQueries";
import { useAudioPlayerStore } from "@/store/audioplayer.store";
import Image from "next/image";



type Prop = {
    artist: any;
    albums: Album[];
  };

export default function TopSongs({artist, albums}: Prop) {
    const {albumSongs} = useAudioPlayerStore()
    console.log("albumSongs:", albumSongs);
   // Filter albums for the selected artist
  const artistAlbums = albums.filter((album) => album.artist_id === artist.id);
  const albumIDD = artistAlbums.find((a) => a.id)



const albumSong = albumSongs.filter((song) => song.album_id === albumIDD?.id);


    return(
        <div className="w-full px-[24px] mt-2 ">
           <div className="border-t border-b py-10">
           <h1 className="text-[20px] tracking-[-0.4px] font-figtree py-5">Top Songs</h1>
            <div className="w-full px-[30px] grid grid-cols-2 gap-20 mt-5 ">
            <div className="flex flex-col gap-[24px]">

                {
                    albumSong.map((song, index) => {
                        const findAlbum = artistAlbums.find(
                            (album) => album.id === song.album_id
                          );
                        return(
                <div key={index} className="flex items-center justify-between">
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
            {/*topsongs.map((song, id) => {
              const findAlbum = artistAlbums.find(
                (album) => album.id === song.album_id
              );
              return (
                <div key={id} className="flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <p className="text-[#B1B5C5]">{song.id}</p>
                    <div className="w-[50px] h-[50px]">
                      <Image
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
              );
            })*/}
            </div>
            <div className="flex flex-col gap-[24px]">
            {/*topsongs.map((song, id) => {
              const findAlbum = artistAlbums.find(
                (album) => album.id === song.album_id
              );
              return (
                <div key={id} className="flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <p className="text-[#B1B5C5]">{song.id}</p>
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
              );
            })*/}
            </div>
            </div>
           </div>
        </div>
    )
}