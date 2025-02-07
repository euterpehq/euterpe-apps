"use server";
import { createClient } from "@/lib/supabase/server";

export async function createTrack(payload: {
  album_id: string;
  track_number: number;
  track_title: string;
  audio_file_url?: string;
  featured_artists?: string[];
}) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("tracks")
    .insert([payload])
    .select()
    .single();

  return { data, error };
}
