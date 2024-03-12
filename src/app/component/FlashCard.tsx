import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { NotebookText, ThumbsDown, ThumbsUp } from "lucide-react";
import { cookies, headers } from "next/headers";
export default async function FlashCard() {
  const host = headers().get('host')
  const input = cookies().get('userdata')
  async function data() {
    const res =  await fetch(`https://tutorbest-one.vercel.app/api/flashcard` ,{
      method:"POST",
      cache:"no-store",
      body:JSON.stringify({prompt:input?.value})
    })
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

        <CarouselContent className="my-7 sm:my-0">
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
