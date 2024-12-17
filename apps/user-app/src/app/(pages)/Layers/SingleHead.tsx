import { songs } from "@/data/songs";
import Image from "next/image";
import img from "@/assets/images/astrid.svg"
import icon from "@/assets/icons/playicon.svg"
type Prop = {
    id: number
}

export default function SingleHead(){
    //const song = songs.filter((s) => s.artist === id)
    //const head = song.map((s) => s )
    //console.log(head)
    return(
        <div className="w-full flex gap-10  border-b">
            <div className="w-[240px] h-[240px]">
             <Image src={img} alt="" quality={100} className="w-full h-full object-cover"/>
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                    <div className="bg-[#c1ff701a] w-[49px] h-[22px]  flex items-center justify-center rounded-[4px] text-[#C1FF70]">
                        <p>Single</p>
                    </div>
                   <div> <h1 className="text-[32px] font-figtree tracking-[-0.64px]">In Love with a Ghost</h1></div>
                    <div className="flex items-center gap-3">
                        <div className="w-[16px] h-[16px]"><Image src={img} alt="" className="w-full h-full object-cover rounded-[120px]"/></div>
                        <h1 className="text-[14px] font-figtree tracking-[-0.28px]">Bash The Piper</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="text-[#B1B5C5] text-[14px] tracking-[-0.24px]">Pop</p>
                        <span className="bg-[#B1B5C5] rounded-full w-1 h-1"></span>
                        <p className="text-[#B1B5C5] text-[14px] tracking-[-0.24px]">2018</p>
                    </div>
                </div>
                <div className="w-[84px] h-[36px] flex items-center justify-center gap-[4px] bg-[#C1FF70] rounded-[120px]">
                    <Image src={icon} alt="" />
                    <p className="text-[#000000]">Play</p>
                </div>
            </div>
            
        </div>
    )
}

