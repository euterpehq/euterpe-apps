"use client";
import React from "react";
import ConnectButton from "@/components/connect-button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Earnings from "@/components/Earnings";
import { Separator } from "@/components/ui/separator";
import { useAccount } from "wagmi";
import { usePathname } from "next/navigation";
import { EUTIcon } from "./Icons";

function Header() {
  const { isConnected } = useAccount();
  const pathname = usePathname();
  return (
    <header
      className={`sticky top-0 z-30 flex h-[3.75rem] items-center justify-between md:z-50 ${pathname === "/reward" ? "bg-transparent" : "border-b-[0.2px] border-[#303033]/80 bg-[#0E0E0E]"} px-6 py-3`}
    >
      <div className="flex">
        <div className="flex items-center gap-2 lg:flex">
          <EUTIcon className="h-5 w-5" />

          <Link href="/">
            <h2 className="text-sm font-bold">Euterpe.</h2>
          </Link>
          {/* <Badge
            variant="outline"
            className="hidden text-nowrap font-azeret text-[0.563rem] md:inline-flex"
          >
            Listen to Earn
          </Badge> */}
        </div>
      </div>
      <div className="m-auto -mt-3.5 hidden w-[740px] p-2.5 md:block">
        <form className="mx-auto">
          <label
            htmlFor="default-search"
            className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full rounded-lg border border-[#303033] p-2.5 ps-10 text-sm text-gray-900 dark:text-white"
              placeholder="Search songs and artist"
              required
            />
          </div>
        </form>
      </div>
      <div className="flex items-center gap-4">
        {isConnected && <Earnings />}
        {/* <Separator orientation="vertical" className="h-4" /> */}
        <ConnectButton align="right" />
      </div>
    </header>
  );
}

export default Header;
