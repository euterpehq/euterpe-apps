import { Album, ArtistProfile, Song } from "@/lib/queries/supabaseQueries";
import { useAudioPlayerStore } from "@/store/audioplayer.store";
import { useMiniPlayerStore } from "@/store/miniplayer.store";
import Image from "next/image";
import { useEffect } from "react";


interface TopResultProps {
  artists: ArtistProfile[];
  albums: Album[]; 
  songs: Song[];   
}

export default function TopResult({artists, songs, albums}: TopResultProps) {
  const { setCurrentSongIndex, playNext, playSong, setDiscovered, albumSongs, duration, setAlbumSongs, playbackMode, setPlaybackMode } =
  useAudioPlayerStore();

const { showMiniPlayer } = useMiniPlayerStore();

  const topArtist = artists[0];
  const topSong = songs[0];

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
    <div className="w-full h-full px-6 py-5 flex flex-col gap-4 items-start justify-start">
      <div className="flex w-full h-full gap-[8px]">
        <div className="w-[392px] hidden md:flex items-center justify-start"><h1>Top Result</h1></div>
        <div className=" flex items-center justify-start"><h1>Songs</h1></div>
      </div>
      <div className="w-full flex items-start gap-[20px]">
        <div className="w-[392px] h-[335px] rounded-[16px] bg-[#181818] p-[24px] gap-[10px] hidden  md:flex flex-col items-center justify-center">
          <div className="w-[344px] h-[220px] gap-[20px] flex flex-col items-center justify-center"> 
              <div className="w-[160px] h-[160px]">
              
                  <Image src={topArtist.artist_image_url ?? '/images/artFrame.jpg'} alt="" width={100} height={100} quality={100} className='w-full h-full rounded-full object-cover'/>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="font-figtree font-medium text-[16px] leading-[19.2px] tracking-[-0.02em] text-[#fff]">{topArtist.artist_name}</h1>
                <p className="font-figtree font-normal text-[14px] leading-[16.8px] tracking-[-0.02em] text-[#868B9F]">Artist</p>
              </div>
          </div>
        </div>
        <div className=" w-[992px]" >
          {
            songs.slice(0,5).map((item, index) => {
                  const songAlbum = albums.find((album) => album.id === item.album_id);
                  const songArtist = artists.find((artist) => artist.id === songAlbum?.artist_id);
              return (
              <div key={item.id} className="w-full h-[67px] flex items-center justify-between cursor-pointer" onClick={() => handleSongClick(index)}>
               <div className="flex items-center gap-[10px]">
                <p className="font-figtree font-normal text-[14px] leading-[16.8px] tracking-[-0.02em] text-[#868B9F]">{index + 1}</p>
                <div className="w-[32px] h-[32px]">
                <Image src={songAlbum?.cover_image_url ?? '/images/artFrame.jpg'} alt="" width={100} height={100} quality={100} className='w-full h-full rounded-[8px] object-cover'/>
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
    </div>
  )
}
