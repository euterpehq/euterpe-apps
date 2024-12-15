"use client";
import React from "react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { IoHourglassOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

type WaitListProp = {
  onSubmit: (formData: any) => Promise<void>;
};

function Waitlist({ onSubmit }: WaitListProp) {
  const pathname = usePathname();
  const subtext =
    pathname === "/artists"
      ? "We understand the need for visibility, join our waitlist to expand your reach"
      : "Be the first to experience music that pays you";

  return (
    <div
      id="waitlist"
      className="flex flex-col items-center px-[20px] pb-[100px] pt-[40px] text-center md:px-[60px] md:pb-[180px] md:pt-[180px]"
    >
      <CoinIcon />
      <div className="mb-12 mt-6 flex flex-col gap-3">
        <h1 className="text-[40px] font-semibold tracking-[-0.06em] md:text-[48px]">
          The waitlist is open
        </h1>
        <p className="w-[304px] text-center text-[20px] text-[#B1B5C6] md:w-full md:text-xl">
          {subtext}
        </p>
      </div>
      <SubscribeForm onSubmit={onSubmit} />
    </div>
  );
}

function CoinIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="64" height="64" rx="32" fill="#C1FF70" />
      <rect
        x="16"
        y="16"
        width="32"
        height="32"
        fill="url(#pattern0_2653_6557)"
      />
      <defs>
        <pattern
          id="pattern0_2653_6557"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2653_6557" transform="scale(0.0025)" />
        </pattern>
        <image
          id="image0_2653_6557"
          width="400"
          height="400"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

function SubscribeForm({ onSubmit }: WaitListProp) {
  const FormSchema = z.object({
    email: z.string().email(),
  });
  const [isShaking, setIsShaking] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { errors } = form.formState;

  useEffect(() => {
    if (errors.email) {
      setIsShaking(true);
    }
  }, [errors]);

  function handleAnimationEnd() {
    setTimeout(() => setIsShaking(false), 200);
  }

  async function handleSubmit(formData: any) {
    setIsSubmitted(false);
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      setIsSubmitted(true);
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex w-full flex-col items-center justify-center gap-3 md:flex-row"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full md:w-fit">
              <FormControl>
                <Input
                  className={cn(
                    "text-cream/90 h-[56px] w-full rounded-[8px] border-[0.5px] border-[#757575] bg-transparent placeholder:text-[#B1B5C6] focus-visible:ring-transparent md:w-[425px]",
                    {
                      "animate-shake": isShaking,
                    },
                  )}
                  type="email"
                  placeholder="Email address"
                  {...field}
                  onAnimationEnd={handleAnimationEnd}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          size="sm"
          className="h-[56px] w-full rounded-[8px] md:w-[129px]"
        >
          {isSubmitting ? (
            <IoHourglassOutline
              className={cn(
                "animate-ease-linear size-6",
                "animation-delay-500 animate-ease-out animate-spin",
              )}
            />
          ) : (
            <>Join the waitlist</>
          )}
        </Button>
      </form>
    </Form>
  );
}

export default Waitlist;
