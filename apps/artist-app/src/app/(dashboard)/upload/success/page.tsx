"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
interface Track {
  id: string;
  track_number: number;
  track_title: string;
}
export default function SuccessPage() {
  const searchParams = useSearchParams();
  const albumId = searchParams.get("albumId") ?? "";
  const title = searchParams.get("title") ?? "";
  const category_type = searchParams.get("category_type") ?? "";
  const genre = searchParams.get("genre") ?? "";
  const sub_genres: string[] = JSON.parse(
    searchParams.get("sub_genres") || "[]",
  );
  const release_date = searchParams.get("release_date") ?? "";
  const cover_image_url = searchParams.get("cover_image_url") ?? "";
  const tracks: Track[] = JSON.parse(searchParams.get("tracks") || "[]");
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000066] bg-opacity-70 backdrop-blur-sm">
      <section className="w-[60%] p-6">
        <div className="relative mt-4 rounded-[16px] bg-[#181818] pb-10 shadow-md">
          <div
            style={{ backgroundImage: `url(/images/confetti.png)` }}
            className="flex h-[224px] w-full items-center justify-center rounded-t-[16px]"
          >
            <h2 className="text-center text-[34px] text-[#FFFFFF]">
              Media Uploaded Successfully
            </h2>
          </div>
          <div className="p-4">
            <section className="flex w-full justify-between">
              <div className="flex items-center gap-x-[16px]">
                <div
                  style={{
                    backgroundImage: `url("${
                      cover_image_url || "/images/music.png"
                    }")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="h-[120px] w-[120px] rounded-md"
                />
                <div>
                  <h2>{title}</h2>
                  <h4 className="mt-2 flex items-center text-[12px] text-[#868B9F]">
                    {category_type.charAt(0).toUpperCase() +
                      category_type.slice(1)}
                    {tracks && (
                      <span className="ml-2 flex items-center">
                        • {tracks.length} tracks
                      </span>
                    )}
                  </h4>
                  <div className="mt-[15px] flex items-center gap-x-[12px]">
                    <div className="rounded-[4px] border p-[8px] px-[12px] text-[12px] font-[400]">
                      {genre || "N/A"}
                    </div>
                    {sub_genres.length > 0 && (
                      <div className="rounded-[4px] border p-[8px] px-[12px] text-[12px] font-[400]">
                        {sub_genres.join(", ")}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
            {tracks && tracks.length > 0 ? (
              tracks.map((track) => (
                <section
                  key={track.id}
                  className="flex items-center justify-between border-b p-4"
                >
                  <div className="flex items-center gap-x-[9px]">
                    <div className="mt-4 flex items-center gap-x-[20px]">
                      <h2 className="flex-1 text-lg text-[#868B9F]">
                        {track.track_number}
                      </h2>
                      <div>{track.track_title}</div>
                    </div>
                  </div>
                </section>
              ))
            ) : (
              <p className="mt-4 text-center text-sm text-[#868B9F]">
                No tracks found.
              </p>
            )}
            <Link
              href="/my-music"
              className="m-auto mt-10 block h-[44px] w-full items-center justify-center rounded-[8px] border bg-[#C1FF70] px-[14px] py-[14px] text-center font-semibold text-black"
            >
              Done
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
