"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@headlessui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import ToggleBtn from "./ToggleBtn";

const Navbar: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const isLightModeActive = resolvedTheme === "light";
  return (
    <nav
      className={`w-full ${
        isLightModeActive ? "bg-[#afcbd6]" : "bg-[#20464f]"
      } bg-opacity-70 backdrop-blur-md shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center space-x-4">
          <Link className="flex" href="/">
            <Avatar className="h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16 mr-1">
              <AvatarImage
                src="/AakrshitThakurPassportPic.jpeg"
                alt="Aakrshit Thakur Picture"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Button className="hidden sm:inline-block cursor-pointer mr-1 font-bold text-2xl text-center leading-none">
              ResumeReviewer
            </Button>
          </Link>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/AakrshitThakur">
            <FaGithub className="h-7 w-auto mb-1" />
          </Link>
          <Link href="https://www.linkedin.com/in/aakrshit-thakur-14433627b/">
            <FaLinkedin className="h-7 w-auto mb-1" />
          </Link>
          <div>
            <ToggleBtn />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
