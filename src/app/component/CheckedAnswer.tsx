'use client'
import React, { useState } from 'react'
import { Idata } from '../utilts'
interface IProps{
    res : Idata[]
}
export default function CheckedAnswer({res} : IProps) {
    const [show , setShow] = useState(true)
  return (
    <div className='flex flex-col gap-6'>
    {
       res.map((val , i) => {
      if (show) {
        return(
            <div key={i} className='bg-gray-100 border-2 p-5'>
            <span className='text-2xl font-bold'>{val.question}</span>
            <div className='flex flex-col gap-3'>
            {val.options.map((option , i) => (
                   <label key={i}>
                     <input type='radio' name={val.question} value={option} />
                     {option}
                   </label>
                 ))}
            </div>
           </div>
        )
      }else{
        return (
           <div  className='bg-green-100 border-2 p-5 font-bold' key={i}>
          Correct Answers : {val.answer}
           </div> 
        )
      }
})
     }
     <button className='bg-purple-200 p-3 font-bold' onClick={() => setShow(false)}>Sumbit Answer</button>
    </div>
  )
}