import React from 'react'
import Header from './header/header'
import { Outlet } from 'react-router-dom'
import Footer from './footer/footer'

function Layoutes() {
  return (
   <>
   <Header />
   <Outlet />
   <Footer />
   </>
  )
}

export default Layoutes
