import Image from "next/image";
import img from "@/assets/images/artFrame.jpg"

export default function Banner({artist}){
    return(
        <div className="w-full h-[250px] bg-[#B8FF5B] relative">
            <div className="w-[140px] h-[140px] absolute right-10 top-[75%]">
                <Image src={artist.img} alt="" quality={100} className="w-full h-full object-cover rounded-[24px]"/>
            </div>
        </div>
    )
}