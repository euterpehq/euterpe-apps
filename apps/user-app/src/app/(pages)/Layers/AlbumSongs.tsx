import { songs } from "@/data/songs";

export default function AlbumSongs(){
    const length = songs.slice(0,5).length
    return(
        <div>
            {songs.slice(0,5).map((song) => (
                <div key={song.id} className="flex items-center my-5 gap-5 px-[24px]">
                    <p>{song.id}</p>
                    <div className="w-full flex items-center justify-between">
                   <div >
                   <h1 className="text-[18px] tracking-[-0.28px]">{song.title}</h1>
                   <p className="text-[12px] tracking-[-0.34px] text-[#B1B5C5]">Astrid</p>
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