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


export default function Page() {
  const [submit, submitting] = useFormspark({
    formId: process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID ?? "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  
  const handleSubmit = async (formData: any) => {
    try {
      await submit(formData);
      //console.log("submitted>>",formData)
      setIsSubmitted(true)
    } catch (error) {
      //console.error("Submission failed:", error);
      //alert("Something went wrong. Please try again later.");
      setIsSubmitted(false);
    }
  };

  return (
    <>
      <Hero />
      <FirstCTA />
      <SecondCTA />
      <ThirdCTA />
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
