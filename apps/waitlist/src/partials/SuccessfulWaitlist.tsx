import React from "react";

function SuccessfulWaitlist() {
  return (
    <div className="flex h-[646px] flex-col items-center gap-6 px-[60px] py-[180px] text-center">
      <CheckIcon />
      <div className="gap-3">
        <h2 className="semibold text-[40px]">
          You’re in! Welcome to the future of music streaming!
        </h2>
        <p className="text-[#B1B5C6]">
          Thanks for joining the waitlist. We’re thrilled to have you on board!
        </p>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" rx="50" fill="#C1FF70" />
      <path
        d="M75.9955 35.0621L71.7275 30.7941C70.9395 30.0081 69.6675 30.0081 68.8815 30.7941L43.2915 56.3841L31.1195 44.1241C30.3335 43.3381 29.0615 43.3381 28.2735 44.1241L24.0055 48.3921C23.2195 49.1801 23.2195 50.4521 24.0055 51.2381L41.8535 69.2061C42.6395 69.9921 43.9135 69.9921 44.6995 69.2061L75.9955 37.9081C76.7815 37.1241 76.7815 35.8481 75.9955 35.0621Z"
        fill="black"
      />
    </svg>
  );
}

export default SuccessfulWaitlist;
