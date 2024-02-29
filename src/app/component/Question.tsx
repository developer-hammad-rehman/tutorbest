import { cookies, headers } from 'next/headers'
import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
export default async function Question() {
  const host = headers().get('host')
  const input = cookies().get('userdata')
  const response = await fetch(`http://${host}/api/question` ,{
    method:"POST",
    cache:"no-store",
    body:JSON.stringify({prompt:input?.value})
  })
  const data = await response.json() 
  return (
   <div className='w-full h-screen flex justify-center items-center'>
    <ScrollArea className='w-[300px] lg:w-[500px] h-[300px] flex justify-center items-center'>
     <div dangerouslySetInnerHTML={{__html:data.response}}></div>
   </ScrollArea>
   </div>
  )
}