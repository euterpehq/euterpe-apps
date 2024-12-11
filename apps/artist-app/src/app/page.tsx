import Header from "@/partials/Header";
import React from "react";
import { Dashboard } from "./dashboard/page";
// import FullScreenPlayer from "@/partials/feed/FullScreenPlayer";

export default function Page() {
  return (
    <>
      <Header />
      <Dashboard />

      {/* <FullScreenPlayer /> */}
    </>
  );
}
