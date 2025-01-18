import "server-only";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function getArtist() {
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
    .from("artist_profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error) {
    return { data: null, error };
  }

  const formattedData = {
    ...data,
    email: user.email,
  };

  return { data: formattedData, error: null };
}
