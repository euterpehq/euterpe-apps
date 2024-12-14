import Image from "next/image";
import logo from "@/assets/icons/Euterpe..png"
import instagram from "@/assets/icons/instagram.png"
import linkedin from "@/assets/icons/linkedin.png"
import X from "@/assets/icons/X.png"
import Link from "next/link";

export default function Footer(){
    return(
        <div className="w-full h-full md:gap-[120px] sm:gap-[50px] flex flex-col justify-between bg-[#0C0C0C] " style={{padding: "64px 60px 40px 60px"}}>
           <div className="">
           <div className="flex items-center justify-between">
           <div>
                <Image src={logo} alt=""/>
           </div>
           <div className="sm:hidden md:flex flex-col items-end gap-6">
            <h1 className="text-[24px] tracking-[-1px]">Be a part of our community</h1>
            <div className="flex justify-start gap-[16px]">
                <div className="border-[0.5px] border-[#C1FF70] w-8 h-8 rounded-full flex items-center justify-center"><Image src={instagram} alt=""/></div>
                <div className="border-[0.5px] border-[#C1FF70] w-8 h-8 rounded-full flex items-center justify-center"><Image src={linkedin} alt=""/></div>
                <div className="border-[0.5px] border-[#C1FF70] w-8 h-8 rounded-full flex items-center justify-center"><Image src={X} alt=""/></div>
            </div>
           </div>

           </div>
           <div className="flex flex-col gap-5 sm:mt-5 md:mt-0">
            <Link href="/">Euterpe for Listeners</Link>
            <Link href="/artists">Euterpe for Artists</Link>
           </div>
           </div>
           <div className="">
            <div className="w-full h-[0.5px] bg-[#1E1E1E]"></div>
            <div className="w-full flex md:flex-row sm:flex-col justify-between md:items-center sm:items-start  pt-5 sm:gap-5">
                <div><p className="text-[#B1B5C6]">© 2024 Euterpe</p></div>
                <div className="flex gap-[64px]">
                    <p className="text-[#B1B5C6]">Privacy Policy</p>
                    <p className="text-[#B1B5C6]">Terms of Use</p>
                </div>
            </div>
           </div>
        </div>
    )
}