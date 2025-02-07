import React from 'react';
import { Album } from '@/lib/queries/supabaseQueries';
import Image from 'next/image';

interface AlbumCardProps {
  album: Album;
}

export default function AlbumCard({ album }: AlbumCardProps) {
  return (
    <div className="text-center">
      <Image
        src={album?.cover_image_url || ""}
        alt={album?.title || ""}
        className="w-32 h-32 rounded-lg mx-auto"
        width={100}
        height={100}
        quality={100}
      />
      <p className="mt-2 text-sm">{album?.title}</p>
    </div>
  );
}
