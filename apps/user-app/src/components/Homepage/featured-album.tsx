"use client"
import React from 'react'
import AlbumHorizontalSlider from '@/components/Homepage/album-horizontal-slider'
import { getAlbums } from '@/lib/queries/album/get-albums'
import { getArtists } from '@/lib/queries/artist/get-artists'

 

export type HomePageProps = {
  albums: NonNullable<Awaited<ReturnType<typeof getAlbums>>>
  artists: NonNullable<Awaited<ReturnType<typeof getArtists>>>
}

const FeaturedAlbum = ({albums, artists}: HomePageProps) => {
 



  if (!albums) return <div>Album not found</div>;
  if (!artists) return <div>Artist not found</div>;

  return (
    <div className='w-full md:h-[400px] h-[350px]  flex flex-col gap-5  mt-5 overflow-hidden'>
      <div className='ml-6'>
        <h1 className='font-semibold md:text-[25px] text-[20px]'>Top Picks</h1>
      </div>
      <AlbumHorizontalSlider albums={albums} artists={artists}/>
    </div>
  )
}

export default FeaturedAlbum
