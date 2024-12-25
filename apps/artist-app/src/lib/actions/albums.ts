"use server";
import { createClient } from "@/lib/supabase/server";

export async function createAlbum(payload: {
  artist_id: string;
  category_type: string;
  title: string;
  genre: string;
  sub_genres?: string[];
  release_date?: string; // or Date
  cover_image_url?: string;
}) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("albums")
    .insert([payload])
    .select()
    .single();

  return { data, error };
}
