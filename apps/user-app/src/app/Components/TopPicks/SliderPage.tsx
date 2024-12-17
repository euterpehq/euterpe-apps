"use client"
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";
import "swiper/css/free-mode";
import {FreeMode, Pagination} from "swiper/modules"
import Image from 'next/image';
import note from "@/assets/icons/music-note.png";
import trophy from "@/assets/icons/trophy.png";
import question from "@/assets/icons/question.png";
import { TopPick, topPicks } from '@/data/songs';

interface MyComponentProps {
  Items: TopPick[];
}

const SliderPage: React.FC<MyComponentProps> = ({Items}) => {
const [loading, setLoading] = useState(true);
    const slidesPerView = 7; // Number of visible items
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading time
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) {
      return (
        <div className="w-full h-[300px] flex justify-between gap-5">
          {Array.from({ length: slidesPerView }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse tp2 h-[300px] w-[300px] rounded-lg flex flex-col items-center gap-5 p-6  transition-opacity  ease-in-out "
              style={{ opacity: 0.8 }}
            >
              {/*<div className="bg-gray-700 h-[120px] w-[120px] rounded-full"></div>
              <div className="bg-gray-700 h-6 w-3/4 rounded"></div>
              <div className="bg-gray-700 h-4 w-1/2 rounded"></div>*/}
            </div>
          ))}
        </div>
      );
    }

  
  return (
    <div className='relative w-full  h-full'>
    <Swiper
        spaceBetween={15}
        slidesPerView={6.8}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        style={{}}
        className="w-full h-full cursor-grab"
    >
        
        {Items.map((item) => (
              <SwiperSlide
                key={item.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  //padding: "0px 24px",
                  gap: "24px",
                  width: "20%",
                 
                  borderRadius: "8px",
                  //background: "#181818",
                  //border: "1px solid white"
                }}
              >
                <div className="w-full  gap-[12px]">
                  <div className="w-full h-[70%]">
                    <Image
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover rounded-[8px]"
                      quality={100}
                    />
                  </div>
                  <div className="flex flex-col gap-1 my-3">
                    <h1 className="text-[14px] tracking-[-0.28px]">
                      {item.title}
                    </h1>
                    <p className="text-[12px] text-[#B1B5C6] tracking-[-0.24px]">
                      {item.artist}
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-[4px] tp py-[5px] px-[8px] w-[30%] rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <g clip-path="url(#clip0_2913_2102)">
                    <path d="M9.67695 6.06406C9.88508 5.8925 11.087 5.14907 11.7451 4.52281C12.2588 4.03344 12.4576 2.75563 11.6673 2.13406C10.6398 1.32688 9.65351 2.17438 9.65351 2.17438C9.65351 2.17438 9.56726 1.69531 8.96726 1.41406C8.21164 1.05969 7.25445 0.927502 6.37414 0.938752C5.52101 0.949065 4.73539 1.05219 4.03789 1.39438C3.41351 1.70094 3.37601 2.13781 3.37601 2.13781C3.37601 2.13781 2.55664 1.355 1.55257 1.99063C0.54945 2.62719 0.837262 3.90219 1.32007 4.4375C1.94914 5.135 2.70476 5.49032 3.04789 5.74719C3.39007 6.00407 3.7182 6.24875 3.7182 6.46907C3.7182 6.68938 3.6207 6.73813 3.5832 6.72594C3.54664 6.71375 3.48195 6.49907 3.31414 6.59094C3.08539 6.7175 3.15476 7.2275 3.63195 7.27625C4.09414 7.32407 4.18226 6.83563 4.18226 6.83563L4.25539 6.35844L5.01382 6.88438L5.84539 7.56969L5.82101 8.15657C5.82101 8.15657 5.78445 8.60938 5.56414 9.00125C5.34382 9.39313 4.98945 9.78407 4.98945 9.78407L4.9782 10.1384L8.06164 10.0653L7.96414 9.72313C7.96414 9.72313 7.56664 9.28625 7.32757 8.8175C7.15695 8.48188 7.12976 8.14344 7.12976 8.14344L7.12226 7.30157L8.72258 6.32094C8.72258 6.32094 8.89414 6.45594 8.86976 6.50469C8.84539 6.55344 8.83976 7.05313 9.22414 7.23875C9.60382 7.4225 9.90945 7.19 9.87289 6.87125C9.83632 6.55344 9.64039 6.66313 9.57945 6.71188C9.51851 6.76063 9.38351 6.77282 9.34695 6.58907C9.30945 6.40719 9.46883 6.23563 9.67695 6.06406ZM1.79914 4.33344L1.43257 3.21782L1.87601 2.6375L2.37289 2.49219C2.37289 2.49219 3.00757 2.96563 3.03007 3.00407C3.05257 3.0425 3.43508 3.82907 3.43508 3.82907L3.93945 5.65532L1.79914 4.33344ZM9.00476 5.80063C9.01226 5.76219 9.4782 3.84406 9.4782 3.84406C9.4782 3.82156 9.80632 3.66875 9.80632 3.63782C9.80632 3.60688 10.4026 2.63657 10.4026 2.63657L11.3963 2.675L11.6026 3.66032L11.1057 4.47782C11.1066 4.47875 8.99726 5.83813 9.00476 5.80063Z" fill="#FEC417"/>
                    <path d="M11.8151 3.3725C11.742 2.49875 10.8776 2.28969 10.5223 2.41625C10.167 2.54282 9.93636 2.78 9.85761 3.1175C9.79386 3.39032 9.73011 3.57219 9.65698 3.60031C9.57636 3.63032 9.50229 3.61813 9.50229 3.61813C9.50229 3.61813 9.48917 3.0275 9.49292 2.78938C9.50229 2.29813 9.65229 2.1725 9.65229 2.1725C9.65229 2.1725 9.62042 2.00657 9.55667 1.91469C9.49292 1.82375 9.37479 1.70563 9.37479 1.70563C9.37479 1.70563 9.40198 1.94188 9.28386 1.99719C9.16573 2.0525 9.03823 1.97 9.03823 1.97L9.15636 2.46125C9.15636 2.46125 8.96511 4.91 8.94729 4.96438C8.92948 5.01875 8.21042 6.26563 8.21042 6.26563C8.21042 6.26563 7.79136 6.6575 7.59167 6.74844C7.39104 6.83938 7.21854 7.07657 6.44511 7.085C5.67167 7.09438 5.00698 6.48407 5.00698 6.48407L4.34229 5.84657L3.85104 4.39907L3.77792 2.92438L3.80886 2.38813L3.83042 2.16407L3.79573 2.05063C3.79573 2.05063 3.73198 2.11438 3.61386 2.08719C3.49573 2.06 3.44979 1.90531 3.44979 1.90531C3.44979 1.90531 3.40386 1.97844 3.39542 2.015C3.38604 2.05156 3.37667 2.13594 3.37667 2.13594C3.37667 2.13594 3.50417 2.27 3.53136 2.46125C3.55854 2.6525 3.52198 3.44469 3.38604 3.42594C3.24917 3.40813 3.29417 2.74344 2.77573 2.48844C2.32667 2.26719 1.65636 2.33375 1.38261 2.88875C1.10979 3.44375 1.30948 4.09907 2.16542 4.70938C3.02136 5.31969 3.93261 5.8325 4.07698 6.32188C4.24948 6.90407 3.85854 7.25 3.85854 7.25C3.85854 7.25 4.14261 7.21063 4.28229 6.90594C4.32729 6.8075 4.34417 6.66406 4.35073 6.57875C4.67417 7.00063 5.10448 7.35782 5.67448 7.53031C5.89011 7.60438 6.13292 7.64188 6.47042 7.64188C6.51917 7.64188 6.56698 7.64 6.61479 7.63813C7.00948 7.62407 7.34698 7.55 7.67417 7.38782C8.11573 7.18344 8.45792 6.87125 8.72229 6.51688C8.71479 6.60125 8.76636 6.81125 8.86479 6.97719C9.03729 7.26875 9.32886 7.28657 9.32886 7.28657C9.32886 7.28657 8.92854 7.05032 9.01011 6.48594C9.09167 5.92157 9.46479 5.72094 10.0292 5.35719C10.5954 4.9925 11.8873 4.24625 11.8151 3.3725ZM2.56667 4.61094C2.31261 4.43188 1.86729 4.19282 1.68354 3.82813C1.43886 3.34157 1.63761 2.75375 2.10261 2.68157C3.06823 2.52969 3.08604 3.72875 3.14979 3.87407C3.21354 4.01938 3.39542 4.02875 3.39542 4.02875C3.39542 4.02875 3.40198 4.10938 3.42823 4.265C3.42917 4.26969 3.43011 4.27344 3.43011 4.27813L3.43292 4.29219C3.45073 4.39813 3.47604 4.53031 3.51167 4.68125L3.51448 4.6925C3.53417 4.77782 3.55479 4.85844 3.57636 4.9325C3.61948 5.08813 3.67198 5.25594 3.73667 5.42844C3.64292 5.36469 3.10573 4.9925 2.56667 4.61094ZM11.3145 3.93688C11.1129 4.26313 10.7051 4.50594 10.4042 4.71032C10.016 4.97375 9.43854 5.36938 9.27542 5.48C9.31292 5.38063 9.34573 5.28219 9.37573 5.18563C9.42448 5.05813 9.47604 4.9025 9.51167 4.73469C9.60542 4.29406 9.62136 3.90875 9.62136 3.90875C9.62136 3.90875 9.81261 3.96313 9.93073 3.83563C10.0489 3.70813 10.0929 3.3125 10.2035 3.12594C10.376 2.83438 10.722 2.53438 11.2414 2.89813C11.5414 3.10907 11.5526 3.55063 11.3145 3.93688Z" fill="#FFA828"/>
                    <path d="M6.24644 7.93531L6.77612 7.92875C6.77612 7.92875 6.79019 8.50719 6.87362 8.93844C6.95706 9.37063 7.06862 9.85063 7.06862 9.85063C7.06862 9.85063 5.98956 10.2125 5.99612 9.8225C6.00269 9.4325 6.163 8.67313 6.163 8.67313C6.163 8.67313 6.2605 7.76844 6.24644 7.93531Z" fill="#FFA828"/>
                    <path d="M5.57324 9.78219C5.57324 9.78219 5.93043 9.20094 6.00543 8.76031C6.08043 8.31969 6.12168 7.92969 6.12168 7.92969L6.34293 7.93906C6.34293 7.93906 6.32137 8.5775 6.29605 9.00969C6.27074 9.44187 6.19668 9.86563 6.19668 9.86563L5.57324 9.78219Z" fill="#FFEFAB"/>
                    <path d="M5.84762 7.56969C5.84762 7.56969 6.01355 7.4075 6.47012 7.4075C6.92668 7.4075 7.12262 7.58281 7.12262 7.58281L7.1348 8.14625C7.1348 8.14625 6.83105 8.05156 6.46168 8.04688C6.15418 8.04313 5.82324 8.1575 5.82324 8.1575L5.84762 7.56969Z" fill="#D1701C"/>
                    <path d="M3.85314 1.97375C3.93002 1.9025 4.66689 1.34938 6.41158 1.33438C8.28846 1.3175 8.99252 1.86125 9.03658 1.89125C9.08627 1.92406 9.14439 2.07406 9.12002 2.14063C9.09471 2.20719 9.04502 2.23156 8.90439 2.17344C8.76283 2.11531 8.06533 1.60625 6.38721 1.65875C4.77564 1.70844 4.09221 2.19875 4.02002 2.24C3.96189 2.27281 3.85408 2.28125 3.80439 2.21469C3.75377 2.14906 3.80346 2.02063 3.85314 1.97375Z" fill="#D1701C"/>
                    <path d="M8.70648 11.0666L8.70555 9.72688H4.40523C4.41836 9.72688 4.40805 10.8163 4.40617 11.0713H3.79492V12.0416H9.25586V11.0713L8.70648 11.0666Z" fill="#865C50"/>
                    <path d="M5.78406 10.4309C5.67812 10.4262 5.55625 10.4478 5.55156 10.5791C5.54687 10.7103 5.54688 11.09 5.54688 11.1622C5.54688 11.2344 5.60594 11.2972 5.75406 11.3019C5.90219 11.3066 7.2925 11.3019 7.39 11.3019C7.4875 11.3019 7.53812 11.2175 7.54187 11.1331C7.54656 11.0487 7.53719 10.6934 7.53719 10.5969C7.53719 10.4366 7.39375 10.4366 7.29625 10.4366C7.19125 10.4347 5.78406 10.4309 5.78406 10.4309Z" fill="#FCC219"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_2913_2102">
                      <rect width="12" height="12" fill="white" transform="translate(0.572266 0.5)"/>
                    </clipPath>
                  </defs>
                  </svg>
                  <p className='text-[#C1FF70] text-[11px] tracking-[-0.44px]'>0.5 EUT</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
      
    
    </Swiper>
    </div>
  )
}



export default SliderPage
