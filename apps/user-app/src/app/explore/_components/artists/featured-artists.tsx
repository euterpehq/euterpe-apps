"use client"
import HorizontalSlider from '@/app/explore/_components/artists/artists-horizontal-slider'
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'

interface LoadingSkeletonProps {
  slidesPerView: number;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ slidesPerView }) => {
  return (
    <div className="flex h-[300px] w-full justify-between gap-5">
      {Array.from({ length: slidesPerView }).map((_, index) => (
        <div key={index} className="flex flex-col space-y-3">
          <Skeleton className="h-[200px] w-[250px] rounded-xl" />
        </div>
      ))}
    </div>
  );
};



const FeaturedArtists: React.FC = () => {
  return (
    <div className='  w-full h-full mx-auto flex flex-col gap-5 pl-6 my-10 overflow-hidden'>
      <div className=''>
        <h1 className='font-semibold text-[25px]'>Featured Artists</h1>
      </div>
      <HorizontalSlider />
    </div>
  )
}

export default FeaturedArtists
