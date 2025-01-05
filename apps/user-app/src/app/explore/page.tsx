"use client";
import React from 'react'
import FeaturedAlbum from './components/top-picks/featured-album'
import Mystery from './components/mystery/mystery'
import Genre from './components/genre/genre-card'
import FeaturedArtists from './components/artists/featured-artists'



export default function ExplorePage(){
  return (
    <div>
      <FeaturedAlbum />
      <Mystery />
      <Genre />
      <FeaturedArtists />
    </div>
  )
}


