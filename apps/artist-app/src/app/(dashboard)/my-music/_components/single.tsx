"use client";
import Image from "next/image";
import { getAlbums } from "@/lib/queries/album/get-albums";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ListReleaseSingle } from "./list-release-single";

export type SingleProps = NonNullable<
  Awaited<ReturnType<typeof getAlbums>>["data"]
>[number];

export default function Single({ single }: { single: SingleProps }) {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const shouldOpen = searchParams.get("view-release-single") === "true";
    setOpen(shouldOpen);
  }, [searchParams]);

  useEffect(() => {
    if (!open) {
      const params = new URLSearchParams(window.location.search);
      params.delete("view-release-single");
      router.replace(`?${params.toString()}`);
    }
  }, [open]);
  const handleOpen = () => {
    setOpen(true);
    const params = new URLSearchParams(window.location.search);
    params.set("view-release-single", "true");
    router.push(`?${params.toString()}`);
  };
  return (
    <section className="flex items-center justify-between border-[#303033] p-2.5 md:border-y-[0.8px]">
      <div className="flex items-center gap-x-[9px]">
        <Image
          className="h-[64px] w-[64px] rounded-[4px] object-cover"
          width={64}
          height={64}
          src={single.cover_image_url ?? "/images/album_placeholder.svg"}
          alt="cover art"
          quality={100}
        />
        <div className="flex flex-col justify-center gap-1">
          <h2 className="text-sm font-medium leading-[17px] tracking-[-0.02em]">
            {single.title}
          </h2>
          <div className="flex items-center gap-1.5">
            <h4 className="text-[12px] leading-[14px] tracking-[-0.02em] text-[#868B9F]">
              Single
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
              {single.tracks ? single.tracks.length : 0} tracks
            </h4>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between text-xs">
        <h2 className="hidden tracking-[-0.02em] text-[#868B9F] md:block">
          {single.plays ?? 0}
        </h2>
        <h2 className="hidden w-[185px] text-end tracking-[-0.02em] text-[#868B9F] md:block">
          {single.release_date ?? "N/A"}
        </h2>
      </div>
      {/* mobile view link */}
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
      <ListReleaseSingle isopen={open} onOpenChange={setOpen} single={single} />
    </section>
  );
}
