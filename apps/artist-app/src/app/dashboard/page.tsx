"use client";

import { useEffect, useState } from "react";
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
import { Button } from "@/components/ui/button";
import UploadMusicModal from "./components/UploadMusicModal";
import Album from "./components/Album";
import Singles from "./components/Singles";
import NoMusic from "@/partials/my-music/NoMusic";
import { getCurrentUser } from "@/lib/queries/users";
import { getUserReleases } from "@/lib/queries/albums";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [releases, setReleases] = useState<
    Awaited<ReturnType<typeof getUserReleases>>
  >([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await getCurrentUser();
        if (!user?.id) {
          console.warn("No logged-in user found!");
          setIsLoading(false);
          return;
        }
        const data = await getUserReleases(user.id);
        setReleases(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col">
          <header className="flex h-28 shrink-0 items-center justify-between gap-2 px-4">
            <div className="flex items-center justify-start">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-[24px] text-[#FFFFFF]">
                      My Music
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <section className="flex items-center justify-start gap-x-[14px]">
              <Button>Week</Button>
              <Button className="bg-transperent text-white">Month</Button>
              <Button className="bg-transperent text-white">Year</Button>
              <Button onClick={openModal}>Upload Music</Button>
              {isModalOpen && (
                <UploadMusicModal
                  isModalOpen={isModalOpen}
                  closeModal={closeModal}
                />
              )}
            </section>
          </header>

          <section className="flex border-b p-4">
            <h2 className="flex-1">Releases</h2>
            <div className="flex items-center justify-between">
              <h2 className="w-[135px]">Plays</h2>
              <h2 className="w-[135px] justify-end text-end">Upload date</h2>
            </div>
          </section>

          {isLoading ? (
            <div className="p-4 text-white">Loading your music...</div>
          ) : releases.length === 0 ? (
            <NoMusic />
          ) : (
            releases.map((release) => {
              if (
                release.category_type === "single" &&
                release.tracks.length === 1
              ) {
                return <Singles key={release.id} single={release} />;
              } else {
                return <Album key={release.id} album={release} />;
              }
            })
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
