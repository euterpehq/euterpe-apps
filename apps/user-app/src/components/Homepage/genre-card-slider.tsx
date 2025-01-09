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


const HorizontalSlider: React.FC = () => {
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
            className="tp2 flex h-[48px] min-w-[120px] flex-1 animate-pulse items-center gap-4 rounded-[120px] bg-gray-800 p-4 transition-opacity ease-in-out"
            style={{ opacity: 0.5 }}
          >
            <div className="tp2 h-8 w-8 rounded-full"></div>
            <div className="tp2 h-6 w-2/3 rounded"></div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="relative mx-auto h-[48px] w-full overflow-hidden">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HorizontalSlider;
