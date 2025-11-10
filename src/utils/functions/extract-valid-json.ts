// \s means: “match a whitespace character” (space, tab, newline)
export default function extractValidJSON(responseText: string) {
  try {
    // Remove code fences if they exist
    const cleaned = responseText
      .trim()
      .replace(/^```json\s*/i, "") // Remove ```json
      .replace(/^```/, "") // Remove ``` if used without json
      .replace(/```$/, ""); // Remove closing ```

    // Try to parse as JSON
    return JSON.parse(cleaned);
  } catch (error) {
    if (error instanceof Error) {
      console.error("JSON parsing failed:", error.message);
    } else {
      console.error("JSON parsing failed with an unknown error:", error);
    }
    throw new Error("Invalid JSON returned from LLM");
  }
}
