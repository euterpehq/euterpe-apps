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
import Image from "next/image";

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
    <div className="flex flex-col overflow-hidden px-6 pt-[50px]">
      <header className="flex shrink-0 flex-wrap items-center justify-between gap-2">
        {/* <header className="flex w-auto items-center justify-between border border-primary md:gap-0"> */}
        <div className="flex items-center justify-start">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[24px] font-semibold tracking-[-0.04em] md:text-[32px]">
                  My Music
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
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
            className="hidden rounded-[8px] border-[0.5px] border-[#313131] px-3 py-2.5 text-xs font-semibold tracking-[-0.04em] text-[#020403] md:block"
            onClick={openModal}
          >
            Upload Music
          </Button>
          <Button
            className="flex h-[32px] w-[40px] items-center justify-center rounded-[8px] border-[0.5px] border-[#313131] px-[8px] py-[4px] text-xs font-semibold tracking-[-0.04em] text-[#020403] md:hidden"
            onClick={openModal}
          >
            <Image
              className="h-[24px] w-[24px]"
              src="/images/add.png"
              alt="add"
              width={100}
              height={100}
            />
          </Button>
          {isModalOpen && (
            <UploadMusicModal
              isModalOpen={isModalOpen}
              closeModal={closeModal}
            />
          )}
        </section>
      </header>

      <section className="mt-[30px] hidden px-2.5 py-[14px] text-xs font-medium tracking-[-0.02em] md:flex">
        <h2 className="flex-1">Releases</h2>
        <div className="flex items-center justify-between">
          <h2 className="hidden text-[#9C9C9C] md:block">Plays</h2>
          <h2 className="hidden w-[185px] text-end text-[#9C9C9C] md:block">
            Date Released
          </h2>
        </div>
      </section>

      <div className="mt-[30px] flex flex-col md:mt-0 md:gap-10 md:pb-10">
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
