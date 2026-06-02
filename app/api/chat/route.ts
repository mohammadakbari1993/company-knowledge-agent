import { NextRequest, NextResponse } from "next/server";
import { findBestMatch } from "@/lib/retrieval";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const question = body.question;

  if (!question) {
    return NextResponse.json(
      { error: "Question is required" },
      { status: 400 }
    );
  }

  const match = findBestMatch(question);

  const cleanedAnswer = match?.content
    ?.split("\n\n")
    .slice(1)
    .join("\n\n")
    .trim();

  return NextResponse.json({
    answer: cleanedAnswer || "No relevant information found.",
    source: match?.source || null,
  });
}
