"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";

import AnnouncementBanner from "./announcement-banner";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { HiOutlineXMark, HiOutlineBars3 } from "react-icons/hi2";


const navigation = [
  { name: "Position-Paper", href: "/position-paper", current: false },
  { name: "Resources", href: "/resources", current: false },
  { name: "About Us", href: "#", current: false },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" && <AnnouncementBanner />}
      <Disclosure
      as="nav"
      className="sticky top-0 z-50"
      >
      <div
      className={`flex h-[3.25rem] w-full flex-row items-center bg-black justify-between border-b-[0.5px] border-[#313131] bg-white/[0.05] p-2 px-4 backdrop-blur-[40px] sm:px-6 lg:px-10`}
      style={{
        background: "radial-gradient(circle, #C1FF70)",
      }}
       
      >
        <Link href="/">
          <h1 className="font-aeonik font-semibold tracking-[-0.04em]">
            Euterpe.
          </h1>
        </Link>
        <div className={pathname === "/" || pathname === "/position-paper" || pathname === "/resources" ? "hidden items-center gap-[80px] font-azeret font-normal leading-[12.84px] tracking-[-0.06em] text-white  flex-row gap-x-20 text-[0.688rem] sm:flex" : "hidden"}>
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
        <div className={cn("hidden", { "sm:block": pathname === "/" || pathname === "/position-paper" || pathname === "/resources" })}> 
          <Button
            size="sm"
            className="h-[32px] rounded-full px-6 py-2.5 text-[11px] font-semibold tracking-[-0.04em]"
            asChild
          >
            <Link href="/sign-up">
              Get started
              <Image
                src="/images/arrow-right.png"
                alt="Right Arrow Icon"
                width={20}
                height={20}
                className="ml-1"
              />
            </Link>
          </Button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white  focus:outline-none group-data-[open]:hidden">
         
            <HiOutlineBars3
              aria-hidden="true"
              className="block h-6 w-6 "
            />
          </DisclosureButton>
        </div>
      </div>

      <DisclosurePanel
        className="fixed inset-y-0 right-0 z-50 flex h-screen w-full items-center justify-center bg-background/90 transition duration-200 ease-out data-[closed]:opacity-0 sm:hidden"
        transition
      >
        <div className="absolute right-0 top-0 flex items-center sm:hidden">
          <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 pt-11 text-white focus:outline-none">
            
            <HiOutlineXMark
              aria-hidden="true"
              className="hidden h-6 w-6  group-data-[open]:block"
            />
          </DisclosureButton>
        </div>
        <div className="space-y-1 px-2 pb-3 pt-2 text-xl">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={cn(
                item.current
                  ? "bg-primary"
                  : "hover:bg-primary/5 hover:text-primary",
                "block rounded-md px-3 py-2 text-center",
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
      </Disclosure>
    </>
  );
}
