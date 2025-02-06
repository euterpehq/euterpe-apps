import { Ellipsis } from "lucide-react";
import album from "./album";
import { getUserReleases } from "@/lib/queries/albums";

type AlbumProps = Awaited<ReturnType<typeof getUserReleases>>[number];

export default function Tracks({ album }: { album: AlbumProps }) {
  return (
    <div className="overflow-scroll p-4">
      <div className="mx-auto flex h-auto w-auto flex-1 flex-col gap-5">
        {album.tracks?.map((track) => (
          <div
            key={track.id}
            className="flex items-center justify-between border-[#303033] py-2.5 pr-2.5"
          >
            <div className="flex items-center gap-2.5">
              <p className="w-[32px] p-2.5 text-xs tracking-[-0.02em] text-[#868B9F]">
                {track.track_number}
              </p>
              <div>
                <h3 className="text-sm font-medium leading-[17px] tracking-[-0.02em]">
                  {track.track_title}
                </h3>
                <div className="flex items-center justify-start gap-x-2">
                  <h2 className="text-[12px] tracking-[-0.02em] text-[#868B9F]">
                    {album.release_date ?? "N/A"}
                  </h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3"
                    height="3"
                    viewBox="0 0 3 3"
                    fill="none"
                  >
                    <circle cx="1.5" cy="1.5" r="1.5" fill="#C1FF70" />
                  </svg>
                  <h2 className="text-[12px] tracking-[-0.02em] text-[#868B9F]">
                    {track.plays ?? 0} plays
                  </h2>
                </div>
              </div>
            </div>
            <div className="ml-auto flex items-center justify-end text-xs">
              <h2 className="cursor-pointer text-end tracking-[-0.02em] text-[#868B9F]">
                <Ellipsis />
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
