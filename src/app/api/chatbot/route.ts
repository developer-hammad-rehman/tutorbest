import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    if (!prompt) {
      return new NextResponse("Please Enter The Prompt", { status: 404 });
    } else {
      const openai = new OpenAI({
        apiKey: process.env.OPEN_AI_API_KEY,
      });
      const chat = await openai.chat.completions.create({
        messages: [
          {
            role: "user",
            content: `You have to Provide information related to studies according to ${prompt}`,
          },
        ],
        model: "gpt-3.5-turbo",
      });
      const response = chat.choices[0].message.content;
      return NextResponse.json({ response: response });
    }
  } catch (error) {
    console.log((error as { message: string }).message);
    return new NextResponse("Something went Wrong", { status: 500 });
  }
}
