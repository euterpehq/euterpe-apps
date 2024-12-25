"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import useArtistStore from "@/store/artist.store";
import img from "@/assets/images/artFrame.jpg";

const HorizontalSlider: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { artists, fetchArtist } = useArtistStore();

  useEffect(() => {
    fetchArtist();
  }, [fetchArtist]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, []);

  const items = Array.from({ length: 50 }, (_, i) => i + 1);

  const slidesPerView = 6;

  if (loading) {
    return (
      <div className="flex h-[300px] w-full justify-between gap-5">
        {Array.from({ length: slidesPerView }).map((_, index) => (
          <div key={index} className="flex flex-col space-y-3">
            <Skeleton className="h-[200px] w-[250px] rounded-xl" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative mx-auto h-full w-full overflow-hidden">
      <Swiper
        spaceBetween={20}
        slidesPerView={6.8}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        style={{}}
        className="h-full w-full cursor-grab"
      >
        {artists?.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
              gap: "10px",
              width: "188px",
              height: "h-[400px]",
              background: "#181818",
              borderRadius: "8px",
            }}
          >
            <Link href={`/artists/${item.id}`}>
              <div className="flex h-full flex-col items-center gap-[20px]">
                <div className="h-[120px] w-[120px]">
                  <Image
                    src={item.artist_image_url || img}
                    alt=""
                    className="h-full w-full rounded-full object-cover"
                    width={120}
                    height={120}
                  />
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-[18px]">{item.artist_name}</p>
                  <p className="text-[15px] text-[#868B9F]">Artist</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HorizontalSlider;
