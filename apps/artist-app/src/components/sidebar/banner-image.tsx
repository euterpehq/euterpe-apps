import React, { useState, useEffect } from "react";

interface BannerImageProps {
  previewUrl: string | null;

  onFileSelect: (file: File, localPreview: string) => void;
}

export default function BannerImage({
  previewUrl,
  onFileSelect,
}: BannerImageProps) {
  const [localPreview, setLocalPreview] = useState<string | null>(previewUrl);
  useEffect(() => {
    setLocalPreview(previewUrl);
  }, [previewUrl]);

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    setLocalPreview(objectUrl);

    onFileSelect(file, objectUrl);
  }

  return (
    <div className="mt-4 flex w-full justify-start gap-x-16">
      <div className="h-[200px] w-full">
        <label
          htmlFor="banner-image"
          className="flex h-[200px] w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-[#B8FF5B1A] bg-[#1E1E1E] hover:bg-muted/25"
        >
          {localPreview ? (
            <img
              src={localPreview}
              alt="Selected preview"
              className="h-full w-full rounded-lg object-cover"
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
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16
                    6.5A5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 
                    5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8
                    8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-center text-sm text-primary">
                Select an Image
              </p>
              <p className="text-center text-xs text-[#868B9F]">
                Or drag image here to upload
              </p>
            </div>
          )}
          <input
            id="banner-image"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
      </div>
    </div>
  );
}
