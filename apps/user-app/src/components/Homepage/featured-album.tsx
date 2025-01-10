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
    <div className='w-full h-[450px]   mx-auto flex flex-col gap-5 pl-6 my-3 overflow-hidden'>
      <div className=''>
        <h1 className='font-semibold text-[25px]'>Top Picks</h1>
      </div>
      <AlbumHorizontalSlider albums={albums} artists={artists}/>
    </div>
  )
}

export default FeaturedAlbum
