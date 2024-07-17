import React from 'react'
import Button from './Button'
import { motion } from 'framer-motion'

function Product({val,index,move}) {
  return (
    <div className='w-full py-14 text-white'>
        <div onMouseEnter={()=>{move(index)}} className='max-w-screen-lg mx-auto flex items-center justify-between'>
            <h1 className='text-5xl capitalize font-medium'>{val.title}</h1>
            <div className='dets w-1/3'>
              <p className='mb-8'>{val.description}</p>
              <div className='flex items-center gap-5'>
              {val.live && <Button title={"Live Website"} />}
              {val.case && <Button title={"Case Study"} />}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Product