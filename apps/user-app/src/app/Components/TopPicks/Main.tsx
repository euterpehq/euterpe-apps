"use client"
import React, { useEffect } from 'react'
import SliderPage from './SliderPage'
import { topPicks } from '@/data/songs'
import useAlbumStore from '@/store/album.store'
import useArtistStore from '@/store/artist.store'
//import SliderPage from '@/app/Component/TopPicks/SliderPage'



const Main: React.FC = () => {

const {albums, fetchAlbum} = useAlbumStore();
const {artists, fetchArtist} = useArtistStore();

  useEffect(() => {
    fetchAlbum()
    fetchArtist()
  },[fetchAlbum, fetchArtist])



  return (
    <div className='w-full h-[450px]   mx-auto flex flex-col gap-5 pl-6 my-3 overflow-hidden'>
      <div className=''>
        <h1 className='font-semibold text-[25px]'>Top Picks</h1>
      </div>
      <SliderPage albums={albums} artists={artists}/>
    </div>
  )
}

export default Main
