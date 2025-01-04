"use client"
import React from 'react'
import SliderPage from '@/app/explore/components/top-picks/top-pick-slider'
import { useQuery } from '@tanstack/react-query'
import { fetchAlbumsAndArtists } from '@/lib/queries/combined/get-top-picks'
import { LoadingSkeleton } from '../artists/featured-artists'


const FeaturedAlbum: React.FC = () => {
  const slidesPerView = 7; 

  const { data, isLoading, isError } = useQuery({
    queryKey: ['topPicks'], 
    queryFn: fetchAlbumsAndArtists, 
  });

  if (isLoading) return <div className='mt-5'><LoadingSkeleton slidesPerView={slidesPerView}/></div>;
  if (isError || !data) return <div>Error occurred while fetching data.</div>;

  const { albums, artists } = data;

  if (!albums) return <div>Album not found</div>;
  if (!artists) return <div>Artist not found</div>;

  return (
    <div className='w-full h-[450px]   mx-auto flex flex-col gap-5 pl-6 my-3 overflow-hidden'>
      <div className=''>
        <h1 className='font-semibold text-[25px]'>Top Picks</h1>
      </div>
      <SliderPage albums={albums} artists={artists}/>
    </div>
  )
}

export default FeaturedAlbum
