import {
  FileUploader,
  FileImagePreview,
  FileInput,
} from "@/components/ui/file-upload";
import { FormControl } from "@/components/ui/form";
import { Upload } from "lucide-react";
import { ControllerRenderProps } from "react-hook-form";

interface CoverImageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: ControllerRenderProps<any>;
}

const dropZoneConfig = {
  accept: {
    "image/*": [".jpg", ".jpeg", ".png", ".gif"],
  },
  maxFiles: 1,
  maxSize: 1024 * 1024 * 4,
  multiple: false,
};

export default function CoverImage({ field }: CoverImageProps) {
  return (
    <div className="flex md:gap-6 gap-4">
      <FormControl>
        <FileUploader
          value={field.value}
          onValueChange={field.onChange}
          dropzoneOptions={dropZoneConfig}
          className="relative flex-1 block max-w-[200px]"
          reSelect
        >
          <FileInput
            id="fileInput"
            className="relative h-full w-full aspect-square rounded-[6px] border border-dashed border-[#B8FF5B]/10 bg-[#1E1E1E]"
          >
            <div className="flex h-full w-full flex-col items-center justify-center gap-2.5 px-[20px] py-[14px]">
              <Upload className="size-5 text-[#868B9F]" />

              <p className="text-xs font-medium text-primary">
                Select an image
              </p>
              <p className="text-nowrap text-[10px] md:text-xs font-medium text-[#868B9F]">
                Or drag image here to upload
              </p>
            </div>
          </FileInput>
          <FileImagePreview
            file={field.value?.[0]}
            fallbackUrl={null}
            index={0}
            className="overflow-hidden rounded-[6px]"
          />
        </FileUploader>
      </FormControl>
      <div className="flex flex-col gap-[13px] flex-1">
        <h3 className="text-xs font-semibold tracking-[-0.04em]">
          Optimal Characteristics
        </h3>
        <ul className="flex flex-col gap-2.5 text-xs font-medium tracking-[-0.04em] text-[#868B9F]">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
              className="mr-2 inline-block"
            >
              <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
            </svg>
            .jpg, .jpeg or .png file extensions
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
              className="mr-2 inline-block"
            >
              <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
            </svg>
            Perfect square
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
              className="mr-2 inline-block"
            >
              <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
            </svg>
            3000 x 3000 pixels resolution
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
              className="mr-2 inline-block"
            >
              <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
            </svg>
            Maximum file size: 4MB
          </li>
        </ul>
      </div>
    </div>
  );
}
