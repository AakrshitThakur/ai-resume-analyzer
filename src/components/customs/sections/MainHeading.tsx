import React from "react";
import { Separator } from "@/components/ui/separator";

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
        <span className="text-xs sm:text-sm md:text-lg text-center leading-none">
          Submit your resume to review the results provided by AI.
        </span>
      </div>
    </section>
  );
}
