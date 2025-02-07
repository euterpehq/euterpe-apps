"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signInWithSpotify, signInWithEmail } from "@/lib/actions/auth";
import Balancer from "react-wrap-balancer";
import { LuLoader } from "react-icons/lu";
import ErrorDisplay from "./error-display";
import { Suspense } from "react";

export default function SignUpForm({
  searchParams,
}: {
  searchParams: {
    error: string;
    error_code: string;
    error_description: string;
  };
}) {
  const [email, setEmail] = useState("");
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  function handleSpotifyAuth(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    signInWithSpotify();
  }

  async function handleMagicLinkSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSendingEmail(true);
    setEmailSent(false);

    try {
      const { error } = await signInWithEmail(email);
      if (error) {
        console.error("Magic link error:", error);
      } else {
        setEmailSent(true);
      }
    } catch (err) {
      console.error("Error sending magic link:", err);
    } finally {
      setIsSendingEmail(false);
    }
  }

  return (
    <div className="w-[360px]">
      <h1 className="mb-10 text-center text-[28px] font-semibold tracking-[-0.06em]">
        Sign in to your account
      </h1>
      <Suspense fallback={<></>}>
        <ErrorDisplay searchParams={searchParams} />
      </Suspense>
      <div className="space-y-6">
        <form onSubmit={handleMagicLinkSignIn} className="space-y-6">
          <Input
            type="email"
            placeholder="Email address"
            className="h-[40px] rounded-[8px] border-[0.8px] border-[#313131] placeholder:text-xs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button
            type="submit"
            className="w-full gap-2 rounded-[8px] border-[0.8px] border-[#313131] bg-[#212121] py-[12px] text-xs text-white hover:text-black"
            disabled={isSendingEmail || emailSent}
          >
            {isSendingEmail ? (
              <span className="inline-flex items-center gap-2">
                <LuLoader className="h-3.5 w-3.5 animate-spin" />
                Sending...
              </span>
            ) : emailSent ? (
              "Email sent"
            ) : (
              <span className="inline-flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                Sign in with Email
              </span>
            )}
          </Button>

          {emailSent && (
            <p className="mt-2 text-center text-sm text-green-400">
              <Balancer>
                A magic link has been sent to {email}. Check your inbox to
                complete sign in.
              </Balancer>
            </p>
          )}
        </form>

        <div className="flex items-center justify-between">
          <hr className="w-full border-t border-[#313131]" />
          <p className="px-2 font-azeret text-[11px] text-[#FFFFFF]">OR</p>
          <hr className="w-full border-t border-[#313131]" />
        </div>

        <form onSubmit={handleSpotifyAuth}>
          <Button
            type="submit"
            className="flex h-[40px] w-full items-center justify-center gap-x-[8px] rounded-[8px] border-[0.8px] border-[#313131] bg-[#212121] py-[12px] text-white hover:text-black"
            disabled
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <g clipPath="url(#clip0_2924_4166)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.22 7.12C10.66 5.6 6.38 5.44 3.94 6.2C3.54 6.32 3.14 6.08 3.02 5.72C2.9 5.32 3.14 4.92 3.5 4.8C6.34 3.96 11.02 4.12001 13.98 5.88C14.34 6.08001 14.46 6.56 14.26 6.92C14.06 7.2 13.58 7.32 13.22 7.12ZM13.14 9.36C12.94 9.64 12.58 9.76 12.3 9.56C10.14 8.24 6.86 7.84 4.34 8.64001C4.02 8.72001 3.66 8.56 3.58 8.24C3.5 7.92 3.66 7.56 3.98 7.48C6.9 6.6 10.5 7.04 12.98 8.56C13.22 8.68 13.34 9.08 13.14 9.36ZM12.18 11.56C12.02 11.8 11.74 11.88 11.5 11.72C9.62 10.56 7.26 10.32 4.46 10.96C4.18 11.04 3.94 10.84 3.86 10.6C3.78 10.32 3.98 10.08 4.22 10C7.26 9.32 9.9 9.60001 11.98 10.88C12.26 11 12.3 11.32 12.18 11.56ZM8.5 0C4.1 0 0.5 3.6 0.5 8C0.5 12.4 4.1 16 8.5 16C12.9 16 16.5 12.4 16.5 8C16.5 3.6 12.94 0 8.5 0Z"
                  fill="#00DA5A"
                />
              </g>
              <defs>
                <clipPath id="clip0_2924_4166">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            Sign in with Spotify
          </Button>
        </form>

        <Button
          type="submit"
          className="flex h-[40px] w-full cursor-default items-center justify-center gap-x-[8px] rounded-[8px] border-[0.8px] border-[#313131] bg-transparent py-[12px] text-[#313131] hover:bg-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M12.6666 7.99967C12.6666 8.36787 12.3681 8.66634 11.9999 8.66634C11.6317 8.66634 11.3333 8.36787 11.3333 7.99967C11.3333 7.63147 11.6317 7.33301 11.9999 7.33301C12.3681 7.33301 12.6666 7.63147 12.6666 7.99967Z"
              fill="#313131"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.62897 2.16699H8.70419C9.92939 2.16698 10.8998 2.16697 11.6593 2.26909C12.4409 2.37417 13.0735 2.59558 13.5725 3.09449C14.1887 3.71075 14.3851 4.53608 14.4564 5.60705C14.8412 5.77639 15.1318 6.13453 15.1638 6.58819C15.1667 6.62832 15.1666 6.67159 15.1666 6.71166C15.1666 6.71533 15.1666 6.71893 15.1666 6.72253V9.27813C15.1666 9.28173 15.1666 9.28533 15.1666 9.28899C15.1666 9.32906 15.1667 9.37233 15.1638 9.41246C15.1318 9.86613 14.8412 10.2243 14.4564 10.3936C14.3851 11.4646 14.1887 12.2899 13.5725 12.9062C13.0735 13.4051 12.4409 13.6265 11.6593 13.7316C10.8998 13.8337 9.92939 13.8337 8.70419 13.8337H6.62898C5.40381 13.8337 4.43338 13.8337 3.67391 13.7316C2.89229 13.6265 2.25966 13.4051 1.76075 12.9062C1.26184 12.4073 1.04043 11.7746 0.935346 10.993C0.833232 10.2335 0.833239 9.26313 0.833252 8.03793V7.96273C0.833239 6.73753 0.833232 5.76712 0.935346 5.00765C1.04043 4.22603 1.26184 3.5934 1.76075 3.09449C2.25966 2.59558 2.89229 2.37417 3.67391 2.26909C4.43338 2.16697 5.4038 2.16698 6.62897 2.16699ZM13.4452 10.5003H12.1538C10.7237 10.5003 9.49992 9.41526 9.49992 8.00033C9.49992 6.58537 10.7237 5.50033 12.1538 5.50033H13.4452C13.3693 4.60603 13.1977 4.13395 12.8653 3.80159C12.5832 3.51945 12.1967 3.35034 11.5261 3.26017C10.8409 3.16805 9.93779 3.16699 8.66658 3.16699H6.66658C5.39537 3.16699 4.49226 3.16805 3.80715 3.26017C3.13643 3.35034 2.74999 3.51945 2.46785 3.80159C2.18571 4.08373 2.0166 4.47017 1.92643 5.14089C1.83431 5.826 1.83325 6.72913 1.83325 8.00033C1.83325 9.27153 1.83431 10.1747 1.92643 10.8598C2.0166 11.5305 2.18571 11.9169 2.46785 12.1991C2.74999 12.4812 3.13643 12.6503 3.80715 12.7405C4.49226 12.8326 5.39537 12.8337 6.66658 12.8337H8.66658C9.93779 12.8337 10.8409 12.8326 11.5261 12.7405C12.1967 12.6503 12.5832 12.4812 12.8653 12.1991C13.1977 11.8667 13.3693 11.3947 13.4452 10.5003ZM13.9489 6.50048C13.9354 6.50033 13.9177 6.50033 13.8888 6.50033H12.1538C11.2049 6.50033 10.4999 7.20613 10.4999 8.00033C10.4999 8.79453 11.2049 9.50033 12.1538 9.50033H13.8888C13.9177 9.50033 13.9354 9.50033 13.9489 9.50019C13.9573 9.50006 13.9617 9.49999 13.9637 9.49986L13.9652 9.49979C14.1027 9.49146 14.1617 9.39873 14.1663 9.34293C14.1663 9.34293 14.1664 9.33873 14.1665 9.33273C14.1666 9.32086 14.1666 9.30513 14.1666 9.27813V6.72253C14.1666 6.69553 14.1666 6.67979 14.1665 6.66793C14.1664 6.66191 14.1663 6.65772 14.1663 6.65772C14.1617 6.60194 14.1027 6.50919 13.9652 6.50083C13.9652 6.50083 13.9619 6.50061 13.9489 6.50048ZM4.66659 5.50033C4.94273 5.50033 5.16659 5.72419 5.16659 6.00033V10.0003C5.16659 10.2765 4.94273 10.5003 4.66659 10.5003C4.39045 10.5003 4.16659 10.2765 4.16659 10.0003V6.00033C4.16659 5.72419 4.39045 5.50033 4.66659 5.50033Z"
              fill="#313131"
            />
          </svg>
          Sign in with your wallet
        </Button>
      </div>
    </div>
  );
}
