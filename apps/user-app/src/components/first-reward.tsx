"use client";
import Link from "next/link";
import Progress from "./progress";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useModalStore } from "@/store/modal.store";

export default function FirstReward() {
  const pathname = usePathname();
  const { openModal } = useModalStore();
  return (
    <header
      className={`sticky top-0 z-30 flex h-[3.75rem] items-center justify-between md:z-50 ${pathname === "/reward" ? "bg-transparent" : "border-b-[0.2px] border-[#303033]/80 bg-[#0E0E0E]"} px-6 py-3`}
    >
      <div className="flex">
        <div className="flex items-center gap-2 lg:flex">
          <Image
            className="h-[40px] w-[31px]"
            src="/images/gift.svg"
            width={100}
            height={100}
            alt="reward"
          />
          <Link href="/">
            <h2 className="text-xs font-bold md:text-sm">
              Earn your first reward
            </h2>
            <h2 className="text-xs font-[400] text-[#7F8571] md:text-sm">
              Discover 5 mystery artist to claim your first reward
            </h2>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-start gap-6">
        <Progress />
        <Link
          onClick={openModal}
          style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
          href="#"
          className="hidden items-center justify-start gap-x-2 rounded-[120px] px-[12px] py-[8px] md:flex"
        >
          Start listening
          <ArrowRight size={15} />
        </Link>
      </div>
    </header>
  );
}
