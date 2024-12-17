"use client"
import AlbumHead from "@/app/(pages)/Layers/AlbumHead";
import { useRouter } from "next/router";
import AlbumSongs from "../../Layers/AlbumSongs";


export default function AlbumPage(){



    return(
        <div>
            <AlbumHead />
            <AlbumSongs />
        </div>
    )
}