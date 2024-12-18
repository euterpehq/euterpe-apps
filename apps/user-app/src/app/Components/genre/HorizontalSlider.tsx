"use client"
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";
import "swiper/css/free-mode";
import {FreeMode, Pagination} from "swiper/modules"
import Image from 'next/image';
import { genres } from '@/data/songs';

const HorizontalSlider: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const slidesPerView = 6;
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 200); 
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) {
      return (
        <div className="w-full h-[72px] flex justify-between gap-5">
          {Array.from({ length: slidesPerView }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse tp2 bg-gray-800 h-[48px] flex-1 min-w-[120px] rounded-[120px] flex items-center gap-4 p-4 transition-opacity  ease-in-out"
              style={{ opacity: 0.5}}
            >
              <div className="tp2 h-8 w-8 rounded-full"></div>
              <div className="tp2 h-6 w-2/3 rounded"></div>
            </div>
          ))}
        </div>
      );
    }
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
