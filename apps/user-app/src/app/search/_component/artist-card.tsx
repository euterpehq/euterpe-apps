import React from 'react';
import { ArtistProfile } from '@/lib/queries/supabaseQueries';
import Image from 'next/image';
import Link from 'next/link';

interface ArtistCardProps {
  artists: ArtistProfile[];
}

export default function ArtistCard({ artists }: ArtistCardProps) {


  return (
  <div className='w-full h-full px-6 my-10 flex flex-col gap-10'>
    <h1 className='font-figtree font-bold text-[20px] leading-[24px] tracking-[-0.02em] text-[#fff]'>Artist</h1>
    <div className='w-full h-full grid grid-cols-2 md:grid-cols-7 gap-x-2 md:gap-x-[8px] gap-y-5 md:gap-y-10'>
    {
      artists.map((item,index) => (
        <Link key={index} href={`/artist/${item.id}`}>
        <div  className='  w-full md:w-[180px] h-[230px] rounded-[16px] md:p-[24px] p-[15px] gap-[10px] bg-[#181818] '>
            <div className='w-[144px] h-[174px] gap-[20px] flex flex-col items-center justify-center'>
                <div className='w-[100px] h-[100px] '>
                  {/*<div className='w-full h-full bg-[#868B9F] rounded-full'></div>*/}
                  <Image src={item.artist_image_url ?? '/images/artFrame.jpg'} alt="" width={100} height={100} quality={100} className='w-full h-full rounded-full object-cover'/>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <h1 className="font-figtree font-medium text-[16px] leading-[19.2px] tracking-[-0.02em] text-[#fff]">{item.artist_name}</h1>
                  <p className="font-figtree font-normal text-[14px] leading-[16.8px] tracking-[-0.02em] text-[#868B9F]">Artist</p>
                </div>
            </div>
        </div>
        </Link>
      ))
    }
    </div>
    
  </div>
  );
}
