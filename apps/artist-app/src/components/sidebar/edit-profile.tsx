"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Toaster, toast } from "sonner";

import { getArtistProfile, getCurrentUser } from "@/lib/queries/users";
import { updateArtistProfile } from "@/lib/actions/users";
import { uploadImageToBucket } from "@/lib/actions/storage";

import StreamingLinks from "./streaming-links";
import UpdateProfilePic from "./update-profile-pic";
import BannerImage from "./banner-image";

interface EditProfileProps {
  isModalOpen: boolean;
  closeModal: () => void;
  setUserProfile: (profile: {
    artistName: string;
    artistImage: string;
  }) => void;
}

export default function EditProfile({
  isModalOpen,
  closeModal,
  setUserProfile,
}: EditProfileProps) {
  const [artistName, setArtistName] = useState("");
  const [bio, setBio] = useState("");

  const [artistImageUrl, setArtistImageUrl] = useState<string | null>(null);
  const [bannerImageUrl, setBannerImageUrl] = useState<string | null>(null);

  const [artistImageFile, setArtistImageFile] = useState<File | null>(null);
  const [bannerImageFile, setBannerImageFile] = useState<File | null>(null);

  const [spotifyUrl, setSpotifyUrl] = useState("");
  const [deezerUrl, setDeezerUrl] = useState("");
  const [youtubeMusicUrl, setYoutubeMusicUrl] = useState("");
  const [audiomackUrl, setAudiomackUrl] = useState("");
  const [soundcloudUrl, setSoundcloudUrl] = useState("");
  const [appleMusicUrl, setAppleMusicUrl] = useState("");

  const [userId, setUserId] = useState<string | null>(null);

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await getCurrentUser();
        if (!user?.id) return;
        setUserId(user.id);

        const profile = await getArtistProfile(user.id);
        if (profile) {
          setArtistName(profile.artist_name ?? "");
          setBio(profile.bio ?? "");
          setArtistImageUrl(profile.artist_image_url ?? null);
          setBannerImageUrl(profile.banner_image_url ?? null);

          setSpotifyUrl(profile.spotify_url ?? "");
          setDeezerUrl(profile.deezer_url ?? "");
          setYoutubeMusicUrl(profile.youtube_music_url ?? "");
          setAudiomackUrl(profile.audiomack_url ?? "");
          setSoundcloudUrl(profile.soundcloud_url ?? "");
          setAppleMusicUrl(profile.apple_music_url ?? "");
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    }
    fetchData();
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!userId) return;

    setIsSaving(true);
    try {
      let finalArtistImageUrl = artistImageUrl ?? "";
      if (artistImageFile) {
        const publicUrl = await uploadImageToBucket(
          artistImageFile,
          userId,
          "profile-pics",
        );
        if (publicUrl) {
          finalArtistImageUrl = publicUrl;
        }
      }

      let finalBannerImageUrl = bannerImageUrl ?? "";
      if (bannerImageFile) {
        const publicUrl = await uploadImageToBucket(
          bannerImageFile,
          userId,
          "banners",
        );
        if (publicUrl) {
          finalBannerImageUrl = publicUrl;
        }
      }

      const payload = {
        artist_name: artistName,
        bio,
        artist_image_url: finalArtistImageUrl,
        banner_image_url: finalBannerImageUrl,
        spotify_url: spotifyUrl,
        deezer_url: deezerUrl,
        youtube_music_url: youtubeMusicUrl,
        audiomack_url: audiomackUrl,
        soundcloud_url: soundcloudUrl,
        apple_music_url: appleMusicUrl,
      };

      const { error } = await updateArtistProfile(userId, payload);
      if (error) {
        toast.error("Error updating profile.");
      } else {
        toast.success("Profile updated successfully!");
        setUserProfile({
          artistName,
          artistImage: finalArtistImageUrl,
        });
        closeModal();
      }
    } catch (err) {
      console.error("handleSubmit error:", err);
      toast.error("Unexpected error updating profile.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <>
      <Toaster position="bottom-right" richColors />

      <div className="fixed inset-0 z-0 flex items-center justify-center overflow-y-auto bg-black bg-opacity-70 backdrop-blur-sm">
        <button
          className="absolute left-4 top-14 flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#1E1E1E] text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          <X className="text-center" color="white" />
        </button>

        <form
          onSubmit={handleSubmit}
          className="mt-[820px] flex w-[60%] flex-col p-6"
        >
          <h2 className="text-start text-xl font-semibold">
            Update Artist Info
          </h2>
          <div className="relative mt-4 rounded-lg bg-[#181818] p-4 pb-10 shadow-md">
            <UpdateProfilePic
              previewUrl={artistImageUrl}
              onFileSelect={(file, localPreview) => {
                setArtistImageFile(file);
                setArtistImageUrl(localPreview);
              }}
            />

            <p className="mt-6">Artist Name</p>
            <input
              className="mt-4 w-full rounded-[6px] bg-[#1E1E1E] p-[14px] text-[#797979]"
              placeholder="Enter name"
              type="text"
              value={artistName}
              onChange={(e) => setArtistName(e.target.value)}
            />

            <p className="mt-6">Profile Banner Image</p>
            <BannerImage
              previewUrl={bannerImageUrl}
              onFileSelect={(file, localPreview) => {
                setBannerImageFile(file);
                setBannerImageUrl(localPreview);
              }}
            />

            <p className="mt-6">Bio</p>
            <textarea
              className="mt-4 w-full rounded-[6px] bg-[#1E1E1E] p-[14px] text-[#797979]"
              rows={4}
              placeholder="Share your artist story with us!"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />

            <p className="mt-4">Streaming Links </p>
            <p className="text-[#868B9F]">Enter your streaming profile links</p>
            <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-4">
              <div className="flex items-center gap-x-2 rounded-sm border p-2.5">
                <p className="h-[16px] w-[16px] text-[#1ED760]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-spotify"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0a8 8 0 1 0 0 16A8 
                      8 0 0 0 8 0m3.669 11.538a.5.5 
                      0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 
                      0 0 1-.222-.973c3.048-.696 
                      5.662-.397 7.77.892a.5.5 
                      0 0 1 .166.686m.979-2.178a.624.624 
                      0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 
                      0 0 1-.362-1.194c2.905-.881 
                      6.517-.454 8.986 1.063a.624.624 
                      0 0 1 .206.858m.084-2.268C10.154 
                      5.56 5.9 5.419 3.438 6.166a.748.748 
                      0 1 1-.434-1.432c2.825-.857 7.523-.692 
                      10.492 1.07a.747.747 0 1 1-.764 
                      1.288"
                    />
                  </svg>
                </p>
                <input
                  className="w-full bg-transparent focus:outline-none"
                  placeholder="Spotify"
                  type="text"
                  value={spotifyUrl}
                  onChange={(e) => setSpotifyUrl(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-x-2 rounded-sm border p-2.5">
                <p className="h-[16px] w-[16px] rounded-full">
                  <img
                    src="/images/shazam.png"
                    alt="shazam"
                    className="h-full w-full object-cover"
                  />
                </p>
                <input
                  className="w-full bg-transparent focus:outline-none"
                  placeholder="Deezer or Shazam"
                  type="text"
                  value={deezerUrl}
                  onChange={(e) => setDeezerUrl(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-x-2 rounded-sm border p-2.5">
                <p className="h-[16px] w-[16px] rounded-full">
                  <img src="/images/youtube_music.png" alt="youtube_music" />
                </p>
                <input
                  className="w-full bg-transparent focus:outline-none"
                  placeholder="Youtube Music"
                  type="text"
                  value={youtubeMusicUrl}
                  onChange={(e) => setYoutubeMusicUrl(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-x-2 rounded-sm border p-2.5">
                <p className="h-[16px] w-[16px] rounded-full">
                  <img src="/images/grooveshark.png" alt="grooveshark" />
                </p>
                <input
                  className="w-full bg-transparent focus:outline-none"
                  // placeholder="Audiomack or Grooveshark"
                  placeholder="Grooveshark"
                  type="text"
                  value={audiomackUrl}
                  onChange={(e) => setAudiomackUrl(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-x-2 rounded-sm border p-2.5">
                <p className="h-[16px] w-[16px] rounded-full">
                  <img src="/images/sound_cloud.png" alt="sound_cloud" />
                </p>
                <input
                  className="w-full bg-transparent focus:outline-none"
                  placeholder="SoundCloud"
                  type="text"
                  value={soundcloudUrl}
                  onChange={(e) => setSoundcloudUrl(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-x-2 rounded-sm border p-2.5">
                <p className="h-[16px] w-[16px] rounded-full">
                  <img src="/images/apple_music.png" alt="apple_music" />
                </p>
                <input
                  className="w-full bg-transparent focus:outline-none"
                  placeholder="Apple Music"
                  type="text"
                  value={appleMusicUrl}
                  onChange={(e) => setAppleMusicUrl(e.target.value)}
                />
              </div>
            </div>

            <p className="mt-16">
              <input type="checkbox" />{" "}
              <span className="ms-1.5">
                I have read and agree to the terms of the{" "}
              </span>{" "}
              <span className="text-primary"> Euterpe Agreement</span>
            </p>

            <Button
              className="mt-10 h-[44px] w-full p-[14px]"
              disabled={isSaving}
            >
              {isSaving ? "Saving..." : "Update"}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
