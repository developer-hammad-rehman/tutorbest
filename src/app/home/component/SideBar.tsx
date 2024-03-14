'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'
import { CiCreditCard1 } from 'react-icons/ci'
import { FaQuestion } from 'react-icons/fa'
import { IoIosBook } from 'react-icons/io'
export default function SideBar() {
  const path =  usePathname()
  const {push} = useRouter()
  return (
    <aside className='w-72 bg-gray-100 hidden sm:flex flex-col justify-around sticky z-50 px-4 '>
        <Link href={'/lesson'} className={path == '/home' ?'p-6 bg-purple-200 text-2xl flex gap-5 items-center  text-purple-900 border-2  border-purple-300 rounded-md' :'p-6 bg-gray-50 text-2xl flex gap-5 items-center  text-gray-600 border-2 hover:border-2 hover:border-purple-300 rounded-md'}> <IoIosBook />Lessons</Link>
        <Link href={'/home/studyGuide'} className={path == '/home/studyGuide' ?'p-6 bg-purple-200 text-2xl flex gap-5 items-center  text-purple-900 border-2  border-purple-300 rounded-md' :'p-6 bg-gray-50 text-2xl flex gap-5 items-center  text-gray-600 border-2 hover:border-2 hover:border-purple-300 rounded-md'}> <IoIosBook />Study Guide</Link>
        <Link href={'/home/question'} className={path == "/home/question" ?'p-6 bg-purple-200 text-2xl flex gap-5 items-center  text-purple-900 border-2  border-purple-300 rounded-md' :'p-6 bg-gray-50 text-2xl flex gap-5 items-center  text-gray-600 border-2 hover:border-2 hover:border-purple-300 rounded-md'}><FaQuestion />Question</Link>
        <Link href={'/home/flashcard'} className={path == "/home/flashcard" ?'p-6 bg-purple-200 text-2xl flex gap-5 items-center  text-purple-900 border-2  border-purple-300 rounded-md' :'p-6 bg-gray-50 text-2xl flex gap-5 items-center  text-gray-600 border-2 hover:border-2 hover:border-purple-300 rounded-md'} ><CiCreditCard1 /> Flash Cards</Link>
        <button className='p-3 border border-purple-400 flex items-center gap-3 justify-center rounded-full text-purple-400' onClick={() => push('/lesson')}>View Lesson Plan</button>
    </aside>
  )
}
