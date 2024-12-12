"use client"
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DatePicker } from "@/components/DatePicker";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import UploadMusicModal from "./components/UploadMusicModal";
import Album from "./components/Album";
import Singles from "./components/Singles";
export function Dashboard() {
  
   const [isModalOpen, setIsModalOpen] = useState(false);
useEffect(() => {
  if (isModalOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}, [isModalOpen]);
  const openModal = () => setIsModalOpen(true);
 
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="">
        <header className="flex justify-between  h-28 shrink-0 items-center gap-2 px-4">
          <div className="flex justify-start items-center">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#FFFFFF] text-[24px]">
                  My Music
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          </div>
          <section className="flex justify-start items-center gap-x-[14px]">
           <Select>
              <SelectTrigger className="w-[60px] border border-[#303033]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent className="bg-dark">
                <SelectItem value="light">1 M</SelectItem>
                <SelectItem value="dark">1 W</SelectItem>
              </SelectContent>
          </Select> 
          <DatePicker/>
          <Button onClick={openModal}>Upload Music</Button>
        {isModalOpen && (
         <UploadMusicModal/>
        )}
          </section>
        </header>
        <section className="flex border-b p-4">
          <h2 className="flex-1">Releases</h2>
          <div className="flex justify-between items-center">
            <h2 className="w-[135px]">Plays</h2>
            <h2 className="justify-end  text-end w-[135px]">Upload date</h2>
          </div>
        </section>
       <Album/>
       <Singles/>
        <div className="mt-[40px]"></div>
       <Album/>
      </SidebarInset>
    </SidebarProvider>
  );
}
