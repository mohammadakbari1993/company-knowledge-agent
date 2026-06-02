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

  return NextResponse.json({
    answer: match?.content || "No relevant information found.",
    source: match?.name || null,
  });
}
