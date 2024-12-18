
import useArtistStore from "@/store/artist.store";
import { useAudioPlayerStore } from "@/store/audioplayer.store";
import { useEffect } from "react";

type Prop = {
    album: any;
};

export default function AlbumSongs({album}: Prop){
const {setCurrentSongIndex, playNext, playSong, setDiscovered, albumSongs} = useAudioPlayerStore()
const {artists, fetchArtist} = useArtistStore()

useEffect(() => {
    fetchArtist()
  },[fetchArtist])


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
    setDiscovered(true)
  };
      
    return(
        <div>
            {albumSong.map((song,index) => (
                <div key={song.id} className="flex items-center my-5 gap-5 px-[24px] cursor-pointer " onClick={() => handleSongClick(index)}>
                    <p>{index + 1}</p>
                    <div  className="w-full flex items-center justify-between">
                   <div >
                   <h1 className="text-[18px] tracking-[-0.28px]">{song.track_title}</h1>
                   <p className="text-[12px] tracking-[-0.34px] text-[#B1B5C5]">{artist?.artist_name}</p>
                   </div>
                   <p className="text-[#B1B5C5]">2.44</p>
                    </div>
                </div>
            ))}
            <div className="w-full bg-[#181818] px-[24px] flex flex-col gap-2 mt-3">
                <p className="text-[14px] font-figtree text-[#B1B5C5]">{length} Songs, 10 minutes</p>
                <p className="text-[14px] font-figtree text-[#61667B]">2 april 2016</p>
            </div>
        </div>
    )
}