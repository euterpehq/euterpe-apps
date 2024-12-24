import { createClient } from "@/lib/supabase/client";
import { Database } from "@/types/database.types";

type ArtistProfilesTable =
  Database["public"]["Tables"]["artist_profiles"]["Row"];

export async function updateArtistProfile(
  userId: string,
  payload: Partial<ArtistProfilesTable>,
) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("artist_profiles")
    .upsert({ id: userId, ...payload }, { onConflict: "id" })
    .single();

  if (error) {
    console.error("updateArtistProfile error:", error);
    return { error };
  }
  return { data };
}