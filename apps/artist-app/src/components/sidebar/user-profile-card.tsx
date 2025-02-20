"use client";
import React, { useState, useEffect } from "react";
import UpdateProfile from "@/components/sidebar/update-profile";
import { getArtist } from "@/lib/queries/artist/get-artist";
import Image from "next/image";
// import { useSearchParams, useRouter } from "next/navigation";

export type ArtistProps = NonNullable<
  Awaited<ReturnType<typeof getArtist>>["data"]
>;

export default function UserProfileCard({ artist }: { artist: ArtistProps }) {
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

  const artistName = artist.artist_name || artist.email || "Unknown Artist";
  const artistImage =
    artist.artist_image_url ||
    "https://api.dicebear.com/9.x/notionists/svg?seed=Felix";

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="flex h-[54px] w-[208px] cursor-pointer items-center justify-start gap-x-[10px] rounded-[8px] border-[0.5px] border-[#303033] bg-[#181818] p-[11px]"
      >
        <div className="h-[32px] w-[32px] shrink-0 overflow-hidden rounded-full border">
          <Image src={artistImage} alt={artistName} width={100} height={100} />
        </div>
        <div className="overflow-x-scroll">
          <h3 className="truncate text-[14px] text-[#FFF]">{artistName}</h3>
          <p className="text-[10px] text-[#868B9F]">Artist</p>
        </div>
      </div>
      <UpdateProfile open={open} onOpenChange={setOpen} artist={artist} />
    </>
  );
}
