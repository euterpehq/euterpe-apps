// AudioFile.tsx
import React, { useState, useEffect, useRef, useMemo } from "react";
import { X } from "lucide-react";

interface AudioFileProps {
  trackIndex: number;
  file: File | null;
  previewUrl?: string | null;
  onFileSelect: (file: File | null) => void;
}

export default function AudioFile({
  trackIndex,
  file,
  previewUrl,
  onFileSelect,
}: AudioFileProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [objectUrl, setObjectUrl] = useState<string | null>(null);

  // Allowed audio formats
  const allowedFormats = [
    "audio/mpeg",
    "audio/wav",
    "audio/mp4",
    "audio/x-m4a",
    "audio/flac",
    "audio/aiff",
    "audio/x-ms-wma",
  ];

  /**
   * We use useMemo here so that we only create the object URL
   * when `file` actually changes, not on every render.
   */
  useEffect(() => {
    let url: string | null = null;

    if (!previewUrl && file) {
      url = URL.createObjectURL(file);
      setObjectUrl(url);
    }

    // Cleanup when component unmounts or `file` changes
    return () => {
      if (url) {
        URL.revokeObjectURL(url);
      }
    };
  }, [file, previewUrl]);

  const displayPreviewUrl = previewUrl || objectUrl;

  const handleAudioUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFile = event.target.files?.[0] || null;
    if (newFile) {
      if (allowedFormats.includes(newFile.type)) {
        onFileSelect(newFile);
      } else {
        alert(
          "Unsupported format. Please upload MP3, WAV, M4A, FLAC, AIFF, or WMA.",
        );
        event.target.value = "";
        onFileSelect(null);
      }
    } else {
      onFileSelect(null);
    }
  };

  const handleRemoveAudio = () => {
    onFileSelect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      {displayPreviewUrl && (
        <button className="float-right my-1.5" onClick={handleRemoveAudio}>
          <X />
        </button>
      )}

      <div className="mt-4 flex w-full justify-start gap-x-16">
        <div className="h-[200px] w-full">
          <label
            htmlFor={`audio-upload-${trackIndex}`} // unique ID
            className="flex h-[200px] w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-[#B8FF5B1A] bg-[#1E1E1E] hover:bg-muted/25"
          >
            {displayPreviewUrl ? (
              <audio
                controls
                className="h-full w-full rounded-lg"
                src={displayPreviewUrl}
              />
            ) : (
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <svg
                  className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 
                      0 0 0 0-6h-.025A5.56 5.56 
                      0 0 0 16 6.5A5.5 5.5 0 0 0 5.207 5.021
                      C5.137 5.017 5.071 5 5 
                      5a4 4 0 0 0 0 8h2.167M10 
                      15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-center text-sm text-primary">
                  Select an audio file
                </p>
                <p className="text-center text-xs text-[#868B9F]">
                  Or drag file here to upload
                </p>
              </div>
            )}
            <input
              id={`audio-upload-${trackIndex}`}
              type="file"
              accept={allowedFormats.join(", ")}
              className="hidden"
              ref={fileInputRef}
              onChange={handleAudioUpload}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
