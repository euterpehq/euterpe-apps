import { Dot } from "lucide-react";
import Image from "next/image";
import { getUserReleases } from "@/lib/queries/albums";

type AlbumProps = Awaited<ReturnType<typeof getUserReleases>>[number];
export default function Multiple({ album }: { album: AlbumProps }) {
  return (
    <div className="flex flex-col gap-[14px]">
      <div className="flex items-center justify-between border-y-[0.8px] border-[#303033] p-2.5">
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
        <div className="flex items-center justify-between text-xs">
          <h2 className="tracking-[-0.02em] text-[#868B9F]">
            {album.plays ?? 0}
          </h2>
          <h2 className="w-[185px] text-end tracking-[-0.02em] text-[#868B9F]">
            {album.release_date ?? "N/A"}
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-[10px]">
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
