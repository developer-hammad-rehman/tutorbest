import React from 'react'
import NavBar from './component/NavBar'
import SideBar from './component/SideBar'
import ChatBot from './component/ChatBot'
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
         </div>
       </div>
    </div>
  )
}
