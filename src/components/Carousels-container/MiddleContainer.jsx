import React from 'react'
import FirstCarousels from './FirstCarousels'
import MiddleCarousels from './MiddleCarousels'

export default function MiddleContainer() {
  let style = {
    minHeight: '1000px',
  }

 
  return (
    <div style={style} className='MiddleContainers position-relative'>
      
        <FirstCarousels/>
        <MiddleCarousels/>
      
    </div>
  )
}
