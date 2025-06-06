import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Headers() {
  return (
    <header>
      <div className='container mx-auto' >
        <nav className=' space-x-4'>

          <div>
            Header
          </div>


          <NavLink to="/"> Home </NavLink>
          <Link to="/login"> Login</Link>
          <Link to="/register"> Register</Link>
        </nav>
      </div>
    </header>
  )
}
