"use client"
import { useModalStore } from "@/store/modal.store";
import { AnimatePresence, motion } from "framer-motion";
import AudioPlayer from "./audio-player";
import Earnings from "@/components/Earnings";
import { Separator } from "@/components/ui/separator";
import ConnectButton from "@/components/ConnectButton";
import { useAccount } from "wagmi";



const ModalPlayer = () => {
  const { isOpen, closeModal } = useModalStore();
  const { isConnected } = useAccount();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 bg-black z-40"
        >
          <div className="flex justify-between items-center px-[1rem] py-2 relative z-50 md:absolute md:top-[4rem] md:left-0 md:right-0  md:z-50">
          <button
            onClick={closeModal}
            className=" text-white py-[4px] px-[6px] md:py-[8px] md:px-[12px] bg-[#ffffff14]  cursor-pointer rounded-[8px]"
          >
            X close
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