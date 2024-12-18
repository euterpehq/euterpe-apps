import Image from "next/image";
import img from "@/assets/images/artFrame.jpg"

type Prop = {
    artist: any;
  };
export default function Banner({artist}:Prop){
    return(
        <div className="w-full h-[250px] bg-[#B8FF5B] relative">
            <div className="w-[140px] h-[140px] absolute right-10 top-[75%]">
                <Image src={img} alt=""  className="w-full h-full object-cover rounded-[24px]"/>
            </div>
        </div>
    )
}