"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import AppHeader from "@/components/app-header";
import UpdateProfileForm from "./update-profile-form";
import { getArtist } from "@/lib/queries/artist/get-artist";

export type ArtistProps = NonNullable<
  Awaited<ReturnType<typeof getArtist>>["data"]
>;

export const UpdateProfile = ({
  open,
  onOpenChange,
  artist,
}: {
  open?: boolean;
  onOpenChange: (open: boolean) => void;
  artist: ArtistProps;
}) => {
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
          <AppHeader />
          <div className="relative flex flex-1 flex-col overflow-hidden px-6 pb-6">
            <button
              className="absolute left-6 top-6 z-[50] flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#1E1E1E] p-2.5"
              onClick={() => onOpenChange(false)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="X">
                  <path
                    id="Icon"
                    d="M18 6L6 18M6 6L18 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>

            <div className="overflow-scroll pt-6">
              <div className="mx-auto flex h-full w-[723px] flex-1 flex-col gap-5 pt-6">
                <h1 className="text-[24px] font-semibold tracking-[-0.04em]">
                  Update Artist Info
                </h1>
                <UpdateProfileForm artist={artist} />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
