"use client";
import FirstCTA from "@/partials/landing/FirstCTA";
import Hero from "@/partials/landing/Hero";
import SecondCTA from "@/partials/landing/SecondCTA";
import { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import { motion } from "motion/react";
import Waitlist from "@/partials/Waitlist";
import SuccessfulWaitlist from "@/partials/SuccessfulWaitlist";
import { usePathname } from "next/navigation";
import ThirdCTA from "@/partials/landing/ThirdCTA";
import ForthCTA from "@/partials/landing/ForthCTA";

export default function Home() {
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
    <div>
      <Hero />
      <FirstCTA />
      <SecondCTA />
      <ThirdCTA />
      <ForthCTA />
      {/*!isSubmitted ? (
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
      )*/}
    </div>
  );
}
