import React from 'react'
import { CiCircleInfo } from "react-icons/ci";

const AnnouncementBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 w-full pt-1 flex items-center z-[999] justify-center bg-[#C1FF70] text-black">
      <div className='flex items-center gap-1'>
        <CiCircleInfo />
        <p className='text-[14px]'>Pre-Alpha Release is Coming 🎉</p>
        
      </div>
    </div>
  )
}

export default AnnouncementBanner
