import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Compass, House } from "lucide-react";
import Image from 'next/image'
 
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
 <div className="flex pt-16 pb-8 shrink-0 items-center gap-2 border-b px-4">
      <div className="p-[10px] flex justify-start items-center gap-x-[10px] w-[240px] rounded-[8px] h-[54px] bg-[#181818]">
        <div className="w-[32px] h-[32px] rounded-full border">
          <Image src="/images/artist.png" alt="artist" width={100} height={100}/>
        </div>
        <div>
          <h3 className="text-[#FFF] text-[14px]">BurnaBoy</h3>
          <p className="text-[#868B9F] text-[10px]">Artist</p>
        </div>
      </div>

      </div>
       <div className="flex flex-col  pb-2 shrink-0 justify-start gap-2 border-b px-4">
      {/* home */}
      <div className="cursor-pointer p-[10px] flex justify-start items-center gap-x-[10px]">
        <House size={20} color="#C2C6D6" />
        <div>
          <h3 className="text-[#C2C6D6] text-[14px] font-mono font-semibold">Home</h3>
        </div>
      </div>
    {/* my music */}
        <div className="cursor-pointer p-[10px] flex justify-start items-center gap-x-[10px]">
        <Compass  size={20} color="#C1FF70" />
        <div>
          <h3 className="text-[#C1FF70] text-[14px] font-mono font-semibold">My Music</h3>
        </div>
         </div>
      </div>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
