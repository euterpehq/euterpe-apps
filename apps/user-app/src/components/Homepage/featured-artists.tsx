"use client"
import React from 'react'
import ArtistHorizontalSlider from '@/components/Homepage/artists-horizontal-slider';
import { getArtists } from '@/lib/queries/artist/get-artists';


type FeaturedArtistsProps = NonNullable<Awaited<ReturnType<typeof getArtists>>>

const FeaturedArtists = ({artists}: { artists : FeaturedArtistsProps}) => {

  return (
    <div className='  w-full h-full mx-auto flex flex-col gap-5  my-10 overflow-hidden'>
      <div className='ml-6'>
        <h1 className='font-semibold text-[25px]'>Featured Artists</h1>
      </div>
      <ArtistHorizontalSlider  artists={artists}/>
    </div>
  )
}

export default FeaturedArtists
