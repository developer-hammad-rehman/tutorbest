'use client'
import React, { useState } from 'react'
import logo from "../../../../public/logo.png"
import Image from 'next/image'
import { ScrollArea } from "@/components/ui/scroll-area"
import { FaPaperPlane } from 'react-icons/fa'
import { SubmitHandler, useForm } from 'react-hook-form'
import { RiLoader4Fill } from 'react-icons/ri'
interface Idata{
    input:string
}
export default function ChatBot() {
   const {register , reset , handleSubmit } =  useForm<Idata>()
 const [messages , setMessage] = useState<{question : string , answer : string}[]>([ ])
 const [loading , setLoading] = useState(false)
   const onSumbit : SubmitHandler<Idata>= async (data) =>{
    reset()
    setLoading(true)
    console.log(data);
    const response  = await fetch('/api/chatbot' ,{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({prompt: data.input})
    })
    const res = await response.json()
    setLoading(false)
    setMessage([...messages , {
        question:data.input,
        answer: res.response
    }])
    console.log(res);
   }
  return (
    <>
    <ScrollArea className="hidden lg:flex h-[500px] w-[350px] rounded-md border p-4 my-5 ">
   <h2 className='text-2xl font-bold'>Chat</h2>
        <div className='flex flex-col gap-4'>
        {messages.map((val , i) =>(
        <>
        <p className='bg-gray-100 p-2 border border-gray-400 rounded-lg w-fit'>{val.question}</p>
        <div className='flex gap-2 items-start'>
            <Image src={logo} alt='logo' className='w-10'/>
        <p className='border-2 bg-white px-3 rounded-lg'>{val.answer}</p>
        </div>
        </>
        ))}
        </div>
        <form className='flex gap-3 items-center sticky bottom-0 z-50' onSubmit={handleSubmit(onSumbit)}>
        <input type="text" placeholder='Ask Your Question' className='p-3 w-full' {...register('input', {required : true})}/>
        <button>{loading? <RiLoader4Fill className="animate-spin text-xl"/> :<FaPaperPlane />}</button>
        </form>
  </ScrollArea>
    </>
  )
}
