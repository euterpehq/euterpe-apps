"use client";
import React, { useEffect, useState } from "react";
import EditProfile from "@/components/sidebar/edit-profile";

export type UserProfileCardClientProps = {
  artistName: string;
  imageUrl: string;
};

export default function UserProfileCardClient({
  artistName,
  imageUrl,
}: UserProfileCardClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);

  return (
    <>
      <div
        onClick={openModal}
        className="flex h-[54px] w-[208px] cursor-pointer items-center justify-start gap-x-[10px] rounded-[8px] border-[0.5px] border-[#303033] bg-[#181818] p-[11px]"
      >
        <div className="h-[32px] w-[32px] overflow-hidden rounded-full border">
          <img src={imageUrl} alt={artistName} width={100} height={100} />
        </div>
        <div>
          <h3 className="text-[14px] text-[#FFF]">{artistName}</h3>
          <p className="text-[10px] text-[#868B9F]">Artist</p>
        </div>
      </div>

      {isModalOpen && (
        <EditProfile
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          setUserProfile={() => {}}
        />
      )}
    </>
  );
}
