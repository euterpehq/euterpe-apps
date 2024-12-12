import React from 'react'
import SliderPage from './SliderPage'
//import SliderPage from '@/app/Component/TopPicks/SliderPage'


const Main: React.FC = () => {
  return (
    <div className='w-full h-[350px]   mx-auto flex flex-col gap-5 pl-6 my-3 overflow-hidden'>
      <div className=''>
        <h1 className='font-semibold text-[25px]'>Top Picks</h1>
      </div>
      <SliderPage />
    </div>
  )
}

export default Main
