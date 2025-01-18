import { useState } from "react";

interface CoverImageProps {
  onFileSelect: (file: File | null) => void;
}

export default function CoverImage({ onFileSelect }: CoverImageProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      onFileSelect(file);
    }
  };

  return (
    <>
      <p className="mt-6">Cover Image</p>
      <div className="mt-4 flex w-full justify-start gap-x-16">
        <div className="h-[200px] w-[400px]">
          <label
            htmlFor="dropzone-file"
            className="flex h-[200px] w-[400px] cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-[#B8FF5B1A] bg-[#1E1E1E] hover:bg-muted/25"
          >
            {imagePreview ? (
              <img
                src={imagePreview}
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
                    d="M13 13h3a3 3 
                      0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5A5.5 5.5 
                      0 0 0 5.207 5.021C5.137 5.017 5.071 5 
                      5 5a4 4 0 0 0 0 8h2.167M10 
                      15V6m0 0L8 8m2-2 2 2"
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
              id="dropzone-file"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>
        <div>
          <p className="text-xl">Optimal Characteristics</p>
          <ul className="ms-5 list-disc text-[#868B9F]">
            <li>.jpg, .png, or .gif file extensions</li>
            <li>Perfect square</li>
            <li>3000 x 3000 pixels resolution</li>
          </ul>
        </div>
      </div>
    </>
  );
}
