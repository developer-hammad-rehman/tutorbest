import React, { Suspense} from 'react'
import FlashCard from '@/app/component/FlashCard';
import { Loader2 } from 'lucide-react';
export default function Study() {
  return (
      <Suspense fallback={<p className='flex w-full h-full justify-center items-center  animate-spin'><Loader2 size={50} className='animate-spin'/></p>}>
        <FlashCard/>
      </Suspense>
  )
}
