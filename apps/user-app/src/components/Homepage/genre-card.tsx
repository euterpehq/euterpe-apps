import GenreCardSlider from '@/components/Homepage/genre-card-slider'
import HorizontalSlider from '@/components/Homepage/genre-card-slider'
import React from 'react'


const Genre: React.FC = () => {
  return (
    <div className='w-full mx-auto flex flex-col gap-5  md:px-0 px-6 my-10 overflow-hidden'>
      <div className='pl-6'>
        <h1 className='font-semibold text-[25px]'>Explore genres</h1>
      </div>
      <GenreCardSlider />
    </div>
  )
}

export default Genre
