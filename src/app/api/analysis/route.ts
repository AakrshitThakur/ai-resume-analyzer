// app/api/upload/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import pdfParse from "pdf-parse";
import extractValidJSON from "@/utils/functions/extract-valid-json";
import primarySystemPrompt from "@/utils/constants/primary-system-prompt";

// opt into Node.js runtime so we can buffer the file
export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  // 1) Parse the incoming form
  const formData = await request.formData();
  const file = formData.get("pdf");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  // 2) Read it into a Buffer
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // 3) Parse the PDF
  try {
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Invalid LLM API key" },
        { status: 500 }
      );
    }
    const data = await pdfParse(buffer);
    // data.text is a string containing all extracted text
    const llmRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text:
                    primarySystemPrompt +
                    "\n---RESUME CONTENT BELOW---\n" +
                    data.text,
                },
              ],
            },
          ],
        }),
      }
    );
    if (!llmRes.ok) {
      // Handle non‑200 from Google API
      const errBody = await llmRes.text();
      console.error("LLM API error:", errBody);
      return NextResponse.json(
        { error: "LLM service responded with an error" },
        { status: llmRes.status }
      );
    }

    const llmData = await llmRes.json();
    const result = llmData.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!result) {
      return NextResponse.json(
        { error: "Malformed LLM response" },
        { status: 500 }
      );
    }

    const resultObj = extractValidJSON(result);
    return NextResponse.json(
      {
        message: "The result was obtained successfully",
        llm_result: resultObj,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("ERROR:", error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
