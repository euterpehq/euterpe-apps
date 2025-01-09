"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import img from "@/assets/images/artFrame.jpg";
import { ArtistProfile } from "@/lib/queries/artist/get-artists";


interface MyComponentProps {
  artists: ArtistProfile[];
}

const ArtistSlider: React.FC<MyComponentProps> = ({artists}) => {

  if (!artists) return <div>Artist not found</div>;

  return (
    <div className="relative mx-auto h-full w-full overflow-hidden">
      <Swiper
        spaceBetween={8}
        slidesPerView={"auto"}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        style={{}}
        className="h-full w-full cursor-pointer"
      >
        {artists?.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
              minWidth: "200px",
              width: "200px",
              background: "#181818",
              borderRadius: "12px",
              marginRight: "8px",
            }}
          >
            <Link href={`/artist/${item.id}`}>
              <div className="flex h-full w-[200px] flex-col items-center gap-[20px]">
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
                  <p className="text-[15px] font-semibold">
                    {item.artist_name}
                  </p>
                  <p className="text-[12px] text-[#868B9F]">Artist</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ArtistSlider;
