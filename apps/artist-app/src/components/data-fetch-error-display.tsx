"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DataFetchErrorDisplay() {
  const router = useRouter();

  return (
    <div className="flex h-full w-full flex-1 items-center justify-center bg-transparent">
      <div className="mb-6 max-w-md rounded-xl border-[0.5px] bg-white/[0.02] p-8 text-center shadow-md">
        <h2 className="mb-3 text-lg font-semibold text-white">
          Unable to Load Data
        </h2>
        <p className="mb-6 text-sm text-neutral-400">
          Something went wrong while loading your data. Please try again or
          contact our support team if the issue persists.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button
            size="sm"
            onClick={() => {
              router.refresh();
            }}
          >
            Reload
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-neutral-100"
          >
            <Link href="mailto:team@euterpe.finance">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
