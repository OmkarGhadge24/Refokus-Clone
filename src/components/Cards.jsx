import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div>
        <div className='w-full'>
          <div className='max-w-screen-lg mx-auto pt-20 flex gap-1'>
            <Card width={"basis-1/3"} part1={false} part2={true} />
            <Card width={"basis-2/3"} part1={true} part2={false} hover="true" />
          </div>
        </div>
    </div>
  )
}

export default Cards