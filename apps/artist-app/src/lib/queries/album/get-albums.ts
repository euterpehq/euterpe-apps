import "server-only";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { format } from "date-fns";

export async function getAlbums() {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (!user?.id) {
    redirect("/sign-up");
  }

  if (authError) {
    return { data: null, error: authError };
  }

  const { data, error } = await supabase
    .from("albums")
    .select("*, tracks(*)")
    .eq("artist_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    return { data: null, error };
  }

  const formattedData = (data || []).map((album) => ({
    ...album,
    release_date: album.release_date
      ? format(new Date(album.release_date), "MMMM d, yyyy")
      : "N/A",
  }));

  return { data: formattedData, error: null };
}
