import React from "react";
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";

export default function MainHeading() {
  return (
    <section id="main-heading" className="h-[65vh] flex items-center">
      <div className="p-6 sm:p-8 lg:p-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl font-bold tracking-tight">
          Smart Resume Feedback&nbsp;
          <br className="md:hidden" />
          in a Blink
        </h1>
        <Separator />
        <motion.span
          initial={{ x: "-100vw" }} // Start from far left
          animate={{ x: 0 }} // Slide into original position
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          transition={{ type: "tween", duration: 0.6 }}
          className="text-xs sm:text-sm md:text-lg text-center inline-block leading-none"
        >
          Submit your resume to review the results provided by AI.
        </motion.span>
      </div>
    </section>
  );
}
