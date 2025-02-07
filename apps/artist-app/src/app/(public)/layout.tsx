import React from "react";
import Navbar from "@/components/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen min-h-screen flex-col bg-black">
      <Navbar />
      <div className="grow">{children}</div>
    </div>
  );
}
