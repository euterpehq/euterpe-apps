"use client";
import { useState, useEffect } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { updateArtist } from "@/lib/actions/artist/update-artist";
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import { zfd } from "zod-form-data";
import ServerActionResponseToast from "@/components/server-action-response-toast";
import { LuLoader } from "react-icons/lu";
import { getArtist } from "@/lib/queries/artist/get-artist";

export type ArtistProps = NonNullable<
  Awaited<ReturnType<typeof getArtist>>["data"]
>;

export const formSchema = z.object({
  artist_image: z
    .array(
      z.instanceof(File).refine((file) => file.size < 4 * 1024 * 1024, {
        message: "File size must be less than 4MB",
      }),
    )
    .max(1, {
      message: "Maximum 1 files are allowed",
    })
    .nullable(),
  artist_image_url: z.string().optional(),
  artist_name: z.string().optional(),
  banner_image: z
    .array(
      z.instanceof(File).refine((file) => file.size < 4 * 1024 * 1024, {
        message: "File size must be less than 4MB",
      }),
    )
    .max(1, {
      message: "Maximum 1 files are allowed",
    })
    .nullable(),
  banner_image_url: z.string().optional(),
  bio: z.string().optional(),
  spotify: z.string().optional(),
  deezer: z.string().optional(),
  youtube: z.string().optional(),
  audiomack: z.string().optional(),
  soundcloud: z.string().optional(),
  apple: z.string().optional(),
  terms: z.boolean().refine((val) => val, "Please check this box"),
});

