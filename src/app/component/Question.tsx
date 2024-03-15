import { cookies } from 'next/headers'
import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Idata } from '../utilts'
import CheckedAnswer from './CheckedAnswer'
export default async function Question() {
  const input = cookies().get('userdata')
  const response = await fetch(`${process.env.LOCAL_URL}/api/question` ,{
    method:"POST",
    cache:"no-store",
    body:JSON.stringify({prompt:input?.value})
  })
  const data = await response.json();
  const res : Idata[] =  eval(data.response);
  console.log(res);
  return (
   <div className='w-full h-screen flex justify-center items-center'>
    <ScrollArea className='w-[300px] lg:w-[500px] h-[300px] flex justify-center items-center'>
  <CheckedAnswer res={res}/>
   </ScrollArea>
   </div>
  )
}