"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function signInWithEmail(email: string) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      shouldCreateUser: true,
      emailRedirectTo: process.env.NEXT_PUBLIC_BASE_URL + "/my-music",
    },
  });
  return { data, error };
}

export async function signInWithSpotify() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "spotify",
    options: {
      redirectTo:
        process.env.NEXT_PUBLIC_BASE_URL + "/auth/callback?next=/my-music",
    },
  });

  if (data.url) {
    redirect(data.url);
  }
}

export async function signOut() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();
}
