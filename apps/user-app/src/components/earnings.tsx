"use client";

import React, { useState } from "react";
import { EUTIcon } from "@/components/Icons";
import { useEarningsStore } from "@/providers/store/earnings.store";
import {
  Dialog,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogContent,
} from "@/components/ui/dialog";
import WithdrawButton from "@/components/withdraw-button";
import Link from "next/link";
import { Gift } from "lucide-react";
import Image from "next/image";

function Earnings() {
  const earnings = useEarningsStore((state) => state.earnings);
  const [opendialog, setOpendialog] = useState(false);

  return (
    <div className="w-full flex items-center gap-2 justify-end">
      
        <Link href="/reward">
          {/* <div className="flex cursor-pointer items-center gap-2 font-figtree text-xs font-semibold tracking-[-0.02em]">
            <EUTIcon className="h-5 w-5" />

            <span>{earnings.toFixed(2)}</span> EUT

          </div> */}
          <div
            style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            className="flex cursor-pointer items-center gap-2 rounded-[8px] p-1.5 px-4 font-figtree text-xs font-semibold tracking-[-0.02em]"
          >
            <Gift className="text-primary" />
            <span>Rewards</span>
          </div>
        </Link>

        <div className="flex cursor-pointer items-center gap-2 rounded-[8px] border border-[#303033] p-2.5 px-4 py-2.5 font-figtree text-xs font-semibold tracking-[-0.02em]">
          <Image
              className="h-[16px] w-[16px]"
              src="/images/trophy.png"
              alt="rewards"
              width={100}
              height={100}
            />
            <span>
              {earnings.toFixed(2)}  
            </span>
        </div>
      
      {/*<DialogContent className="flex flex-col items-center gap-5 bg-[#1A1A1A] p-6">
        <DialogHeader className="">
          <DialogTitle className="mb-2 text-xl font-semibold tracking-tight">
            Withdraw Rewards
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center gap-2 rounded-md bg-[#2B2B2B] p-5 shadow-sm">
          <div className="text-2xl font-semibold text-white">
            {earnings.toFixed(2)} EUT
          </div>
          <p className="text-xs font-medium text-[#A0A0A0]">Current Balance</p>
        </div>

        <div className="mt-3 w-full text-center text-sm leading-relaxed text-muted-foreground">
          Withdraw your rewards directly to your wallet and enjoy the benefits
          of supporting fresh, underground artists!
        </div>

        <WithdrawButton onSuccess={() => setOpendialog(false)} />

        <p className="mt-3 text-[0.688rem] font-semibold tracking-[-0.04em] text-muted-foreground">
          *Please ensure you have linked a valid wallet before withdrawing.
        </p>
      </DialogContent>*/}
    </div>
  );
}

export default Earnings;
