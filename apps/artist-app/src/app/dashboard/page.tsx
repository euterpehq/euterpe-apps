import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ChevronRight, Dot } from "lucide-react";
import Image from "next/image";
export function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="">
        <header className="flex  h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              {/* <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">My Music</BreadcrumbLink>
              </BreadcrumbItem> */}
              {/* <BreadcrumbSeparator className="hidden md:block" /> */}
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#FFFFFF] text-[24px]">
                  My Music
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <section className="flex border-b p-4">
          <h2 className="flex-1">Releases</h2>
          <div className="flex justify-between items-center">
            <h2 className="w-[135px]">Plays</h2>
            <h2 className="justify-end  text-end w-[135px]">Upload date</h2>
          </div>
        </section>
        {/* album */}
        <section className="flex justify-between items-center border-b p-4">
          <div className="flex justifrty items-center gap-x-[9px]">
            <Image
              className="w-[64px] h-[64px]"
              width={50}
              height={50}
              src="/images/album.png"
              alt="album"
            />
            <div>
              <h2 className="flex-1">AMUSIA</h2>
              <div></div>
              <h4 className="flex justify-start items-center mt-2 text-[12px] text-[#868B9F]">
                Album{" "}
                <span className="flex jutify-center items-center ">
                  <Dot size={25} color="#C1FF70" />3 tracks
                </span>
              </h4>
            </div>
          </div>
          <div className="text-[#868B9F] w-fit flex justify-end items-center">
            <h2 className="text-[12px] ps-2.5 w-[135px]">100</h2>
            <h2 className="flex-end text-end text-[12px] flex justify-end items-center gap-x-2 w-[135px]">
              Januar 27, 2024 <ChevronRight size={15} />
            </h2>
          </div>
        </section>
        <section className="flex justify-between items-center border-b p-4">
          <div className="flex justifrty items-center gap-x-[9px]">
            <div>
              <h2 className="flex-1">1</h2>
              <div></div>
            </div>
          </div>
          <div className="text-[#868B9F] w-fit flex justify-end items-center">
            <h2 className="text-[12px] ps-2.5 w-[135px]">100</h2>
            <h2 className="flex-end text-end text-[12px] flex justify-end items-center gap-x-2 w-[135px]">
              Januar 27, 2024 <ChevronRight size={15} />
            </h2>
          </div>
        </section>
        {/* singles */}
        <section className="flex justify-between items-center border-b p-4">
          <div className="flex justifrty items-center gap-x-[9px]">
            <Image
              className="w-[64px] h-[64px]"
              width={50}
              height={50}
              src="/images/album.png"
              alt="album"
            />
            <div>
              <h2 className="flex-1">AMUSIA</h2>
              <div></div>
              <h4 className="flex justify-start items-center mt-2 text-[12px] text-[#868B9F]">
                Album{" "}
                <span className="flex jutify-center items-center ">
                  <Dot size={25} color="#C1FF70" />3 tracks
                </span>
              </h4>
            </div>
          </div>
          <div className="text-[#868B9F] w-fit flex justify-end items-center">
            <h2 className="text-[12px] ps-2.5 w-[135px]">100</h2>
            <h2 className="flex-end text-end text-[12px] flex justify-end items-center gap-x-2 w-[135px]">
              Januar 27, 2024 <ChevronRight size={15} />
            </h2>
          </div>
        </section>
        {/* <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div> */}
      </SidebarInset>
    </SidebarProvider>
  );
}
