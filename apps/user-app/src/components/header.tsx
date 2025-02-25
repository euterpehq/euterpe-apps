"use client";
import React, { useEffect, useState } from "react";
import ConnectButton from "@/components/connect-button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Earnings from "@/components/earnings";
import { Separator } from "@/components/ui/separator";
import { useAccount } from "wagmi";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { EUTIcon } from "./Icons";
import AnnouncementBanner from "./announcement-banner";



function Header() {
  const { isConnected } = useAccount();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get the current query from the URL (if any)
  const [query, setQuery] = useState("");

  // Handle input change with debounce
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    // Debounce the URL update
    setTimeout(() => {
      if (newQuery.trim()) {
        router.replace(`/search/${encodeURIComponent(newQuery)}`);
      }
    }, 500); // Wait 500ms before updating URL
  };


  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search/${encodeURIComponent(query)}`);
    }
  };

  

  return (
    <>
    <AnnouncementBanner />
    <header
      className={`sticky w-full  top-0 z-30 flex h-[3.75rem] items-center justify-between md:z-50 ${pathname === "/reward" ? "bg-[#0E0E0E]" : "border-b-[0.2px] border-[#303033]/80 bg-[#0E0E0E]"} px-6 py-3`}
    >
      <div className="flex w-full">
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

      <div className="m-auto -mt-3.5 hidden w-full p-2.5 md:block">
        <form onSubmit={handleSubmit} className="mx-auto">
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
              value={query}
              onChange={handleChange}
              className="block w-full rounded-lg border border-[#303033] p-2.5 ps-10 text-sm text-gray-900 dark:text-white outline-none"
              placeholder="Search songs and artist"
            />
          </div>
        </form>
      </div>
     
        <Earnings />
        {/* <Separator orientation="vertical" className="h-4" /> */}
        
        {/*<ConnectButton align="right" />*/}
    
    </header>
    </>
  );
}

export default Header;
