import React from "react";
import { motion } from "motion/react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Star, ChevronDown } from "lucide-react";
import { useSelector } from "react-redux";
import { LlmResult } from "@/utils/interfaces/result";
import { RootState } from "@/store/index";
import { SectionResult } from "@/utils/interfaces/result";

export default function AnalysisReport() {
  const llmResult: LlmResult | null = useSelector((state: RootState) => state.result.analysisResult);
  if (!llmResult) {
    return (
      <motion.div
        initial={{ x: "-100vw" }} // Start from far left
        animate={{ x: 0 }} // Slide into original position
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.8 }}
        transition={{ type: "tween", duration: 0.6 }}
      >
        <p className="text-gray-500">No analysis data available.</p>
      </motion.div>
    );
  }
  const sections = Object.entries(llmResult) as [string, SectionResult][];

  if (sections.length === 0) {
    return (
      <motion.div
        initial={{ x: "-100vw" }} // Start from far left
        animate={{ x: 0 }} // Slide into original position
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.8 }}
        transition={{ type: "tween", duration: 0.6 }}
      >
        <p className="text-gray-500">No analysis data available.</p>
      </motion.div>
    );
  }

  return (
    // "snap" in Tailwind is about scrolling that sticks
    <div className="flex gap-3 overflow-x-auto text-sm py-5 sm:py-6 md:py-7 px-5 mb-3 snap-x snap-mandatory">
      {sections.map(([section, data]) => (
        <motion.div
          key={section}
          className="w-2xs sm:w-xs md:w-md lg:w-lg h-auto space-y-1 border snap-start shrink-0 rounded-lg p-3"
          initial={{ x: "-100vw" }} // start from far left
          animate={{ x: 0 }} // slide into original position
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          {/* card-header */}
          <header className="flex flex-col sm:flex-row items-center justify-between">
            <h3 className="capitalize text-lg font-semibold">{section.toLowerCase()}</h3>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-amber-300" />
              <span>{data.SCORE ?? "N/A"}/10</span>
            </div>
          </header>
          {/* card-content */}
          <div id="card-content" className="space-y-1">
            {/* merits */}
            <Disclosure as="div" className="color-success color-success-content rounded-md text-sm p-3" defaultOpen={false}>
              {/* The group class in Tailwind is a way to let child elements react to the state of a parent element */}
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="font-medium underline">Merits</span>
                {/* the child reacts to a data attribute on the parent */}
                <ChevronDown className="size-3 group-data-open:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="text-xs">
                <ul className="list-disc pl-6">
                  {(data.MERITS ?? []).map((m, idx) => (
                    <li key={idx} className="mb-1">
                      {m}
                    </li>
                  ))}
                </ul>
              </DisclosurePanel>
            </Disclosure>

            {/* demerits */}
            <Disclosure as="div" className="color-error color-error-content rounded-md text-sm p-3" defaultOpen={false}>
              {/* The group class in Tailwind is a way to let child elements react to the state of a parent element */}
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="font-medium underline">Demerits</span>
                {/* the child reacts to a data attribute on the parent */}
                <ChevronDown className="size-3 group-data-open:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="text-xs">
                <ul className="list-disc pl-6">
                  {(data.DEMERITS ?? []).map((d, idx) => (
                    <li key={idx} className="mb-1">
                      {d}
                    </li>
                  ))}
                </ul>
              </DisclosurePanel>
            </Disclosure>

            {/* detailed analysis */}
            <div className="color-info color-info-content p-2 rounded-md">
              <h4 className="text-sm underline font-medium">Detailed Analysis</h4>
              <p className="mt-2 text-xs leading-relaxed">{data.DETAILED_ANALYSIS ?? "No details provided."}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
