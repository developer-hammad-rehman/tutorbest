
import React from 'react'
import logo from "../../../../public/logo.png"
import Image from 'next/image'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import SideBar from './SideBar'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { LuShare } from 'react-icons/lu'
import { IoIosBook } from 'react-icons/io'
import { FaQuestion } from 'react-icons/fa'
import { CiCreditCard1 } from 'react-icons/ci'
import { Menu, Milestone } from 'lucide-react'
export default function NavBar() {
  return (
    <header className='flex justify-between p-4 items-center bg-gray-100 border-2 border-gray-950 shadow-xl'>
        <Image src={logo} alt='logo' className='w-20'/>
 
        {/* <div className='hidden sm:flex sm:text-xl font-bold'>
          |  example@mail.com
        </div> */}
        <Sheet >
  <SheetTrigger className='sm:hidden'><Menu /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Select Any option</SheetTitle>
      <SheetDescription  className='w-full bg-gray-100 flex flex-col gap-10 px-5 py-5'>
       <Link href={'/home'} className='text-2xl flex gap-3 items-center'><Milestone />Lessons</Link>
       <Link href={'/home/studyGuide'} className='text-2xl flex gap-3'><IoIosBook/>StudyGuide</Link>
       <Link href={'/home/question'} className='text-2xl flex gap-3'><FaQuestion/>Question</Link>
       <Link href={'/home/flashcard'} className='text-2xl flex gap-3'><CiCreditCard1/>FlashCard</Link>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
    </header>
  )
}
