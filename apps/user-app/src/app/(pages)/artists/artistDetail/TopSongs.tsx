import { Song, songs } from "@/data/songs";
import Image from "next/image";

const topSongs: number[] = [1, 2,3,4,5,6];

type Prop = {
    artist: any;
  };

export default function TopSongs({artist}: Prop) {

   const detailedTopSongs = songs.filter((song) => song.isTopSong)
    return(
        <div className="w-full px-[24px] mt-2 ">
           <div className="border-t border-b py-10">
           <h1 className="text-[20px] tracking-[-0.4px] font-figtree py-5">Top Songs</h1>
            <div className="w-full px-[30px] grid grid-cols-2 gap-20 mt-5 ">
            <div className="flex flex-col gap-[24px]">
                {detailedTopSongs.slice(0,3).map((song, id) => (
                    <div key={id} className="flex items-center justify-between">
                        <div className="flex items-center gap-[10px]">
                            <p className="text-[#B1B5C5]">{song.id}</p>
                        <div className="w-[50px] h-[50px]">
                            <img src={song.albumArt} alt=""  />
                        </div>
                        <div>
                            <h1 className="text-[14px] font-figtree tracking-[-0.28px]">{song.title}</h1>
                            <p className="text-[12px] font-figtree tracking-[-0.24px] text-[#B1B5C5]">{artist.name}</p>
                        </div>
                        </div>
                        <div><p className="text-[12px] font-figtree tracking-[-0.24px] text-[#B1B5C5]">2.44</p></div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-[24px]">
                {detailedTopSongs.slice(3,6).map((song) => (
                    <div key={song.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-[10px]">
                            <p className="text-[#B1B5C5]">{song.id}</p>
                        <div className="w-[50px] h-[50px]">
                            <img src={song.albumArt} alt=""  />
                        </div>
                        <div>
                            <h1 className="text-[14px] tracking-[-0.28px]">{song.title}</h1>
                            <p className="text-[12px] font-figtree tracking-[-0.24px] text-[#B1B5C5]">{artist.name}</p>
                        </div>
                        </div>

                        <div><p className="text-[12px] font-figtree tracking-[-0.24px] text-[#B1B5C5]">2.44</p></div>
                    </div>
                ))}
            </div>
            </div>
           </div>
        </div>
    )
}