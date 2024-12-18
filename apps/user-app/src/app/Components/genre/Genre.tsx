import React from 'react'
import HorizontalSlider from './HorizontalSlider'

const Genre: React.FC = () => {
  return (
    <div className='w-full mx-auto flex flex-col gap-5 pl-6 my-10 overflow-hidden'>
      <div className=''>
        <h1 className='font-semibold text-[25px]'>Explore genres</h1>
      </div>
      <HorizontalSlider />
    </div>
  )
}

export default Genre
