import { Album } from '@/lib/queries/album/get-albums';
import { ArtistProfile } from '@/lib/queries/artist/get-artists';
import { Song } from '@/lib/queries/supabaseQueries';
import React from 'react';
import SearchSection from './search-section';
import ArtistCard from './artist-card';
import SongItem from './song-item';
import AlbumCard from './album-card';
import ArtistSongs from '@/app/artist/_components/artist-songs';

type SearchResultItem =
  | (ArtistProfile & { type: 'Artist' })
  | (Album & { type: 'Album' })
  | (Song & { type: 'Song' });

interface SearchResultProps {
  results: SearchResultItem[];
}

export default function SearchResults({ results }: SearchResultProps) {
  const artists = results.filter((item) => item.type === 'Artist');
  const songs = results.filter((item) => item.type === 'Song');
  const albums = results.filter((item) => item.type === 'Album');

  return (
    <div className='w-full h-full px-[24px]'>
      {/* Top Result (First Artist) */}
      <div className='flex flex-col my-10'>
        <div className='w-[457px] flex items-center justify-between gap-[8px]'>
          <h1>Top Results</h1>
          <h1>Songs</h1>
        </div>
        <div className='w-full flex justify-between gap-[8px]'>
          {artists.length > 0 && (
            <SearchSection title=''>
              <ArtistCard artist={artists[0]} large />
            </SearchSection>
          )}
          <div className='border w-full h-[335px] gap-[32px] mt-1'>
            <h1>Top songs</h1>
            <ArtistSongs artist={artists[0]} albums={albums as Album[]} />
          </div>
        </div>
      </div>

      {/* Artists Section */}
      {artists.length > 0 && (
        <SearchSection title="Artists">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {artists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </SearchSection>
      )}

      {/* Songs Section */}
      {songs.length > 0 && (
        <SearchSection title="Songs">
          <div className="bg-[#1e1e1e] p-4 rounded-lg">
            {songs.map((song) => (
              <SongItem key={song.id} song={song} />
            ))}
          </div>
        </SearchSection>
      )}

      {/* Albums Section */}
      {albums.length > 0 && (
        <SearchSection title="Albums">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {albums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        </SearchSection>
      )}
    </div>
  );
}
