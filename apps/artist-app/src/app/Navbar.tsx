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

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="sticky top-0 z-50 flex flex-col backdrop-blur-md">
      {/* Navbar with smoother radial gradient */}
      <div
        className="relative flex h-[3.25rem] w-full flex-row items-center justify-between border-y-[0.5px] border-[#313131] p-2 px-4 text-lg sm:px-6 lg:px-10"
        style={{
          background: "radial-gradient(circle, #C1FF70)",
        }}
      >
        <Link href="/">
          <h1 className="font-aeonik font-medium">Euterpe.</h1>
        </Link>
        <div className="hidden flex-row gap-x-20 text-[0.688rem] sm:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={cn(
                item.href === pathname ? "text-primary" : "hover:text-primary",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden sm:block">
          <Button
            className="h-[32px] rounded-full px-6 py-2.5 text-[11px] font-semibold tracking-[-0.04em]"
            size="sm"
            asChild
          >
            <Link href="/sign-up">Get started</Link>
          </Button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <div className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none group-data-[open]:hidden">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="fixed inset-y-0 right-0 z-50 flex hidden h-screen w-full items-center justify-center bg-background/90 transition duration-200 ease-out data-[closed]:opacity-0 sm:hidden">
        <div className="absolute right-0 top-0 flex items-center sm:hidden">
          <div className="group relative inline-flex items-center justify-center rounded-md p-2 pt-11 text-muted-foreground focus:outline-none">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
          </div>
        </div>
        <div className="space-y-1 px-2 pb-3 pt-2 text-xl">
          {navigation.map((item) => (
            <div
              key={item.name}
              aria-current={item.current ? "page" : undefined}
              className={cn(
                item.current
                  ? "bg-primary"
                  : "hover:bg-primary/5 hover:text-primary",
                "block rounded-md px-3 py-2 text-center",
              )}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
