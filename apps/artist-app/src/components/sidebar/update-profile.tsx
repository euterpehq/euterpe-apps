"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import AppHeader from "@/components/app-header";
import UpdateProfileForm from "./update-profile-form";
import { getArtist } from "@/lib/queries/artist/get-artist";
import { useMediaQuery } from "react-responsive";
import { ChevronLeft, X } from "lucide-react";

export type ArtistProps = NonNullable<
  Awaited<ReturnType<typeof getArtist>>["data"]
>;
// TODO: create reusable component for modal layouts.
export default function UpdateProfile({
  open,
  onOpenChange,
  artist,
}: {
  open?: boolean;
  onOpenChange: (open: boolean) => void;
  artist: ArtistProps;
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
          <div className="relative flex flex-1 flex-col overflow-hidden px-6 pb-6">
            <div className="hide-scrollbar overflow-scroll pt-6">
              <div className="mx-auto flex h-auto w-auto flex-1 flex-col gap-5 pt-6 md:w-[723px]">
                <div className="flex items-center gap-3">
                  <button
                    className="z-[50] flex items-center justify-center rounded-full md:absolute md:left-6 md:top-6 md:h-[44px] md:w-[44px] md:bg-[#1E1E1E] md:p-2.5"
                    onClick={() => onOpenChange(false)}
                  >
                    {isMobile ? <ChevronLeft className="size-6" /> : <X />}
                  </button>
                  <h1 className="text-[24px] font-semibold tracking-[-0.04em] md:mt-0">
                    Update Artist Info
                  </h1>
                </div>
                <UpdateProfileForm artist={artist} />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
