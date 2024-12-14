import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <div
      
      className="w-full sm:h-[896px] md:h-[847px]  relative"
    >
      <div
        className="w-full h-full flex sm:flex-col md:flex-row"
        
      >
        <div className="gap-6 flex-1 z-20 flex flex-col items-start justify-center pl-[60px]">
          <div className="gap-9">
            <h1 className="font-bold text-[120px] leading-[110px] tracking-[-7.2px] py-5">Claim your spotlight</h1>
            <p className="text-[24px] tracking-[-0.9px] w-[332px]">Share your music, get discovered and expand your fanbase</p>
          </div>
          <Button size="sm" asChild className="p-[12px]">
            <Link href="#waitlist">Join the waitlist</Link>
          </Button>
        </div>
        <div
        className="flex-1"
        style={{
          background: "url(/hero.png) lightgray 50% / cover no-repeat",
          width: "100%",
        }}
        ></div>
      </div>
      <div
      className="w-full h-full absolute top-0 left-0 right-0 sm:hidden md:block"
      style={{
        background:
          "linear-gradient(270deg, rgba(102, 102, 102, 0.20) 13.14%, #000 52.37%)",
       
      }}
      >

      </div>
      <div
      className="w-full h-full absolute top-0 left-0 right-0  md:hidden sm:block"
      style={{
        background: 'linear-gradient(0deg, rgba(102, 102, 102, 0.20) 3.67%, #000 48.73%)',
       
      }}
      >

      </div>
    </div>
  );
}

export default Hero;
