import React from 'react'
import Tabs from './Tabs'

const Page = () => {
  return (
    <div className='w-[80%] mx-auto'>
      <h3 className='font-normal my-8' style={{color:'var(--primary-text-color)'}}> <a href="">Set Security Strategy</a></h3>
      {/* <hr style={{color:'#D7D7D7'}}/> */}
      <div className="border-b" style={{color:'#D7D7D7'}}></div>
      <Tabs/>
    </div>
  )
}

export default Page
