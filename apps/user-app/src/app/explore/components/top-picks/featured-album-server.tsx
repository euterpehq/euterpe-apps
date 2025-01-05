import React from 'react'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { fetchAlbums } from '@/lib/queries/album/get-albums'
import FeaturedAlbum from './featured-album';



export default async function TopPick(){
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
      queryKey: ['albums'],
      queryFn: fetchAlbums
    })

    return(
      <HydrationBoundary state={dehydrate(queryClient)}>
          <FeaturedAlbum />
      </HydrationBoundary>
    )
}
