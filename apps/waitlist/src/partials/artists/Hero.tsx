"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { scrollToHref } from "@/lib/utils";
import { sendGAEvent } from "@next/third-parties/google";

function Hero() {
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
      <div className="flex h-full w-full flex-col md:flex-row">
        <div className="z-20 flex flex-1 flex-col items-start justify-center gap-6 pl-[24px] md:pl-[60px]">
          <div className="gap-9">
            <h1 className="py-5 text-[72px] font-bold leading-[72px] tracking-[-4.32px] md:text-[120px] md:leading-[110px] md:tracking-[-7.2px]">
              Claim your spotlight
            </h1>
            <p className="w-[332px] text-[20px] text-[24px] tracking-[-0.8px] md:tracking-[-0.9px]">
              Share your music, get discovered and expand your fanbase
            </p>
          </div>
          <Button size="sm" asChild className="p-[12px]">
            <Link href="#waitlist" onClick={handleClick}>
              Join the waitlist
            </Link>
          </Button>
        </div>
        <div className="h-full w-full flex-1">
          <img src="/hero.png" alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      <div
        className="absolute left-0 right-0 top-0 hidden h-full w-full md:block"
        style={{
          background:
            "linear-gradient(270deg, rgba(102, 102, 102, 0.20) 13.14%, #000 52.37%)",
        }}
      ></div>
      <div
        className="absolute left-0 right-0 top-0 block h-full w-full md:hidden"
        style={{
          background:
            "linear-gradient(0deg, rgba(102, 102, 102, 0.20) 3.67%, #000 48.73%)",
        }}
      ></div>
    </div>
  );
}

export default Hero;
