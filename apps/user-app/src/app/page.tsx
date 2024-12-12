import React from "react";
import Header from "@/partials/Header";
//import FullScreenPlayer from "@/partials/feed/FullScreenPlayer";
//import HorizontalSlider from "@/partials/discover/HorizontalSlider";
import Lucky from "@/partials/discover/Lucky";
import Front from "@/partials/Home/Home";

export default function Home() {
  return (
    <>
      <Header />
      {/*<FullScreenPlayer />*/}
      <Front />
    </>
  );
}
