import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title}) {
  return (
    <div className='w-fit px-3 py-1 font-[satoshi] rounded-full bg-zinc-100 text-black flex items-center justify-between'>
        <span className='text-sm font-medium'>{title}</span>
        <IoIosReturnRight className='ml-2' />
    </div>
  )
}

export default Button