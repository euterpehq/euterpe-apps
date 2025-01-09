"use client"
import { useEffect } from "react";
import { useAudioPlayerStore } from "@/store/audioplayer.store";

export const UserInteractionTracker: React.FC = () => {
  const setHasUserInteraction = useAudioPlayerStore(
    (state) => state.setHasUserInteraction,
  );

  useEffect(() => {
    const handleUserInteraction = () => {
      setHasUserInteraction(true);
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);
    window.addEventListener("touchstart", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, [setHasUserInteraction]);

  return null;
};
