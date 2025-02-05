"use client";
import React, { useEffect, useState, useRef } from "react";

import { InfoCircledIcon } from "@radix-ui/react-icons";

const AnnouncementBanner = () => {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50 && currentScrollY > lastScrollY.current) {
        setIsHidden(true); 
      } else if (currentScrollY < lastScrollY.current) {
        setIsHidden(false); 
      }

      lastScrollY.current = currentScrollY; 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0  w-full  flex items-center z-30 justify-center border-b-[0.8px] border-[#313131] bg-black announcement p-2 shadow-[0_1.5px_0_0_rgba(255,255,255,0.24)] backdrop-blur-xl transition-transform duration-300 `}
    >
      <div className="flex w-full items-start justify-center gap-x-2 text-sm md:items-center">
        <InfoCircledIcon className="h-3 w-3"  />
        <p className="font-axiforma text-xs">Pre-Alpha Release is Coming 🎉</p>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
