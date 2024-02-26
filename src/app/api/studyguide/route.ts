import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req:NextRequest) {
    try {
        const {prompt} = await req.json()
        if (!prompt) {
            return new NextResponse("Please Enter The Prompt" , {status:404})
        }else{
            const openai = new OpenAI({
                apiKey:process.env.OPEN_AI_API_KEY
            })
            const chat = await openai.chat.completions.create({
                messages:[{role:'system' , content:`You are best study guider you have to generate study guide of ${prompt} make me the long guide with  heading give me this content only  in html heading tag and paragragh tag with tailwindcss style with out any background`}],
                model:"gpt-3.5-turbo"
            })
            const response = chat.choices[0].message.content
            return NextResponse.json({response : response})
        }
    } catch (error) {
        console.log((error as {message:string}).message);
        return new NextResponse("Something Went Wrong" ,{status:500})
    }
}