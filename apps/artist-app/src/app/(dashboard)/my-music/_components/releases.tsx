"use client";
import React, { useState, useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import UploadMusicModal from "./upload-music-modal";
import Single from "./single";
import Multiple from "./multiple";
import { getAlbums } from "@/lib/queries/album/get-albums";

export type ReleasesProps = NonNullable<
  Awaited<ReturnType<typeof getAlbums>>["data"]
>;

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
    <div className="flex flex-col px-6 pt-[50px]">
      <header className="flex shrink-0 items-center justify-between gap-2">
        <div className="flex items-center justify-start">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[32px] font-semibold tracking-[-0.04em]">
                  My Music
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <section className="flex items-center justify-start gap-x-[14px]">
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
            className="rounded-[8px] border-[0.5px] border-[#313131] px-3 py-2.5 text-xs font-medium font-semibold tracking-[-0.04em] text-[#020403]"
            onClick={openModal}
          >
            Upload Music
          </Button>
          {isModalOpen && (
            <UploadMusicModal
              isModalOpen={isModalOpen}
              closeModal={closeModal}
            />
          )}
        </section>
      </header>

      <section className="mt-[30px] flex px-2.5 py-[14px] text-xs font-medium tracking-[-0.02em]">
        <h2 className="flex-1">Releases</h2>
        <div className="flex items-center justify-between">
          <h2 className="text-[#9C9C9C]">Plays</h2>
          <h2 className="w-[185px] text-end text-[#9C9C9C]">Date Released</h2>
        </div>
      </section>

      <div className="flex flex-col gap-10 pb-10">
        {releases &&
          releases.map((release) => {
            if (release.tracks.length === 1) {
              return <Single key={release.id} single={release} />;
            } else {
              return <Multiple key={release.id} album={release} />;
            }
          })}
      </div>
    </div>
  );
}
