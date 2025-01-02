"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ArrowRightIcon from "@/assets/icons/arrow-right.png";

const navigation = [
  { name: "Explore", href: "/explore", current: false },
  { name: "Resources", href: "/resources", current: false },
  { name: "About Us", href: "#", current: false },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div
      className="absolute top-0 z-50 flex h-[3.25rem] w-full flex-row items-center justify-between border-b-[0.5px] border-[#313131] bg-white/[0.05] p-2 px-4 text-lg backdrop-blur-[40px] sm:px-6 lg:px-10"
      style={{
        background: "radial-gradient(circle, #C1FF70)",
      }}
    >
      <Link href="/">
        <h1 className="font-aeonik font-medium">Euterpe.</h1>
      </Link>
      <div className={cn("hidden", { "sm:block": pathname === "/" })}>
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
    </div>
  );
}
