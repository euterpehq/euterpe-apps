"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { scrollToHref } from "@/lib/utils";

function FirstCTA() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 justify-items-stretch px-[60px] py-10">
      <div className="bg-white md:w-[400px] sm:w-[90%] h-[400px] rounded-[16px]">

      </div>
      <div className="mt-[72px] flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <h1 className="text-[48px] font-semibold leading-tight">
          Listen and Earn
          </h1>
          <p className="max-w-[277px] text-[#B1B5C6]">
          Earn rewards just by enjoying your favorite songs and exploring new ones.
          </p>
        </div>
        <Button
          size="sm"
          className="w-fit bg-[#C1FF70] hover:bg-[#F2D73D]/90"
          asChild
        >
          <Link href="#waitlist" onClick={scrollToHref}>
            Join the waitlist
          </Link>
        </Button>
      </div>
    </div>
  );
}



export default FirstCTA;
