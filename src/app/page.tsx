"use client";
import Navbar from "@/components/customs/Navbar";
import MainHeading from "@/components/customs/sections/MainHeading";
import UploadFile from "@/components/customs/sections/UploadFile";
import Accordion from "@/components/customs/sections/Accordion";
import AnalysisReport from "@/components/customs/sections/AnalysisReport";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";

export default function Home() {
  const analysisResult = useSelector((state: RootState) => state.result.gotAnalysisResult);
  return (
    <div id="home">
      <Navbar />
      <MainHeading />
      <UploadFile />
      {analysisResult && <AnalysisReport />}
      <Accordion />
    </div>
  );
}
