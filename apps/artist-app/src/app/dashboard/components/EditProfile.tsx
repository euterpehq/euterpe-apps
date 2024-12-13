"use client"
import { Button } from '@/components/ui/button'
import React  from 'react'
import StreamingLinks from './StreamingLinks';
import { X } from 'lucide-react';
import UpdateProfilePic from './UpdateProfilePic';
import BannerImage from './BannerImage';
interface EditProfileProps {
  isModalOpen: boolean;
  closeModal: () => void;
}
export default function EditProfile({
  isModalOpen,
  closeModal,
}: EditProfileProps) {
  if (!isModalOpen) return null;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <>
    {isModalOpen &&
     <div className="overflow-y-auto fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
              <button
                className="flex rounded-full justidfy-center items-center bg-[#1E1E1E] w-[44px] h-[44px] absolute top-14 left-4 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
             <X className="m-auto text-center" color="white"/>
              </button>
        <form onSubmit={handleSubmit} className="mt-[820px] w-[60%] p-6 flex flex-col">
              <h2 className="text-xl font-semibold text-start">Update Artist Info</h2>
            <div className="mt-4 p-4 relative bg-[#181818] pb-10 rounded-lg shadow-md">
                <UpdateProfilePic/>
              <p className="mt-6">Artist Name</p>
              <input className="bg-[#1E1E1E] mt-4 rounded-[6px] p-[14px] w-full text-[#797979]" placeholder="Enter name" type="text" name="" id="" /> 
                <p className="mt-6">Profile Banner Image</p>
                <BannerImage/>
            <p className="mt-6">Bio</p>
            <textarea className="bg-[#1E1E1E] mt-4 rounded-[6px] p-[14px] w-full text-[#797979]" name="" id="" cols={20} rows={4} placeholder='Share your artist story with us!'></textarea>
              <StreamingLinks/>
                <p className="mt-16"><input type="checkbox"  /> <span className="ms-1.5">I have read and agree to the terms of the </span> <span className="text-primary"> Euterpe Agreement</span></p>
            <Button onClick={closeModal} className="mt-10 p-[14px] h-[44px] w-full">Update</Button>
            </div>
        </form>
      </div>
    }
    </>
  )
}
