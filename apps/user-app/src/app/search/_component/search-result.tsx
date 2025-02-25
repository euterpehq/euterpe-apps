"use client"
import { Album } from '@/lib/queries/album/get-albums';
import { ArtistProfile } from '@/lib/queries/artist/get-artists';
import { Song } from '@/lib/queries/supabaseQueries';
import React, { useState } from 'react';
import ArtistCard from './artist-card';
import SongItem from './song-item';
import AlbumCard from './album-card';
import TopResult from './top-result';
import Image from 'next/image';

type SearchResultItem =
  | (ArtistProfile & { type: 'Artist' })
  | (Album & { type: 'Album' })
  | (Song  & { type: 'Song' });

interface SearchResultProps {
  results: SearchResultItem[];
}






export default function SearchResult({ results }: SearchResultProps) {
  const [tab, setTab] = useState("all")
  const artists = results.filter((item) => item.type === 'Artist');
  const songs = results.filter((item) => item.type === 'Song');
  const albums = results.filter((item) => item.type === 'Album');

  // Remove duplicate albums based on album ID or name
  const uniqueAlbums = Array.from(new Map(albums.map(album => [album.id, album])).values());
  const uniqueArtists = Array.from(new Map(artists.map(artist => [artist.id, artist])).values());
  const uniqueSongs = Array.from(new Map(songs.map(song => [song.id, song])).values());

  // Only slice the artists when the "All" tab is selected
  const slicedArtists = tab === "all" ? uniqueArtists.slice(0, 7) : uniqueArtists;
  const slicedAlbums = tab === "all" ? uniqueAlbums.slice(0, 7) : uniqueAlbums;

  return (
    <div>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide snap-x snap-mandatory">
        <div className='flex pl-6 mt-5 mb-10 gap-[8px]'>
          <div className='snap-center' onClick={() => setTab("all")}><button className={`flex items-center py-[16px] px-[20px] ${tab === "all" ? 'bg-[#FFFFFF] text-[#181818]' : 'bg-[#181818] text-[#fff]' } rounded-[120px] gap-[10px] font-figtree font-bold text-[13px] leading-[15.6px] tracking-[-0.02em]`}> <Image src="/icons/star.png" alt="" width={10} height={10} quality={100} className='w-full h-full object-cover'/> All</button></div>
          <div className='snap-center' onClick={() => setTab("artists")}><button className={`flex items-center py-[16px] px-[20px] ${tab === "artists" ? 'bg-[#FFFFFF] text-[#181818]' : 'bg-[#181818] text-[#fff]' } rounded-[120px] gap-[10px] font-figtree font-bold text-[13px] leading-[15.6px] tracking-[-0.02em]`}> <Image src="/icons/mic.png" alt="" width={10} height={10} quality={100} className='w-full h-full object-cover'/> Artists</button></div>
          <div className='snap-center' onClick={() => setTab("songs")}><button className={`flex items-center py-[16px] px-[20px] ${tab === "songs" ? 'bg-[#FFFFFF] text-[#181818]' : 'bg-[#181818] text-[#fff]' } rounded-[120px] gap-[10px] font-figtree font-bold text-[13px] leading-[15.6px] tracking-[-0.02em]`}> <Image src="/icons/musical-note.png" alt="" width={10} height={10} quality={100} className='w-full h-full object-cover'/> Songs</button></div>
          <div className='snap-center' onClick={() => setTab("albums")}><button className={`flex items-center py-[16px] px-[20px] ${tab === "albums" ? 'bg-[#FFFFFF] text-[#181818]' : 'bg-[#181818] text-[#fff]' } rounded-[120px] gap-[10px] font-figtree font-bold text-[13px] leading-[15.6px] tracking-[-0.02em]`}> <Image src="/icons/optical-disk.png" alt="" width={10} height={10} quality={100} className='w-full h-full object-cover'/> Albums</button></div>
        </div>
      </div>

        {tab === "all" && (
            <>
              <TopResult artists={artists} songs={uniqueSongs} albums={albums}/>
              <ArtistCard artists={slicedArtists}/>
              <AlbumCard albums={slicedAlbums} artists={artists}/>
            </>
          )
        }

        {
          tab === "artists" &&  <ArtistCard artists={slicedArtists}/>
        }

        {
          tab === "songs" &&  <SongItem songs={uniqueSongs} artists={artists} albums={albums}/>
        }

        {
          tab === "albums" &&  <AlbumCard albums={slicedAlbums} artists={artists}/>
        }

    
    </div>
  )
}



/*export default function SearchResults({ results }: SearchResultProps) {
  const artists = results.filter((item) => item.type === 'Artist');
  const songs = results.filter((item) => item.type === 'Song');
  const albums = results.filter((item) => item.type === 'Album');

  return (
    <div className='w-full h-full px-[24px]'>
      {/* Top Result (First Artist) /}
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

      {/* Artists Section /}
      {artists.length > 0 && (
        <SearchSection title="Artists">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {artists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </SearchSection>
      )}

      {/* Songs Section /}
      {songs.length > 0 && (
        <SearchSection title="Songs">
          <div className="bg-[#1e1e1e] p-4 rounded-lg">
            {songs.map((song) => (
              <SongItem key={song.id} song={song} />
            ))}
          </div>
        </SearchSection>
      )}

      {/* Albums Section /}
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
}*/
