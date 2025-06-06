import React from 'react'
import { NavLink ,Link , useNavigate } from 'react-router-dom'

export default function LoginPage() {

  let navigate = useNavigate()
  const eventChangePage = (event) => {
    event.preventDefault();
    navigate("/register")
  }

  return (
    <div>
      <div>Login Page</div>
      <Link to = "/register">Link to Page</Link>
      <NavLink to = "/register">Navlink to Page</NavLink>
      <button onClick={eventChangePage}>Event based </button>
      <button onClick = {
        (event) => {
          eventChangePage(event)
        }
      }>Event based with call back </button>
    </div>
  )
}
