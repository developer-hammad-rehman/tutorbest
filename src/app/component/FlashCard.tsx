import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { NotebookText, ThumbsDown, ThumbsUp } from "lucide-react";
import { headers } from "next/headers";
export default async function FlashCard() {
  const host = headers().get('host')
  async function data() {
    const res = await fetch(`https://tutorbest.vercel.app/api/flashcard`, {
      method: "POST",
      body: JSON.stringify({
        prompt:
          "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and act like humans. These machines are designed to mimic cognitive functions such as learning, problem-solving, perception, reasoning, and decision-making. AI has emerged as a transformative technology with profound implications for various industries and aspects of everyday life. At its core, AI encompasses a range of techniques and approaches aimed at enabling machines to perform tasks that would typically require human intelligence. These tasks can vary widely, from basic to highly complex. One of the fundamental concepts in AI is machine learning, which involves training algorithms on large datasets to recognize patterns and make predictions or decisions based on that data. Machine learning techniques can be broadly categorized into supervised, unsupervised, and reinforcement learning. In supervised learning, algorithms are trained on labeled data, where the desired output is known, allowing the algorithm to learn the mapping between inputs and outputs. Unsupervised learning involves training algorithms on unlabeled data, where the algorithm must discover hidden patterns or structures within the data. Reinforcement learning utilizes a system of rewards and punishments to train algorithms to make sequential decisions in an environment. Deep learning is a subset of machine learning that has gained significant attention and success in recent years. It involves training artificial neural networks, which are inspired by the structure and function of the human brain, to learn from data. Deep learning models, particularly deep neural networks, have demonstrated remarkable performance in tasks such as image recognition, natural language processing, and speech recognition. AI applications are pervasive across various domains, including healthcare, finance, transportation, entertainment, and more. In healthcare, AI is being used for medical imaging analysis, drug discovery, personalized treatment recommendations, and predictive analytics for disease diagnosis and prognosis. In finance, AI algorithms are employed for fraud detection, algorithmic trading, credit scoring, and risk assessment. In transportation, AI is driving innovations in autonomous vehicles, optimizing traffic flow, and improving logistics and supply chain management. In entertainment, AI is being used for content recommendation, personalized marketing, and the creation of virtual characters and environments. Ethical considerations are paramount in the development and deployment of AI technologies. Concerns regarding bias, fairness, transparency, privacy, and accountability have become central to discussions surrounding AI ethics. Bias in AI algorithms can arise from biased training data or the design of the algorithms themselves, leading to discriminatory outcomes, particularly in sensitive areas such as hiring, lending, and criminal justice. Ensuring fairness and accountability in AI systems requires careful attention to data collection, algorithm design, and model evaluation. Transparency and interpretability are essential for understanding how AI systems make decisions and for enabling meaningful human oversight. As AI continues to advance, there are ongoing debates about its potential impact on employment, inequality, and societal well-being. While AI has the potential to automate routine tasks, improve productivity, and drive economic growth, it also raises concerns about job displacement, skills mismatches, and widening income inequality. Addressing these challenges requires proactive efforts to reskill and upskill the workforce, foster collaboration between humans and machines, and implement policies that promote inclusive growth and equitable access to AI technologies. Despite the challenges and uncertainties, AI holds immense promise for addressing some of the most pressing global challenges, from healthcare and climate change to education and poverty alleviation. By harnessing the power of AI responsibly and ethically, we can unlock new opportunities for innovation, productivity, and human flourishing.",
      }),
      cache: "no-store",
    });
    const a = await res.json();
    return a;
  }
  const a = await data();
  a.pop();
  return (
    <div className="flex justify-center items-center h-screen w-full flex-col gap-6">
      <div className="flex gap-10">
        <ThumbsUp className="cursor-pointer" />
        <ThumbsDown className="cursor-pointer" />
      </div>
      <Carousel className="h-fit border-2 border-gray-800 w-60 p-2 sm:w-80 sm:p-12 bg-purple-100 font-bold">
        <h1 className="absolute z-50 top-0 text-2xl flex items-center border sm:border-b-4 border-b-black">
          Flash Cards{" "}
          <span className="text-sm">
            <NotebookText />
          </span>
        </h1>

        <CarouselContent className="my-3 sm:my-0">
          {a.map((val: any, i: number) => (
            <CarouselItem key={i}>{val}</CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
