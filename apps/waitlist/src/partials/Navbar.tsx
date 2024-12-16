"use client";
import { cn } from "@/lib/utils";
import AnnouncementBar from "@/components/AnnouncementBar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { scrollToHref } from "@/lib/utils";
import { sendGAEvent } from "@next/third-parties/google";

export default function Navbar() {
  const pathname = usePathname();
  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    sendGAEvent(
      "click",
      "Waitlist Button",
      "Navbar",
      pathname,
      e.currentTarget.href,
    );
    scrollToHref(e);
  }
  return (
    <nav className="sticky top-0 z-50 flex w-full flex-col backdrop-blur-md">
      <div className="relative flex h-[3.25rem] w-full flex-row items-center justify-between border-y-[0.5px] border-[#313131] bg-black/[0.85] p-2 px-4 text-lg sm:px-6 lg:px-10">
        <Link href="/">
          <h1 className="font-aeonik font-medium">Euterpe.</h1>
        </Link>
        <Button size="sm" asChild>
          <Link href="#waitlist" onClick={handleClick}>
            Join the waitlist
          </Link>
        </Button>
      </div>
    </nav>
  );
}
