import React from "react";
import { EUTIcon } from "@/components/Icons";
import { EUTCoinIcon } from "@/components/Icons";

export default function DesktopOnlyNotice() {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-[#1E1E1E] text-center text-white">
      <div className="animate-fade-in max-w-[90%] rounded-xl bg-[#252525] p-6 shadow-2xl sm:max-w-[480px] sm:p-8">
        <div className="mb-4 flex justify-center">
          <div className="scale-75">
            <EUTCoinIcon />
          </div>
        </div>

        <h1 className="mb-2 text-center text-3xl font-bold text-primary">
          Best on Desktop
        </h1>

        <p className="text-center text-sm leading-relaxed text-gray-300 sm:text-base">
          For the best experience, please view this page on a desktop. We’re
          improving the mobile version and appreciate your patience.
        </p>

        <div className="relative mt-6">
          <div className="h-1 w-full overflow-hidden rounded-full bg-gray-700">
            <div
              className="animate-progress h-1 w-[120%] rounded-full"
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
