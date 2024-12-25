"use server";
import { createClient } from "@/lib/supabase/server";

const BUCKET_NAME = "avatars";

export async function uploadImageToBucket(
  file: File,
  userId: string,
  pathPrefix: string,
): Promise<string | null> {
  const supabase = await createClient();
  try {
    const filePath = `${pathPrefix}/${userId}-${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, file, { upsert: false });

    if (uploadError) {
      console.error("uploadImageToBucket error:", uploadError);
      return null;
    }

    const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(filePath);
    return data?.publicUrl || null;
  } catch (err) {
    console.error("Unexpected error in uploadImageToBucket:", err);
    return null;
  }
}
