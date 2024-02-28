import React, { Suspense} from 'react'
import StudyGuide from '@/app/component/StudyGuide';
import { Loader2 } from 'lucide-react';
export default function Study() {
  return (
      <Suspense fallback={<p className='flex w-full h-screen justify-center items-center text-3xl animate-spin'><Loader2 size={50} className='animate-spin'/></p>}>
        <StudyGuide />
      </Suspense>
  )
}