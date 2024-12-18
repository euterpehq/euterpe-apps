"use client";
import { artists, Discography } from "@/data/songs";
import Banner from "../artistDetail/Banner";
import Description from "../artistDetail/Description";
import TopSongs from "../artistDetail/TopSongs";

import HorizontalSlider from "@/app/Components/artist/HorizontalSlider";
import { useEffect, useState } from "react";

import useArtistStore from "@/store/artist.store";
import useAlbumStore from "@/store/album.store";
import { UserInteractionTracker } from "@/partials/UserInteractionTracker";
import { AudioInitializer } from "@/partials/AudioInitializer";
import Header from "@/partials/Header";
import MiniPlayer from "@/app/Components/MiniPlayer";
import SliderPage from "../artistDetail/SliderPage";
import { useRouter } from "next/router";

function ArtistPage(){
    const { query } = useRouter();
  const [artistId, setArtistId] = useState<string | null>(null);
  const {artists, fetchArtist} = useArtistStore()
  const {albums, fetchAlbum} = useAlbumStore()
  useEffect(() => {

      if(query.id){
        setArtistId(query.id as string );
      } 
  }, [query]);


  useEffect(() => {
    fetchArtist();
    fetchAlbum();
  },[fetchArtist, fetchAlbum])

    
    const artist = artists.find((a) => a.id === artistId )

    if(!artist) return null
    
    return(
        <div className="mb-[10rem]">
          <UserInteractionTracker />
    <AudioInitializer />
      <Header />
           <Banner  artist={artist}/>
           <Description artist={artist}/>
           <TopSongs artist={artist} albums={albums}/>
           <div className="pl-[24px] w-full h-[400px] my-20">
            <h1 className="text-[20px] font-figtree tracking-[-0.4px] pb-10">Discograpy</h1>
           <SliderPage />
           </div>
           <div className="pl-[24px] my-[20px]">
           <h1 className="text-[20px] font-figtree tracking-[-0.4px] pb-10">Similar Artists</h1>
           <HorizontalSlider />
           </div>
        </div>
    )
}
export default ArtistPage;