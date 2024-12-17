"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function signInWithSpotify() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "spotify",
    options: {
      redirectTo:
        process.env.NEXT_PUBLIC_BASE_URL + "/auth/callback?next=/home",
    },
  });

  if (data.url) {
    console.log("data.url redirecting to", data.url);
    redirect(data.url);
  }
}

export async function signOut() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();
}
