import React from 'react'
import HorizontalSlider from './HorizontalSlider'

const Lucky: React.FC = () => {
  return (
    <div className='w-full flex flex-col gap-2 pl-6 mt-5 overflow-hidden'>
      <div className=''>
        <h1 className='font-semibold text-[20px]'>Feeling Lucky?</h1>
        <p className=''>Listen to mystery songs and earn top rewards</p>
      </div>
      <HorizontalSlider />
    </div>
  )
}

export default Lucky
