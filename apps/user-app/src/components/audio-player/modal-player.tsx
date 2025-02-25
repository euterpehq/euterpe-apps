"use client";
import { useModalStore } from "@/store/modal.store";
import { AnimatePresence, motion } from "framer-motion";
import AudioPlayer from "./audio-player";
import Earnings from "@/components/earnings";
import { Separator } from "@/components/ui/separator";
import ConnectButton from "@/components/connect-button";
import { useAccount } from "wagmi";
import { useEffect } from "react";

const ModalPlayer = () => {
  const { isOpen, closeModal } = useModalStore();
  const { isConnected } = useAccount();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll"); // Cleanup on unmount
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed bottom-0 left-0 right-0 top-0 z-40 h-full w-screen bg-black"
        >
          <div className="relative z-50 flex items-center justify-between px-[1rem] py-2 md:absolute md:left-0 md:right-0 md:top-[5rem] md:z-50">
            <button
              onClick={closeModal}
              className="flex cursor-pointer items-center gap-1 rounded-[8px] bg-[#ffffff14] px-[6px] py-[4px] text-white md:px-[12px] md:py-[8px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              close
            </button>
            <div className="flex items-center gap-4 md:hidden">
              {isConnected && <Earnings />}
              <Separator orientation="vertical" className="h-4" />
              <ConnectButton align="right" />
            </div>
          </div>
          <AudioPlayer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalPlayer;
