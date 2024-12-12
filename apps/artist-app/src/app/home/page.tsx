import { DatePicker } from "@/components/DatePicker";
import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Header from "@/partials/Header";
import Image from 'next/image'

export default function page() {
  return (
    <>
     <Header />
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="">
        <header className="border-b mt-[3px] flex justify-between  h-28 shrink-0 items-center gap-2 px-4">
          <div className="flex justify-start items-center">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#FFFFFF] text-[24px]">
                 Overview
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          </div>
          <section className="flex justify-start items-center gap-x-[14px]">
          <Button>Week</Button>
          <Button className="bg-transperent text-white">Month</Button>
          <Button className="bg-transperent text-white">Year</Button>
           
        
     
          </section>
        </header>
        <section className="p-4 w-full">
             <div className="p-[10px] flex justify-start items-center gap-x-[14px] rounded-[8px] h-[54px]">
        <div className="w-[40px] h-[40px] rounded-full border">
          <Image src="/images/artist.png" alt="artist" width={100} height={100}/>
        </div>
        <div>
          <h3 className="text-[#FFFFFF] text-[24px]">ford.</h3>
        </div>
            </div>
        </section>
        <section className="gap-[20px] grid grid-cols-4 w-full p-4">
            <div className="w-[100%] h-[87px] border border-[#181818] rounded-[8px] p-[20px] bg-[#181818]">
                <h4 className="text-[#9C9C9C] text-[12px]">Plays</h4>
                <h2 className="text-[24px]">872</h2>
            </div>
            <div className="w-[100%] h-[87px] border rounded-[8px] p-[20px]">
                 <h4 className="text-[#9C9C9C] text-[12px]">Listeners</h4>
                <h2 className="text-[24px]">872</h2>
            </div>
            <div className="w-[100%] h-[87px] border rounded-[8px] p-[20px]">
                 <h4 className="text-[#9C9C9C] text-[12px]">Plays</h4>
                <h2 className="text-[24px]">872</h2>
            </div>
            <div className="w-[100%] h-[87px] border rounded-[8px] p-[20px]">
                 <h4 className="text-[#9C9C9C] text-[12px]">Plays</h4>
                <h2 className="text-[24px]">872</h2>
            </div>
        </section>
        {/* area chart */}
        <section className="h-[449px] bg-[#181818] w-[98%] mx-auto rounded-[12px] p-4"></section>
      </SidebarInset>
    </SidebarProvider>
    </>
  );
}
