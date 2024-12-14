import { DatePicker } from "@/components/DatePicker";
import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Header from "@/partials/Header";
import { AreaChartComponent } from "./charts/AreaChart";
import Statistics from "./components/Statistics";
import Profile from "./components/Profile";

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
           <Profile/>
          <Statistics/>
          <AreaChartComponent/>
      </SidebarInset>
    </SidebarProvider>
    </>
  );
}
