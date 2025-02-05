import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Spacer from "@/components/ui/spacer";
import Link from "next/link";
import ArrowRightIcon from "@/assets/icons/arrow-right.png";
import Balancer from "react-wrap-balancer";
import LineArtLeftImage from "@/assets/images/line-art-left.svg";
import LineArtRightImage from "@/assets/images/line-art-right.svg";

export default function CTA() {
  return (
    <section className="w-full px-10">
      <div className="relative flex h-96 w-full flex-col items-center justify-center gap-8 overflow-hidden rounded-lg bg-primary p-4">
        <div className="z-10 flex flex-col items-center gap-8">
          <h2 className="text-center font-aeonik text-4xl font-medium tracking-[-0.06em] text-background md:text-5xl lg:text-6xl/[56px]">
            <Balancer>
              Discover music freedom, equitable finance, and creative
              independence with DeFi.
            </Balancer>
          </h2>
          <Button
            size="sm"
            className="h-[32px] rounded-full px-6 py-2.5 text-[11px] font-semibold tracking-[-0.04em]"
            asChild
          >
            <Link href="/sign-up">
              Get started
              <Image
                src={ArrowRightIcon}
                alt="Right Arrow Icon"
                width={20}
                height={20}
                className="ml-1"
              />
            </Link>
          </Button>
        </div>
        <Image
          src={LineArtLeftImage}
          alt="Line Art"
          className="absolute -left-10 top-0 hidden h-full lg:block"
        />
        <Image
          src={LineArtRightImage}
          alt="Line Art"
          className="absolute -right-10 top-0 hidden h-full lg:block"
        />
        <Image
          src={LineArtLeftImage}
          alt="Line Art"
          className="absolute bottom-0 right-1/2 block h-full rotate-0 lg:hidden"
        />
        <Image
          src={LineArtRightImage}
          alt="Line Art"
          className="absolute bottom-0 left-1/2 block h-full rotate-0 lg:hidden"
        />
      </div>
    </section>
  );
}