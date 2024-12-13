import React from 'react'
import HorizontalSlider from './HorizontalSlider'
import Image from 'next/image'
import icon from "@/assets/icons/star-ring.png"
import { useModalStore } from '@/store/modal.store'

const Lucky: React.FC = () => {
  const {isOpen, openModal, closeModal} = useModalStore()
  return (
    <div className='  w-full h-[400px] mx-auto flex flex-col gap-5 pl-6 my-10  overflow-hidden'>
      <div className='w-full flex items-center justify-between'>
       <div>
       <h1 className='font-semibold text-[25px]'>Feeling Lucky?</h1>
       <p className='text-[14px]'>Listen to mystery songs and earn top rewards</p>
       </div>
       <div onClick={openModal}  className='mr-6 py-[10px] px-[20px] bg-[#C1FF70] flex items-center gap-[4px] cursor-pointer rounded-[120px] '>
        <div>
          <Image src={icon} alt=""/>
        </div>
        <p className='text-black text-[13px] font-600'>AutoPlay</p>
       </div>
      </div>
      <HorizontalSlider />
    </div>
  )
}

export default Lucky
