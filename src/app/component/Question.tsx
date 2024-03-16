import { cookies } from 'next/headers'
import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Idata } from '../utilts'
import CheckedAnswer from './CheckedAnswer'
import OpenAI from 'openai'
// export const  maxDuration = 300 
export default async function Question() {
  const input = cookies().get('userdata')?.value
  const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY,
  });
  const chat = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Generate 5 multiple-choice  questions for the topic ${input}. in array for example you can take this and generete me this on this structure
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
  });
  const response = chat.choices[0].message.content as string;
  const res : Idata[] =  eval(response);
  console.log(res);
  return (
   <div className='w-full h-screen flex justify-center items-center'>
    <ScrollArea className='w-[300px] lg:w-[500px] h-[200px] flex justify-center items-center'>
  <CheckedAnswer res={res}/>
   </ScrollArea>
   </div>
  )
}