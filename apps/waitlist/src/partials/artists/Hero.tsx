import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <div
      style={{
        background: "url(/hero.png) lightgray 50% / cover no-repeat",
      }}
    >
      <div
        className=""
        style={{
          background:
            "linear-gradient(270deg, rgba(102, 102, 102, 0.20) 13.14%, #000 52.37%)",
        }}
      >
        <div className="gap-6">
          <div className="gap-9">
            <h1 className="font-bold text-[120px]">Claim your spotlight</h1>
            <p>Share your music, get discovered and expand your fanbase</p>
          </div>
          <Button size="sm" asChild>
            <Link href="#waitlist">Join the waitlist</Link>
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Hero;
