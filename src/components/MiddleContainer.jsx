
import React from 'react'
import FirstCarousels from './FirstCarousels'
import MiddleCarousels from './MiddleCarousels'

export default function MiddleContainer() {
  let style = {
    minHeight: '1000px',
  }

  let pos = {
   minHeight:'500px'
  }
  return (
    <div style={style} className='MiddleContainers position-relative'>
      
      {/* <div style={pos} className="firstCont"> */}
        <FirstCarousels/>
      {/* </div> */}

      {/* <div  style={pos} className="secondCont"> */}
        <MiddleCarousels/>
      {/* </div> */}

      
    </div>
  )
}
