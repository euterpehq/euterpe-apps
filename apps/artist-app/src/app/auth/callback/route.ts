import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const origin = process.env.DEV_SERVER_ORIGIN || new URL(request.url).origin;
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";
  console.log("we got the auth callback with code", code);

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      const forwardedHost = request.headers.get("x-forwarded-host");
      const isLocalEnv = process.env.NODE_ENV === "development";
      if (isLocalEnv) {
        console.log("redirecting to isLocalEnv", `${origin}${next}`);
        return NextResponse.redirect(`${origin}${next}`);
      } else if (forwardedHost) {
        console.log("redirecting to ", `https://${forwardedHost}${next}`);
        return NextResponse.redirect(`https://${forwardedHost}${next}`);
      } else {
        console.log("redirecting to", `${origin}${next}`);
        return NextResponse.redirect(`${origin}${next}`);
      }
    }
  }

  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
