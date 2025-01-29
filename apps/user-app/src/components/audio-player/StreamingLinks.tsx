import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArtistProfile, Song } from "@/lib/queries/supabaseQueries";
import useArtistStore from "@/store/artist.store";
//import { type Song } from "@/data/songs";

type Linked = {
    song: Song;
    artist: any;
}

function StreamingLinks({ song, artist }: Linked) {

  const platforms = [
    { name: "Apple Music", url: artist?.apple_music_url || "" },
    { name: "Spotify", url:  artist?.spotify_url || "" },
    { name: "YouTube Music", url: artist?.youtube_music_url || "" },
  ];
  return (
    <div className="flex gap-3">
      {platforms.map((platform) => (
        <Button
          key={platform.name}
          className="rounded-[120px] bg-white px-4 py-2 font-figtree text-xs font-semibold tracking-[-0.02em] text-[#0F0F0F] hover:bg-white/90"
          asChild
        >
          <Link href={platform.url} target="_blank" rel="noopener noreferrer">
            {platform.name}
          </Link>
        </Button>
      ))}
    </div>
  );
}

export default StreamingLinks;
