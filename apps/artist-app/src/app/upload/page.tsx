"use client"
import React  from 'react'
import { Dot} from 'lucide-react';
import Link from 'next/link';
export default function page(){

  return (
    <>
     <div className="rounded-[16px] overflow-y-auto fixed inset-0 z-0 flex items-center justify-center bg-[#00000066] bg-opacity-70 backdrop-blur-sm">
        <section  className="rounded-[16px] w-[60%] p-6 flex flex-col">
            <div className="rounded-[16px] mt-4 relative bg-[#181818] pb-10 shadow-md">
            <div style={{backgroundImage: `url(/images/confetti.png)`}} className='rounded-t-[16px] flex justify-center items-center w-full h-[224px]'>
                <h2 className='text-[#FFFFFF] text-[34px] text-center'>Media Uploaded Successfully</h2>
            </div>
        <div className='p-4'>
           <section className='flex justify-between w-full'>
            <div className='flex justify-start items-center gap-x-[16px]'>
                <div style={{backgroundImage: `url("/images/music.png")`}} className='w-[120px] h-[120px]'>
                </div>
                <div>
                    <h2>Amusia</h2>
                    <h4 className="flex justify-start items-center mt-2 text-[12px] text-[#868B9F]">
                      Album
                      <span className="flex jutify-center items-center ">
                      <Dot size={25} color="#C1FF70" />3 tracks
                      </span>
                    </h4>
                    <div className="mt-[15px] flex jusitfy-start items-center gap-x-[12px]">
                        <div className='text-[12px] text-[400] p-[8px] border rounded-[4px] px-[12px]'>Genre</div>
                        <div className='text-[12px] text-[400] p-[8px] border rounded-[4px] px-[12px]'>Sub-genre</div>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url("/images/music-list.png")`}} className='scale-1 w-[148px] h-[20px]'>
            </div>
           </section>
          <section className=" flex justify-between items-center border-b p-4">
          <div className="flex items-center gap-x-[9px]">
            <div className="mt-10 flex justify-start items-center gap-x-[20px]">
              <h2 className="text-lg text-[#868B9F] flex-1">1</h2>
              <div className=''>Lover’s Quarrel</div>
            </div>
          </div>
        </section>
          <section className=" flex justify-between items-center border-b p-4">
          <div className="flex items-center gap-x-[9px]">
            <div className="mt-4 flex justify-start items-center gap-x-[20px]">
              <h2 className="text-lg text-[#868B9F] flex-1">2</h2>
              <div className=''>Lover’s Quarrel</div>
            </div>
          </div>
        </section>
          <section className=" flex justify-between items-center border-b p-4">
          <div className="flex items-center gap-x-[9px]">
            <div className="mt-4 flex justify-start items-center gap-x-[20px]">
              <h2 className="text-lg text-[#868B9F] flex-1">3</h2>
              <div className=''>Lover’s Quarrel</div>
            </div>
          </div>
        </section>
            <Link href="/my-music" className="font-semibold m-auto jusitfy-center pb-2 items-center bg-[#C1FF70] text-black rounded-[8px] block text-center border px-[14px] mt-10 px-[12px] py-[14px] h-[44px] w-full">Done</Link>
          </div>
        </div>
        </section>
      </div>
    
    </>
  )
}
