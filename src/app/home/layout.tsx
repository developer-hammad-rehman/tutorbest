import React, { Suspense } from 'react'
import NavBar from './component/NavBar'
import SideBar from './component/SideBar'
import ChatBot from './component/ChatBot'
import MessageBox from './component/MessageBox'
export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div>
        <NavBar/>
       <div className='flex w-full h-screen justify-between'>
        <SideBar/>
        <div className='w-full sm:w-1/2'>
      {children}
        </div>
         <div>
         <ChatBot/>
         <MessageBox/>
         </div>
       </div>
    </div>
  )
}
