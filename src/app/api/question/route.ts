import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import {OpenAIStream , StreamingTextResponse} from "ai"
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
            content: `Generate 15 multiple-choice  questions for the topic ${prompt}. in array for example you can take this and generete me this on this structure
            [
              {
                  question: "Which mountain range dominates the northern region of Pakistan?",
                  options: ["Himalayas", "Andes", "Alps", "Rocky Mountains"],
                  answer: "Himalayas"
              },
              {
                  question: "What is the name of the river often referred to as the lifeline of Pakistan?",
                  options: ["Nile River", "Amazon River", "Indus River", "Ganges River"],
                  answer: "Indus River"
              },
              {
                  question: "Which ancient civilization flourished in what is now Pakistan during the Bronze Age?",
                  options: ["Roman Empire", "Mesopotamian Civilization", "Indus Valley Civilization", "Greek Civilization"],
                  answer: "Indus Valley Civilization"
              },
              {
                  question: "Who is considered the founding father of Pakistan?",
                  options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Muhammad Ali Jinnah", "Allama Iqbal"],
                  answer: "Muhammad Ali Jinnah"
              },
              {
                  question: "Which province of Pakistan is known as the breadbasket of the country?",
                  options: ["Sindh", "Punjab", "Balochistan", "Khyber Pakhtunkhwa"],
                  answer: "Punjab"
              },
              {
                  question: "What year did Pakistan gain independence from British rule?",
                  options: ["1945", "1947", "1950", "1960"],
                  answer: "1947"
              },
              {
                  question: "What is the largest city in Pakistan by population?",
                  options: ["Lahore", "Islamabad", "Karachi", "Peshawar"],
                  answer: "Karachi"
              },
              {
                  question: "Which famous Pakistani poet is known as the 'Poet of the East'?",
                  options: ["Faiz Ahmed Faiz", "Allama Iqbal", "Mir Taqi Mir", "Sahir Ludhianvi"],
                  answer: "Allama Iqbal"
              },
              {
                  question: "What is the official language of Pakistan?",
                  options: ["English", "Urdu", "Punjabi", "Pashto"],
                  answer: "Urdu"
              },
              {
                  question: "Which mountain in Pakistan is the second-highest peak in the world?",
                  options: ["Mount Everest", "K2 (Mount Godwin-Austen)", "Nanga Parbat", "Broad Peak"],
                  answer: "K2 (Mount Godwin-Austen)"
              },
              {
                  question: "Which Pakistani city is known as the City of Gardens?",
                  options: ["Islamabad", "Karachi", "Lahore", "Peshawar"],
                  answer: "Lahore"
              },
              {
                  question: "The largest mosque in Pakistan is located in which city?",
                  options: ["Islamabad", "Lahore", "Karachi", "Faisalabad"],
                  answer: "Islamabad"
              },
              {
                  question: "What is the national sport of Pakistan?",
                  options: ["Cricket", "Hockey", "Football (Soccer)", "Polo"],
                  answer: "Hockey"
              },
              {
                  question: "Which province of Pakistan shares a border with Afghanistan?",
                  options: ["Sindh", "Punjab", "Balochistan", "Khyber Pakhtunkhwa"],
                  answer: "Balochistan"
              },
              {
                  question: "Which sea borders Pakistan to the south?",
                  options: ["Mediterranean Sea", "Indian Ocean", "Arabian Sea", "Caspian Sea"],
                  answer: "Arabian Sea"
              }
          ];
            `,
          },
        ],
        model: "gpt-4-0613",
        stream:true
      });
      const response = OpenAIStream(chat);
      return new StreamingTextResponse(response);
    }
  } catch (error) {
    console.error((error as { message: string }).message);
    return new NextResponse("Something Went Wrong", { status: 500 });
  }
}
