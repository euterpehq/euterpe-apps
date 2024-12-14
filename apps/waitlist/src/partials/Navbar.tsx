"use client";
import { cn } from "@/lib/utils";
import AnnouncementBar from "@/components/AnnouncementBar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { scrollToHref } from "@/lib/utils";

const navigation = [
  { name: "Position Paper", href: "/position-paper", current: false },
  { name: "Resources", href: "/resources", current: false },
  { name: "About Us", href: "#", current: false },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-50 flex w-full flex-col backdrop-blur-md">
      <div className="relative flex h-[3.25rem] w-full flex-row items-center justify-between border-y-[0.5px] border-[#313131] bg-black/[0.85] p-2 px-4 text-lg sm:px-6 lg:px-10">
        <Link href="/">
          <h1 className="font-aeonik font-medium">Euterpe.</h1>
        </Link>
        <Button size="sm" asChild>
          <Link href="#waitlist" onClick={scrollToHref}>
            Join the waitlist
          </Link>
        </Button>
      </div>
    </nav>
  );
}
