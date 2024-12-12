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
import { genres } from '@/data/songs';

const HorizontalSlider: React.FC = () => {
    const items = Array.from({ length: 50 }, (_, i) => i + 1);
    //const items = [1, 2, 3, 4,5,6,7,8,9,10,11,12]
  return (
    <div className='relative w-full  mx-auto h-[48px] overflow-hidden'>
    <Swiper
        spaceBetween={20}
        slidesPerView={6}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        style={{}}
        className="w-full h-full cursor-grab "
    >
        
        {genres.map((item) => (
        <SwiperSlide
        key={item.id}
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px 20px",
            gap: "10px",
            width: "140px",
            height: "48px",
            //cursor: "pointer",
            background: "#181818",
            borderRadius: "120px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        >
                        <div><Image src={item.icon} alt=""/></div>
                        <p className='text-[#fff] text-[18px]'>{item.name}</p>
                    
               
        </SwiperSlide>
    ))}
      
    
    </Swiper>
    </div>
  )
}

export default HorizontalSlider
