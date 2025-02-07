"use client";
import React, { useState, useEffect } from "react";
import Balancer from "react-wrap-balancer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import UploadMusic from "./upload-music";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function EmptyState() {
  const [open, setOpen] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.25 }}
        className="flex flex-1 flex-col gap-[30px] p-6 md:pt-[50px]"
      >
        <h1 className="text-[24px] font-semibold tracking-[-0.04em] md:text-[32px]">
          My Music
        </h1>
        <div className="mt-24 flex flex-1 flex-col items-center rounded-[16px] py-[3.75rem]">
          <Image
            src="/images/music-note.png"
            alt="music-note"
            width={40}
            height={44.125}
          />
          <h2 className="mt-4 text-[22px] font-semibold tracking-[-0.04em]">
            Upload your music to Euterpe
          </h2>
          <p className="mt-3 max-w-[274px] text-center text-sm font-light leading-snug text-[#C2C6D6]">
            Your music deserves an audience, start uploading and get discovered
          </p>
          <Button className="mt-6" onClick={() => setOpen(true)}>
            Upload Music
          </Button>
        </div>
        <UploadMusic open={open} onOpenChange={setOpen} />
      </motion.div>
    </AnimatePresence>
  );
}
