import { ScrollArea } from "@/components/ui/scroll-area";
import { cookies } from "next/headers";
import OpenAI from "openai";
export default async function page() {
  const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY,
  });
  const input = cookies().get("data")?.value;
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
    <div className="w-full h-full flex justify-center items-center">
      <ScrollArea className="w-[300px] sm:w-[500px] h-[500px] py-6 px-6">
        <h1 className="text-4xl font-bold font-serif">Lessons Of Material</h1>
        {res?.map((val, i) => (
          <div key={i}>
            <span className="text-2xl font-bold">Lesson</span> {val}
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
