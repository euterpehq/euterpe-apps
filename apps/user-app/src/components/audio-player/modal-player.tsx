"use client"
import { useModalStore } from "@/store/modal.store";
import { AnimatePresence, motion } from "framer-motion";
import AudioPlayer from "./audio-player";


const ModalPlayer = () => {
  const { isOpen, closeModal } = useModalStore();

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
          <button
            onClick={closeModal}
            className="absolute text-white py-[8px] px-[12px] bg-[#ffffff14] z-50 top-20 left-20 cursor-pointer rounded-[8px]"
          >
            X close
          </button>
          <AudioPlayer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalPlayer;