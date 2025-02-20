import React from 'react';
import { ArtistProfile } from '@/lib/queries/supabaseQueries';
import Image from 'next/image';

interface ArtistCardProps {
  artist: ArtistProfile;
  large?: boolean;
}

export default function ArtistCard({ artist, large = false }: ArtistCardProps) {
  return (
    <div className={`bg-[#1e1e1e]   flex items-center ${large ? 'w-[392px] h-[392px] rounded-[16px] p-[24px] gap-[10px] flex-col justify-center' : 'w-[192px] h-[230px] justify-center flex-col gap-[10px] p-[24px] rounded-[16px]'}`}>
      <Image
        src={artist?.artist_image_url || ""}
        alt={artist?.artist_name || ""}
        className={`rounded-full ${large ? 'w-[160px] h-[160px] object-cover' : 'w-[120px] h-[120px] mx-auto'}`}
        width={160}
        height={160}
        quality={100}
      />
      <div className='flex flex-col items-center'>
        <p className="text-lg font-medium">{artist.artist_name}</p>
        {large && <p className="text-gray-400 text-sm">Artist</p>}
      </div>
    </div>
  );
}
