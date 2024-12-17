import { artists, songs } from "@/data/songs";
import { useAudioPlayerStore } from "@/store/audioplayer.store";

type Prop = {
    album: any;
};

export default function AlbumSongs({album}: Prop){
const {setCurrentSongIndex, playNext, playSong, setDiscovered} = useAudioPlayerStore()
// Ensure album exists and has an id
if (!album || !album.id) {
    console.error("Album data is missing or invalid.");
    return null;
  }
  
  const albumSongs = songs.filter((song) => song.albumId === album.id);
  
  // Ensure artist exists based on artistId from album
  const artist = artists.find((a) => a.id === album?.artistId);
  
  // If no artist is found, log a warning
  if (!artist) {
    console.warn("Artist not found for album:", album);
  }

  const length = albumSongs.slice(0, 5).length;

  const handleSongClick = (index: number) => {
    if (albumSongs[index]) {
      setCurrentSongIndex(index); // Update current song index
      playSong(albumSongs[index].id); // Play the clicked song
    } else {
      console.error("Song not found at index", index);
    }
    setDiscovered(true)
  };
      
    return(
        <div>
            {albumSongs.slice(0,5).map((song,index) => (
                <div key={song.id} className="flex items-center my-5 gap-5 px-[24px] cursor-pointer " onClick={() => handleSongClick(index)}>
                    <p>{index + 1}</p>
                    <div  className="w-full flex items-center justify-between">
                   <div >
                   <h1 className="text-[18px] tracking-[-0.28px]">{song.title}</h1>
                   <p className="text-[12px] tracking-[-0.34px] text-[#B1B5C5]">{artist?.name}</p>
                   </div>
                   <p className="text-[#B1B5C5]">2.44</p>
                    </div>
                </div>
            ))}
            <div className="w-full bg-[#181818] px-[24px] flex flex-col gap-2">
                <p className="text-[14px] font-figtree text-[#B1B5C5]">{length} Songs, 10 minutes</p>
                <p className="text-[14px] font-figtree text-[#61667B]">2 april 2016</p>
            </div>
        </div>
    )
}