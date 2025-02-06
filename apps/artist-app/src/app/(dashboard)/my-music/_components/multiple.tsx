"use client";
import Image from "next/image";
import { getUserReleases } from "@/lib/queries/albums";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ListReleases } from "./list-releases";

type AlbumProps = Awaited<ReturnType<typeof getUserReleases>>[number];
export default function Multiple({ album }: { album: AlbumProps }) {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const shouldOpen = searchParams.get("view-release") === "true";
    setOpen(shouldOpen);
  }, [searchParams]);

  useEffect(() => {
    if (!open) {
      const params = new URLSearchParams(window.location.search);
      params.delete("view-release");
      router.replace(`?${params.toString()}`);
    }
  }, [open]);
  const handleOpen = () => {
    setOpen(true);
    const params = new URLSearchParams(window.location.search);
    params.set("view-release", "true");
    router.push(`?${params.toString()}`);
  };
  return (
    <div className="flex flex-col gap-[14px]">
      <div className="flex items-center justify-between border-[#303033] p-2.5 md:border-y-[0.8px]">
        <div className="flex items-center gap-x-[9px]">
          <Image
            className="h-[64px] w-[64px] rounded-[4px] object-cover"
            width={64}
            height={64}
            src={album.cover_image_url ?? "/images/album_placeholder.svg"}
            alt="album cover art"
            quality={100}
          />
          <div className="flex flex-col justify-center gap-1">
            <h2 className="text-sm font-medium leading-[17px] tracking-[-0.02em]">
              {album.title}
            </h2>
            <div className="flex items-center gap-1.5">
              <h4 className="text-[12px] leading-[14px] tracking-[-0.02em] text-[#868B9F]">
                {album.category_type === "album"
                  ? "Album"
                  : album.category_type === "single"
                    ? "Single"
                    : "EP"}
              </h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3"
                height="3"
                viewBox="0 0 3 3"
                fill="none"
              >
                <circle cx="1.5" cy="1.5" r="1.5" fill="#C1FF70" />
              </svg>
              <h4 className="text-[12px] leading-[14px] tracking-[-0.02em] text-[#868B9F]">
                {album.tracks ? album.tracks.length : 0} tracks
              </h4>
            </div>
          </div>
        </div>
        <div className="hidden items-center justify-between text-xs md:flex">
          <h2 className="tracking-[-0.02em] text-[#868B9F]">
            {album.plays ?? 0}
          </h2>
          <h2 className="hidden w-[185px] text-end tracking-[-0.02em] text-[#868B9F] md:block">
            {album.release_date ?? "N/A"}
          </h2>
        </div>
        {/* mobile view navigation */}
        <div className="flex items-center justify-between text-xs md:hidden">
          <h2 className="tracking-[-0.02em] text-[#868B9F]">
            <button className="bg-transperent border-none" onClick={handleOpen}>
              <Image
                src="/images/right-arrow.png"
                alt="right-arrow"
                className="h-[18px] w-[18px]"
                width={100}
                height={100}
              />
            </button>
          </h2>
        </div>
        {/*  */}
      </div>
      <ListReleases isopen={open} onOpenChange={setOpen} album={album} />
      <div className="hidden flex-col gap-[10px] md:flex">
        {album.tracks?.map((track) => (
          <div
            key={track.id}
            className="flex items-center justify-between border-b-[0.8px] border-[#303033] py-2.5 pr-2.5"
          >
            <div className="flex items-center gap-2.5">
              <p className="w-[32px] p-2.5 text-xs tracking-[-0.02em] text-[#868B9F]">
                {track.track_number}
              </p>
              <h3 className="text-sm font-medium leading-[17px] tracking-[-0.02em]">
                {track.track_title}
              </h3>
            </div>
            <div className="flex items-center justify-between text-xs">
              <h2 className="tracking-[-0.02em] text-[#868B9F]">
                {track.plays ?? 0}
              </h2>
              <h2 className="w-[185px] text-end tracking-[-0.02em] text-[#868B9F]">
                {album.release_date ?? "N/A"}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
