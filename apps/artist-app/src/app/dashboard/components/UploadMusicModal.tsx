"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { getCurrentUser } from "@/lib/queries/users";
import { createAlbum } from "@/lib/actions/albums";
import { createTrack } from "@/lib/actions/tracks";
import { uploadImageToBucket } from "@/lib/actions/storage";

import CoverImage from "./CoverImage";
import AudioFile from "./AudioFile";

import { LuLoader } from "react-icons/lu";
// or whichever spinner icon you want (e.g. lucide-react's Loader)

type CategoryType = "single" | "ep" | "album";

interface UploadMusicModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

interface TrackData {
  trackNumber: number;
  trackTitle: string;
  trackFile: File | null;
}

export default function UploadMusicModal({
  isModalOpen,
  closeModal,
}: UploadMusicModalProps) {
  const router = useRouter();

  // Album-level fields
  const [categoryType, setCategoryType] = useState<CategoryType | "">("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [subGenre, setSubGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [coverFile, setCoverFile] = useState<File | null>(null);

  // Tracks
  const [tracks, setTracks] = useState<TrackData[]>([
    { trackNumber: 1, trackTitle: "", trackFile: null },
  ]);

  // User
  const [userId, setUserId] = useState<string | null>(null);

  // **New**: isUploading controls spinner
  const [isUploading, setIsUploading] = useState(false);

  // Load user
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

  // Modal scroll lock
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  // Early return if not open
  if (!isModalOpen) return null;

  // Add track
  const handleAddTrack = () => {
    const highestTrackNum = tracks.reduce(
      (acc, track) => Math.max(acc, track.trackNumber),
      0,
    );
    setTracks((prevTracks) => [
      ...prevTracks,
      { trackNumber: highestTrackNum + 1, trackTitle: "", trackFile: null },
    ]);
  };

  // Update track
  const handleTrackChange = (
    index: number,
    field: keyof TrackData,
    value: string | number | File | null,
  ) => {
    setTracks((prevTracks) =>
      prevTracks.map((track, i) =>
        i === index ? { ...track, [field]: value } : track,
      ),
    );
  };

  // Remove track
  const handleRemoveTrack = (index: number) => {
    setTracks((prevTracks) => prevTracks.filter((_, i) => i !== index));
  };

  // Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userId) {
      toast.error("No user ID found. Can't create album.");
      return;
    }

    setIsUploading(true);

    try {
      // 1) Upload cover
      let finalCoverUrl = "";
      if (coverFile) {
        const uploadedCover = await uploadImageToBucket(
          coverFile,
          userId,
          "album-covers",
        );
        if (uploadedCover) finalCoverUrl = uploadedCover;
      }

      // 2) Create album
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

      const albumId = albumData.id;

      // 3) Upload and create tracks
      const trackList = [];
      for (const track of tracks) {
        let finalTrackUrl = "";
        if (track.trackFile) {
          const uploadedTrackAudio = await uploadImageToBucket(
            track.trackFile,
            userId,
            "track-audio",
          );
          if (uploadedTrackAudio) finalTrackUrl = uploadedTrackAudio;
        }

        const { data: trackData, error: trackError } = await createTrack({
          album_id: albumId,
          track_number: track.trackNumber,
          track_title: track.trackTitle,
          audio_file_url: finalTrackUrl || undefined,
        });
        if (trackError) throw new Error(trackError.message);
        trackList.push(trackData);
      }

      const queryParams = new URLSearchParams({
        albumId,
        title,
        category_type: categoryType,
        genre,
        sub_genres: JSON.stringify(subGenre ? [subGenre] : []), // Convert array to string
        release_date: releaseDate || "",
        cover_image_url: finalCoverUrl || "",
        tracks: JSON.stringify(trackList), // Convert track list to string
      });

      router.push(`/upload/success?${queryParams.toString()}`);
    } catch (err) {
      console.error("Upload error:", err);
      toast.error("Error uploading music");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-70 backdrop-blur-sm">
      <button
        className="absolute left-4 top-10 flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#1E1E1E] text-gray-500 hover:text-gray-700"
        onClick={closeModal}
        disabled={isUploading}
      >
        <X className="m-auto text-center" color="white" />
      </button>

      <form
        onSubmit={handleSubmit}
        className="mt-[720px] flex w-[60%] flex-col p-6"
      >
        <h2 className="text-start text-xl font-semibold">Upload Music</h2>
        <div className="relative mt-4 rounded-lg bg-[#181818] p-4 pb-10 shadow-md">
          {/* Category */}
          <p className="mt-4">Category Type</p>
          <select
            className="mt-4 w-full rounded-[6px] bg-[#1E1E1E] p-[14px] text-[#797979]"
            value={categoryType}
            onChange={(e) => setCategoryType(e.target.value as CategoryType)}
            disabled={isUploading}
            required
          >
            <option value="">Select</option>
            <option value="single">Single</option>
            <option value="ep">EP</option>
            <option value="album">Album</option>
          </select>

          {/* Title */}
          <p className="mt-6">Album Title</p>
          <input
            className="mt-4 w-full rounded-[6px] bg-[#1E1E1E] p-[14px] text-[#797979]"
            placeholder="Enter name"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isUploading}
            required
          />

          {/* Genre */}
          <p className="mt-4">Genre</p>
          <select
            className="mt-4 w-full rounded-[6px] bg-[#1E1E1E] p-[14px] text-[#797979]"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            disabled={isUploading}
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

          {/* Sub-genre */}
          <p className="mt-4">
            Sub-Genre <span className="text-[#868B9F]">(optional)</span>
          </p>
          <input
            className="mt-4 w-full rounded-[6px] bg-[#1E1E1E] p-[14px] text-[#797979]"
            placeholder="If you have a sub-genre, e.g. Afro-Pop"
            value={subGenre}
            onChange={(e) => setSubGenre(e.target.value)}
            disabled={isUploading}
          />

          {/* Release Date */}
          <p className="mt-6">Release Date</p>
          <input
            className="mt-4 w-full rounded-[6px] bg-[#1E1E1E] p-[14px] text-[#797979]"
            placeholder="Enter date"
            type="date"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            disabled={isUploading}
          />

          {/* Cover */}
          <CoverImage
            onFileSelect={(file) => setCoverFile(file)}
            // disabled={isUploading}
          />

          {/* Tracks */}
          {tracks.map((track, index) => (
            <div key={index} className="mt-6 border-b border-gray-600 pb-6">
              <div className="flex items-center justify-between">
                <p className="font-semibold">
                  Track {track.trackNumber} Audio File{" "}
                  <span className="text-[#868B9F]">(WAV, MP3, etc.)</span>
                </p>
                {index !== 0 && (
                  <button
                    type="button"
                    className="flex h-[34px] w-[34px] items-center justify-center text-red-500"
                    onClick={() => handleRemoveTrack(index)}
                    disabled={isUploading}
                  >
                    <X />
                  </button>
                )}
              </div>
              <AudioFile
                trackIndex={index}
                file={track.trackFile}
                onFileSelect={(file) =>
                  handleTrackChange(index, "trackFile", file)
                }
                // disabled={isUploading}
              />
              <select
                className="mt-4 w-full rounded-[6px] bg-[#1E1E1E] p-[14px] text-[#797979]"
                value={track.trackNumber}
                onChange={(e) =>
                  handleTrackChange(
                    index,
                    "trackNumber",
                    Number(e.target.value),
                  )
                }
                disabled={isUploading}
              >
                <option value="1">Track 1</option>
                <option value="2">Track 2</option>
                <option value="3">Track 3</option>
                {/* More if needed */}
              </select>

              <input
                className="mt-4 w-full rounded-[6px] bg-[#1E1E1E] p-[14px] text-[#797979]"
                placeholder="Track Title"
                type="text"
                value={track.trackTitle}
                onChange={(e) =>
                  handleTrackChange(index, "trackTitle", e.target.value)
                }
                disabled={isUploading}
                required
              />
            </div>
          ))}

          {/* Add track button */}
          <Button
            type="button"
            className="float-right mt-10 h-[34px] w-[100px] rounded-[8px] p-[15px] px-4 text-[14px] text-black"
            onClick={handleAddTrack}
            disabled={isUploading}
          >
            Add Track
          </Button>

          <p className="mt-16">
            <input type="checkbox" required disabled={isUploading} />{" "}
            <span className="ms-1.5">
              I have read and agree to the terms of the
            </span>{" "}
            <span className="text-primary"> Euterpe Agreement</span>
          </p>

          {/* Final submit button with spinner */}
          <Button
            type="submit"
            className="mt-10 h-[44px] w-full p-[14px]"
            disabled={!userId || isUploading}
          >
            {isUploading ? (
              <span className="inline-flex items-center gap-2">
                <LuLoader className="h-4 w-4 animate-spin" />
                Uploading...
              </span>
            ) : userId ? (
              "Upload Music"
            ) : (
              "No user ID"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
