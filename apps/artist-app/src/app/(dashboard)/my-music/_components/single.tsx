import Image from "next/image";
import { getAlbums } from "@/lib/queries/album/get-albums";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type SingleProps = NonNullable<
  Awaited<ReturnType<typeof getAlbums>>["data"]
>[number];

export default function Single({ single }: { single: SingleProps }) {
  return (
    <section className="flex items-center justify-between border-y-[0.8px] border-[#303033] p-2.5">
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
        {/* <Link
          href="#"
          className="block w-[185px] text-end tracking-[-0.02em] text-[#868B9F] md:hidden"
        >
          <ChevronRight />
        </Link> */}
      </div>
    </section>
  );
}
