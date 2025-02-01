import { createClient } from "@/lib/supabase/client";
import { format } from "date-fns";

export async function getUserReleases(artistId: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("albums")
    .select("*, tracks(*)")
    .eq("artist_id", artistId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("getUserReleases error:", error.message);
    throw error;
  }

  return (data || []).map((album) => ({
    ...album,
    release_date: album.release_date
      ? format(new Date(album.release_date), "MMMM d, yyyy")
      : "N/A",
  }));
}
