"use server";
import { actionClient } from "@/lib/safe-action";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createAlbumvalidationSchema } from "@/lib/validation";
import { SupabaseClient } from "@supabase/supabase-js";

const uploadFile = async ({
  supabase,
  bucketName,
  file,
  identifier,
}: {
  supabase: SupabaseClient;
  bucketName: string;
  file: File;
  identifier: string;
}) => {
  const filePath = `${identifier}-${Date.now()}-${file.name}`;
  const { error: uploadError } = await supabase.storage
    .from(bucketName)
    .upload(filePath, file, { upsert: false });

  if (uploadError) {
    throw uploadError;
  }

  const { data } = supabase.storage.from(bucketName).getPublicUrl(filePath); // extra step? could eliminate by saving path in bucket and appending the base url for supabase in env?

  return {
    publicUrl: data?.publicUrl ?? undefined,
    filePath,
  };
};

export const createAlbum = actionClient
  .schema(createAlbumvalidationSchema)
  .action(async ({ parsedInput }) => {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    // TODO: create temporary state for users to allow users proceed to submit already filled form if auth expires before its submitted
    if (!user?.id) {
      redirect("/sign-up");
    }

    if (authError) {
      throw authError;
    }

    let coverImageUrl = "";
    let coverImageFilePath = "";

    const { cover_image, tracks, terms, ...payload } = parsedInput;

    // upload album cover image
    if (cover_image) {
      const { publicUrl, filePath } = await uploadFile({
        supabase,
        file: cover_image[0],
        identifier: user.id,
        bucketName: "album_covers",
      });

      coverImageUrl = publicUrl;
      coverImageFilePath = filePath;
    }

    // create album
    const { error: insertAlbumError, data: newAlbum } = await supabase
      .from("albums")
      .insert({
        artist_id: user.id,
        cover_image_url: coverImageUrl,
        ...payload,
      })
      .select();

    if (insertAlbumError) {
      await supabase.storage.from("album_covers").remove([coverImageFilePath]); // delete cover image from storage if album insertion operation fails to prevent redundant files in bucket
      throw insertAlbumError;
    }

    const trackPayload = await Promise.all(
      tracks.map(async ({ audio_file, ...track }) => {
        const trackFile = audio_file?.[0];
        if (!trackFile) throw new Error("Audio file is missing");
        const { publicUrl: trackPublicUrl } = await uploadFile({
          supabase,
          file: trackFile,
          bucketName: "tracks",
          identifier: newAlbum[0].id,
        });

        return {
          audio_file_url: trackPublicUrl,
          album_id: newAlbum[0].id,
          ...track,
        };
      }),
    );

    const { error: insertTracksError } = await supabase
      .from("tracks")
      .insert(trackPayload)
      .select();

    if (insertTracksError) {
      throw insertTracksError;
    }

    revalidatePath("/my-music");
    return {
      message: "Profile updated successfully",
    };
  });
