"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@headlessui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "motion/react";

import ToggleBtn from "./ToggleBtn";

const Navbar: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const isLightModeActive = resolvedTheme === "light";
  return (
    <motion.nav
      initial={{ y: "-100px" }}
      animate={{ y: 0 }}
      transition={{ type: "tween", duration: 0.6 }}
      className={`w-full ${
        isLightModeActive ? "bg-[#afcbd6]" : "bg-[#20464f]"
      } bg-opacity-70 backdrop-blur-md shadow-md`}
    >
      <div className="flex justify-between px-6 py-4">
        {/* Brand */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          transition={{ type: "tween", duration: 0.6 }}
          className="flex items-center space-x-4"
        >
          <Link className="flex" href="/">
            <Avatar className="h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16 mr-1">
              <AvatarImage
                src="/AakrshitThakurPassportPic.jpeg"
                alt="Aakrshit Thakur passport pic"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Button className="text-2xl sm:text-3xl hidden sm:inline-block cursor-pointer font-bold text-center mr-1 leading-none">
              ResumeReviewer
            </Button>
          </Link>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "tween", duration: 0.6 }}
          >
            <Link href="https://github.com/AakrshitThakur">
              <FaGithub className="h-7 sm:h-9 w-auto" />
            </Link>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "tween", duration: 0.6 }}
          >
            <Link href="https://www.linkedin.com/in/aakrshit-thakur-14433627b/">
              <FaLinkedin className="h-7 sm:h-9 w-auto" />
            </Link>
          </motion.button>
          <div>
            <ToggleBtn />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
