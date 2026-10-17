import React from 'react'
import HoverBox from './../../global/HoverBox'

const Footer = () => {
  return (
    <div className='w-full h-fit' >
      {/* <HoverBox /> */}
    <div className='bg-maxLight dark:bg-maxDark flex justify-center rounded-lg mt-4 py-4 px-4'>
        <div className='text-textDark ' >Портфолио моих работ · <a href="#/" className='text-dark dark:text-light font-bold underline ' >Все сайты</a> </div>
    </div>
  </div>
  )
}

export default Footer