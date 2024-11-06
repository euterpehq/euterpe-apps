"use client";

import { useState } from "react";
import { Bell, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import profileImage from "../../../public/images/profile.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="border-b border-[#303033]">
        <div className="flex items-center justify-between space-x-6 h-[64px] px-[24px] py-[8px] max-w-[90rem] mx-auto">
          <ul className="flex items-center w-[35.85px] gap-[16px]">
            <li className="text-[16px] font-bold mr-2 cursor-pointer">Eutepre.</li>

            <li className="hidden sm:flex items-center gap-[16px]">
              <li className="w-[0.5px] h-[24px] border-r border-[#303033]"></li>
              <Link href={"/home"}>
                <li className="text-[15px] font-semibold px-[12px] py-[6px] bg-[#1B1B1B] rounded-[8px] cursor-pointer">Home</li>
              </Link>
              <Link href={"/explore"}>
                <li className="text-[15px] font-semibold px-[12px] py-[6px] cursor-pointer">Explore</li>
              </Link>
              <Link href={"/portfolio"}>
                <li className="text-[15px] font-semibold px-[12px] py-[6px] cursor-pointer">Portfolio</li>
              </Link>
            </li>
          </ul>

          {/* Right-side icons and profile */}
          <ul className="hidden sm:flex items-center gap-[16px] w-[189.5px]">
            <li className="cursor-pointer"><Bell size={16} strokeWidth={1.5} /></li>
            <li className="w-[0.5px] h-[24px] border-r border-[#303033]"></li>

            <li>
              <li className="flex items-center space-x-3 bg-[#1B1B1B] h-[36px] px-[12px] py-[8px] rounded-[8px] cursor-pointer">
                <Image
                  src={profileImage}
                  alt="profile image"
                  className="rounded-full"
                  width={20}
                  height={20}
                />
                <p className="text-xs">0xC69D...DD6C</p>
              </li>
            </li>
          </ul>

          {/* Menu Icon for Small Screens */}
          <div className="sm:hidden flex">
            {isMenuOpen ? (
              <X size={24} strokeWidth={1.5} onClick={toggleMenu} className="cursor-pointer" />
            ) : (
              <Menu size={24} strokeWidth={1.5} onClick={toggleMenu} className="cursor-pointer" />
            )}
          </div>
        </div>
      </nav>

      {/* Dropdown Menu for Small Screens */}
      <ul
        className={`sm:hidden flex flex-col bg-[#1B1B1B] py-2 px-[24px] transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-[200px] opacity-100 transform translate-y-0" : "max-h-0 opacity-0 transform -translate-y-2"
          } overflow-hidden`}
      >
        <Link href={"/home"} className="w-fit">
          <li className="text-[15px] font-semibold py-[6px] cursor-pointer hover:text-[#B8FF5C]">Home</li>
        </Link>
        <Link href={"/explore"} className="w-fit">
          <li className="text-[15px] font-semibold py-[6px] cursor-pointer hover:text-[#B8FF5C]">Explore</li>
        </Link>
        <Link href={"/portfolio"} className="w-fit">
          <li className="text-[15px] font-semibold py-[6px] cursor-pointer hover:text-[#B8FF5C]">Portfolio</li>
        </Link>
        <li className="text-[15px] font-semibold py-[6px] cursor-pointer">
          <li className="flex items-center space-x-3 bg-[#111111] h-[36px] w-fit px-[12px] py-[8px] rounded-[8px]">
            <Image
              src={profileImage}
              alt="profile image"
              className="rounded-full"
              width={20}
              height={20}
            />
            <p className="text-xs">0xC69D...DD6C</p>
          </li>
        </li>
      </ul>
    </>
  );
};
