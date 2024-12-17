import React from "react";
import { EUTIcon } from "@/components/Icons";
import { EUTCoinIcon } from "@/components/Icons";

export default function DesktopOnlyNotice() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#1E1E1E] text-white text-center z-50">
      <div className="p-6 sm:p-8 rounded-xl shadow-2xl bg-[#252525] max-w-[90%] sm:max-w-[480px] animate-fade-in">
        <div className="flex justify-center mb-4">
          <div className="scale-75">
            <EUTCoinIcon />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-primary text-center mb-2">
          Best on Desktop
        </h1>

        <p className="text-gray-300 text-center text-sm sm:text-base leading-relaxed">
          For the best experience, please view this page on a desktop. We’re
          improving the mobile version and appreciate your patience.
        </p>

        <div className="mt-6 relative">
          <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-1 w-[120%] rounded-full animate-progress"
              style={{
                background:
                  "linear-gradient(90deg, #D6FFA0 0%, #FFC2D5 53%, #5754F6 100%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
