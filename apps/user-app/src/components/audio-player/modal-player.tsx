"use client"
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
          className="w-screen h-full fixed top-0 left-0 right-0 bottom-0 bg-black z-40"
        >
          <div className="flex justify-between items-center px-[1rem] py-2 relative z-50 md:absolute md:top-[3.5rem] md:left-0 md:right-0  md:z-50">
          <button
            onClick={closeModal}
            className="flex items-center gap-1 text-white py-[4px] px-[6px] md:py-[8px] md:px-[12px] bg-[#ffffff14]  cursor-pointer rounded-[8px]"
          >
             <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
               close
          </button>
          <div className="md:hidden flex items-center gap-4">
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