"use client";
import React, { useEffect, useState } from "react";
import star from "@/assets/icons/star.png";
import mic from "@/assets/icons/mic.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";


export const genres = [
  {
    id: 1,
    emoji: "🎤",
    label: "Pop",
    icon: star,
  },
  {
    id: 2,
    emoji: "🎧",
    label: "Hip-Hop/Rap",
    icon: mic,
  },
  {
    id: 3,
    emoji: "🎹",
    label: "Electronic/EDM",
    icon: mic,
  },
  {
    id: 4,
    emoji: "🎸",
    label: "Rock",
    icon: star,
  },
  {
    id: 5,
    emoji: "🎷",
    label: "Jazz",
    icon: mic,
  },
  {
    id: 6,
    emoji: "🎻",
    label: "Classical",
    icon: mic,
  },
  {
    id: 7,
    emoji: "🤠",
    label: "Country",
    icon: mic,
  },
  {
    id: 8,
    emoji: "🌴",
    label: "Reggae",
    icon: mic,
  },
  {
    id: 9,
    emoji: "🎺",
    label: "Blues",
    icon: mic,
  },
  {
    id: 10,
    emoji: "🎙️",
    label: "R&B/Soul",
    icon: mic,
  },
  {
    id: 11,
    emoji: "🌾",
    label: "Folk",
    icon: mic,
  },
  {
    id: 12,
    emoji: "💖",
    label: "K-Pop",
    icon: mic,
  },
  {
    id: 13,
    emoji: "🎶",
    label: "Latin",
    icon: mic,
  },
];


const GenreCardSlider: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const slidesPerView = 6;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex h-[72px] w-full justify-between gap-5">
        {Array.from({ length: slidesPerView }).map((_, index) => (
          <div
            key={index}
            className=" flex h-[48px] min-w-[120px] flex-1  items-center gap-4 rounded-[120px]  p-4 transition-opacity ease-in-out"
            style={{ opacity: 0.5 }}
          >
            
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
    <div className="relative mx-auto h-[48px] hidden md:block w-full overflow-hidden">
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        style={{}}
        className="h-full w-full cursor-pointer"
      >
        {genres.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
             width: "auto",
             height: "48px",
            
            }}
          >
            <div className="flex items-center justify-center py-[16px] px-[20px] gap-[10px] w-auto flex-shrink-0 h-[48px] bg-[#181818] shadow shadow-[rgba(0, 0, 0, 0.1)] rounded-[120px] ml-5">
            <span>{item.emoji}</span>
            <p className="text-[13px] font-semibold text-[#fff]">
              {item.label}
            </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     
    </div>
    <div className="w-full h-full md:hidden grid grid-cols-2 gap-5">
      {genres.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px 20px",
              gap: "10px",
              width: "auto",
              flexShrink: 0,
              height: "48px",
              background: "#181818",
              borderRadius: "120px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <span>{item.emoji}</span>
            <p className="text-[13px] font-semibold text-[#fff]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreCardSlider;
