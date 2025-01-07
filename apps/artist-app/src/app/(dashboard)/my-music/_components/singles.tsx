import Image from "next/image";
import { getUserReleases } from "@/lib/queries/albums";

type SingleProps = {
  single: Awaited<ReturnType<typeof getUserReleases>>[number];
};

export default function Singles({ single }: SingleProps) {
  return (
    <section className="mt-[40px] flex items-center justify-between border-b p-4">
      <div className="flex items-center gap-x-[9px]">
        <Image
          className="h-[64px] w-[64px] rounded-[4px] object-cover"
          width={64}
          height={64}
          src={single.cover_image_url ?? "/images/album.png"}
          alt="cover"
          quality={100}
        />
        <div>
          <h2 className="flex-1">{single.title}</h2>
          <h4 className="mt-2 flex justify-start text-[12px] text-[#868B9F]">
            Single
          </h4>
        </div>
      </div>
      <div className="flex w-fit items-center justify-end text-[#868B9F]">
        <h2 className="w-[135px] ps-2.5 text-[12px]">{single.plays ?? 0}</h2>
        <h2 className="flex w-[135px] justify-end gap-x-2 text-end text-[12px]">
          {single.release_date ?? "N/A"}
        </h2>
      </div>
    </section>
  );
}
