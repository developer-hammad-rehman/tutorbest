import { ScrollArea } from "@/components/ui/scroll-area";
import { MapPin } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import OpenAI from "openai";
export default async function page() {
  const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY,
  });
  const input = cookies().get("userdata")?.value;
  async function data() {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You have to generate the lesson from this ${input} 
          for exapmle model you can take this
        Like This:
        Lesson 1: Exploring the Ethical Dimensions of AI Advancements

Lesson 2: Understanding the Intersection of Bias and Artificial Intelligence

Lesson 3: Securing a Responsible AI Future: Governance and Regulation

Lesson 4: Unraveling the Complexities of AI Decision-Making Systems

Lesson 5: Navigating the Challenges of AI Accountability and Transparency

Lesson 6: Safeguarding Privacy in the Age of Intelligent Technologies

Lesson 7: Charting the Course for Ethical AI Innovation and Adoption

Lesson 8: Examining the Social Impacts of AI: Opportunities and Challenges

Lesson 9: Shaping a Sustainable Future with Ethical AI Practices

Lesson 10: Fostering Collaboration for Ethical AI Development

adjust  the topic length according to the content
`,
        },
      ],
      model: "gpt-3.5-turbo-1106",
    });
    return response.choices[0].message.content?.split("Lesson");
  }
  const res = await data();
  res?.shift();
  console.log(res);
  return (
    <div className="w-full h-screen flex flex-col sm:flex-row justify-center items-center">
      <div className="flex flex-col gap-5 items-center mx-3 py-10">
        <h1 className="text-5xl font-bold">Lessons</h1>
        <div className="bg-gray-300 px-10 py-8 md:py-16 md:px-20 font-bold">
          There are {res?.length} Lesson in this topic
        </div>
        <Link
          href={"/home/studyGuide"}
          className="bg-purple-400 p-6 border-4 border-red-200 text-white font-serif font-semibold"
        >
          Explore More
        </Link>
      </div>
      <ScrollArea className="w-[300px] sm:w-[500px] h-[300px] py-6 px-6 border-l-4 border-purple-300 flex flex-col gap-4">
        {res?.map((val, i) => (
          <div key={i} className="flex items-center gap-5">
            <MapPin size={30} className="text-pink-400" />
            <h4 className="text-2xl font-bold">{val}</h4>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
