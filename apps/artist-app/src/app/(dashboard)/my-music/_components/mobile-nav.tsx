"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="m-auto mb-6 flex h-[56px] w-[230px] items-center justify-start gap-x-[8px] rounded-[16px] bg-[#1B1B1B] p-[10px] md:hidden">
      <Link
        className={`flex h-[36px] w-[87px] items-center justify-start gap-x-1 px-[12px] py-[6px] font-figtree text-[13px] font-[600] ${
          pathname === "/"
            ? "rounded-lg bg-primary p-2 px-3 py-2 text-black"
            : "text-[#C2C6D6]"
        }`}
        href="/"
      >
        <Image
          src="/images/home.svg"
          alt="my-music"
          width={100}
          height={100}
          className="h-[24px] w-[24px]"
        />
        Home
      </Link>
      <Link
        className={`flex h-[36px] items-center justify-start gap-x-1 px-[12px] py-[6px] font-figtree text-[13px] font-[600] ${
          pathname === "/my-music"
            ? "rounded-lg bg-primary p-2 px-3 py-2 text-black"
            : ""
        }`}
        href="/my-music"
      >
        <Image
          src="/images/explore.svg"
          alt="my-music"
          width={100}
          height={100}
          className="h-[24px] w-[24px]"
        />
        My Music
      </Link>
    </div>
  );
}
