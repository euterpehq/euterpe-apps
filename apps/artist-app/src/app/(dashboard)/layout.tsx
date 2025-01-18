import React from "react";
import AppHeader from "@/components/app-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import AppMarqueeBanner from "@/components/app-marquee-banner";
import { getArtist } from "@/lib/queries/artist/get-artist";
import DataFetchErrorDisplay from "@/components/data-fetch-error-display";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: artist } = await getArtist();
  if (!artist) return <DataFetchErrorDisplay />;
  return (
    <div className="flex h-screen min-h-screen flex-col bg-background">
      <AppHeader />
      <div className="flex flex-1 overflow-hidden">
        <SidebarProvider>
          <AppSidebar artist={artist} />
          <SidebarInset>
            <AppMarqueeBanner artist={artist} />
            <div className="flex-1 overflow-scroll">{children}</div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  );
}
