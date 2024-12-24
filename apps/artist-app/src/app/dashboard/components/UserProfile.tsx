"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import EditProfile from "./EditProfile";
import { getCurrentUser, getArtistProfile } from "@/lib/queries/users";

interface UserProfileData {
  artistName: string;
  artistImage: string;
}

export default function UserProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [userProfile, setUserProfile] = useState<UserProfileData>({
    artistName: "Loading...",
    artistImage: "https://api.dicebear.com/9.x/notionists/svg?seed=Felix",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await getCurrentUser();
        if (!user || !user.id) {
          console.warn("No logged-in user found.");
          return;
        }

        const profile = await getArtistProfile(user.id);
        if (profile) {
          setUserProfile({
            artistName: profile.artist_name || "Unknown Artist",
            artistImage:
              profile.artist_image_url ||
              "https://api.dicebear.com/9.x/notionists/svg?seed=Felix",
          });
        }
      } catch (error) {
        console.error("Error loading profile data:", error);
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

  return (
    <>
      <div
        onClick={openModal}
        className="flex h-[54px] w-[240px] cursor-pointer items-center justify-start gap-x-[10px] rounded-[8px] bg-[#181818] p-[10px]"
      >
        <div className="h-[32px] w-[32px] overflow-hidden rounded-full border">
          <img
            src={userProfile.artistImage}
            alt={userProfile.artistName}
            width={100}
            height={100}
          />
        </div>
        <div>
          <h3 className="text-[14px] text-[#FFF]">{userProfile.artistName}</h3>
          <p className="text-[10px] text-[#868B9F]">Artist</p>
        </div>
      </div>

      {isModalOpen && (
        <EditProfile
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          setUserProfile={setUserProfile}
        />
      )}
    </>
  );
}
