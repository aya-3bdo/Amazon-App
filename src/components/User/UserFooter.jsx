import React from 'react'
import "../../styling/userFooter.css"
import { Link } from 'react-router-dom'


export const UserFooter = () => {
  return (
	  <div className='user-footer d-flex flex-column'>
		  <div className="conditions">
			<Link>Conditions of Use</Link>
			<Link>Privacy Notice</Link>
			<Link>Help</Link>
		  </div>		
		<div> ©1996&#727;2023, Amazon.com, Inc. or its affiliates </div>
    </div>
  )
}
