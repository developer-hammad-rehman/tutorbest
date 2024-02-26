import React, { Suspense } from 'react'
import FlashCard from '@/app/component/FlashCard';
import { Loader2 } from 'lucide-react';
export default function Study() {
  return (
      <Suspense fallback={<p className='flex w-full h-screen justify-center items-center text-3xl animate-spin'><Loader2 className='animate-spin'/></p>}>
        <FlashCard/>
      </Suspense>
  )
}
