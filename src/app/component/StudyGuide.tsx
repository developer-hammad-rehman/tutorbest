import { ScrollArea } from '@/components/ui/scroll-area';
import { headers } from 'next/headers';
export default async function StudyGuide() {
  const host = headers().get('host')
  const response = await fetch(`http://tutorbest.vercel.app/api/studyguide` ,{
    method:"POST",
    cache:"no-store",
   body:JSON.stringify({prompt : 'hello'})
  })
  const data = await response.json()
  
  return (
    <>
   <div className='flex w-full h-full justify-center items-center'>
   <ScrollArea className='w-[300px] sm:w-[500px] h-[500px] py-6 px-6'>
    <div dangerouslySetInnerHTML={{__html:data.response}}></div>
    </ScrollArea>
   </div>
    </>
  )
}