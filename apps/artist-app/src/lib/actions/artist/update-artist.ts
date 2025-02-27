"use server";
import { actionClient } from "@/lib/safe-action";
import * as z from "zod";
import { zfd } from "zod-form-data";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { signOut } from "../auth";

const validationSchema = z.object({
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

export const updateArtist = actionClient
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

    let artistImageUrl: string | undefined = undefined;
    if (parsedInput.artist_image) {
      const file = parsedInput.artist_image[0];
      const filePath = `${user.id}-${Date.now()}-${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file, { upsert: false });

      if (uploadError) {
        console.log(uploadError, "upload error - image");
        throw uploadError;
      }

      const { data } = supabase.storage.from("avatars").getPublicUrl(filePath);
      artistImageUrl = data?.publicUrl ?? undefined;
    }

    let bannerImageUrl: string | undefined = undefined;
    if (parsedInput.banner_image) {
      const file = parsedInput.banner_image[0];
      const filePath = `${user.id}-${Date.now()}-${file.name.replace(" ", "")}`;
      const { error: uploadError } = await supabase.storage
        .from("banners")
        .upload(filePath, file, { upsert: false });

      if (uploadError) {
        console.log(uploadError, "upload error - banner");
        throw uploadError;
      }

      const { data } = supabase.storage.from("banners").getPublicUrl(filePath);
      bannerImageUrl = data?.publicUrl ?? undefined;
    }

    const payload = {
      artist_name: parsedInput.artist_name,
      artist_image_url: artistImageUrl,
      banner_image_url: bannerImageUrl,
      bio: parsedInput.bio,
      spotify_url: parsedInput.spotify,
      deezer_url: parsedInput.deezer,
      youtube_music_url: parsedInput.youtube,
      audiomack_url: parsedInput.audiomack,
      soundcloud_url: parsedInput.soundcloud,
      apple_music_url: parsedInput.apple,
    };

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

export const deleteArtistProfile = async ({ id }: { id: string }) => {
  const supabase = await createClient();

  // const { error: deleteError } = await supabase.auth.admin.deleteUser(id, true);

  // if (deleteError) {
  //   throw deleteError;
  // }

 await signOut()

  // return {
  //   message: "Deleted profile successfully",
  // };
};
