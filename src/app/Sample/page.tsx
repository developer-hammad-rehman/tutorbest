"use client";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Idata } from "../utilts";
import React, { useState } from "react";
import CheckedAnswer from "../component/CheckedAnswer";

const Page = () => {
  const [res, setRes] = useState<Idata[]>();
  const fetcher = async () => {
    const res = await fetch("/api/question", {
      method: "POST",
      body: JSON.stringify({
        prompt:
          "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and act like humans. These machines are designed to mimic cognitive functions such as learning, problem-solving, perception, reasoning, and decision-making. AI has emerged as a transformative technology with profound implications for various industries and aspects of everyday life. At its core,",
      }),
      cache: "no-store",
    });
    const data = await res.json();
    setRes(data.response);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <button onClick={fetcher}>Click</button>
      <ScrollArea className="w-[300px] lg:w-[500px] h-[400px] flex justify-center items-center">
        {/* @ts-ignore */}
        {res ? <CheckedAnswer res={eval(res)} /> : null}
      </ScrollArea>
    </div>
  );
};

export default Page;
