"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import AppHeader from "@/components/app-header";
import UploadMusicForm from "./upload-music-form";
import { getArtist } from "@/lib/queries/artist/get-artist";
import { useMediaQuery } from "react-responsive";
import { ChevronLeft, X } from "lucide-react";

export default function UploadMusic({
  open,
  onOpenChange,
}: {
  open?: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <AnimatePresence mode="wait">
      {open && (
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
          {!isMobile ? <AppHeader /> : null}
          <div className="relative flex flex-1 flex-col overflow-hidden px-4 md:px-6 pb-6">
            <div className="overflow-scroll md:pt-6 hide-scrollbar">
              <div className="mx-auto flex h-full max-w-[723px] flex-1 flex-col gap-5 pt-6">
                <div className="flex gap-3 items-center">
                  <button
                    className="md:left-6 md:top-6 z-[50] flex md:h-[44px] md:w-[44px] items-center justify-center rounded-full md:p-2.5 md:absolute md:bg-[#1E1E1E]"
                    onClick={() => onOpenChange(false)}
                  >
                    {isMobile ? <ChevronLeft className="size-6" /> : <X />}
                  </button>

                  <h1 className="text-2xl font-semibold tracking-[-0.04em]">
                    Upload Music
                  </h1>
                </div>
                <UploadMusicForm />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
