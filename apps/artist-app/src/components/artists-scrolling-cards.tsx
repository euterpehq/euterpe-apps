import React from 'react'
import { Marquee } from './magicui/marquee';
import { cn } from '@/lib/utils';
import Image from 'next/image';


const ArtistsScrollingCards = () => {
   
    const artists = [
        {
          image: "/images/albumcover1.jpg",
        },
        {
          image: "/images/albumcover2.jpg",
        },
        {
          image: "/images/albumcover3.jpg",
        },
        {
          image: "/images/albumcover4.jpg",
        },
        {
          image: "/images/albumcover5.jpg",
        },
        {
          image: "/images/albumcover6.jpg",
        },
        {
          image: "/images/albumcover7.jpg",
        },
        {
          image: "/images/albumcover8.jpg",
        },
        {
          image: "/images/albumcover9.jpg",
        },
        {
          image: "/images/albumcover10.jpg",
        },
        {
          image: "/images/albumcover11.jpg",
        },
        {
          image: "/images/albumcover12.jpg",
        },
      ];

  return (
    <div className='relative w-full h-full flex items-center  overflow-hidden'>
        <Marquee pauseOnHover className="[--duration:20s] [--gap:12px] ">
        {
            artists.map((item, index) => (
                <figure key={index} 
                     className={cn(
                    "relative rounded-[8px] flex w-[188px] h-[188px] cursor-pointer flex-col items-center  overflow-hidden ",
                    )}             >
                    <Image 
                    src={item.image} 
                    alt='' className='w-full h-full object-cover rounded-[8px]' 
                    width={188} height={188}/>
                </figure>
            ))
        }
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background" />
    </div>
  )
}

export default ArtistsScrollingCards
