"use client";
import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AppHeader from "@/components/app-header";
import { getUserReleases } from "@/lib/queries/albums";
import Image from "next/image";
import Tracks from "./tracks";
import { getDominantColor } from "./get-dominant-color";
import { ChevronLeft } from "lucide-react";

type AlbumProps = Awaited<ReturnType<typeof getUserReleases>>[number];

export const ListReleases = ({
  isopen,
  onOpenChange,
  album,
}: {
  isopen?: boolean;
  onOpenChange: (isopen: boolean) => void;
  album: AlbumProps;
}) => {
  const [backgroundGradient, setBackgroundGradient] = useState<string>(
    "linear-gradient(180deg, #4B7895 0%, #111 76.61%)",
  );

  useEffect(() => {
    if (album.cover_image_url) {
      getDominantColor(album.cover_image_url, (gradient) => {
        setBackgroundGradient(gradient);
      });
    }
  }, [album.cover_image_url]);

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
          <div className="relative flex flex-1 flex-col overflow-hidden pb-6">
            <section
              style={{ background: backgroundGradient }}
              className="flex w-full flex-col justify-start gap-x-4 p-4"
            >
              <div className="relative m-auto flex w-full flex-wrap items-start justify-start mt-5">
                <button
                  className="bg-transperent w-fit absolute top-0"
                  onClick={() => onOpenChange(false)}
                >
                  <ChevronLeft />
                </button>

                <div className="relative mx-auto aspect-square min-h-[250px] rounded-lg shadow-[0px_4px_13px_0px_#11111133]">
                  <Image
                    src={
                      album.cover_image_url ?? "/images/album_placeholder.svg"
                    }
                    alt="cover-image"
                    fill
                    className="rounded-lg object-cover" //probably change to object-fit
                  ></Image>
                </div>
              </div>
              <div>
                <h2 className="mt-6 font-figtree text-[24px] -tracking-[0.02em] text-white">
                  {album.title}
                </h2>
                <div className="flex items-center justify-between text-sm">
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
                        {album.plays ?? 0} Plays
                      </span>
                    </p>
                  </div>
                  <p className="text-[#868B9F]">
                    {album.tracks ? album.tracks.length : 0} tracks
                  </p>
                </div>
              </div>
            </section>
            <Tracks album={album} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
