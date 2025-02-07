"use client";
import React, { useState } from "react";
import Hero from "@/partials/artists/Hero";
import FirstCTA from "@/partials/artists/FirstCTA";
import SecondCTA from "@/partials/artists/SecondCTA";
import Waitlist from "@/partials/Waitlist";
import SuccessfulWaitlist from "@/partials/SuccessfulWaitlist";
import { useFormspark } from "@formspark/use-formspark";
import { motion } from "motion/react";
import ThirdCTA from "@/partials/artists/ThirdCTA";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  const formId =
    pathname === "/artists"
      ? process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID_ARTISTS
      : process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID_USERS;
  const [submit, submitting] = useFormspark({
    formId: formId ?? "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (formData: any) => {
    try {
      await submit(formData);
      setIsSubmitted(true);
    } catch (error) {
      setIsSubmitted(false);
    }
  };

  return (
    <>
      <Hero />
      <FirstCTA />
      <SecondCTA />
      {/* <ThirdCTA /> */}
      {!isSubmitted ? (
        <Waitlist onSubmit={handleSubmit} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <SuccessfulWaitlist />
        </motion.div>
      )}
    </>
  );
}
