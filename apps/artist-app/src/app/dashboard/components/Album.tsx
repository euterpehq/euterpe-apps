import { Dot } from "lucide-react";
import Image from "next/image";
import { getUserReleases } from "@/lib/queries/albums";

type AlbumProps = {
  album: Awaited<ReturnType<typeof getUserReleases>>[number];
};
export default function Album({ album }: AlbumProps) {
  return (
    <>
      <section className="flex items-center justify-between border-b p-4">
        <div className="flex items-center gap-x-[9px]">
          <Image
            className="h-[64px] w-[64px]"
            width={64}
            height={64}
            src={album.cover_image_url ?? "/images/album.png"}
            alt="album cover"
          />
          <div>
            <h2 className="flex-1">{album.title}</h2>
            <h4 className="mt-2 flex items-center justify-start text-[12px] text-[#868B9F]">
              {album.category_type === "album"
                ? "Album"
                : album.category_type === "single"
                  ? "Single"
                  : "EP"}
              <span className="flex items-center justify-center">
                <Dot size={25} color="#C1FF70" />
                {album.tracks ? album.tracks.length : 0} tracks
              </span>
            </h4>
          </div>
        </div>
        <div className="flex w-fit items-center justify-end text-[#868B9F]">
          <h2 className="w-[135px] ps-2.5 text-[12px]">{album.plays ?? 0}</h2>
          <h2 className="flex w-[135px] justify-end gap-x-2 text-end text-[12px]">
            {album.release_date ?? "N/A"}
          </h2>
        </div>
      </section>

      {album.tracks?.map((track) => (
        <section
          key={track.id}
          className="flex items-center justify-between border-b p-4"
        >
          <div className="flex items-center gap-x-[9px]">
            <div className="flex gap-x-[10px]">
              <h2 className="flex-1">{track.track_number}</h2>
              <div>{track.track_title}</div>
            </div>
          </div>
          <div className="flex w-fit items-center justify-end text-[#868B9F]">
            <h2 className="w-[135px] ps-2.5 text-[12px]">{track.plays ?? 0}</h2>
            <h2 className="flex w-[135px] justify-end gap-x-2 text-end text-[12px]">
              {album.release_date ?? album.release_date ?? "N/A"}
            </h2>
          </div>
        </section>
      ))}
    </>
  );
}
