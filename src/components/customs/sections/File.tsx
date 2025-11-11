"use client";
import { useDispatch } from "react-redux";
import { motion } from "motion/react";
import { setToTrue, setToFalse } from "@/features/loading-slice";
import { setToTrue as st, setToFalse as sf } from "@/features/result-slice";
import { FaFileAlt } from "react-icons/fa";
import { LlmResult } from "@/utils/interfaces/result";
import validatePdfExtension from "@/utils/functions/validate-pdf-extension";
import { successNotification, errorNotification } from "@/utils/functions/toast";

export default function File() {
  const dispatch = useDispatch();

  async function fetchAnalysisResult(form: FormData, e: React.ChangeEvent<HTMLInputElement>) {
    try {
      const res = await fetch("/api/analysis", {
        method: "POST",
        body: form,
      });
      const json = await res.json();

      // error response
      if (json.error) {
        const { error }: { error: string } = json;
        console.error(error);
        errorNotification(error);
        dispatch(sf());
        dispatch(setToFalse());
      } else {
        // success response
        const { llm_result, message }: { llm_result: LlmResult; message: string } = json;
        dispatch(st(llm_result));
        dispatch(setToFalse());
        successNotification(message);
      }
      // Reset input so the same file can be chosen again
      e.target.value = "";
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error);
        errorNotification(error.message);
      } else {
        console.error("UNKNOWN ERROR:", error);
        errorNotification("An unknown error occurred");
      }

      dispatch(sf());
      dispatch(setToFalse());

      // Reset input so the same file can be chosen again
      e.target.value = "";
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
      fetchAnalysisResult(fd, e);
    } catch (error: unknown) {
      if (error instanceof Error) {
        const message = error.message;
        console.error(message);
        errorNotification(message);
      } else {
        console.error("UNKNOWN ERROR:", error);
        errorNotification("An unknown error occurred");
      }

      dispatch(sf());
      dispatch(setToFalse());
    }
  }

  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: "0" }}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.75 }}
      transition={{ type: "tween", duration: 0.5 }}
      className="flex flex-col justify-center items-center cursor-pointer p-3 sm:p-5 md:p-7"
    >
      <input className="hidden" type="file" id="file-upload" accept="application/pdf" onChange={handleFileChange} />
      <label
        className="flex flex-col items-center gap-1 border rounded-md p-3 sm:p-4 md:p-5 cursor-pointer"
        htmlFor="file-upload"
      >
        <FaFileAlt className="w-[5rem] sm:w-[6rem] md:w-[7rem] h-auto" />
        <span className="text-sm text-center leading-none">Click here to upload your resume</span>
      </label>
    </motion.div>
  );
}
