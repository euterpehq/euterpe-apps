"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { ArtistProfile } from "@/lib/queries/artist/get-artists";
import { useMediaQuery } from "react-responsive";


interface MyComponentProps {
  artists: ArtistProfile[];
}

const ArtistHorizontalSlider: React.FC<MyComponentProps> = ({artists}) => {

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

   const [loading, setLoading] = useState(true);
    const slidesPerView = 6;
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 0);
      return () => clearTimeout(timer);
    }, []);


  if (!artists) return <div>Artist not found</div>;

  const getSlideStyles = () => {
    if (isMobile) {
      return {    
        width: "180px",
          height: "222px"
      };
    }
    if (isTablet) {
      return {
        width: "180px",
          height: "222px"
      };
    }
    return {
      width: "188px",
      height: "224px"
    };
  };

  if (loading) {
    return (
      <div className="flex h-[500px] w-full justify-between gap-5">
        {Array.from({ length: isMobile ? 3 : slidesPerView  }).map((_, index) => (
          <div
            key={index}
            className=" flex md:h-[400px] md:w-[300px] w-[250px] h-[300px]  flex-col gap-4 rounded-[8px] p-4 transition-opacity ease-in-out"
            style={{ opacity: 0.5 }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="relative mx-auto h-full w-full ">
      <Swiper
        spaceBetween={8}
        slidesPerView={"auto"}
        freeMode={true}
        modules={[FreeMode, Pagination]}
     
        style={{}}
        className="h-full w-full cursor-pointer "
      >
        {artists?.map((item, index) => (
          <SwiperSlide
            key={item.id}
            style={{
              ...getSlideStyles(),
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              marginLeft: `${index === 0 ? "24px" : "0"}`,
              //border: "1px solid white"
            }}
          >
            <Link href={`/artist/${item.id}`} className="w-full h-full md:w-[188px]">
              <div className="flex flex-col items-center gap-[10px] w-full  h-full  bg-[#181818] p-[24px] rounded-[12px] md:w-[188px]">
                <div className="h-[120px] w-[120px]">
                  <Image
                    src={item.artist_image_url || "/images/artFrame.jpg"}
                    alt=""
                    className="h-full w-full rounded-full object-cover"
                    width={120}
                    height={120}
                  />
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-[15px] font-semibold">
                    {item?.artist_name}
                  </p>
                  <p className="text-[0.75rem] text-[#868B9F]">Artist</p>
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
