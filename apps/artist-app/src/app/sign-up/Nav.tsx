"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navigation = [
  { name: "Explore", href: "/explore", current: false },
  { name: "Resources", href: "/resources", current: false },
  { name: "About Us", href: "#", current: false },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <div className="sticky top-0 z-50 flex flex-col backdrop-blur-md">
      <div
        className="relative flex h-[3.25rem] w-full flex-row items-center justify-between border-y-[0.5px] bg-[#313131] p-2 px-4 text-lg sm:px-6 lg:px-10"
      >
        <Link href="/">
          <h1 className="font-aeonik font-medium">Euterpe.</h1>
        </Link>
      </div>

  
    </div>
  );
}
