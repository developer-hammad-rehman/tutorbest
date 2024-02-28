import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();
    if (!prompt) {
      return new NextResponse("Please Enter The Prompt", { status: 404 });
    } else {
      const openai = new OpenAI({
        apiKey: process.env.OPEN_AI_API_KEY,
      });
      const chat = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: `Generate 15 multiple-choice questions in HTML and simple Tailwind CSS style in grouplist for the topic ${prompt}. Provide answer choices and highlight the correct answer for each question in green.`,
          },
        ],
        model: "gpt-3.5-turbo",
      });
      const response = chat.choices[0].message.content;
      return NextResponse.json({ response: response });
    }
  } catch (error) {
    console.error((error as { message: string }).message);
    return new NextResponse("Something Went Wrong", { status: 500 });
  }
}
