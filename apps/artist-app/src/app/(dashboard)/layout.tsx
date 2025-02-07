import React from "react";
import AppHeader from "@/components/app-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import AppMarqueeBanner from "@/components/app-marquee-banner";
import { getArtist } from "@/lib/queries/artist/get-artist";
import DataFetchErrorDisplay from "@/components/data-fetch-error-display";
import MobileNav from "./my-music/_components/mobile-nav";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: artist } = await getArtist();
  if (!artist) return <DataFetchErrorDisplay />;
  return (
    <div className="flex h-screen min-h-screen w-full flex-col overflow-hidden bg-background">
      <AppHeader />
      <div className="flex flex-1 overflow-hidden">
        <SidebarProvider>
          <AppSidebar artist={artist} />
          <SidebarInset className="relative">
            {/* The Marquee is causing some overflow issue; this could be a permanent fix if we dont figure it out... */}
            <div className="absolute top-0 left-0">
              <AppMarqueeBanner artist={artist} />
            </div>
            {/* placeholder to fill the space of the marquee which is absolute due to responsiveness issue */}
            <div className="h-[44px] w-full"></div>
            <div className="xl:w-auto">{children}</div>
            <div className="visible mt-auto w-screen overflow-hidden md:hidden">
              <MobileNav />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  );
}
