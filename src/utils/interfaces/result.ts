export interface SectionResult {
  MERITS: string[];
  DEMERITS: string[];
  SCORE: number;
  DETAILED_ANALYSIS: string;
}

export interface LlmResult {
  [section: string]: SectionResult;
}
