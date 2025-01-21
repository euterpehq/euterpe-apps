import React from "react";
import AppHeader from "@/components/app-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import AppMarqueeBanner from "@/components/app-marquee-banner";
import { getArtist } from "@/lib/queries/artist/get-artist";
import DataFetchErrorDisplay from "@/components/data-fetch-error-display";
import MobileNav from "./my-music/_components/MobileNav";

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
          <SidebarInset>
            <AppMarqueeBanner artist={artist} />
            <div className="w-screen md:w-[88.5%] md:flex-1 xl:w-auto">
              {children}
            </div>
            <div className="visible mt-auto w-screen overflow-hidden md:hidden">
              <MobileNav />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  );
}
