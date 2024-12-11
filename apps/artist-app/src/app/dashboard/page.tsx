"use client"
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
import { ChevronRight, Dot, X } from "lucide-react";
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
import { useEffect, useState } from "react";
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
  const closeModal = () => setIsModalOpen(false);

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
          <Button onClick={openModal}>Upload Music</Button>
            {/* Modal */}
        {isModalOpen && (
          <div className="overflow-y-auto fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
              <button
                className="flex rounded-full justidfy-center items-center bg-[#1E1E1E] w-[44px] h-[44px] absolute top-10 left-4 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
             <X className="m-auto text-center" color="white"/>
              </button>
              <section className="mt-[930px] w-[60%] p-6 flex flex-col">

              <h2 className="text-xl font-semibold text-start">Upload Music</h2>

            <div className=" p-4 relative bg-[#181818] pb-10 rounded-lg shadow-md">
            <p className="mt-4">Number of Songs</p>
            <select className="bg-[#1E1E1E] mt-4 rounded-[6px] p-[14px] w-full text-[#797979]" name="" id="">
              <option value="" className="text-[#797979]">Select</option>
              <option value="" className="text-[#797979]">1</option>
              <option value="" className="text-[#797979]">2</option>
            </select>   
              <p className="mt-6">Album Title</p>
              <input className="bg-[#1E1E1E] mt-4 rounded-[6px] p-[14px] w-full text-[#797979]" placeholder="Enter name" type="text" name="" id="" />
                <p className="mt-4">Genre</p>
            <select className="bg-[#1E1E1E] mt-4 rounded-[6px] p-[14px] w-full text-[#797979]" name="" id="">
              <option value="" className="text-[#797979]">Select</option>
            </select> 
               <p className="mt-4">Sub-Genre <span className="text-[#868B9F]"> (optional)</span></p>
            <select className="bg-[#1E1E1E] mt-4 rounded-[6px] p-[14px] w-full text-[#797979]" name="" id="">
              <option value="" className="text-[#797979]">Select</option>
            </select> 
               <p className="mt-4">Streaming Links </p>
              <p className="text-[#868B9F]"> A description is meant to be here</p>
              <div className="mt-4 grid grid-cols-3 gap-x-4 gap-y-4">
                <div className="flex justfiy-start items-center gap-x-2 p-2.5 w-[100%] h-[40px] border rounded-sm">
                  <div className="w-[16px] h-[16px] border rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-spotify text-[#1ED760]" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
                  </svg>
                  </div>
                  <input className="bg-transparent focus:outline-none" placeholder="Spotify" type="text" name="" id="" />
                </div>
                 <div className="flex justfiy-start items-center gap-x-2 p-2.5 w-[100%] h-[40px] border rounded-sm">
                  <div className="w-[16px] h-[16px] rounded-full">
                    <Image src="/images/shazam.png" alt="shazam" width={200} height={200}/>
                  </div>
                  <input className="bg-transparent focus:outline-none" placeholder="Shazam" type="text" name="" id="" />
                </div>
               <div className="flex justfiy-start items-center gap-x-2 p-2.5 w-[100%] h-[40px] border rounded-sm">
                  <div className="w-[16px] h-[16px] rounded-full">
                    <Image src="/images/youtube_music.png" alt="youtube_music" width={200} height={200}/>
                  </div>
                  <input className="bg-transparent focus:outline-none" placeholder="Youtube Music" type="text" name="" id="" />
                </div>
                  <div className="flex justfiy-start items-center gap-x-2 p-2.5 w-[100%] h-[40px] border rounded-sm">
                  <div className="w-[16px] h-[16px] rounded-full">
                    <Image src="/images/grooveshark.png" alt="grooveshark" width={200} height={200}/>
                  </div>
                  <input className="bg-transparent focus:outline-none" placeholder="Groovesshark" type="text" name="" id="" />
                </div>
              <div className="flex justfiy-start items-center gap-x-2 p-2.5 w-[100%] h-[40px] border rounded-sm">
                  <div className="w-[16px] h-[16px] rounded-full">
                    <Image src="/images/sound_cloud.png" alt="sound_cloud" width={200} height={200}/>
                  </div>
                  <input className="bg-transparent focus:outline-none" placeholder="SoundCloud" type="text" name="" id="" />
                </div>
                  <div className="flex justfiy-start items-center gap-x-2 p-2.5 w-[100%] h-[40px] border rounded-sm">
                  <div className="w-[16px] h-[16px] rounded-full">
                    <Image src="/images/apple_music.png" alt="apple_music" width={200} height={200}/>
                  </div>
                  <input className="bg-transparent focus:outline-none" placeholder="Apple Music" type="text" name="" id="" />
                </div>
              </div>
                <p className="mt-6">Release Date</p>
              <input className="bg-[#1E1E1E] mt-4 rounded-[6px] p-[14px] w-full text-[#797979]" placeholder="Enter name" type="date" name="" id="" />
                <p className="mt-6">Cover Image</p>
                <div className="flex justify-start gap-x-16 mt-4 w-full ">
                    <div className="w-[400px] h-[200px] ">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-[400px] h-[200px] border border-dashed border-[#B8FF5B1A] rounded-lg cursor-pointer bg-[#1E1E1E] hover:bg-muted/25">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="text-center mb-2 text-sm text-primary">Select an Image</p>
                                <p className="text-center text-xs text-[#868B9F]">Or drag image here to upload</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div> 
                    {/*  */}
                    <div>
                    <p className="text-xl">Optimal Characteristics</p>
                    <ul className="ms-5 text-[#868B9F] list-disc">
                      <li>.jpg, .png, or .gif file extensions</li>
                      <li>Perfect square</li>
                      <li>3000 x 3000 pixels resolution</li>
                    </ul>
                    </div>
                </div>
                <p className="mt-6">Track 1 Audio File <span className="text-[#868B9F]"> (WAV, MP3, M4A, FLAC, AIFF, WMA)</span></p>
                  <div className="flex justify-start gap-x-16 mt-4 w-full ">
                    <div className="w-full h-[200px] ">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-[200px] border border-dashed border-[#B8FF5B1A] rounded-lg cursor-pointer bg-[#1E1E1E] hover:bg-muted/25">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="text-center mb-2 text-sm text-primary">Select an Image</p>
                                <p className="text-center text-xs text-[#868B9F]">Or drag image here to upload</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div> 
                   
                </div>
                {/*  */}
                  <select className="mt-4 bg-[#1E1E1E] mt-4 rounded-[6px] p-[14px] w-full text-[#797979]" name="" id="">
              <option value="" className="text-[#797979]">Track number</option>
            </select> 
            {/*  */}
              <input className="bg-[#1E1E1E] mt-4 rounded-[6px] p-[14px] w-full text-[#797979]" placeholder="Track Title" type="text" name="" id="" />
{/*  */}
            <Button className="mt-10 float-right  w-[100px] text-[14px] h-[34px] rounded-[8px] text-black p-[15px] px-4">Add Track</Button>
                <p className="mt-16"><input type="checkbox"  /> <span className="ms-1.5">I have read and agree to the terms of the </span> <span className="text-primary"> Euterpe Agreement</span></p>
            <Button className="mt-10 p-[14px] h-[44px] w-full">Upload Music</Button>
            </div>
              </section>
          </div>
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
              Januar 27, 2024
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
              Januar 27, 2024
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
              Januar 27, 2024
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
              Januar 27, 2024
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
              Januar 27, 2024
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
              Januar 27, 2024
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
              Januar 27, 2024
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
              Januar 27, 2024
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
              Januar 27, 2024
            </h2>
          </div>
        </section>
       
      </SidebarInset>
    </SidebarProvider>
  );
}
