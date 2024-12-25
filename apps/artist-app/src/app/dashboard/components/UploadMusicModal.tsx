"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import StreamingLinks from "./StreamingLinks";
import { getCurrentUser } from "@/lib/queries/users";
import { createAlbum } from "@/lib/actions/albums";
import { createTrack } from "@/lib/actions/tracks";
import { uploadImageToBucket } from "@/lib/actions/storage";

import CoverImage from "./CoverImage";
import AudioFile from "./AudioFile";

type CategoryType = "single" | "ep" | "album";

interface UploadMusicModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export default function UploadMusicModal({
  isModalOpen,
  closeModal,
}: UploadMusicModalProps) {
  const router = useRouter();

  const [categoryType, setCategoryType] = useState<CategoryType | "">("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [subGenre, setSubGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [coverFile, setCoverFile] = useState<File | null>(null);

  const [trackAudioFile, setTrackAudioFile] = useState<File | null>(null);
  const [trackNumber, setTrackNumber] = useState<number>(1);
  const [trackTitle, setTrackTitle] = useState("");

  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    async function loadUser() {
      const user = await getCurrentUser();
      if (!user?.id) {
        toast.error("No user found. Please log in first.");
        return;
      }
      setUserId(user.id);
    }
    loadUser();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userId) {
      toast.error("No user ID found. Can't create album.");
      return;
    }

    try {
      let finalCoverUrl = "";
      if (coverFile) {
        const uploadedCover = await uploadImageToBucket(
          coverFile,
          userId,
          "album-covers",
        );
        if (uploadedCover) {
          finalCoverUrl = uploadedCover;
        }
      }

      const { data: albumData, error: albumError } = await createAlbum({
        artist_id: userId,
        category_type: categoryType as CategoryType,
        title,
        genre,
        sub_genres: subGenre ? [subGenre] : [],
        release_date: releaseDate || undefined,
        cover_image_url: finalCoverUrl || undefined,
      });

      if (albumError || !albumData) {
        throw new Error(albumError?.message || "Failed to create album");
      }

      const albumId = albumData.id as string;

      let finalTrackUrl = "";
      if (trackAudioFile) {
        const uploadedTrackAudio = await uploadImageToBucket(
          trackAudioFile,
          userId,
          "track-audio",
        );
        if (uploadedTrackAudio) {
          finalTrackUrl = uploadedTrackAudio;
        }
      }

      const { data: trackData, error: trackError } = await createTrack({
        album_id: albumId,
        track_number: trackNumber,
        track_title: trackTitle,
        audio_file_url: finalTrackUrl || undefined,
      });

      if (trackError || !trackData) {
        throw new Error(trackError?.message || "Failed to create track");
      }

      toast.success("Music uploaded successfully!");

      closeModal();

      router.refresh();
    } catch (err) {
      console.error("Upload error:", err);
      toast.error("Error uploading music");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-70 backdrop-blur-sm">
      <button
        className="absolute left-4 top-10 flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#1E1E1E] text-gray-500 hover:text-gray-700"
        onClick={closeModal}
      >
        <X className="m-auto text-center" color="white" />
      </button>

      <form
        onSubmit={handleSubmit}
        className="mt-[720px] flex w-[60%] flex-col p-6"
      >
        <h2 className="text-start text-xl font-semibold">Upload Music</h2>
        <div className="relative mt-4 rounded-lg bg-[#181818] p-4 pb-10 shadow-md">
          <p className="mt-4">Category Type</p>
          <select
            className="mt-4 w-full rounded-[6px] bg-[#1E1E1E] p-[14px] text-[#797979]"
            value={categoryType}
            onChange={(e) => setCategoryType(e.target.value as CategoryType)}
            required
          >
            <option value="">Select</option>
            <option value="single">Single</option>
            <option value="ep">EP</option>
            <option value="album">Album</option>
          </select>

          <p className="mt-6">Album Title</p>
          <input
            className="mt-4 w-full rounded-[6px] bg-[#1E1E1E] p-[14px] text-[#797979]"
            placeholder="Enter name"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <p className="mt-4">Genre</p>
          <select
            className="mt-4 w-full rounded-[6px] bg-[#1E1E1E] p-[14px] text-[#797979]"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="AfroBeats">AfroBeats</option>
            <option value="Pop">Pop</option>
            <option value="Rock">Rock</option>
            <option value="Hip Hop">Hip Hop</option>
            <option value="Country">Country</option>
            <option value="Electronic">Electronic</option>
            <option value="Jazz">Jazz</option>
            <option value="Reggae">Reggae</option>
          </select>

          <p className="mt-4">
            Sub-Genre <span className="text-[#868B9F]">(optional)</span>
          </p>
          <input
            className="mt-4 w-full rounded-[6px] bg-[#1E1E1E] p-[14px] text-[#797979]"
            placeholder="If you have a sub-genre, e.g. Afro-Pop"
            value={subGenre}
            onChange={(e) => setSubGenre(e.target.value)}
          />
          <p className="mt-6">Release Date</p>
          <input
            className="mt-4 w-full rounded-[6px] bg-[#1E1E1E] p-[14px] text-[#797979]"
            placeholder="Enter date"
            type="date"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />

          <CoverImage onFileSelect={(file) => setCoverFile(file)} />

          <p className="mt-6">
            Track 1 Audio File{" "}
            <span className="text-[#868B9F]">(WAV, MP3, etc.)</span>
          </p>
          <AudioFile onFileSelect={(file) => setTrackAudioFile(file)} />

          <select
            className="mt-4 w-full rounded-[6px] bg-[#1E1E1E] p-[14px] text-[#797979]"
            value={trackNumber}
            onChange={(e) => setTrackNumber(Number(e.target.value))}
          >
            <option value="1">Track 1</option>
            <option value="2">Track 2</option>
            <option value="3">Track 3</option>
          </select>

          <input
            className="mt-4 w-full rounded-[6px] bg-[#1E1E1E] p-[14px] text-[#797979]"
            placeholder="Track Title"
            type="text"
            value={trackTitle}
            onChange={(e) => setTrackTitle(e.target.value)}
            required
          />

          <Button
            type="button"
            className="float-right mt-10 h-[34px] w-[100px] rounded-[8px] p-[15px] px-4 text-[14px] text-black"
            onClick={() => {
              toast("Adding more tracks is not yet implemented!");
            }}
          >
            Add Track
          </Button>

          <p className="mt-16">
            <input type="checkbox" required />{" "}
            <span className="ms-1.5">
              I have read and agree to the terms of the
            </span>{" "}
            <span className="text-primary"> Euterpe Agreement</span>
          </p>
          <Button
            type="submit"
            className="mt-10 h-[44px] w-full p-[14px]"
            disabled={!userId}
          >
            {userId ? "Upload Music" : "No user ID"}
          </Button>
        </div>
      </form>
    </div>
  );
}
