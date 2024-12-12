import React from 'react'
import HorizontalSlider from './HorizontalSlider'

const Lucky: React.FC = () => {
  return (
    <div className='max-w-[1394px]  w-full mx-auto flex flex-col gap-5 pl-6 my-10  overflow-hidden'>
      <div className=''>
        <h1 className='font-semibold text-[25px]'>Feeling Lucky?</h1>
        <p className='text-[14px]'>Listen to mystery songs and earn top rewards</p>
      </div>
      <HorizontalSlider />
    </div>
  )
}

export default Lucky
