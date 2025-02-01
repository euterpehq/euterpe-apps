"use client";
import React from "react";
import ConnectButton from "@/components/connect-button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Earnings from "@/components/earnings";
import { Separator } from "@/components/ui/separator";
import { useAccount } from "wagmi";
import { usePathname } from "next/navigation";

function Header() {
  const { isConnected } = useAccount();
  const pathname = usePathname()
  return (
    <header className={`sticky top-0 z-30 md:z-50 flex h-[3.25rem] items-center justify-between  ${pathname === "/reward" ? "bg-transparent" : "bg-[#0E0E0E] border-b-[0.2px] border-[#303033]/80"}  px-6 py-3 `}>
      <div className="flex">
        <div className="flex items-center gap-2 lg:flex">
          <Link href="/">
            <h2 className="text-sm font-bold">Euterpe</h2>
          </Link>
          <Badge
            variant="outline"
            className="hidden text-nowrap font-azeret text-[0.563rem] md:inline-flex"
          >
            Listen to Earn
          </Badge>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {isConnected && <Earnings />}
        <Separator orientation="vertical" className="h-4" />
        <ConnectButton align="right" />
      </div>
    </header>
  );
}

export default Header;
