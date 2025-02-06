"use client";
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
import { createAlbum } from "@/lib/actions/album/create-album";
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import { ControllerRenderProps } from "react-hook-form";
import ServerActionResponseToast from "@/components/server-action-response-toast";
import { LuLoader } from "react-icons/lu";
import { AppFormControl, AppFormControlProps } from "@/components/app-form";
import CoverImage from "./cover-image";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { createAlbumvalidationSchema } from "@/lib/validation";
import { UploadAlbumTracks } from "./upload-album-tracks";

enum AlbumFormFields {
  CATEGORY = "category_type",
  ALBUM_TITLE = "title",
  GENRE = "genre",
  SUB_GENRES = "sub_genres",
  // STREAMING_LINKS = "streaming_links",
  RELEASE_DATE = "release_date",
  COVER_IMAGE = "cover_image",
  // TRACKS = "tracks",
}

interface FormInputControlObj extends AppFormControlProps {
  customComponent?: ({
    field,
  }: {
    field: ControllerRenderProps<z.infer<typeof createAlbumvalidationSchema>>;
  }) => React.ReactNode;
}

const formInputControl: {
  [key in AlbumFormFields]: FormInputControlObj;
} = {
  [AlbumFormFields.CATEGORY]: {
    formType: "select",
    options: ["Single", "Album", "Ep"], // TODO: extract this into a constant file or update in a db table if required
    placeholder: "Select",
    label: "Category Type",
  },

  [AlbumFormFields.ALBUM_TITLE]: {
    formType: "input",
    placeholder: "Enter name",
    label: "Album Title",
  },

  [AlbumFormFields.GENRE]: {
    formType: "select",
    placeholder: "Select",
    label: "Genre",
    options: [
      "Pop",
      "Rock",
      "Hip-Hop",
      "Afrobeats",
      "Country",
      "Electronic",
      "Jazz",
      "Reggae",
      "R&B",
    ],
  },

  [AlbumFormFields.SUB_GENRES]: {
    formType: "tag-input",
    placeholder: "Enter sub-genres",
    label: "Sub-Genre",
  },

  [AlbumFormFields.RELEASE_DATE]: {
    formType: "date",
    label: "Release Date",
  },

  [AlbumFormFields.COVER_IMAGE]: {
    formType: "custom",
    label: "Cover Image",
    customComponent: ({ field }) => <CoverImage field={field} />,
  },
};

export default function UpdateMusicForm() {
  const { form, action, handleSubmitWithAction } = useHookFormAction(
    createAlbum,
    zodResolver(createAlbumvalidationSchema),
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
          {Object.entries(formInputControl).map(([key, value]) => (
            <FormField
              key={key}
              control={form.control}
              name={key as `${AlbumFormFields}`}
              render={({ field }) => (
                <AppFormControl field={field} {...value}>
                  {value.customComponent?.({ field })}
                </AppFormControl>
              )}
            />
          ))}

          <UploadAlbumTracks />

          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="items-center gap-2 flex space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>
                  I have read and agree to the terms of the{" "}
                  <Link href="#" className="text-[#C1FF70]">
                    Euterpe Agreement
                  </Link>
                </FormLabel>

                <FormMessage />
              </FormItem>
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
