import React from 'react'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { fetchArtistProfiles } from '@/lib/queries/artist/get-artists'
import FeaturedArtists from './featured-artists';


export default async function Artists(){
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
      queryKey: ['artists'],
      queryFn: fetchArtistProfiles
    })

    return(
      <HydrationBoundary state={dehydrate(queryClient)}>
          <FeaturedArtists />
      </HydrationBoundary>
    )
}
