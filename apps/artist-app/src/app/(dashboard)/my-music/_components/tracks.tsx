import { Button } from "@/components/ui/button";
import { TagsInput } from "@/components/ui/extension/tags-input";
import { FileImagePreview, FileInput, FileUploader } from "@/components/ui/file-upload";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useCallback, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

const dropZoneConfigAudio = {
  accept: {
    "audio/*": [".mp3", ".wav", ".m4a", ".flac", ".aiff", ".wma"],
  },
  maxFiles: 1,
  maxSize: 1024 * 1024 * 50,
  multiple: false,
};

const TrackForm: React.FC<{ index: number; remove: (pos: number) => void }> = ({
  index,
  remove,
}) => {
  const { control } = useFormContext();
  return (
    <div className="flex flex-col gap-[14px]">
      <FormField
        control={control}
        name={`tracks.${index}.audio_file`}
        render={({ field }) => (
          <FormItem>
            <div className="flex items-center justify-between">
              <FormLabel>
                Track {index + 1} Audio File{" "}
                <span className="font-normal text-[#868B9F]">
                  (WAV, MP3, M4A, FLAC, AIFF, WMA)
                </span>
              </FormLabel>
              {index !== 0 && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                  onClick={() => remove(index)}
                >
                  <path
                    d="M12 4L4 12M4 4L12 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>

            <FormControl>
              <FileUploader
                value={field.value}
                onValueChange={field.onChange}
                dropzoneOptions={dropZoneConfigAudio}
                className="relative h-[140px] w-full"
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
                      Select an audio file
                    </p>
                    <p className="text-nowrap text-xs font-medium text-[#868B9F]">
                      Or drag audio file here to upload
                    </p>
                  </div>
                </FileInput>
                <FileImagePreview
                  file={field.value?.[0]}
                  // fallbackUrl={artist.banner_image_url}
                  fallbackUrl={null}
                  index={0}
                  className="overflow-hidden rounded-[6px]"
                />
              </FileUploader>
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name={`tracks.${index}.track_number`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder="Track number" type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name={`tracks.${index}.track_title`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder="Track title" type="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name={`tracks.${index}.featured_artists`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <TagsInput
                value={field.value ?? []}
                onValueChange={field.onChange}
                placeholder="Featured artists"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

const MinimizedTrackView: React.FC<{
  title: string;
  remove: () => void;
  edit: () => void;
}> = ({ title, remove, edit }) => {
  const { formState } = useFormContext();
  return (
    <div className="flex items-center justify-between rounded-lg border-[0.5px] border-white/30 px-3 py-2">
      <div>
        <p className="text-sm">{title}</p>
      </div>

      <div className="flex items-center">
        <button
          type="button"
          className="flex size-8 items-center justify-center rounded duration-300 hover:bg-white/5"
          onClick={edit}
        >
          <Pencil1Icon className="size-4" />
        </button>
        <button
          type="button"
          className="flex size-8 items-center justify-center rounded duration-300 hover:bg-white/5"
          onClick={remove}
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
};

export const Tracks = () => {
  const { control } = useFormContext();

  const [activeTrack, setActiveTrack] = useState(0);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tracks",
  });

  const handleRemove = useCallback(
    (pos: number) => {
      if (activeTrack !== 0) {
        setActiveTrack(activeTrack - 1);
      }
      
      remove(pos);
    },
    [activeTrack, remove],
  );

  return (
    <div>
      <div className="space-y-6">
        <AnimatePresence initial={false}>
          {(fields as { id: string; track_title: string }[]).map(
            (field, index) => {
              return activeTrack === index ? (
                <motion.div
                  key={field.id}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-[14px] overflow-hidden"
                >
                  <TrackForm index={index} remove={handleRemove} />
                </motion.div>
              ) : (
                <motion.div
                  key={field.id}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-[14px] overflow-hidden"
                >
                  <MinimizedTrackView
                    remove={() => handleRemove(index)}
                    title={field.track_title}
                    edit={() => setActiveTrack(index)}
                  />
                </motion.div>
              );
            },
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-end">
        <Button
          type="button"
          className="mt-5 rounded-[8px] border-[0.5px] border-[#313131] px-3 py-2.5 text-[#020403]"
          onClick={() => {
            append({
              track_image: null,
            });

            setActiveTrack((a) => a + 1);
          }}
        >
          Add Track
        </Button>
      </div>
    </div>
  );
};
