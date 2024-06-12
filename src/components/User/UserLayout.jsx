import React from 'react'
import { Outlet } from 'react-router-dom'
import { UserFooter } from './UserFooter'

export const UserLayout = () => {

	const style = {
		height: '100dvh',
		background: '#ffffff',
		minWidth: '562px',
	
	}

  return (
	  <div style={style} className=' user-layout position-relative '>
		  <>
			  <Outlet />
			  <UserFooter/>
		   </>
		  </div>
  )
}
