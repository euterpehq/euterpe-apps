import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { type EmailOtpType } from "@supabase/supabase-js";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const origin = process.env.DEV_SERVER_ORIGIN || new URL(request.url).origin;
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const redirect_to = searchParams.get("redirect_to") ?? "/";

  if (token_hash && type) {
    const supabase = await createClient();
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });
    console.log("error ", error);
    if (!error) {
      console.log("redirecting to", redirect_to);
      return NextResponse.redirect(redirect_to);
    }
  }

  /* KNOWN ISSUE: For some reason, when the magic link is clicked on in the email, 
  the /auth/confirm route is called twice, and obviously the second call fails 
  because the token is expired by then, everything is fine on the first call */
  // return NextResponse.redirect(`${origin}/auth/auth-code-error`);
  return NextResponse.redirect(
    `${origin}/sign-up#error=access_denied&error_code=auth-code-error&error_description=An+error+occurred+while+verifying+the+magic+link`,
  );
}
