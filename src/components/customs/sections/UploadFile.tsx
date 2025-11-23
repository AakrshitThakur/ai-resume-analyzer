"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import File from "./File";
import Progress from "@/components/customs/Progress";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";

// bg-[url('/static-bubbles.svg')] bg-cover

export default function UploadFile() {
  const loading: boolean = useSelector((state: RootState) => state.loading.isAnalysisLoading);
  return (
    <section id="upload-file" className="color-base-100 color-base-content p-3 sm:p-4 md:p-5">
      <form>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: loading ? 0.3 : 1 }}
          transition={{ type: "tween", duration: 0.75 }}
          className={`grid grid-cols-1 md:grid-cols-2 gap-1 rounded-xl p-5 sm:p-6 md:p-7 
            ${loading && "color-neutral color-neutral-content cursor-not-allowed"}`}
        >
          <div className="flex flex-col justify-center items-center gap-1 p-3 sm:p-5 md:p-7">
            <div className="flex flex-col justify-center items-center gap-1 rounded-md p-3 sm:p-4 md:p-5">
              <Image
                src="/cv.png"
                alt="CV Image"
                width={100}
                height={100}
                className="w-[5rem] sm:w-[6rem] md:w-[7rem] h-auto"
              />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center leading-none">
                {loading ? "Please Wait..." : "ResumeReviewer"}
              </h3>
              {loading && <Progress />}
            </div>
          </div>
          <File />
        </motion.div>
      </form>
    </section>
  );
}
