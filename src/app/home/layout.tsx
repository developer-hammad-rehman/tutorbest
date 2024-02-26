import React, { Suspense } from 'react'
import NavBar from './component/NavBar'
import SideBar from './component/SideBar'
import ChatBot from './component/ChatBot'
import { Loader2 } from 'lucide-react'
export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div>
        <NavBar/>
       <div className='flex w-full h-screen justify-between'>
        <SideBar/>
        <div className='w-full sm:w-1/2'>
      <Suspense fallback={<p className='flex w-full h-screen justify-center items-center text-3xl animate-spin'><Loader2 className='animate-spin'/></p>}>
      {children}
      </Suspense>
        </div>
         <div>
         <ChatBot/>
         </div>
       </div>
    </div>
  )
}
