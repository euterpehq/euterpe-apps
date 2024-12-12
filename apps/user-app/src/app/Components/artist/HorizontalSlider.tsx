"use client"
import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";
import "swiper/css/free-mode";
import {FreeMode, Pagination} from "swiper/modules"
import Image from 'next/image';
import note from "@/assets/icons/music-note.png";
import trophy from "@/assets/icons/trophy.png";
import question from "@/assets/icons/question.png";
import { artists } from '@/data/songs';

const HorizontalSlider: React.FC = () => {
    const items = Array.from({ length: 50 }, (_, i) => i + 1);
    //const items = [1, 2, 3, 4,5,6,7,8,9,10,11,12]
  return (
    <div className='relative w-[1526px] mx-auto h-full overflow-hidden'>
    <Swiper
        spaceBetween={20}
        slidesPerView={6}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        style={{}}
        className="w-full h-[264px] cursor-grab "
    >
        
        {artists.map((item) => (
        <SwiperSlide
        key={item.id}
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            gap: "10px",
            width: "188px",
            //cursor: "pointer",
            background: "#121310",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        >
                <div className='flex flex-col items-center gap-[20px]'>
                   <div className='w-[120px] h-[120px]'>
                   <Image src={item.img} alt="" className="w-full h-full object-cover rounded-full"/>
                   </div>
                   <div className='flex flex-col items-center'>
                        <p className='text-[18px]'>{item.name}</p>
                        <p className='text-[15px] text-[#868B9F]'>{item.title}</p>
                   </div>
                </div>
        </SwiperSlide>
    ))}
      
    
    </Swiper>
    </div>
  )
}

export default HorizontalSlider
