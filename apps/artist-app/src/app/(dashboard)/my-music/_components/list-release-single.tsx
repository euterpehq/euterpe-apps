"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AppHeader from "@/components/app-header";
import Image from "next/image";
import Tracks from "./tracks";
import { getDominantColor } from "./get-dominant-color";
import { getAlbums } from "@/lib/queries/album/get-albums";

export type SingleProps = NonNullable<
  Awaited<ReturnType<typeof getAlbums>>["data"]
>[number];

export const ListReleaseSingle = ({
  isopen,
  onOpenChange,
  single,
}: {
  isopen?: boolean;
  onOpenChange: (isopen: boolean) => void;
  single: SingleProps;
}) => {
  const [backgroundGradient, setBackgroundGradient] = useState<string>(
    "linear-gradient(180deg, #4B7895 0%, #111 76.61%)",
  );

  useEffect(() => {
    if (single.cover_image_url) {
      getDominantColor(single.cover_image_url, (gradient) => {
        setBackgroundGradient(gradient);
      });
    }
  }, [single.cover_image_url]);

  return (
    <AnimatePresence mode="wait">
      {isopen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed inset-0 z-[50] flex h-full w-full flex-col bg-[#111]"
        >
          <AppHeader />
          <div className="relative flex flex-1 flex-col overflow-hidden pb-6">
            <section
              style={{ background: backgroundGradient }}
              className="flex w-full flex-col justify-start gap-x-4 p-4"
            >
              <div className="m-auto flex w-full flex-wrap items-start justify-start">
                <button
                  className="bg-transperent w-fit shadow-2xl"
                  onClick={() => onOpenChange(false)}
                >
                  <Image
                    src="/images/left-arrow.png"
                    alt="right-arrow"
                    className="relative h-[20px] w-[20px] rounded-[4px]"
                    width={100}
                    height={100}
                  />
                </button>
                <Image
                  src={
                    single.cover_image_url ?? "/images/album_placeholder.svg"
                  }
                  alt="cover-image"
                  width={100}
                  height={100}
                  className="relative m-auto h-[267px] w-[267px] rounded-sm"
                ></Image>
              </div>
              <h2 className="mt-4 font-figtree text-[24px] text-white">
                {single.title}
              </h2>
              <div className="flex items-center justify-between">
                <div className="flex gap-x-2">
                  <p className="text-[#868B9F]">Album</p>
                  <p className="flex items-center justify-start gap-x-2 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3"
                      height="3"
                      viewBox="0 0 3 3"
                      fill="none"
                    >
                      <circle cx="1.5" cy="1.5" r="1.5" fill="#C1FF70" />
                    </svg>
                    <span className="text-[#868B9F]">
                      {single.plays ?? 0} Plays
                    </span>
                  </p>
                </div>
                <p className="text-[#868B9F]">
                  {single.tracks ? single.tracks.length : 0} tracks
                </p>
              </div>
            </section>
            <Tracks album={single} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
