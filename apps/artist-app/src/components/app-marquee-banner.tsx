"use client";
import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Button } from "@/components/ui/button";
import UpdateProfile from "@/components/sidebar/update-profile";
import { getArtist } from "@/lib/queries/artist/get-artist";
// import { useSearchParams, useRouter } from "next/navigation";

export type ArtistProps = NonNullable<
  Awaited<ReturnType<typeof getArtist>>["data"]
>;

function AppMarqueeBanner({ artist }: { artist: ArtistProps }) {
  const [open, setOpen] = useState(false);
  // const searchParams = useSearchParams();
  // const router = useRouter();

  // useEffect(() => {
  //   const shouldOpen = searchParams.get("update-profile") === "true";
  //   setOpen(shouldOpen);
  // }, [searchParams]);

  // useEffect(() => {
  //   if (!open) {
  //     const params = new URLSearchParams(window.location.search);
  //     params.delete("update-profile");
  //     router.replace(`?${params.toString()}`);
  //   }
  // }, [open]);

  // const handleOpen = () => {
  //   setOpen(true);
  //   const params = new URLSearchParams(window.location.search);
  //   params.set("update-profile", "true");
  //   router.push(`?${params.toString()}`);
  // };

  return (
    <>
      <div
        className="h-[44px] w-full py-2.5"
        style={{
          background:
            "linear-gradient(90deg, #D6FFA0 0%, #FFC2D5 53%, #5754F6 100%)",
        }}
      >
        <Marquee className="z-0" loop={3} pauseOnHover>
          <div className="flex cursor-default items-center gap-24 px-12">
            <div className="flex items-center gap-6">
              <h3 className="font-azeret text-xs leading-[20px] text-black">
                Claim Your Spotlight - Update Your Artist Info Now
              </h3>
              <Button
                className="h-[24px] rounded-[6px] border-[0.5px] border-[#313131] px-2.5 py-[6px] font-azeret text-[10px] font-semibold tracking-[-0.04em] text-[#020403]"
                onClick={() => setOpen(true)}
              >
                Fill out Form
              </Button>
            </div>
            <div className="flex items-center gap-6">
              <h3 className="font-azeret text-xs leading-[20px] text-black">
                Claim Your Spotlight - Update Your Artist Info Now
              </h3>
              <Button
                className="h-[24px] rounded-[6px] border-[0.5px] border-[#313131] px-2.5 py-[6px] font-azeret text-[10px] font-semibold tracking-[-0.04em] text-[#020403]"
                onClick={() => setOpen(true)}
              >
                Fill out Form
              </Button>
            </div>
          </div>
        </Marquee>
      </div>
      <UpdateProfile open={open} onOpenChange={setOpen} artist={artist} />
    </>
  );
}

export default AppMarqueeBanner;
