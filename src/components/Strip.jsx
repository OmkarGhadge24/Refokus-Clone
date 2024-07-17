import React from 'react'

function Strip({val}) {
    const {url,num} = val;
  return (
    <div className='w-[16.66%] px-3 h-[60px] border-b-[1px] border-t-[1px] border-r-[1px] border-zinc-700 flex items-center justify-between'>
        <img src={url} alt="" />
        <span className='font-semibold'>{num}</span>
    </div>
  )
}

export default Strip