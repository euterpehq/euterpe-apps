import "server-only";
import React from 'react'
import {getArtists } from '@/lib/queries/artist/get-artists'
import { getAlbums } from '@/lib/queries/album/get-albums';
import HomePage from '../components/Homepage/page';



export default async function Home(){
   const artists = await getArtists();
   const albums = await getAlbums();

    return(
    <>
    <HomePage artists={artists} albums={albums} />
    </>
    )
}
