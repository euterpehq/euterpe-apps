"use client"
import React from 'react'
import { HomePageProps } from './page'
import AlbumSlider from '@/components/Homepage/album-horizontal-slider'


const FeaturedAlbum = ({albums, artists}: HomePageProps) => {
 



  if (!albums) return <div>Album not found</div>;
  if (!artists) return <div>Artist not found</div>;

  return (
    <div className='w-full h-[450px]   mx-auto flex flex-col gap-5 pl-6 my-3 overflow-hidden'>
      <div className=''>
        <h1 className='font-semibold text-[25px]'>Top Picks</h1>
      </div>
      <AlbumSlider albums={albums} artists={artists}/>
    </div>
  )
}

export default FeaturedAlbum
