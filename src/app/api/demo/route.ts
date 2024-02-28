import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { NextRequest, NextResponse } from 'next/server';
 
// Optional, but recommended: run on the edge runtime.
// See https://vercel.com/docs/concepts/functions/edge-functions

export async function POST(req: NextRequest) {
    const {messages}  = await req.json()
  const openai = new OpenAI({
    apiKey:process.env.OPEN_AI_API_KEY
  })
  const response = await openai.chat.completions.create({
    messages:[{role:"user" , content:`Generate 15 multiple-choice questions in HTML and simple Tailwind CSS style in grouplist for the topic ${messages}. Provide answer choices and highlight the correct answer for each question in green.`}],
    model:"gpt-3.5-turbo",
    stream:true
  })
  const stream = OpenAIStream(response)
  const s = new StreamingTextResponse(stream);
  return NextResponse.json({response:s})
}