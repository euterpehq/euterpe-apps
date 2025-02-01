"use client";
import React, { useEffect } from "react";
import { toast } from "@/components/ui/use-toast";

type ServerActionResultProps = {
  result: {
    data?:
      | {
          message: string;
        }
      | undefined;
    serverError?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validationErrors?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    bindArgsValidationErrors?: any;
  };
  showToast?: boolean;
};

function ServerActionResponseToast({
  result,
  showToast,
}: ServerActionResultProps) {
  const { data, serverError } = result;

  useEffect(() => {
    if (!showToast) return;
    if (data?.message) {
      toast({
        title: data.message,
      });
    }
    if (serverError) {
      toast({
        title: serverError,
      });
    }
  }, [showToast]);
  return null;
}

export default ServerActionResponseToast;
