import React from 'react'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { fetchArtistProfiles } from '@/lib/queries/artist/get-artists'
import ExplorePage from './explore/page';
import { fetchAlbums } from '@/lib/queries/album/get-albums';



export default async function Home(){
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
      queryKey: ['artists'],
      queryFn: fetchArtistProfiles
    })

    await queryClient.prefetchQuery({
      queryKey: ['albums'],
      queryFn: fetchAlbums
    })

    return(
      <HydrationBoundary state={dehydrate(queryClient)}>
          <ExplorePage />
      </HydrationBoundary>
    )
}
