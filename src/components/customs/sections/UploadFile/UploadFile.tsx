"use client";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import File from "./File/File";
import Progress from "@/components/customs/Progress";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";

export default function UploadFile() {
  const loading: boolean = useSelector(
    (state: RootState) => state.loading.isAnalysisLoading
  );
  return (
    <section id="upload-file" className="surface">
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 p-6 sm:p-8 lg:p-12">
          <div className="md:dashed-border-r p-4 sm:p-6 md:p-8 flex flex-col justify-center items-center">
            <FaUserCircle className="text-5xl sm:text-7xl md:text-9xl mb-1" />
            <svg
              className="mr-3 size-5 animate-spin ..."
              viewBox="0 0 24 24"
            ></svg>
            {loading && <Progress />}
          </div>
          <File />
        </div>
      </form>
    </section>
  );
}
