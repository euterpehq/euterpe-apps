import React from "react";

export default function ErrorDisplay({
  searchParams,
}: {
  searchParams: {
    error: string;
    error_code: string;
    error_description: string;
  };
}) {
  const { error, error_code } = searchParams;

  return (
    <div>
      {error && error_code === "provider_email_needs_verification" && (
        <div className="mb-6 rounded-lg border-[0.8px] border-destructive-foreground bg-[#1E1E1E] p-4 text-center text-destructive-foreground">
          <p className="text-xs font-medium">
            Verify your email to continue. Check your inbox for a confirmation
            link.
          </p>
        </div>
      )}
      {error && error_code === "otp_expired" && (
        <div className="mb-6 rounded-lg border-[0.8px] border-destructive-foreground bg-[#1E1E1E] p-4 text-center text-destructive-foreground">
          <p className="text-xs font-medium">
            Your email link has expired or is invalid.
          </p>
        </div>
      )}
      {error && error_code === "auth-code-error" && (
        <div className="mb-6 rounded-lg border-[0.8px] border-destructive-foreground bg-[#1E1E1E] p-4 text-center text-destructive-foreground">
          <p className="text-xs font-medium">
            An error occurred while trying to verify the magic link.
          </p>
        </div>
      )}
    </div>
  );
}