export default function UpdateProfileForm({ artist }: { artist: ArtistProps }) {
  const [files, setFiles] = useState<File[] | null>(null);

  const dropZoneConfig = {
    accept: {
      "image/*": [".jpg", ".jpeg", ".png", ".gif"],
    },
    maxFiles: 1,
    maxSize: 1024 * 1024 * 4,
    multiple: false,
  };
  const { form, action, handleSubmitWithAction } = useHookFormAction(
    updateArtist,
    zodResolver(formSchema),
    {
      actionProps: {},
      formProps: {
        defaultValues: {
          artist_image: null,
          artist_image_url: artist.artist_image_url ?? undefined,
          artist_name: artist.artist_name ?? undefined,
          banner_image: null,
          banner_image_url: artist.banner_image_url ?? undefined,
          bio: artist.bio ?? undefined,
          spotify: artist.spotify_url ?? undefined,
          deezer: artist.deezer_url ?? undefined,
          youtube: artist.youtube_music_url ?? undefined,
          audiomack: artist.audiomack_url ?? undefined,
          soundcloud: artist.soundcloud_url ?? undefined,
          apple: artist.apple_music_url ?? undefined,
          terms: true,
        },
      },
      errorMapProps: {},
    },
  );
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
            name="artist_image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Artist Image</FormLabel>
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
                      fallbackUrl={artist.artist_image_url}
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
            control={form.control}
            name="artist_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Artist Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter name" type="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="banner_image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile Banner Image</FormLabel>
                <FormControl>
                  <FileUploader
                    value={field.value}
                    onValueChange={field.onChange}
                    dropzoneOptions={dropZoneConfig}
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
                          Select an image
                        </p>
                        <p className="text-nowrap text-xs font-medium text-[#868B9F]">
                          Or drag image here to upload
                        </p>
                      </div>
                    </FileInput>
                    <FileImagePreview
                      file={field.value?.[0]}
                      fallbackUrl={artist.banner_image_url}
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
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Share your artist story with us!"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-2.5">
            <div className="flex h-[40px] flex-col justify-between">
              <h2 className="text-sm font-medium leading-[22.008px] tracking-[-0.04em]">
                Streaming Profile Links
              </h2>
              <p className="text-[11px] font-medium text-[#868B9F]">
                Paste your streaming profile links to get discovered.
              </p>
            </div>
            <div className="flex flex-col gap-[14px]">
              <FormField
                control={form.control}
                name="spotify"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          className="peer ps-[44px]"
                          placeholder="Spotify"
                          type="text"
                          {...field}
                        />
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center pe-[10px] ps-[14px] peer-disabled:opacity-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <circle cx="9" cy="9" r="7" fill="#1ED760" />
                            <path
                              d="M10.6605 10.8743C10.5724 11.0008 10.3844 11.0362 10.2376 10.9603C9.08025 10.3531 7.62919 10.2165 5.91377 10.5505C5.74928 10.5808 5.58479 10.4948 5.54954 10.3531C5.51429 10.2114 5.61416 10.0697 5.77865 10.0394C7.65269 9.66997 9.26236 9.82684 10.5548 10.51C10.7017 10.5859 10.7487 10.7478 10.6605 10.8743ZM11.2598 9.72057C11.1481 9.87744 10.9132 9.92299 10.731 9.8319C9.40923 9.12852 7.3942 8.92611 5.83152 9.33599C5.62591 9.3866 5.41442 9.29045 5.35567 9.1184C5.29692 8.94129 5.40854 8.75912 5.61416 8.70852C7.40008 8.24297 9.62072 8.46562 11.1423 9.27021C11.3126 9.36129 11.3714 9.56371 11.2598 9.72057ZM11.3126 8.51623C9.72647 7.70658 7.11221 7.63068 5.59654 8.02538C5.35567 8.09116 5.09718 7.97478 5.02081 7.76225C4.94444 7.55477 5.08543 7.33212 5.3263 7.26634C7.06522 6.81091 9.95558 6.902 11.7767 7.83309C11.9941 7.94442 12.0646 8.18731 11.9354 8.37454C11.812 8.56683 11.53 8.63261 11.3126 8.51623Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="deezer"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          className="peer ps-[44px]"
                          placeholder="Deezer"
                          type="text"
                          {...field}
                        />
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center pe-[10px] ps-[14px] peer-disabled:opacity-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="10"
                            viewBox="0 0 16 10"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_3493_33)">
                              <path
                                d="M13.0662 5.67334V5.26519H16.0001V6.08149H13.0662V5.67334ZM13.0662 4.36725V3.95909H16.0001V4.7754H13.0662V4.36725ZM13.0662 3.06115V2.653H16.0001V3.46931H13.0662V3.06115ZM13.0662 1.71425V1.30609H16.0001V2.16322H13.0662V1.71425ZM13.0662 0.448969V0H16.0001V0.897939H13.0662V0.448969Z"
                                fill="#B1E3FA"
                              />
                              <path
                                d="M6.51611 5.6734V5.26525H9.45002V6.08155H6.51611V5.6734ZM6.51611 4.36731V3.95915H9.45002V4.77546H6.51611V4.36731ZM6.51611 3.06121V2.65306H9.45002V3.46937H6.51611V3.06121ZM6.51611 1.71431V1.30615H9.45002V2.16328H6.51611V1.71431Z"
                                fill="#F7BACF"
                              />
                              <path
                                d="M9.79102 5.67323V5.26508H12.7249V6.08138H9.79102V5.67323ZM9.79102 4.36714V3.95898H12.7249V4.77529H9.79102V4.36714Z"
                                fill="#E7EE9F"
                              />
                              <path
                                d="M3.27515 9.59192V9.18376H6.14082V10.0001H3.27515V9.59192ZM3.27515 8.24501V7.83685H6.14082V8.65316H3.27515V8.24501ZM3.27515 6.93892V6.53076H6.14082V7.34707H3.27515V6.93892Z"
                                fill="#FEEA3A"
                              />
                              <path
                                d="M0 5.67323V5.26508H2.86567V6.08138H0V5.67323ZM0 4.36714V3.95898H2.86567V4.77529H0V4.36714Z"
                                fill="#FE9D7F"
                              />
                              <path
                                d="M13.1001 9.59192V9.18376H15.9658V10.0001H13.1001V9.59192ZM13.1001 8.24501V7.83685H15.9658V8.65316H13.1001V8.24501ZM13.1001 6.93892V6.53076H15.9658V7.34707H13.1001V6.93892Z"
                                fill="#4EC2F6"
                              />
                              <path
                                d="M9.8252 9.59192V9.18376H12.6909V10.0001H9.8252V9.59192ZM9.8252 8.24501V7.83685H12.6909V8.65316H9.8252V8.24501ZM9.8252 6.93892V6.53076H12.6909V7.34707H9.8252V6.93892Z"
                                fill="#CCDB38"
                              />
                              <path
                                d="M6.55005 9.59192V9.18376H9.41572V10.0001H6.55005V9.59192ZM6.55005 8.24501V7.83685H9.41572V8.65316H6.55005V8.24501ZM6.55005 6.93892V6.53076H9.41572V7.34707H6.55005V6.93892Z"
                                fill="#FE3F80"
                              />
                              <path
                                d="M0 9.59192V9.18376H2.86567V10.0001H0V9.59192ZM0 8.24501V7.83685H2.86567V8.65316H0V8.24501ZM0 6.93892V6.53076H2.86567V7.34707H0V6.93892Z"
                                fill="#FE3D02"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_3493_33">
                                <rect width="16" height="10" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="youtube"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          className="peer ps-[44px]"
                          placeholder="YouTube Music"
                          type="text"
                          {...field}
                        />
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center pe-[10px] ps-[14px] peer-disabled:opacity-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                              fill="#FF0000"
                            />
                            <path
                              d="M8 4.80739C9.76065 4.80739 11.1926 6.23935 11.1926 8C11.1926 9.76065 9.76065 11.1926 8 11.1926C6.23935 11.1926 4.80739 9.76065 4.80739 8C4.80739 6.23935 6.23935 4.80739 8 4.80739ZM8 4.5C6.06663 4.5 4.5 6.06663 4.5 8C4.5 9.93337 6.06663 11.5 8 11.5C9.93337 11.5 11.5 9.93337 11.5 8C11.5 6.06663 9.93337 4.5 8 4.5Z"
                              fill="white"
                            />
                            <path d="M7 10L10 7.91304L7 6V10Z" fill="white" />
                          </svg>
                        </div>
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="audiomack"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          className="peer ps-[44px]"
                          placeholder="Audiomack"
                          type="text"
                          {...field}
                        />
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center pe-[10px] ps-[14px] peer-disabled:opacity-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="12"
                            viewBox="0 0 16 12"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.218557 5.55084C0.218557 5.55084 0.584699 5.48788 0.73244 5.65577C0.880181 5.82366 0.783828 6.17343 0.584699 6.18042C0.385569 6.18742 0.20571 6.22939 0.077239 6.07549C-0.0576554 5.92859 -0.0191141 5.62779 0.218557 5.55084ZM4.14334 7.94326C4.1048 7.95026 4.07268 7.92927 4.03414 7.90129C3.77077 7.50955 3.68084 6.16643 3.5588 6.08249C3.43675 5.99854 2.99353 6.83099 2.10065 6.74005C1.73451 6.70508 1.35552 6.43925 1.1307 6.25737C1.14997 5.94958 1.15639 5.23605 1.70882 5.47389C2.04284 5.6138 2.62096 5.99854 3.12842 5.306C3.68084 4.53651 3.98917 4.76036 4.17546 4.92825C4.36174 5.09614 4.23969 5.96357 4.5159 5.71873C4.79212 5.47389 5.90339 3.96988 5.90339 3.96988C5.90339 3.96988 6.76414 3.01851 6.89261 4.01885C7.02751 5.01219 7.58636 6.11747 7.74052 6.08249C7.88826 6.05451 9.61619 2.21404 9.86671 1.9692C10.1172 1.71737 10.9523 1.75234 10.9138 2.38892C10.8688 3.01851 10.7853 6.9709 10.7853 6.9709C10.7853 6.9709 10.6889 8.08317 10.8495 7.48856C10.9137 7.24372 10.9844 7.01987 11.0743 6.76104C11.5047 5.26403 12.2306 2.71771 12.5903 1.40257C12.6738 1.08778 12.7509 0.821958 12.8023 0.612096C12.828 0.514161 12.8472 0.444207 12.8665 0.374253C12.8986 0.262327 12.9179 0.185378 12.9243 0.171387C12.9436 0.122419 12.9886 0.0804469 13.0528 0.0524654C13.117 0.0104931 13.1877 0.0104931 13.2648 0.00349769C13.4639 -0.0104931 13.7208 0.0174885 13.9585 0.0874423C14.0227 0.0874423 14.0998 0.115424 14.1705 0.171387C14.1705 0.171387 14.1705 0.171387 14.1769 0.178382H14.1833C14.1962 0.192373 14.2219 0.213359 14.2476 0.248336C14.2476 0.248336 14.2476 0.248336 14.254 0.248336C14.2604 0.269322 14.2733 0.283313 14.2861 0.304299C14.4146 0.514161 14.4981 0.898907 14.4146 1.57746C14.2155 3.27034 14.0613 6.76104 14.0613 6.76104C14.0613 6.76104 14.0292 6.92893 14.3503 6.19441C14.3632 6.17343 14.376 6.14545 14.3889 6.12446C14.4082 6.11047 14.4274 6.09648 14.4531 6.0615C14.6458 5.80267 15.179 5.65577 15.5515 5.65577C15.7057 5.67676 15.8406 5.71873 15.9177 5.77469C16.059 6.01253 15.9755 6.90794 15.9755 6.90794C15.6672 6.94292 15.0826 7.11781 14.8771 7.15278C14.6651 7.18776 14.3503 8.65679 13.9135 8.50989C13.4703 8.35599 12.4939 7.69143 12.4939 7.59349C12.4939 7.51654 12.571 6.53719 12.5903 6.28535C12.5967 6.27136 12.5967 6.25038 12.5967 6.23639C12.5967 6.22939 12.5967 6.22939 12.5967 6.22939C12.6096 6.02653 12.5967 5.94258 12.5132 6.13845C12.4426 6.31334 12.1278 7.40462 11.7745 8.58684C11.736 8.69177 11.0743 10.8813 10.9908 11.1471C10.8816 11.4619 10.7981 11.6998 10.7339 11.8187C10.644 11.9516 10.5219 12.0426 10.3485 11.9796C9.9181 11.8397 9.3721 11.1891 9.36568 11.0282C9.35283 10.1188 9.40422 5.23605 9.20509 5.64178C8.99953 6.0615 7.38723 8.95759 7.38723 8.95759C7.35511 8.96459 7.33584 8.96459 7.31657 8.96459C7.20094 8.9506 7.02108 8.90862 6.97612 8.7897C6.9697 8.78271 6.9697 8.77571 6.96327 8.76872C6.96327 8.76172 6.95685 8.75473 6.95685 8.74074C6.93116 8.66379 6.92473 8.57285 6.90546 8.50289C6.8348 8.23707 6.71918 7.85932 6.59713 7.47457C6.41085 6.81001 6.21814 6.13845 6.18602 6.0615C6.12821 5.9146 6.03828 5.97756 5.95478 6.0615C5.59506 6.39728 4.83066 7.86631 4.14334 7.94326Z"
                              fill="url(#paint0_linear_3493_51)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_3493_51"
                                x1="-7.2"
                                y1="5.76"
                                x2="-0.461735"
                                y2="23.2002"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#FFBE00" />
                                <stop offset="1" stopColor="#E85E0A" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="soundcloud"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          className="peer ps-[44px]"
                          placeholder="SoundCloud"
                          type="text"
                          {...field}
                        />
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center pe-[10px] ps-[14px] peer-disabled:opacity-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <circle cx="8" cy="8" r="7" fill="#FF5502" />
                            <path
                              d="M11.9651 10.5H7.87209V5.55523C8.25132 5.20893 8.74249 5 9.27906 5C10.4665 5 11.4316 6.02312 11.4531 7.29403C11.6132 7.23314 11.7856 7.2 11.9651 7.2C12.8128 7.2 13.5 7.93873 13.5 8.85C13.5 9.76127 12.8128 10.5 11.9651 10.5Z"
                              fill="white"
                            />
                            <path d="M7.5 6H7V10.5H7.5V6Z" fill="white" />
                            <path d="M6 6.5H6.5V10.5H6V6.5Z" fill="white" />
                            <path d="M5.5 7.5H5V10.5H5.5V7.5Z" fill="white" />
                            <path d="M4 7H4.5V10.5H4V7Z" fill="white" />
                            <path d="M3.5 8H3V10.5H3.5V8Z" fill="white" />
                          </svg>
                        </div>
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="apple"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          className="peer ps-[44px]"
                          placeholder="Apple Music"
                          type="text"
                          {...field}
                        />
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center pe-[10px] ps-[14px] peer-disabled:opacity-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <ellipse
                              cx="7.99992"
                              cy="8.0079"
                              rx="6.38053"
                              ry="6.38827"
                              fill="url(#paint0_linear_3493_59)"
                            />
                            <path
                              d="M6.57757 4.25531L10.7814 3.4198C10.973 3.38173 11.1515 3.52829 11.1515 3.72359V10.1647C11.1515 10.713 10.7681 11.1867 10.2318 11.3008L9.86037 11.3798C9.21338 11.5175 8.60398 11.0241 8.60398 10.3626C8.60398 9.89666 8.91805 9.48925 9.36866 9.37067L10.4213 9.09367C10.5641 9.05607 10.6637 8.9269 10.6637 8.77916V5.78864C10.6637 5.65115 10.5374 5.54838 10.4028 5.57636L6.89963 6.30446C6.79186 6.32686 6.7146 6.42183 6.7146 6.5319V10.9978C6.7146 11.5976 6.29494 12.1156 5.7082 12.24L5.45353 12.294C4.78689 12.4355 4.15929 11.927 4.15929 11.2456C4.15929 10.8113 4.4516 10.4313 4.87139 10.32L5.97319 10.0279C6.10898 9.99189 6.20354 9.86899 6.20354 9.7285V4.711C6.20354 4.48932 6.36015 4.29852 6.57757 4.25531Z"
                              fill="url(#paint1_radial_3493_59)"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM14.3805 8.00774C14.3805 11.5359 11.5239 14.396 8 14.396C4.47613 14.396 1.61947 11.5359 1.61947 8.00774C1.61947 4.4796 4.47613 1.61947 8 1.61947C11.5239 1.61947 14.3805 4.4796 14.3805 8.00774Z"
                              fill="url(#paint2_radial_3493_59)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_3493_59"
                                x1="7.99992"
                                y1="1.61963"
                                x2="7.99992"
                                y2="14.3962"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="#DDE2E7" />
                              </linearGradient>
                              <radialGradient
                                id="paint1_radial_3493_59"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(4.15929 13.8695) rotate(-55.1325) scale(14.0055 10.9984)"
                              >
                                <stop stopColor="#7A66FB" />
                                <stop offset="0.440198" stopColor="#52A2F4" />
                                <stop offset="0.702" stopColor="#FC5D6D" />
                                <stop offset="1" stopColor="#E85E7B" />
                              </radialGradient>
                              <radialGradient
                                id="paint2_radial_3493_59"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(4.15929 13.8695) rotate(-55.1325) scale(14.0055 10.9984)"
                              >
                                <stop stopColor="#7A66FB" />
                                <stop offset="0.440198" stopColor="#52A2F4" />
                                <stop offset="0.702" stopColor="#FC5D6D" />
                                <stop offset="1" stopColor="#E85E7B" />
                              </radialGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <div className="mt-[1px] flex flex-row items-center gap-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="leading-none">
                  <FormLabel className="text-sm">
                    I have read and agree to the terms of the{" "}
                    <span className="cursor-pointer font-medium text-primary">
                      Euterpe Agreement
                    </span>
                  </FormLabel>
                </div>
              </div>
            )}
          />
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
