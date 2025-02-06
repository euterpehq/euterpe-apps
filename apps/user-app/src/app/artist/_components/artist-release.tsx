"use client";
import { Album } from '@/lib/queries/album/get-albums';
import { useAudioPlayerStore } from '@/store/audioplayer.store';
import { useMiniPlayerStore } from '@/store/miniplayer.store';
import Image from 'next/image'
import React from 'react'

type Prop = {
  artist: any;
  albums: Album[];
};

export default function ArtistRelease({ artist, albums }: Prop) {
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
    <div className='w-full px-[24px]'>
    <div className='w-full mt-5  py-[24px] px-[0px] flex flex-col items-start self-stretch  gap-[24px]  border-t-[0.5px] border-b-[0.5px] border-[#303033] bg-[#0E0E0E] '>
        <div className='flex items-start gap-[12px] self-stretch'>
            <div className='bg-[#181818] h-[478px] rounded-[12px] w-[370px] py-[20px] px-[16px] flex items-start flex-col gap-[20px] '>
                <p className='text-[#fff] font-figtree text-[16px] font-extrabold tracking-[-0.64px] leading-normal self-stretch'>Latest Release</p>
                <div className='w-[340px] h-[340px]'>
                <Image src={albumIDD?.cover_image_url || "/images/artFrame.jpg"} alt="" width={100} height={100} quality={100} className='w-full h-full object-contain rounded-[12px]' />
                </div>
                <div className='flex flex-col justify-center items-start gap-[8px]'>
                    <h1 className='text-[#fff] font-figtree text-[14px] font-medium leading-normal tracking-[-0.28px]'>{albumIDD?.title}</h1>
                    <p className='text-[#868B9F] font-figtree text-[12px] font-normal tracking-[-0.24px]'>{artist.artist_name}</p>
                </div>
            </div>
            <div className='flex flex-col w-full h-[478px] pt-[24px] pr-[40px] pb-[16px] pl-[16px] items-start gap-[16px] rounded-[12px] bg-[#181818]'>
                <p>Top Tracks</p>
                <div className="grid w-full  grid-cols-1  gap-2">
              {albumSong.map((song, index) => {
                const findAlbum = artistAlbums.find(
                  (album) => album.id === song.album_id,
                );
                return (
                  <div
                    key={song.id}
                    className="flex md:h-[67px] h-[76px]  items-center justify-between cursor-pointer"
                    onClick={() => handleSongClick(index)}
                  >
                    <div className="flex items-center gap-4">
                      <p className="text-sm text-[#868B9F]">{index + 1}</p>
                      <div className="h-[50px] w-[50px]">
                        <Image
                          src={findAlbum?.cover_image_url ?? ""}
                          alt={findAlbum?.title || "Album Cover"}
                          className="h-full w-full rounded-[4px] object-cover"
                          quality={100}
                            width={100}
                            height={100}
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
  )
}
