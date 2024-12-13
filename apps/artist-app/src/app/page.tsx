import React from "react";
import Navbar from "./Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image"
export default function Page() {
  return (
    <>
      <Navbar />
      <div className="bg-black min-h-screen flex justify-center items-center flex-col">
        <div className="space-y-6">
        <h1 className="m-auto text-center text-[100px] leading-[80px]">Get your music <br />
            discovered on Euterpe.
        </h1>
          <p className="my-4 font-light m-auto w-[70%] text-center text-[#BDBDBD] text-[20px]">Euterpe helps you get discovered, connect with your fans, grow your audience
            and share your music with the world
          </p>
          <section className="flex jusitfy-center items-center w-full">

           <Button className="m-auto rounded-full" size="sm" asChild>
            <Link
              href="/sign-up"
              rel="noreferrer"
              // target="_blank"
            >
              Get started
              <Image className="ms-1.5" src="/images/detached-arrow.png" alt="arrow" width={20} height={20}/>
            </Link>
          </Button>
          </section>
        </div>
      </div>
    </>
  );
}


