"use client"
import AlbumHead from "@/app/(pages)/Layers/AlbumHead";
import AlbumSongs from "@/app/(pages)/Layers/AlbumSongs";
import { albums } from "@/data/songs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



export default function AlbumPage({params}: {params:{id: string}}){
  const {id} = params
  const albumId = Number(id)
  
 
   // Find the album using the albumId
   const album = albums.find((a) => a.id === albumId);
  
 console.log(album)
    return(
        <div>
          
            <AlbumHead album={album}/>
            <AlbumSongs album={album}/>
        </div>
    )
}