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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DatePicker } from "@/components/DatePicker";
import { Button } from "@/components/ui/button";
export function Dashboard() {
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

          <div>
           <Select>
              <SelectTrigger className="w-[60px] border border-[#303033]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent className="bg-dark">
                <SelectItem value="light">1 M</SelectItem>
                <SelectItem value="dark">1 W</SelectItem>
              </SelectContent>
          </Select>

          </div>
          <DatePicker/>
          <Button>Upload Music</Button>
          </section>
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
          <div className="flex justify items-center gap-x-[9px]">
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
            <div className="flex gap-x-[10px]">
              <h2 className="flex-1">1</h2>
              <div>Lover’s Quarrel</div>
            </div>
          </div>
          <div className="text-[#868B9F] w-fit flex justify-end items-center">
            <h2 className="text-[12px] ps-2.5 w-[135px]">50</h2>
            <h2 className="flex-end text-end text-[12px] flex justify-end items-center gap-x-2 w-[135px]">
              Januar 27, 2024 <ChevronRight size={15} />
            </h2>
          </div>
        </section>
          <section className="flex justify-between items-center border-b p-4">
          <div className="flex justifrty items-center gap-x-[9px]">
            <div className="flex gap-x-[10px]">
              <h2 className="flex-1">2</h2>
              <div>Lover’s Quarrel</div>
            </div>
          </div>
          <div className="text-[#868B9F] w-fit flex justify-end items-center">
            <h2 className="text-[12px] ps-2.5 w-[135px]">50</h2>
            <h2 className="flex-end text-end text-[12px] flex justify-end items-center gap-x-2 w-[135px]">
              Januar 27, 2024 <ChevronRight size={15} />
            </h2>
          </div>
        </section>
            <section className="flex justify-between items-center border-b p-4">
          <div className="flex justifrty items-center gap-x-[9px]">
            <div className="flex gap-x-[10px]">
              <h2 className="flex-1">3</h2>
              <div>Lover’s Quarrel</div>
            </div>
          </div>
          <div className="text-[#868B9F] w-fit flex justify-end items-center">
            <h2 className="text-[12px] ps-2.5 w-[135px]">50</h2>
            <h2 className="flex-end text-end text-[12px] flex justify-end items-center gap-x-2 w-[135px]">
              Januar 27, 2024 <ChevronRight size={15} />
            </h2>
          </div>
        </section>
        {/* singles */}
        <section className="mt-[40px] flex justify-between items-center border-b p-4">
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
              <h4 className="flex justify-start items-center mt-2 text-[12px] text-[#868B9F]">
                Single
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
        <div className="mt-[40px]"></div>
         {/* album 2 */}
        <section className="flex justify-between items-center border-b p-4">
          <div className="flex justify items-center gap-x-[9px]">
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
            <div className="flex gap-x-[10px]">
              <h2 className="flex-1">1</h2>
              <div>Lover’s Quarrel</div>
            </div>
          </div>
          <div className="text-[#868B9F] w-fit flex justify-end items-center">
            <h2 className="text-[12px] ps-2.5 w-[135px]">50</h2>
            <h2 className="flex-end text-end text-[12px] flex justify-end items-center gap-x-2 w-[135px]">
              Januar 27, 2024 <ChevronRight size={15} />
            </h2>
          </div>
        </section>
          <section className="flex justify-between items-center border-b p-4">
          <div className="flex justifrty items-center gap-x-[9px]">
            <div className="flex gap-x-[10px]">
              <h2 className="flex-1">2</h2>
              <div>Lover’s Quarrel</div>
            </div>
          </div>
          <div className="text-[#868B9F] w-fit flex justify-end items-center">
            <h2 className="text-[12px] ps-2.5 w-[135px]">50</h2>
            <h2 className="flex-end text-end text-[12px] flex justify-end items-center gap-x-2 w-[135px]">
              Januar 27, 2024 <ChevronRight size={15} />
            </h2>
          </div>
        </section>
            <section className="flex justify-between items-center border-b p-4">
          <div className="flex justifrty items-center gap-x-[9px]">
            <div className="flex gap-x-[10px]">
              <h2 className="flex-1">3</h2>
              <div>Lover’s Quarrel</div>
            </div>
          </div>
          <div className="text-[#868B9F] w-fit flex justify-end items-center">
            <h2 className="text-[12px] ps-2.5 w-[135px]">50</h2>
            <h2 className="flex-end text-end text-[12px] flex justify-end items-center gap-x-2 w-[135px]">
              Januar 27, 2024 <ChevronRight size={15} />
            </h2>
          </div>
        </section>
      </SidebarInset>
    </SidebarProvider>
  );
}
