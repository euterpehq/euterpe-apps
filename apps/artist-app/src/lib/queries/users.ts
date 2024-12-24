import { createClient } from "@/lib/supabase/client";
import { Database } from "@/types/database.types";

export async function getCurrentUser() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    throw error;
  }
  return user;
}

type ArtistProfilesTable =
  Database["public"]["Tables"]["artist_profiles"]["Row"];

export async function getArtistProfile(userId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("artist_profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) {
    console.error("getArtistProfile error:", error);
    return null;
  }
  return data as ArtistProfilesTable;
}
