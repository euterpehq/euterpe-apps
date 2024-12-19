
import Image from "next/image";
import img from "@/assets/images/astrid.svg";
import icon from "@/assets/icons/playicon.svg";
import { useAudioPlayerStore } from "@/store/audioplayer.store";
import { useMiniPlayerStore } from "@/store/miniplayer.store";
import Link from "next/link";
import useArtistStore from "@/store/artist.store";
import { useEffect } from "react";

type Prop = {
  album: any;
};

export default function AlbumHead({ album }: Prop) {
  const { setCurrentSongIndex, playSong, setAudio, isPlaying, setIsPlaying, setDiscovered, albumSongs } = useAudioPlayerStore();

  const {showMiniPlayer} = useMiniPlayerStore()
  const {artists, fetchArtist} = useArtistStore()

  useEffect(() => {
    fetchArtist()
  },[fetchArtist])

  const albumSong = albumSongs.filter((song) => song.album_id === album?.id);
  const artist = artists.find((a) => a.id === album?.artist_id);



  const handlePlay = () => {
    if (isPlaying) {
      setAudio(null); 
      setIsPlaying(false);
    } else {
      const firstSong = albumSong[0];
      if (firstSong) {
        setCurrentSongIndex(0); 
        playSong(firstSong.id); 
        setIsPlaying(true); 
      }
    }
    showMiniPlayer()
    setDiscovered(true)
  };

  return (
    <div className="w-full flex gap-10 border">
      <div className="w-[240px] h-[240px]">
        <Image src={album?.cover_image_url ?? ""} alt="" className="w-full h-full object-cover" width="240" height="240"/>
      </div>
      <div className="flex flex-col gap-5 pt-3 ">
        <div className="flex flex-col gap-3">
          <div className="bg-[#c1ff701a] w-[49px] h-[22px] flex items-center justify-center rounded-[4px] text-[#C1FF70]">
            <p>{album?.category_type}</p>
          </div>
          <Link href="/"><h1 className="text-[32px] font-figtree tracking-[-0.64px]">{artist?.artist_name}</h1></Link>
          <div className="flex items-center gap-3">
            <div className="w-[16px] h-[16px]">
              <Image src={img} alt="" className="w-full h-full object-cover rounded-[120px]" width="16" height="16"/>
            </div>
            <h1 className="text-[14px] font-figtree tracking-[-0.28px]">{artist?.artist_name}</h1>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-[#B1B5C5] text-[14px] tracking-[-0.24px]">Pop</p>
            <span className="bg-[#B1B5C5] rounded-full w-1 h-1"></span>
            <p className="text-[#B1B5C5] text-[14px] tracking-[-0.24px]">2018</p>
          </div>
        </div>
        <div onClick={handlePlay} className="w-[84px] cursor-pointer h-[36px] flex items-center justify-center gap-[4px] bg-[#C1FF70] rounded-[120px]">
          <Image src={icon} alt="" width="20" height="20"/>
          <p className="text-[#000000]">{isPlaying ? "Pause" : "Play"}</p>
        </div>
      </div>
    </div>
  );
}
