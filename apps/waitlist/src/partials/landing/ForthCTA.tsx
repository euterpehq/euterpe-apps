"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { scrollToHref } from "@/lib/utils";
import { sendGAEvent } from "@next/third-parties/google";

function ForthCTA() {
  const pathname = usePathname();
  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    sendGAEvent(
      "click",
      "Waitlist Button",
      "Hero",
      pathname,
      e.currentTarget.href,
    );
    scrollToHref(e);
  }
  return (
    <div className="relative h-full w-full">
      <div className="flex h-full w-full flex-col items-center">
        <div className="z-20 relative md:top-[20rem] top-[5rem]  flex flex-1 flex-col items-center justify-center  w-[480px] h-[233px] md:gap-[32px] gap-[20px]">
          <div className="gap-2  flex flex-col items-center">
            <h1 className=" text-[40px] md:text-[56px] font-bold leading-normal tracking-[-3.36px]  font-figtree text-center ">
            Are you an artist?
            </h1>
            <p className="w-[332px] text-[18px] md:text-[24px]  font-figtree tracking-[-0.8px] md:tracking-[-0.96px] text-center">
            Get your music heard by real fans who love discovering new sounds.
            </p>
          </div>
          <Button size="sm" asChild className="p-[12px] md:w-[180px] w-[150px] h-[40px] md:h-[56px] rounded-[8px] ">
            <Link href="/app.euterpe.fm" onClick={handleClick}>
            Visit Euterpe for artists
            </Link>
          </Button>
        </div>
        <div className="h-full w-full ">
          <img src="/hero.png" alt="" className="h-full w-full object-cover " />
        </div>
      </div>
      <div
        className="absolute left-0 right-0 top-0 hidden h-full w-full"
        style={{
          background:
            "linear-gradient(270deg, rgba(102, 102, 102, 0.20) 13.14%, #000 52.37%)",
        }}
      ></div>
      <div
        className="absolute left-0 right-0 top-0 block h-full w-full "
        style={{
          background:
            "linear-gradient(0deg, rgba(102, 102, 102, 0.20) 3.67%, #000 48.73%)",
        }}
      ></div>
    </div>
  );
}

export default ForthCTA;
