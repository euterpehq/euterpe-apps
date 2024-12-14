"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { scrollToHref } from "@/lib/utils";
import img from "@/assets/Frame 158.png"
import Image from "next/image";

function SecondCTA() {
  return (
    <div className="md:grid md:grid-cols-2 justify-items-stretch px-[60px] py-10 sm:flex sm:flex-col-reverse">
      <div className="mt-[72px] flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <h1 className="text-[48px] font-semibold leading-tight">
          Discover new artists
          </h1>
          <p className="max-w-[277px] text-[#B1B5C6] text-[18px]">
            Share your music, get discovered and expand your fanbase
          </p>
        </div>
        <Button size="sm" className="w-fit" asChild>
          <Link href="#waitlist" onClick={scrollToHref}>
            Join the waitlist
          </Link>
        </Button>
      </div>
      <div className="flex justify-end">
        <Image src={img} alt=""/>
      </div>
    </div>
  );
}



export default SecondCTA;
