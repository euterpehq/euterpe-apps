import React from 'react'
import SliderPage from '@/partials/TopPicks/SliderPage'


const Main: React.FC = () => {
  return (
    <div className='w-full flex flex-col gap-2 pl-6 mt-5 overflow-hidden'>
      <div className=''>
        <h1 className='font-semibold text-[20px]'>Top Picks</h1>
      </div>
      <SliderPage />
    </div>
  )
}

export default Main
