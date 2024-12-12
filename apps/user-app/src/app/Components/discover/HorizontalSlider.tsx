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

const HorizontalSlider: React.FC = () => {
    const items = Array.from({ length: 100 }, (_, i) => i + 1);
    //const items = [1, 2, 3, 4,5,6,7,8,9,10,11,12]
  return (
    <div className='relative w-full mx-auto h-full  overflow-hidden'>
    <Swiper
        spaceBetween={20}
        slidesPerView={6}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        style={{}}
        className="w-full h-full cursor-grab "
    >
        
        {items.map((item) => (
        <SwiperSlide
        key={item}
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "12px 12px 93.838px 12px",
            gap: "4rem",
            width: "200px",
           
            //cursor: "pointer",
            background: "#121310",
            borderRadius: "8px",
            //border: "1px solid white",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        >
                <div className='w-full flex items-center justify-between'>
                    <div className=''>
                        <Image src={note} alt="" className="w-full h-full object-cover"/>
                    </div>
                    <div className='flex items-center  gap-1 bg-[#1b1f15] py-[6px] px-[10px] rounded-full'>
                        <div><Image src={trophy} alt=""className="w-full h-full object-cover"/></div>
                        <p className='text-[#C1FF70] text-[11px]'>0.5 EUT</p>
                    </div>
                </div>
                <div>
                    <Image src={question} alt=""className="w-full h-full object-cover" />
                </div>
        </SwiperSlide>
    ))}
      
    
    </Swiper>
    </div>
  )
}

export default HorizontalSlider
