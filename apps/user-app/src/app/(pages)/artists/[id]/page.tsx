"use client";
import { artists, Discography } from "@/data/songs";
import Banner from "../artistDetail/Banner";
import Description from "../artistDetail/Description";
import TopSongs from "../artistDetail/TopSongs";
import SliderPage from "@/app/Components/TopPicks/SliderPage";
import HorizontalSlider, { ArtistProfile } from "@/app/Components/artist/HorizontalSlider";
import { useEffect, useState } from "react";
import { PostgrestError } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";

function ArtistPage({params}: {params:{id: string}}){
    const {id} = params
    const artistId = id
    const [artistProfile, setArtistProfile] = useState<ArtistProfile[]>([])
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState<PostgrestError | null>(null);
      const supabase = createClient()

      useEffect(() => {
          const fetchArtistProfile = async () => {
            const {data, error} = await supabase.from("artist_profiles").select("*");
            if(error){
              setError(error)
            } else {
              setArtistProfile(data)
            }
            setLoading(false)
            
          }
          fetchArtistProfile()
        },[supabase])

   
    
    const artist = artistProfile.find((a) => a.id === artistId )

    
    return(
        <div className="mb-[10rem]">
           <Banner  artist={artist}/>
           <Description artist={artist} />
           {/*<TopSongs artist={artist}/>
           <div className="pl-[24px] w-full h-[400px] my-20">
            <h1 className="text-[20px] font-figtree tracking-[-0.4px] pb-10">Discograpy</h1>
           {/*<SliderPage Items={Discography}/>/}
           </div>
           <div className="pl-[24px] my-[20px]">
           <h1 className="text-[20px] font-figtree tracking-[-0.4px] pb-10">Similar Artists</h1>
           <HorizontalSlider />
           </div>*/}
           
        </div>
    )
}
export default ArtistPage;