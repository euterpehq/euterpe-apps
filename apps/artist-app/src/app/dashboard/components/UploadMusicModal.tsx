"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import StreamingLinks from './StreamingLinks';
import CoverImage from './CoverImage';
import AudioFile from './AudioFile';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation'
 
interface UploadMusicModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}
export default function UploadMusicModal({
  isModalOpen,
  closeModal,
}: UploadMusicModalProps) {
  if (!isModalOpen) return null;
  useEffect(() => {
if (isModalOpen) {
   document.body.style.overflow = 'hidden';
} else {
   document.body.style.overflow = 'auto';
}
// Clean up on unmount
return () => {
   document.body.style.overflow = 'auto';
};
}, [isModalOpen]);
  const router = useRouter()
 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeModal();
    router.push("/upload")
  };

 
  return (
    <>
    {isModalOpen  &&
     <div className="overflow-y-auto fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
              <button
                className="flex rounded-full justidfy-center items-center bg-[#1E1E1E] w-[44px] h-[44px] absolute top-10 left-4 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
             <X className="m-auto text-center" color="white"/>
              </button>
        <form onSubmit={handleSubmit} className="mt-[1120px] w-[60%] p-6 flex flex-col">
              <h2 className="text-xl font-semibold text-start">Upload Music</h2>
            <div className="mt-4 p-4 relative bg-[#181818] pb-10 rounded-lg shadow-md">
            <p className="mt-4">Number of Songs</p>
            <select className="bg-[#1E1E1E] mt-4 rounded-[6px] p-[14px] w-full text-[#797979]" name="" id="">
              <option value="" className="text-[#797979]">Select</option>
              <option value="" className="text-[#797979]">1</option>
              <option value="" className="text-[#797979]">2</option>
              <option value="" className="text-[#797979]">3</option>
              <option value="" className="text-[#797979]">4</option>
              <option value="" className="text-[#797979]">5</option>
              <option value="" className="text-[#797979]">6</option>
              <option value="" className="text-[#797979]">7</option>
              <option value="" className="text-[#797979]">8</option>
              <option value="" className="text-[#797979]">9</option>
              <option value="" className="text-[#797979]">10</option>
            </select>   
              <p className="mt-6">Album Title</p>
              <input className="bg-[#1E1E1E] mt-4 rounded-[6px] p-[14px] w-full text-[#797979]" placeholder="Enter name" type="text" name="" id="" />
                <p className="mt-4">Genre</p>
            <select className="bg-[#1E1E1E] mt-4 rounded-[6px] p-[14px] w-full text-[#797979]" name="" id="">
              <option value="" className="text-[#797979]">Select</option>
               <option value="" className="text-[#797979]">Pop</option>
              <option value="" className="text-[#797979]">Rock</option>
              <option value="" className="text-[#797979]">Hip Hop</option>
              <option value="" className="text-[#797979]">Country</option>
              <option value="" className="text-[#797979]">Electronic</option>
              <option value="" className="text-[#797979]">Jazz</option>
              <option value="" className="text-[#797979]">Reggae</option>
            </select> 
               <p className="mt-4">Sub-Genre <span className="text-[#868B9F]"> (optional)</span></p>
            <select className="bg-[#1E1E1E] mt-4 rounded-[6px] p-[14px] w-full text-[#797979]" name="" id="">
              <option value="" className="text-[#797979]">Select</option>
             
            </select> 
              <StreamingLinks/>
                <p className="mt-6">Release Date</p>
              <input className="bg-[#1E1E1E] mt-4 rounded-[6px] p-[14px] w-full text-[#797979]" placeholder="Enter name" type="date" name="" id="" />
                <CoverImage/>
                <p className="mt-6">Track 1 Audio File <span className="text-[#868B9F]"> (WAV, MP3, M4A, FLAC, AIFF, WMA)</span></p>
                <AudioFile/>
                  <select className="mt-4 bg-[#1E1E1E] mt-4 rounded-[6px] p-[14px] w-full text-[#797979]" name="" id="">
              <option value="" className="text-[#797979]">Track number</option>
            </select> 
        
              <input className="bg-[#1E1E1E] mt-4 rounded-[6px] p-[14px] w-full text-[#797979]" placeholder="Track Title" type="text" name="" id="" />

            <Button className="mt-10 float-right  w-[100px] text-[14px] h-[34px] rounded-[8px] text-black p-[15px] px-4">Add Track</Button>
                <p className="mt-16"><input type="checkbox"  /> <span className="ms-1.5">I have read and agree to the terms of the </span> <span className="text-primary"> Euterpe Agreement</span></p>
            <Button className="mt-10 p-[14px] h-[44px] w-full">Upload Music</Button>
            </div>
        </form>
      </div>
    }
    </>
  )
}
