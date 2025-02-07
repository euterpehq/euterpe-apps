"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { getAlbums } from "@/lib/queries/album/get-albums";
import Image from "next/image";
import { getUserReleases } from "@/lib/queries/albums";
import { ChevronRight, Plus } from "lucide-react";
import { ListReleases } from "./list-releases";
import UploadMusic from "./upload-music";

export type ReleasesProps = NonNullable<
  Awaited<ReturnType<typeof getAlbums>>["data"]
>;

type AlbumProps = Awaited<ReturnType<typeof getUserReleases>>[number];

const ReleaseTabs: React.FC<{ release: AlbumProps }> = ({ release }) => {
  const [open, setOpen] = useState(false);

  const isMultipleTracks = useMemo(
    () => release.tracks.length > 1,
    [release.tracks],
  );
  return (
    <div className="flex flex-col gap-[14px]">
      <div
        role="button"
        tabIndex={0}
        aria-label="toggle album view"
        className="flex items-center justify-between border-[#303033] md:border-y-[0.8px] md:p-2.5"
        onClick={() => setOpen(true)}
      >
        <div className="flex flex-1 items-center gap-x-[9px]">
          <Image
            className="h-[64px] w-[64px] rounded-[4px] object-cover"
            width={64}
            height={64}
            src={release.cover_image_url ?? "/images/album_placeholder.svg"}
            alt="release cover art"
            quality={100}
          />
          <div className="flex flex-col justify-center gap-1">
            <h2 className="text-sm font-medium leading-[17px] tracking-[-0.02em]">
              {release.title}
            </h2>
            <div className="flex items-center gap-1.5">
              <h4 className="text-[12px] capitalize leading-[14px] tracking-[-0.02em] text-[#868B9F]">
                {release.category_type}
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
                {release.tracks ? release.tracks.length : 0} track{" "}
                {isMultipleTracks ? "s" : ""}
              </h4>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden items-center justify-between text-xs md:flex">
            <h2 className="tracking-[-0.02em] text-[#868B9F]">
              {release.plays ?? 0}
            </h2>
            <h2 className="hidden w-[185px] text-end tracking-[-0.02em] text-[#868B9F] md:block">
              {release.release_date ?? "N/A"}
            </h2>
          </div>
          <div className="flex items-center justify-between text-xs">
            <ChevronRight className="size-4 text-[#868B9F]" />
          </div>
        </div>
      </div>
      <div className="hidden flex-col gap-[10px] md:flex">
        {release.tracks.length > 1 &&
          release.tracks?.map((track) => (
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
              <div className="flex gap-5">
                <div className="flex items-center justify-between text-xs">
                  <h2 className="tracking-[-0.02em] text-[#868B9F]">
                    {track.plays ?? 0}
                  </h2>
                  <h2 className="w-[185px] text-end tracking-[-0.02em] text-[#868B9F]">
                    {release.release_date ?? "N/A"}
                  </h2>
                </div>
                {/* chevron is currently invisible because I am not sure of the intended functionality */}
                <div
                  className="invisible flex items-center justify-between text-xs"
                  aria-hidden
                >
                  <ChevronRight className="size-4 text-[#868B9F]" />
                </div>
              </div>
            </div>
          ))}
      </div>

      <ListReleases isopen={open} onOpenChange={setOpen} album={release} />
    </div>
  );
};

export default function Releases({ releases }: { releases: ReleasesProps }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col overflow-hidden px-3 pt-8 md:px-6 md:pt-[50px]">
      <header className="flex shrink-0 flex-wrap items-center justify-between gap-2">
        {/* <header className="flex w-auto items-center justify-between border border-primary md:gap-0"> */}
        <div className="flex items-center justify-start">
          <h1 className="text-[24px] font-semibold tracking-[-0.04em] md:text-[32px]">
            My Music
          </h1>
        </div>
        <section className="flex items-center justify-start md:gap-x-[14px]">
          {/* <Button className="rounded-[8px] border-[0.5px] border-[#303033] px-3 py-2.5 text-xs font-medium tracking-[-0.02em] text-[#181818]">
            Week
          </Button>
          <Button
            variant="outline"
            className="rounded-[8px] border-[0.5px] border-[#303033] bg-transparent px-3 py-2.5 text-xs font-normal tracking-[-0.02em] text-[#181818] text-white"
          >
            Month
          </Button>
          <Button
            variant="outline"
            className="rounded-[8px] border-[0.5px] border-[#303033] bg-transparent px-3 py-2.5 text-xs font-normal tracking-[-0.02em] text-[#181818] text-white"
          >
            Year
          </Button> */}
          <Button
            className="min-w-[43px] rounded-lg border-[0.5px] border-[#313131] px-2 py-1 text-xs font-semibold tracking-[-0.04em] text-[#020403] md:rounded-[8px] md:px-3 md:py-2.5"
            onClick={openModal}
          >
            <span className="hidden md:block">Upload Music</span>

            <Plus className="size-5 md:hidden" />
          </Button>
          {isModalOpen && (
            <UploadMusic open={isModalOpen} onOpenChange={closeModal} />
          )}
        </section>
      </header>

      <section className="mt-[30px] hidden py-3.5 text-xs font-medium tracking-[-0.02em] md:flex md:px-2.5">
        <h2 className="flex-1">Releases</h2>
        <div className="flex items-center justify-between">
          <h2 className="hidden text-[#9C9C9C] md:block">Plays</h2>
          <div className="flex gap-5">
            <div className="size-5"></div>
            <h2 className="hidden w-[185px] text-end text-[#9C9C9C] md:block">
              Date Released
            </h2>
          </div>
        </div>
      </section>

      <div className="mt-[30px] flex flex-col md:mt-0 md:gap-10 md:pb-10">
        {releases &&
          releases.map((release) => {
            return <ReleaseTabs key={release.id} release={release} />;
          })}
      </div>
    </div>
  );
}
