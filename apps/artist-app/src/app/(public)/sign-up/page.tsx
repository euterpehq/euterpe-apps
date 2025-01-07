import React from "react";
import SignUpForm from "./_components/sign-up-form";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    error: string;
    error_code: string;
    error_description: string;
  }>;
}) {
  return (
    <div className="flex h-full w-full items-center justify-center px-4">
      <SignUpForm searchParams={await searchParams} />
    </div>
  );
}
