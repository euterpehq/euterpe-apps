"use server";
import { actionClient } from "@/lib/safe-action";
import * as z from "zod";
import { zfd } from "zod-form-data";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const validationSchema = z.object({
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

export const createAlbum = actionClient
  .schema(validationSchema)
  .action(async ({ parsedInput }) => {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (!user?.id) {
      redirect("/sign-up");
    }

    if (authError) {
      throw authError;
    }

    let coverImageUrl: string | undefined = undefined;
    if (parsedInput.cover_image) {
      const file = parsedInput.cover_image[0];
      const filePath = `${user.id}-${Date.now()}-${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file, { upsert: false });

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage.from("avatars").getPublicUrl(filePath);
      coverImageUrl = data?.publicUrl ?? undefined;
    }

    const payload = {};

    const { error: updateError } = await supabase
      .from("artist_profiles")
      .upsert({ id: user.id, ...payload }, { onConflict: "id" })
      .single();

    if (updateError) {
      throw updateError;
    }

    revalidatePath("/my-music");
    return {
      message: "Profile updated successfully",
    };
  });
