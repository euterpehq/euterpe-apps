"use client";
import FirstCTA from "@/partials/landing/FirstCTA";
import Hero from "@/partials/landing/Hero";
import SecondCTA from "@/partials/landing/SecondCTA";
import { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import { motion } from "motion/react";
import Waitlist from "@/partials/Waitlist";
import SuccessfulWaitlist from "@/partials/SuccessfulWaitlist";

export default function Home() {
  const [submit, submitting] = useFormspark({
    formId: process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID ?? "",
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
    </div>
  );
}
