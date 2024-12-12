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
import { topPicks } from '@/data/songs';

const SliderPage: React.FC = () => {
    //const items = Array.from({ length: 50 }, (_, i) => i + 1);
  return (
    <div className='relative w-full h-full overflow-hidden'>
    <Swiper
        spaceBetween={20}
        slidesPerView={7}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        style={{}}
        className="w-full h-full"
    >
        
        {topPicks.map((item) => (
        <SwiperSlide
        key={item.id}
        style={{
            display: "flex",
            alignItems: "flex-start",
            padding: "opx 24px",
            gap: "10px",
            width: "189px",
            flex: "1 0 0",
            borderRadius: "8px",
            //border: "1px solid white",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        >
          <div>
          <div className='w-full h-[188px]' style={{flexShrink: "0"}}>
                <Image src={item.image} alt="" className="w-full h-full object-cover rounded-[8px]"/>
               </div>
               <div className=' flex flex-col gap-2 mt-2'>
                <div className='flex flex-col gap-2'>
                <h1 className="text-[18px] tracking-[-0.28px]">{item.title}</h1>
                <p className='text-[16px] text-[#B1B5C6] tracking-[-0.24px]'>{item.artist}</p>
                </div>
                <div className='flex items-center justify-center gap-1 bg-[#1b1f15] py-[5px] px-[8px] w-[50%]  rounded-full'>
                        <div><Image src={trophy} alt=""/></div>
                        <p className='text-[#C1FF70] text-[11px]'>0.5 EUT</p>
                  </div>
               </div>
          </div>
              
        </SwiperSlide>
    ))}
      
    
    </Swiper>
    </div>
  )
}

export default SliderPage
