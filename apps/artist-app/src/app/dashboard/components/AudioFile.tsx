import React, { useState, useRef } from "react";
import { X } from "lucide-react";

interface AudioFileProps {
  onFileSelect: (file: File | null) => void;
}

export default function AudioFile({ onFileSelect }: AudioFileProps) {
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Allowed audio formats
  const allowedFormats = [
    "audio/mpeg", // MP3
    "audio/wav", // WAV
    "audio/mp4", // MP4 (audio)
    "audio/x-m4a", // M4A
    "audio/flac", // FLAC
    "audio/aiff", // AIFF
    "audio/x-ms-wma", // WMA
  ];

  const handleAudioUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (allowedFormats.includes(file.type)) {
      const previewUrl = URL.createObjectURL(file);
      setAudioSrc(previewUrl);
      onFileSelect(file);
    } else {
      alert(
        "Unsupported file format. Please upload a valid audio file (MP3, WAV, M4A, FLAC, AIFF, or WMA).",
      );
      event.target.value = "";
    }
  };

  const handleRemoveAudio = () => {
    setAudioSrc(null);
    onFileSelect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      {audioSrc && (
        <button className="float-right my-1.5" onClick={handleRemoveAudio}>
          <X />
        </button>
      )}
      <div className="mt-4 flex w-full justify-start gap-x-16">
        <div className="h-[200px] w-full">
          <label
            htmlFor="audio-upload"
            className="flex h-[200px] w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-[#B8FF5B1A] bg-[#1E1E1E] hover:bg-muted/25"
          >
            {audioSrc ? (
              <audio
                controls
                className="h-full w-full rounded-lg"
                src={audioSrc}
              />
            ) : (
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <svg
                  className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
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
              id="audio-upload"
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
