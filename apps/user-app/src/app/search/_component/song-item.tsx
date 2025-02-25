import React, { useEffect } from 'react';
import { Album, ArtistProfile, Song } from '@/lib/queries/supabaseQueries';
import Image from 'next/image';
import { useAudioPlayerStore } from '@/store/audioplayer.store';
import { useMiniPlayerStore } from '@/store/miniplayer.store';


function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

//type SongWithDuration = Song ;

interface SongItemProps {
  artists: ArtistProfile[]; // Replace 'any' with the appropriate type
  albums: Album[]; // Replace 'any' with the appropriate type
  songs: Song[];   // Replace 'any' with the appropriate type
}

export default function SongItem({ songs, artists, albums }: SongItemProps) {
  const { setCurrentSongIndex, playNext, playSong, setDiscovered, albumSongs, duration, setAlbumSongs, playbackMode, setPlaybackMode } =
  useAudioPlayerStore();

const { showMiniPlayer } = useMiniPlayerStore();


 // Sync albumSongs with the search results
 useEffect(() => {
  if (songs.length > 0) {
    setAlbumSongs(songs); // Update albumSongs in Zustand store
  }
}, [songs, setAlbumSongs]);



const handleSongClick = (index: number) => {
  if (songs[index]) {
    const songIndexInAlbumSongs = albumSongs.findIndex(song => song.id === songs[index].id);
    
    if (songIndexInAlbumSongs !== -1) {
      setCurrentSongIndex(songIndexInAlbumSongs);
      setDiscovered(true);
    } else {
      setCurrentSongIndex(index); // Fallback if not found
    }

    playSong(songs[index].id);
    setPlaybackMode("normal");
    
    showMiniPlayer();
  } else {
    console.error("Song not found at index", index);
  }
};
  return (
    <div className="flex flex-col px-6 ">
      <h1>Songs</h1>
      <div className='w-full grid  md:grid-cols-2  grid-cols-1 gap-x-20'>

      
      {
                  songs.map((item, index) => {
                        const songAlbum = albums.find((album) => album.id === item.album_id);
                        const songArtist = artists.find((artist) => artist.id === songAlbum?.artist_id);
                    return (
                    <div key={index} className="w-full h-[67px] cursor-pointer flex items-center justify-between "
                    onClick={() => handleSongClick(index)}
                    >
                     <div className="flex items-center gap-[10px]">
                      <p className="font-figtree font-normal text-[14px] leading-[16.8px] tracking-[-0.02em] text-[#868B9F]">{index + 1}</p>
                      <div className="w-[32px] h-[32px]">
                      <Image src={songArtist?.artist_image_url ?? '/images/artFrame.jpg'} alt="" width={100} height={100} quality={100} className='w-full h-full rounded-[8px] object-cover'/>
                      </div>
                       
                      <div className="flex flex-col items-start justify-start">
                        <h1 className="font-figtree font-medium text-[14px] leading-[16.8px] tracking-[-0.02em] text-[#fff]">{item.track_title}</h1>
                        <p className="font-figtree font-normal text-[12px] leading-[14.4px] tracking-[-0.02em] text-[#868B9F]">{songArtist?.artist_name}</p>
                      </div>
                     </div>
                     <div><p className="font-figtree font-normal text-[12px] leading-[14.4px] tracking-[-0.02em] text-[#868B9F]">2:44</p></div>
                    </div>
                  )})
                }
    </div>
    </div>
  );
}
