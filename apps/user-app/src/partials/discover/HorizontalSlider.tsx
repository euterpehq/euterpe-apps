"use client"
import React from 'react'
import Artists from '@/partials/discover/Artists'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";
import "swiper/css/free-mode";
import {FreeMode, Pagination} from "swiper/modules"
import Image from 'next/image';
import note from "@/assets/icons/music-note.png";
import trophy from "@/assets/icons/trophy.png";
import question from "@/assets/icons/question.png";

const HorizontalSlider: React.FC = () => {
    const items = Array.from({ length: 50 }, (_, i) => i + 1);
  return (
    <div className='relative w-[2500px] h-full overflow-hidden'>
    <Swiper
        spaceBetween={20}
        slidesPerView={6}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        style={{}}
        className="w-full h-[264px]"
    >
        
        {items.map((item) => (
        <SwiperSlide
        key={item}
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
            gap: "3rem",
            width: "200px",
            background: "#121310",
            borderRadius: "8px",

            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        >
                <div className='w-full flex items-center justify-between'>
                    <div className=''>
                        <Image src={note} alt="" />
                    </div>
                    <div className='flex items-center gap-1 bg-[#1b1f15] p-[10px] rounded-full'>
                        <div><Image src={trophy} alt=""/></div>
                        <p className='text-[#C1FF70]'>0.5 EUT</p>
                    </div>
                </div>
                <div>
                    <Image src={question} alt="" />
                </div>
        </SwiperSlide>
    ))}
      
    
    </Swiper>
    </div>
  )
}

export default HorizontalSlider
