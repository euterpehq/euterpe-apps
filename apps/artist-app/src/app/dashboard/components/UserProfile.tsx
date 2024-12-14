import Image from 'next/image'
import { useEffect, useState } from 'react';
import EditProfile from './EditProfile';

export default function UserProfile() {
   const [isModalOpen, setIsModalOpen] = useState(false);
     // Prevent scrolling while modal is open
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
    const openModal = () => setIsModalOpen(true);
 
  return (
    <>
    <div onClick={openModal} className="cursor-pointer p-[10px] flex justify-start items-center gap-x-[10px] w-[240px] rounded-[8px] h-[54px] bg-[#181818]">
        <div className="w-[32px] h-[32px] rounded-full border">
          <Image src="/images/artist.png" alt="artist" width={100} height={100}/>
        </div>
        <div>
          <h3 className="text-[#FFF] text-[14px]">BurnaBoy</h3>
          <p className="text-[#868B9F] text-[10px]">Artist</p>
        </div>
      </div>
      {isModalOpen && (
            <EditProfile
              isModalOpen={isModalOpen}
              closeModal={() => setIsModalOpen(false)}
            />
          )}
      </>
  )
}
