import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ArtistsScrollingCards from "@/components/artists-scrolling-cards";

export default function Page() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center bg-black py-32 gap-5">
      {/*<Image
        src="/images/hero.png"
        alt="hero"
        fill
        quality={100}
        className="absolute left-0 top-0 z-0 h-full w-full object-cover"
      />*/}
      <div className="z-5 absolute left-0 top-0 h-full w-full bg-black opacity-75" />
      <div className="relative z-10 space-y-8">
        <h1 className="m-auto text-center text-[50px] font-semibold leading-[50px] tracking-[-0.06em] md:text-[100px] md:leading-[80px]">
          Get your music <br />
          discovered on Euterpe.
        </h1>
        <p className="m-auto my-4 w-[70%] text-center text-[16px] font-normal leading-[18.67px] tracking-[-0.02em] text-[#BDBDBD]">
          Euterpe helps you get discovered, connect with your fans, grow your
          audience and share your music with the world
        </p>
        <section className="flex w-full items-center justify-center">
          <Button
            className="gap-1 rounded-full border-0 px-6 py-2.5 text-sm font-semibold leading-[24px] tracking-[-0.04em]"
            size="sm"
            asChild
          >
            <Link href="/my-music">
              Get started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M4.5 12H7M20.5 12L14.5 6M20.5 12L14.5 18M20.5 12H10"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </Button>
        </section>
        
       
      </div>
      <div className="relative top-8">
        <ArtistsScrollingCards />
        </div>
    </div>
  );
}
