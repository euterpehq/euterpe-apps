import React from 'react';
import { Song } from '@/lib/queries/supabaseQueries';

interface SongItemProps {
  song: Song;
}

export default function SongItem({ song }: SongItemProps) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-700 last:border-0">
      <div className="flex items-center gap-3">
        <input type="checkbox" className="form-checkbox text-green-500" />
        <p className="text-sm">{song?.track_title}</p>
      </div>
    
    </div>
  );
}
