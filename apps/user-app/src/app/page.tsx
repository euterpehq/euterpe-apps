"server only";
import React from 'react'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import {getArtists } from '@/lib/queries/artist/get-artists'
import ExplorePage from './explore/page';
import { getAlbums } from '@/lib/queries/album/get-albums';



export default async function Home(){
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
      queryKey: ['artists'],
      queryFn: getArtists
    })

    await queryClient.prefetchQuery({
      queryKey: ['albums'],
      queryFn: getAlbums
    })

    return(
      <HydrationBoundary state={dehydrate(queryClient)}>
          <ExplorePage />
      </HydrationBoundary>
    )
}
