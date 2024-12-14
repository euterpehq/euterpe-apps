"use client";

import UserProfile from "@/app/dashboard/components/UserProfile";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Compass, House } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <div className="flex pt-16 pb-8 shrink-0 items-center gap-2 border-b px-4">
          <UserProfile  />
        </div>
        <div className="flex flex-col pb-2 shrink-0 justify-start gap-2 border-b px-4">
          {/* Home */}
          <Link
            href="/home"
            className={`cursor-pointer p-[10px] flex justify-start items-center gap-x-[10px] ${
              pathname === "/home" ? "text-[#C1FF70]" : "text-[#C2C6D6]"
            }`}
          >
            <House
              size={20}
              color={pathname === "/home" ? "#C1FF70" : "#C2C6D6"}
            />
            <div>
              <h3
                className={`text-[14px] font-mono font-semibold ${
                  pathname === "/home" ? "text-[#C1FF70]" : "text-[#C2C6D6]"
                }`}
              >
                Home
              </h3>
            </div>
          </Link>
          {/* My Music */}
          <Link
            href="/my-music"
            className={`cursor-pointer p-[10px] flex justify-start items-center gap-x-[10px] ${
              pathname === "/my-music" ? "text-[#C1FF70]" : "text-[#C2C6D6]"
            }`}
          >
            <Compass
              size={20}
              color={pathname === "/my-music" ? "#C1FF70" : "#C2C6D6"}
            />
            <div>
              <h3
                className={`text-[14px] font-mono font-semibold ${
                  pathname === "/my-music" ? "text-[#C1FF70]" : "text-[#C2C6D6]"
                }`}
              >
                My Music
              </h3>
            </div>
          </Link>
        </div>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
