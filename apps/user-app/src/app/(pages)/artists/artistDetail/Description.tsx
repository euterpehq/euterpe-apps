"use client"
import instagram from "@/assets/icons/insta.png"
import twitter from "@/assets/icons/twitter.png"
import spotify from "@/assets/icons/spotify.png"
import youtube from "@/assets/icons/youtube.png"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { songs } from "@/data/songs"

type Prop = {
    artist: any;
  };

export default function Description({artist}:Prop){
    const [isExpanded, setIsExpanded] = useState(false);

    const spotifyLink = songs.filter((song) => song.spotify)
    const youtubeLink = songs.filter((song) => song.youtube)
    
    return(
        <div className="w-full h-full px-[24px]">
        <div className="w-full flex flex-col py-[24px] pr-[100px] gap-[24px]">
            <div>
                <Link href="/"><h1 className="text-[80px] font-figtree tracking-[-4.8px]">{artist.name}</h1></Link>
            </div>
            <div>
                <p className="font-figtree text-[14px] tracking-[-0.28px]">
                {isExpanded ? artist.desc : `${artist.desc.slice(0, 500)}...`}
                    <span 
                    className="text-[#C1FF70] cursor-pointer"
                     onClick={() => setIsExpanded(!isExpanded)}
                    > {isExpanded ? ' Show less' : ' Read more'}</span></p>
            </div>
            <div className="w-full flex items-center gap-[10px]">
                <Link href={spotifyLink} className="flex  bg-[#1B1B1B] py-[6px] px-[12px] gap-[10px] cursor-pointer justify-center items-center rounded-[120px]">
                    <div><Image src={spotify} alt="" className="w-full h-full object-cover" quality={100}/></div>
                    <p>Spotify</p>
                </Link>
                <Link href={youtubeLink} className="flex  bg-[#1B1B1B] py-[6px] px-[12px] gap-[10px] cursor-pointer justify-center items-center rounded-[120px]">
                    <div><Image src={youtube} alt="" className="w-full h-full object-cover" quality={100}/></div>
                    <p>Youtube</p>
                </Link>

                <Link href={``} className="flex  bg-[#1B1B1B] py-[6px] px-[12px] gap-[10px] cursor-pointer justify-center items-center rounded-[120px]">
                    <div><Image src={instagram} alt="" className="w-full h-full object-cover" quality={100}/></div>
                    <p>Instagram</p>
                </Link>
                <Link href={``} className="flex  bg-[#1B1B1B] py-[6px] px-[12px] gap-[10px] cursor-pointer justify-center items-center rounded-[120px]">
                    <div><Image src={twitter} alt="" className="w-full h-full object-cover" quality={100}/></div>
                    <p>Twitter/X</p>
                </Link>
            </div>
        </div>
        </div>
    )
}