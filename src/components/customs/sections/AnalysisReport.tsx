import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Star } from "lucide-react";
import { useSelector } from "react-redux";
import { LlmResult } from "@/utils/interfaces/result";
import { RootState } from "@/store/index";
import { SectionResult } from "@/utils/interfaces/result";

export default function AnalysisReport() {
  const llmResult: LlmResult | null = useSelector(
    (state: RootState) => state.result.analysisResult
  );
  if (!llmResult) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No analysis data available.</p>
      </div>
    );
  }
  const sections = Object.entries(llmResult) as [string, SectionResult][];

  if (sections.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No analysis data available.</p>
      </div>
    );
  }

  return (
    <div className="flex space-x-4 overflow-x-auto py-4 snap-x snap-mandatory">
      {sections.map(([section, data]) => (
        <div
          key={section}
          className="snap-start min-w-[300px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[600px] xl:min-w-[700px]"
        >
          <Card className="border font-color secondary-surface">
            <CardHeader className="flex flex-col sm:flex-row items-center justify-between">
              <CardTitle className="capitalize text-lg font-semibold">
                {section.toLowerCase()}
              </CardTitle>
              <Badge
                variant="secondary"
                className="flex items-center space-x-1"
              >
                <Star className="h-4 w-4" />
                <span>{data.SCORE ?? "N/A"}/10</span>
              </Badge>
            </CardHeader>
            <CardContent>
              <Accordion type="multiple" className="space-y-2">
                <AccordionItem value="merits">
                  <AccordionTrigger className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span>Merits</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6">
                      {(data.MERITS ?? []).map((m, idx) => (
                        <li key={idx} className="mb-1">
                          {m}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="demerits">
                  <AccordionTrigger className="flex items-center">
                    <XCircle className="mr-2 h-5 w-5 text-red-500" />
                    <span>Demerits</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6">
                      {(data.DEMERITS ?? []).map((d, idx) => (
                        <li key={idx} className="mb-1">
                          {d}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="mt-4">
                <h4 className="font-medium">Detailed Analysis</h4>
                <p className="mt-2 text-sm leading-relaxed">
                  {data.DETAILED_ANALYSIS ?? "No details provided."}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
