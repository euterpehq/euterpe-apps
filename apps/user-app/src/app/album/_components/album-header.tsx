"use client"
import Image from "next/image";
import { useAudioPlayerStore } from "@/store/audioplayer.store";
import { useMiniPlayerStore } from "@/store/miniplayer.store";
import Link from "next/link";
import useArtistStore from "@/store/artist.store";
import { useEffect } from "react";
import { Database } from "@/types/database.types";
import { Skeleton } from "@/components/ui/skeleton";




type Prop = {
  album: Database["public"]["Tables"]["albums"]["Row"];
};

export default function AlbumHeader({ album }: Prop) {
  const {
    setCurrentSongIndex,
    playSong,
    setAudio,
    isPlaying,
    setIsPlaying,
    setDiscovered,
    albumSongs,
  } = useAudioPlayerStore();

  const { showMiniPlayer } = useMiniPlayerStore();
  const { artists, fetchArtist } = useArtistStore();

  useEffect(() => {
    fetchArtist();
  }, [fetchArtist]);

  const albumSong = albumSongs.filter((song) => song.album_id === album?.id);
  const artist = artists.find((a) => a.id === album?.artist_id);

  const handlePlay = () => {
    if (isPlaying) {
      setAudio(null);
      setIsPlaying(false);
    } else {
      const firstSong = albumSong[0];
      if (firstSong) {
        setCurrentSongIndex(0);
        playSong(firstSong.id);
        setIsPlaying(true);
      }
    }
    showMiniPlayer();
    setDiscovered(true);
  };

  return (
    <div className="flex w-full gap-10 border-b-[0.5px] border-[#303033]">
      <div className="h-[240px] w-[240px]">
        <Image
          src={album?.cover_image_url ?? null}
          alt=""
          className="h-full w-full object-cover"
          width="240"
          height="240"
        />
      </div>
      <div className="flex flex-col gap-y-6 py-6">
        <div className="inline-flex flex-col gap-2">
          <div className="flex w-fit items-center justify-center rounded-[4px] bg-[#c1ff701a] px-[8px] py-[4px] text-xs font-medium capitalize text-[#C1FF70]">
            <p>{album?.category_type}</p>
          </div>
          <Link href="/">
            <h1 className="text-[32px] font-semibold leading-[38px] tracking-[-0.64px]">
              {artist?.artist_name}
            </h1>
          </Link>
          <div className="flex items-center gap-3">
            <div className="h-[16px] w-[16px]">
              <Image
                src={artist?.artist_image_url ?? null}
                alt=""
                className="h-full w-full rounded-[120px] object-cover"
                width="16"
                height="16"
              />
            </div>
            <h1 className="text-[14px] font-medium tracking-[-0.28px]">
              {artist?.artist_name}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-[12px] font-medium tracking-[-0.24px] text-[#B1B5C5]">
              {album?.genre}
            </p>
            <span className="h-1 w-1 rounded-full bg-[#B1B5C5]"></span>
            <p className="text-[12px] font-medium tracking-[-0.24px] text-[#B1B5C5]">
              {new Date(album?.release_date ?? "").getFullYear()}
            </p>
          </div>
        </div>
        <div
          onClick={handlePlay}
          className="flex w-24 cursor-pointer items-center justify-center gap-[4px] rounded-[120px] bg-[#C1FF70] px-[20px] py-[10px]"
        >
          {isPlaying ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2 6.5C2 4.61438 2 3.67157 2.58579 3.08579C3.17157 2.5 4.11438 2.5 6 2.5C7.88562 2.5 8.82843 2.5 9.41421 3.08579C10 3.67157 10 4.61438 10 6.5V18.5C10 20.3856 10 21.3284 9.41421 21.9142C8.82843 22.5 7.88562 22.5 6 22.5C4.11438 22.5 3.17157 22.5 2.58579 21.9142C2 21.3284 2 20.3856 2 18.5V6.5Z"
                  fill="black"
                />
                <path
                  d="M14 6.5C14 4.61438 14 3.67157 14.5858 3.08579C15.1716 2.5 16.1144 2.5 18 2.5C19.8856 2.5 20.8284 2.5 21.4142 3.08579C22 3.67157 22 4.61438 22 6.5V18.5C22 20.3856 22 21.3284 21.4142 21.9142C20.8284 22.5 19.8856 22.5 18 22.5C16.1144 22.5 15.1716 22.5 14.5858 21.9142C14 21.3284 14 20.3856 14 18.5V6.5Z"
                  fill="black"
                />
              </svg>
              <p className="text-[13px] font-semibold text-[#0E0E0E]">Pause</p>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M12.8437 9.51067C12.998 9.39124 13.1229 9.23805 13.2088 9.06286C13.2948 8.88768 13.3395 8.69513 13.3395 8.5C13.3395 8.30487 13.2948 8.11232 13.2088 7.93714C13.1229 7.76195 12.998 7.60877 12.8437 7.48933C10.8453 5.94311 8.61395 4.72435 6.233 3.87867L5.79767 3.724C4.96567 3.42867 4.087 3.99133 3.97434 4.85067C3.6596 7.27338 3.6596 9.72662 3.97434 12.1493C4.087 13.0087 4.96567 13.5713 5.79767 13.276L6.233 13.1213C8.61396 12.2757 10.8454 11.0569 12.8437 9.51067Z"
                  fill="black"
                />
              </svg>
              <p className="text-[13px] font-semibold text-[#0E0E0E]">Play</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
