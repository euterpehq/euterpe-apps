import { albums, artists, songs } from "@/data/songs";
import Image from "next/image";
import img from "@/assets/images/astrid.svg";
import icon from "@/assets/icons/playicon.svg";
import { useAudioPlayerStore } from "@/store/audioplayer.store";
import MiniPlayer from "@/app/Components/MiniPlayer";
import { useMiniPlayerStore } from "@/store/miniplayer.store";
import Link from "next/link";

type Prop = {
  album: any;
};

export default function AlbumHead({ album }: Prop) {
  const { setCurrentSongIndex, playSong, setAudio, isPlaying, setIsPlaying, setDiscovered } = useAudioPlayerStore();
  const {showMiniPlayer} = useMiniPlayerStore()

  const albumSongs = songs.filter((song) => song.albumId === album?.id);
  const artist = artists.find((a) => a.id === album?.artistId);

  const handlePlay = () => {
    if (isPlaying) {
      setAudio(null); // Stop playback
      setIsPlaying(false);
      //console.log(isPlaying)
    } else {
      const firstSong = albumSongs[0];
      if (firstSong) {
        setCurrentSongIndex(0); // Set the first song in the album
        playSong(firstSong.id); // Start playing the first song
        setIsPlaying(true); // Mark as playing
      }
    }
    showMiniPlayer()
    setDiscovered(true)
  };

  return (
    <div className="w-full flex gap-10 border">
      <div className="w-[240px] h-[240px]">
        <img src={album?.albumArt} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="bg-[#c1ff701a] w-[49px] h-[22px] flex items-center justify-center rounded-[4px] text-[#C1FF70]">
            <p>Single</p>
          </div>
          <Link href="/"><h1 className="text-[32px] font-figtree tracking-[-0.64px]">{artist?.name}</h1></Link>
          <div className="flex items-center gap-3">
            <div className="w-[16px] h-[16px]">
              <Image src={img} alt="" className="w-full h-full object-cover rounded-[120px]" />
            </div>
            <h1 className="text-[14px] font-figtree tracking-[-0.28px]">{artist?.name}</h1>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-[#B1B5C5] text-[14px] tracking-[-0.24px]">Pop</p>
            <span className="bg-[#B1B5C5] rounded-full w-1 h-1"></span>
            <p className="text-[#B1B5C5] text-[14px] tracking-[-0.24px]">2018</p>
          </div>
        </div>
        <div onClick={handlePlay} className="w-[84px] cursor-pointer h-[36px] flex items-center justify-center gap-[4px] bg-[#C1FF70] rounded-[120px]">
          <Image src={icon} alt="" />
          <p className="text-[#000000]">{isPlaying ? "Pause" : "Play"}</p>
        </div>
      </div>
    </div>
  );
}
