import { DatePicker } from "@/components/date-picker";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { AreaChartComponent } from "./charts/AreaChart";
import Statistics from "./components/Statistics";
import Profile from "./components/Profile";

export default function page() {
  return (
    <>
      <header className="mt-[3px] flex h-28 shrink-0 items-center justify-between gap-2 border-b px-4">
        <div className="flex items-center justify-start">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[24px] text-[#FFFFFF]">
                  Overview
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
            x
          </Breadcrumb>
        </div>
        <section className="flex items-center justify-start gap-x-[14px]">
          <Button>Week</Button>
          <Button className="bg-transperent text-white">Month</Button>
          <Button className="bg-transperent text-white">Year</Button>
        </section>
      </header>
      <Profile />
      <Statistics />
      <AreaChartComponent />
    </>
  );
}
