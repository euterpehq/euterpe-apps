"use client"
import React from 'react'
import { ArtistsProps } from './page';
import ArtistSlider from '@/components/Homepage/artists-horizontal-slider';




const FeaturedArtists = ({artists}: { artists : ArtistsProps}) => {

  return (
    <div className='  w-full h-full mx-auto flex flex-col gap-5 pl-6 my-10 overflow-hidden'>
      <div className=''>
        <h1 className='font-semibold text-[25px]'>Featured Artists</h1>
      </div>
      <ArtistSlider  artists={artists}/>
    </div>
  )
}

export default FeaturedArtists
