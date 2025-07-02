"use client";
import Navbar from "../components/customs/Navbar";
import MainHeading from "../components/customs/sections/MainHeading";
import UploadFile from "../components/customs/sections/UploadFile/UploadFile";
import Accordion from "../components/customs/sections/Accordion";
import AnalysisReport from "../components/customs/sections/AnalysisReport";
import { useSelector } from "react-redux";

export default function Home() {
  const analysisResult = useSelector(
    (state: any) => state.result.gotAnalysisResult
  );
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
