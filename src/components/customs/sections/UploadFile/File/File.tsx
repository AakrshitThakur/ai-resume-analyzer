"use client";
import React from "react";
import callToast from "@/utils/functions/call-toast";
import { useDispatch } from "react-redux";
import { setToTrue, setToFalse } from "@/features/loading-slice";
import { setToTrue as st, setToFalse as sf } from "@/features/result-slice";
import {
  FaFileAlt, // file with text lines
} from "react-icons/fa";
import { LlmResult } from "@/utils/interfaces/result";
import validatePdfExtension from "@/utils/functions/validate-pdf-extension";
import { motion } from "motion/react";

export default function File() {
  const dispatch = useDispatch();

  async function fetchAnalysisResult(form: FormData) {
    try {
      const res = await fetch("/api/analysis", {
        method: "POST",
        body: form,
      });
      if (!res.ok) {
        const status = res.status;
        const { message } = await res.json();
        console.error(message);
        callToast(message, status);
        dispatch(sf());
        dispatch(setToFalse());
      }
      const {
        llm_result,
        message,
      }: { llm_result: LlmResult; message: string } = await res.json();
      dispatch(st(llm_result));
      dispatch(setToFalse());
      callToast(message, 200);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error);
        callToast(error.message, 500);
      } else {
        console.error("UNKNOWN ERROR:", error);
        callToast("An unknown error occurred", 500);
      }

      dispatch(sf());
      dispatch(setToFalse());
    }
  }
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>): void {
    try {
      dispatch(sf());
      const file = e.target.files?.[0];
      if (!file) return;
      if (!validatePdfExtension(file.type)) {
        const error = new Error("Please provide a PDF file") as Error & {
          statusCode: number;
        };
        error.statusCode = 400;
        throw error;
      }

      const fd = new FormData();
      fd.append("pdf", file);
      dispatch(setToTrue());
      fetchAnalysisResult(fd);
    } catch (error: unknown) {
      if (error instanceof Error) {
        const message = error.message;
        const statusCode = (error as { statusCode?: number }).statusCode || 500;

        console.error(message);
        callToast(message, statusCode);
      } else {
        console.error("UNKNOWN ERROR:", error);
        callToast("An unknown error occurred", 500);
      }

      dispatch(sf());
      dispatch(setToFalse());
    }
  }

  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: "0" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
      transition={{ type: "tween", duration: 0.6 }}
      className="cursor-pointer dashed-border p-4 sm:p-6 md:p-8 flex flex-col justify-center items-center"
    >
      <input
        className="hidden"
        type="file"
        id="file-upload"
        accept="application/pdf"
        onChange={handleFileChange}
      />
      <label className="cursor-pointer" htmlFor="file-upload">
        <FaFileAlt className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl" />
        <span className="text-xs sm:text-sm md:text-lg text-center leading-none">
          Click here to upload your resume
        </span>
      </label>
    </motion.div>
  );
}
