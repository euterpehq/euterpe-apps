"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass } from "lucide-react";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="m-auto mb-6 flex w-fit items-center justify-start gap-x-4 rounded-xl bg-[#1B1B1B] px-5 py-3 md:hidden">
      <Link
        className={`flex items-center justify-start gap-x-1 text-sm ${
          pathname === "/"
            ? "rounded-lg bg-primary p-2 px-3 py-2 text-black"
            : "text-white"
        }`}
        href="/"
      >
        <Home />
        Home
      </Link>
      <Link
        className={`flex items-center justify-start gap-x-1 text-sm ${
          pathname === "/my-music"
            ? "rounded-lg bg-primary p-2 px-3 py-2 text-black"
            : ""
        }`}
        href="/my-music"
      >
        <Compass />
        My Music
      </Link>
    </div>
  );
}
