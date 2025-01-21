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
import { useMediaQuery } from "react-responsive";


interface MyComponentProps {
  artists: ArtistProfile[];
}

const ArtistHorizontalSlider: React.FC<MyComponentProps> = ({artists}) => {

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });


  if (!artists) return <div>Artist not found</div>;

  const getSlideStyles = () => {
    if (isMobile) {
      return {
        
        width: "180px",
        height: "228px",
      };
    }
    if (isTablet) {
      return {
        width: "180px",
        height: "237px",
      };
    }
    return {
      width: "230px",
      height: "260px",
    };
  };

  return (
    <div className="relative mx-auto h-full w-full ">
      <Swiper
        spaceBetween={8}
        slidesPerView={6.8}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          // Mobile devices
          0: {
            slidesPerView: 2.5,
            spaceBetween : 5,
          },
          // Tablets
          640: {
            slidesPerView: 3.5,
          },
          // Desktops
          1024: {
            slidesPerView: 6.8,
          },
        }}
        style={{}}
        className="h-full w-full cursor-pointer "
      >
        {artists?.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{
              ...getSlideStyles(),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              //padding: "24px",
              marginLeft: "5px",
            
              //background: "#181818",
              borderRadius: "12px",
              
            }}
          >
            <Link href={`/artist/${item.id}`} className="w-full h-full">
              <div className="flex h-full w-full flex-col items-center justify-around ml-6  bg-[#181818] p-[10px] rounded-[12px] ">
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

export default ArtistHorizontalSlider;
