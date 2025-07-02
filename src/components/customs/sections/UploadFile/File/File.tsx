"use client";
import React from "react";
import callToast from "@/utils/functions/callToast";
import { useSelector, useDispatch } from "react-redux";
import { setToTrue, setToFalse } from "@/features/loadingSlice";
import { setToTrue as st, setToFalse as sf } from "@/features/resultSlice";
import {
  FaFileAlt, // file with text lines
} from "react-icons/fa";
import { LlmResult } from "@/utils/interfaces/result";
import validatePdfExtension from "@/utils/functions/validatePdfExtension";

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
    } catch (error: any) {
      console.error(error);
      callToast(error.message, 500);
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
        const error: any = new Error("Please provide a PDF file");
        error.statusCode = 400;
        throw error;
      }
      const fd = new FormData();
      fd.append("pdf", file);
      dispatch(setToTrue());
      fetchAnalysisResult(fd);
    } catch (error: any) {
      console.error(error.message);
      callToast(error.message, error.statusCode);
      dispatch(sf());
      dispatch(setToFalse());
    }
  }

  return (
    <div className="cursor-pointer dashed-border p-4 sm:p-6 md:p-8 flex flex-col justify-center items-center">
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
    </div>
  );
}
