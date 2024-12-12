import UserProfile from "@/app/dashboard/components/UserProfile";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Compass, House } from "lucide-react";
import Link from "next/link";
 
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
     <div className="flex pt-16 pb-8 shrink-0 items-center gap-2 border-b px-4">
          <UserProfile/>
      </div>
       <div className="flex flex-col  pb-2 shrink-0 justify-start gap-2 border-b px-4">
      {/* home */}
      <Link href="/home" className="cursor-pointer p-[10px] flex justify-start items-center gap-x-[10px]">
        <House size={20} color="#C2C6D6" />
        <div>
          <h3 className="text-[#C2C6D6] text-[14px] font-mono font-semibold">Home</h3>
        </div>
      </Link>
        {/* my music */}
        <Link href="/" className="cursor-pointer p-[10px] flex justify-start items-center gap-x-[10px]">
        <Compass  size={20} color="#C1FF70" />
        <div>
          <h3 className="text-[#C1FF70] text-[14px] font-mono font-semibold">My Music</h3>
        </div>
         </Link>
      </div>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
