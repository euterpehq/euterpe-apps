import React from "react";
import Navbar from "./Navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="relative flex min-h-screen flex-col w-full bg-black rounded-md overflow-hidden z-0 transform rotate-180">
        {/* Background Elements with Conic Gradients */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div
            className="relative w-[60rem] h-[600px] rounded-xl bg-gradient-to-br from-[#D6FFA0] via-transparent to-transparent"
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              backgroundPosition: "top",
              zIndex: 10,
            }}
          >
            <div className="absolute inset-x-0 bottom-0 h-40 bg-black z-20 mask-image-[linear-gradient(to_bottom,white,transparent)]"></div>
            <div className="absolute inset-y-0 left-0 w-40 bg-black z-20 mask-image-[linear-gradient(to_left,white,transparent)]"></div>
          </div>

          <div
            className="relative w-[60rem] h-[600px] rounded-xl bg-gradient-to-bl from-transparent via-transparent to-[#D6FFA0]"
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              backgroundPosition: "top",
              zIndex: 5,
            }}
          >
            <div className="absolute inset-y-0 right-0 w-40 bg-black z-20 mask-image-[linear-gradient(to_right,white,transparent)]"></div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-black z-20 mask-image-[linear-gradient(to_bottom,white,transparent)]"></div>
          </div>
        </div>

        {/* Smoother Light and Blurry Effects */}
        <div className="absolute inset-0 z-0 flex justify-center items-center">
          <div className="absolute top-1/2 w-full h-48 translate-y-12 bg-black blur-2xl"></div>
          <div className="absolute top-1/2 w-full h-48 bg-transparent opacity-10 backdrop-blur-md z-30"></div>
          <div className="absolute top-1/2 w-[28rem] h-36 rounded-full bg-[#D6FFA0] opacity-50 blur-3xl z-40"></div>
          <div className="absolute top-1/2 w-64 h-36 rounded-full bg-[#D6FFA0] blur-2xl -translate-y-[6rem] z-30"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-50 flex flex-col items-center px-5 -translate-y-80">
          <h1 className="text-white text-4xl font-semibold mb-4">Welcome to Our Page</h1>
          <p className="text-white text-lg opacity-80 mb-8">
            This layout has been flipped upside down while maintaining a smooth, polished design.
          </p>
          <button className="bg-[#D6FFA0] text-black font-semibold px-6 py-3 rounded-full hover:bg-opacity-80 transition-all duration-300 ease-in-out">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
