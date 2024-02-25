import React from 'react'
import logo from "../../../../public/logo.png"
import Image from 'next/image'

export default function NavBar() {
  return (
    <header className='flex justify-between p-4 items-center bg-gray-100 border-2 border-gray-950 shadow-xl'>
        <Image src={logo} alt='logo' className='w-20'/>
 
        <div className='text-sm sm:text-xl font-bold'>
          |  example@mail.com
        </div>
    </header>
  )
}
