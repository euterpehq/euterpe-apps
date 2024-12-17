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
import { songs } from '@/data/songs';
import { useAudioPlayerStore } from '@/store/audioplayer.store';
import { useMiniPlayerStore } from '@/store/miniplayer.store';



const HorizontalSlider: React.FC = () => {
  const { setCurrentSongIndex, currentSongIndex, setIsPlaying, audio, setAudio, setDuration, setCurrentTime, playNext, setShowStreamingLinks, setDiscovered } = useAudioPlayerStore(); 
  const { showMiniPlayer } = useMiniPlayerStore();
    const items = Array.from({ length: 100 }, (_, i) => i + 1);
    const [loading, setLoading] = useState(true); 
    const slidesPerView = 6; 
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 200); 
      return () => clearTimeout(timer);
    }, []);
   

    const playRandomSong = () => {
      let randomIndex = Math.floor(Math.random() * songs.length);
    
      while (randomIndex === currentSongIndex) {
        randomIndex = Math.floor(Math.random() * songs.length);
      }
    
      setCurrentSongIndex(randomIndex);  // Update the current song index
      setDiscovered(false);  // Reset discovered state to false
      setShowStreamingLinks(false);  // Reset showStreamingLinks state to false
      setIsPlaying(true);                // Set isPlaying to true to trigger playback
    
      const song = songs[randomIndex];
      if (!audio || audio.src !== song.url) {
        // If the audio is not initialized or the song is different, create a new audio instance
        const newAudio = new Audio(song.url);
        setAudio(newAudio);
    
        // Play immediately after setting up the new audio
        newAudio.play().catch((error) => {
          console.error("Playback error:", error);
        });
    
        // Set up event listeners for the new audio
        newAudio.addEventListener("loadedmetadata", () => {
          setDuration(newAudio.duration);
        });
        newAudio.addEventListener("timeupdate", () => {
          setCurrentTime(newAudio.currentTime);
        });
        newAudio.addEventListener("ended", playNext);
      }

      showMiniPlayer()
    };
  
    // Render the skeleton loader if loading
  if (loading) {
    return (
      <div className="w-full h-[500px]  flex justify-between gap-5">
        {Array.from({ length: slidesPerView }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse tp2 h-[400px] w-[300px] rounded-lg flex flex-col gap-4 p-4 rounded-[8px] transition-opacity  ease-in-out"
            style={{ opacity: 0.5 }}
          >
            {/*<div className="bg-gray-700 h-6 w-3/4 rounded"></div>
            <div className="bg-gray-700 h-16 w-full rounded"></div>
            <div className="bg-gray-700 h-6 w-1/2 rounded"></div>*/}
          </div>
        ))}
      </div>
    );
  }

 
  return (
    <div className='relative w-full mx-auto h-full  overflow-hidden'>
    <Swiper
        spaceBetween={20}
        slidesPerView={6}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        style={{}}
        className="w-full h-full cursor-grab "
    >
        
        {items.map((item) => (
        <SwiperSlide
        key={item}
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "12px 12px 93.838px 12px",
            gap: "4rem",
            width: "200px",
           
            //cursor: "pointer",
            background: "#121310",
            borderRadius: "8px",
            //border: "1px solid white",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        onClick={playRandomSong} 
        >
                <div className='w-full flex items-center justify-between'>
                    <div className=''>
                        <Image src={note} alt="" className="w-full h-full object-cover"/>
                    </div>
                    <div className='flex items-center  gap-1 bg-[#1b1f15] py-[6px] px-[10px] rounded-full'>
                        <div><Image src={trophy} alt=""className="w-full h-full object-cover"/></div>
                        <p className='text-[#C1FF70] text-[11px]'>0.5 EUT</p>
                    </div>
                </div>
                <div>
                    <Image src={question} alt=""className="w-full h-full object-cover" />
                </div>
        </SwiperSlide>
    ))}
      
    
    </Swiper>
    </div>
  )
}

export default HorizontalSlider
