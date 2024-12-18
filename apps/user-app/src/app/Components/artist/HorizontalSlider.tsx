"use client"
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";
import "swiper/css/free-mode";
import {FreeMode, Pagination} from "swiper/modules"
import { Skeleton } from "@/components/ui/skeleton"
import Image from 'next/image';
import note from "@/assets/icons/music-note.png";
import trophy from "@/assets/icons/trophy.png";
import question from "@/assets/icons/question.png";
import { artists } from '@/data/songs';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { Database } from '@/types/database.types';
import { PostgrestError } from '@supabase/supabase-js';
import { useQuery } from '@tanstack/react-query';
import { ArtistProfile, fetchArtistProfiles } from '@/lib/queries/supabaseQueries';




const HorizontalSlider: React.FC = () => {
  const {data: artistProfiles, error, isLoading} = useQuery<ArtistProfile[], Error>({
     queryKey: ['artistProfiles'], 
     queryFn: fetchArtistProfiles,
    })

  
  /*const [artistProfile, setArtistProfile] = useState<ArtistProfile[]>([])

  const [error, setError] = useState<PostgrestError | null>(null);
  const supabase = createClient()*/

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 200); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  /*useEffect(() => {
    const fetchArtistProfile = async () => {
      const {data, error} = await supabase.from("artist_profiles").select("*");
      if(error){
        setError(error)
      } else {
        setArtistProfile(data)
      }
      setLoading(false)
      
    }
    fetchArtistProfile()J
  },[supabase])*/

  //console.log(artistProfile)
  

    const items = Array.from({ length: 50 }, (_, i) => i + 1);
    //const items = [1, 2, 3, 4,5,6,7,8,9,10,11,12]
    
    const slidesPerView = 6; // Number of visible items
  
   

  
    if (loading) {
      return (
        <div className="w-full h-[300px] flex justify-between gap-5">
          {Array.from({ length: slidesPerView }).map((_, index) => (
            <div key={index} className="flex flex-col space-y-3">
            <Skeleton className="h-[200px] w-[250px] rounded-xl" />
            {/*<div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>*/}
          </div>
          ))}
        </div>
      );
    }


    
  return (
    <div className='relative w-full mx-auto h-full overflow-hidden'>
    <Swiper
        spaceBetween={20}
        slidesPerView={6.8}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        style={{}}
        className="w-full h-full cursor-grab "
    >
        
        {artistProfiles?.map((item) => (
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
            //cursor: "pointer",
            background: "#181818",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        >
              <Link href={`/artists/${item.id}`}>
              <div className='flex flex-col items-center gap-[20px] h-full'>
                   <div className='w-[120px] h-[120px]'>
                   <Image src={item.artist_image_url} alt="" className="w-full h-full object-cover rounded-full"/>
                   </div>
                   <div className='flex flex-col items-center'>
                        <p className='text-[18px]'>{item.artist_name}</p>
                        <p className='text-[15px] text-[#868B9F]'>{item.bio}</p>
                   </div>
              </div>
              </Link>
             
              
                
        </SwiperSlide>
    ))}
      
    
    </Swiper>
    </div>
  )
}

export default HorizontalSlider