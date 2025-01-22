"use client";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  FileInput,
  FileUploader,
  FileImagePreview,
} from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TagsInput } from "@/components/ui/extension/tags-input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { createAlbum } from "@/lib/actions/album/create-album";
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import { useFieldArray } from "react-hook-form";
import ServerActionResponseToast from "@/components/server-action-response-toast";
import { LuLoader } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";

export const formSchema = z.object({
  category: z.string().optional(),
  album_title: z.string().optional(),
  genre: z.string().optional(),
  sub_genres: z.string().array().optional(),
  release_date: z.coerce.date().optional(),
  cover_image: z
    .array(
      z.instanceof(File).refine((file) => file.size < 4 * 1024 * 1024, {
        message: "File size must be less than 4MB",
      }),
    )
    .max(1, {
      message: "Maximum 1 files are allowed",
    })
    .nullable(),
  tracks: z.array(
    z.object({
      track_image: z
        .array(
          z.instanceof(File).refine((file) => file.size < 4 * 1024 * 1024, {
            message: "File size must be less than 4MB",
          }),
        )
        .max(1, {
          message: "Maximum 1 files are allowed",
        })
        .nullable(),
      track_number: z.number().optional(),
      track_title: z.string().optional(),
      featured_artists: z.string().array().optional(),
    }),
  ),
  terms: z.boolean().refine((val) => val, "Please check this box"),
});

export default function UpdateMusicForm() {
  const dropZoneConfig = {
    accept: {
      "image/*": [".jpg", ".jpeg", ".png", ".gif"],
    },
    maxFiles: 1,
    maxSize: 1024 * 1024 * 4,
    multiple: false,
  };
  const dropZoneConfigAudio = {
    accept: {
      "audio/*": [".mp3", ".wav", ".m4a", ".flac", ".aiff", ".wma"],
    },
    maxFiles: 1,
    maxSize: 1024 * 1024 * 50,
    multiple: false,
  };
  const { form, action, handleSubmitWithAction } = useHookFormAction(
    createAlbum,
    zodResolver(formSchema),
    {
      actionProps: {},
      formProps: {
        defaultValues: {
          sub_genres: [],
          tracks: [{ track_number: undefined }],
          terms: true,
        },
      },
      errorMapProps: {},
    },
  );
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "tracks",
  });

  const { isPending, result, hasSucceeded, hasErrored } = action;

  return (
    <>
      <ServerActionResponseToast
        result={result}
        showToast={hasSucceeded || hasErrored}
      />
      <Form {...form}>
        <form
          onSubmit={handleSubmitWithAction}
          className="space-y-6 rounded-[16px] bg-[#181818] p-6"
        >
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">Single</SelectItem>
                    <SelectItem value="m@google.com">EP</SelectItem>
                    <SelectItem value="m@support.com">Album</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="album_title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Album Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter name" type="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="genre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Genre</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Pop">Pop</SelectItem>
                    <SelectItem value="Rock">Rock</SelectItem>
                    <SelectItem value="Hip-Hop">Hip-Hop</SelectItem>
                    <SelectItem value="Afrobeats">Afrobeats</SelectItem>
                    <SelectItem value="Country">Country</SelectItem>
                    <SelectItem value="Electronic">Electronic</SelectItem>
                    <SelectItem value="Jazz">Jazz</SelectItem>
                    <SelectItem value="Reggae">Reggae</SelectItem>
                    <SelectItem value="R&B">R&B</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sub_genres"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sub-Genre</FormLabel>
                <FormControl>
                  <TagsInput
                    value={field.value ?? []}
                    onValueChange={field.onChange}
                    placeholder="Enter sub-genres"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="release_date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Release Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "h-10 w-full rounded-[6px] border-[0.8px] border-[#303033] bg-[#1E1E1E] p-[14px] text-xs font-medium font-normal transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-xs placeholder:text-[#797979] hover:bg-[#1E1E1E] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:placeholder:text-sm",
                          !field.value && "text-[#797979] hover:text-[#797979]",
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>MM - DD - YYYY</span>
                        )}
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-auto"
                        >
                          <path
                            d="M13.3333 1.6665V4.99984M6.66667 1.6665V4.99984M2.5 8.33317H17.5M4.16667 3.33317H15.8333C16.7538 3.33317 17.5 4.07936 17.5 4.99984V16.6665C17.5 17.587 16.7538 18.3332 15.8333 18.3332H4.16667C3.24619 18.3332 2.5 17.587 2.5 16.6665V4.99984C2.5 4.07936 3.24619 3.33317 4.16667 3.33317Z"
                            stroke="#868B9F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cover_image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cover Image</FormLabel>
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

                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <div className="space-y-6">
              <AnimatePresence initial={false}>
                {fields.map((field, index) => {
                  if (index === 0) {
                    return (
                      <div key={field.id} className="flex flex-col gap-[14px]">
                        <FormField
                          control={form.control}
                          name={`tracks.${index}.track_image`}
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
                                  {/* <FileImagePreview
                          file={field.value?.[0]}
                          fallbackUrl={artist.banner_image_url}
                          index={0}
                          className="overflow-hidden rounded-[6px]"
                        /> */}
                                </FileUploader>
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name={`tracks.${index}.track_number`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder="Track number"
                                  type=""
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name={`tracks.${index}.track_title`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder="Track title"
                                  type=""
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
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
                  }

                  return (
                    <motion.div
                      key={field.id}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-[14px] overflow-hidden"
                    >
                      <FormField
                        control={form.control}
                        name={`tracks.${index}.track_image`}
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex items-center justify-between">
                              <FormLabel>
                                More Track {index + 1} Audio File{" "}
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
                                {/* <FileImagePreview
                          file={field.value?.[0]}
                          fallbackUrl={artist.banner_image_url}
                          index={0}
                          className="overflow-hidden rounded-[6px]"
                        /> */}
                              </FileUploader>
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`tracks.${index}.track_number`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Track number"
                                type=""
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`tracks.${index}.track_title`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Track title"
                                type=""
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
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
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            <div className="flex justify-end">
              <Button
                type="button"
                className="mt-5 rounded-[8px] border-[0.5px] border-[#313131] px-3 py-2.5 text-[#020403]"
                onClick={() =>
                  append({
                    track_image: null,
                  })
                }
              >
                Add Track
              </Button>
            </div>
          </div>

          <Button
            size="lg"
            className="mt-[46px] w-full disabled:opacity-100"
            type="submit"
            disabled={isPending}
          >
            {isPending ? (
              <LuLoader className="h-3.5 w-3.5 animate-spin" />
            ) : (
              "Update"
            )}
          </Button>
        </form>
      </Form>
    </>
  );
}
