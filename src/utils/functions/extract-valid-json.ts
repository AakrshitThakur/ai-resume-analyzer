export default function extractValidJSON(responseText: any) {
  try {
    // Remove code fences if they exist
    const cleaned = responseText
      .trim()
      .replace(/^```json\s*/i, "") // Remove ```json
      .replace(/^```/, "") // Remove ``` if used without json
      .replace(/```$/, ""); // Remove closing ```

    // Try to parse as JSON
    return JSON.parse(cleaned);
  } catch (error: any) {
    console.error("JSON parsing failed: ", error.message);
    throw new Error("Invalid JSON returned from LLM");
  }
}
