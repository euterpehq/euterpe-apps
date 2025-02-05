import {
  FileUploader,
  FileImagePreview,
  FileInput,
} from "@/components/ui/file-upload";
import { FormControl } from "@/components/ui/form";
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
  // const [imagePreview, setImagePreview] = useState<string | null>(null);

  // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     const previewUrl = URL.createObjectURL(file);
  //     setImagePreview(previewUrl);
  //     // onFileSelect(file);
  //   }
  // };

  return (
    <div className="flex gap-6">
      <FormControl>
        <FileUploader
          value={field.value}
          onValueChange={field.onChange}
          dropzoneOptions={dropZoneConfig}
          className="relative h-[200px] w-[200px]"
          reSelect
        >
          <FileInput
            id="fileInput"
            className="relative h-full w-full rounded-[6px] border border-dashed border-[#B8FF5B]/10 bg-[#1E1E1E]"
          >
            <div className="flex h-full w-full flex-col items-center justify-center gap-2.5 px-[20px] py-[14px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Upload">
                  <path
                    id="Icon"
                    d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5M14.1667 6.66667L10 2.5M10 2.5L5.83333 6.66667M10 2.5V12.5"
                    stroke="#868B9F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>

              <p className="text-xs font-medium text-primary">
                Select an image
              </p>
              <p className="text-nowrap text-xs font-medium text-[#868B9F]">
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
      <div className="flex flex-col gap-[13px]">
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
