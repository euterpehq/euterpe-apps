"use client"
import AlbumHead from "@/app/(pages)/Layers/AlbumHead";
import AlbumSongs from "@/app/(pages)/Layers/AlbumSongs";
import MiniPlayer from "@/app/Components/MiniPlayer";
import { AudioInitializer } from "@/partials/AudioInitializer";
import Header from "@/partials/Header";
import { UserInteractionTracker } from "@/partials/UserInteractionTracker";
import useAlbumStore from "@/store/album.store";
import { useMiniPlayerStore } from "@/store/miniplayer.store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AlbumPage(){
    const { query } = useRouter();
    const [albumId, setAlbumId] = useState<string | null>(null);
    const {albums, fetchAlbum} = useAlbumStore()
    const {isVisible} = useMiniPlayerStore()

    useEffect(() => {
        if(query.id){
            setAlbumId(query.id as string);
        }
    }, [query]);
  
  useEffect(() => {
    fetchAlbum()
  },[fetchAlbum])

  
   const album = albums.find((a) => a.id === albumId);  

   if(!album) return null

    return(
        <div>
            <AudioInitializer />
            <UserInteractionTracker />
            <Header />
            <AlbumHead album={album}/>
            <AlbumSongs album={album}/>
           { isVisible && <MiniPlayer /> }
        </div>
    )
}