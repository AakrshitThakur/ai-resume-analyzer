"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@headlessui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";

import ToggleBtn from "./ToggleBtn";

const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: "-100px" }}
      animate={{ y: 0 }}
      transition={{ type: "tween", duration: 0.5 }}
      className="w-full color-neutral color-neutral-content"
    >
      <div className="flex justify-between px-5 py-3">
        {/* brand */}
        <div className="flex items-center space-x-4">
          <Link className="flex gap-1" href="/">
            <div className="h-auto w-9 sm:w-11 md:w-13 rounded-full overflow-hidden">
              <Image src="/AakrshitThakurPassportPic.jpeg" alt="Aakrshit Thakur passport pic" className="w-full h-full" />
            </div>
            <Button className="text-xl sm:text-2xl md:text-3xl cursor-pointer font-bold text-center mr-1 leading-none">
              ResumeReviewer
            </Button>
          </Link>
        </div>

        {/* navigation buttons */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.75 }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <Link href="https://github.com/AakrshitThakur">
              <FaGithub className="h-5 sm:h-7 w-auto" />
            </Link>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.75 }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <Link href="https://www.linkedin.com/in/aakrshit-thakur-14433627b/">
              <FaLinkedin className="h-5 sm:h-7 w-auto" />
            </Link>
          </motion.button>
          <div>
            {/* light-dark toggle btn */}
            <ToggleBtn />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
