import { Button } from "@headlessui/react";
import Link from "next/link";

export default function MainHeading() {
  return (
    <section
      id="main-heading"
      className="color-accent color-accent-content bg-grid-lines h-[45vh] sm:h-[55vh] md:h-[65vh] flex items-center box-content p-3 sm:p-4 md:p-5"
    >
      <div className="color-neutral color-neutral-content flex flex-col justify-center items-left gap-1 sm:gap-2 md:gap-3 rounded-xl p-5 sm:p-7 md:p-9 lg:p-11">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
          Smart Resume Feedback
          <br />
          <span>in a Blink</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base leading-none">
          Submit your resume to review the results provided by AI.
        </p>
        <div>
          <Link href="#upload-file">
            <Button className="color-success color-success-content px-4 py-2 text-sm cursor-pointer rounded-md data-active:bg-sky-700 data-hover:bg-sky-500">
              Start
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
