import React, { useState, useRef } from "react";
import { X } from "lucide-react";

export default function AudioFile() {
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Create a ref for the file input

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
    if (file) {
      // Check if the file is one of the allowed formats
      if (allowedFormats.includes(file.type)) {
        const previewUrl = URL.createObjectURL(file);
        setAudioSrc(previewUrl); // Set the preview URL for the audio
      } else {
        alert(
          "Unsupported file format. Please upload a valid audio file (MP3, WAV, M4A, FLAC, AIFF, or WMA)."
        );
      }
    }
  };

  const handleRemoveAudio = () => {
    setAudioSrc(null); // Reset the audio preview
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the file input value
    }
  };

  return (
    <div>
      {audioSrc && (
        <button
          className="float-right my-1.5"
          onClick={handleRemoveAudio}
          disabled={!audioSrc}
        >
          <X />
        </button>
      )}
      <div className="flex justify-start gap-x-16 mt-4 w-full">
        <div className="w-full h-[200px]">
          <label
            htmlFor="audio-upload"
            className="flex flex-col items-center justify-center w-full h-[200px] border border-dashed border-[#B8FF5B1A] rounded-lg cursor-pointer bg-[#1E1E1E] hover:bg-muted/25"
          >
            {audioSrc ? (
              <audio
                controls
                className="w-full h-full rounded-lg"
                src={audioSrc}
              />
            ) : (
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
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
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="text-center mb-2 text-sm text-primary">
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
              accept={allowedFormats.join(", ")} // Dynamically include the allowed formats
              className="hidden"
              ref={fileInputRef} // Attach the ref to the input
              onChange={handleAudioUpload}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
