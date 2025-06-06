import React from 'react'
import Headers from './Headers'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function MainLayout() {
  return (
    <div>
      <Headers />
      <Outlet />    {/* Render the child */}
      <Footer />
    </div>
  )
}
