import React from 'react'
import Footer from './nav/Footer'
import Header from './nav/Header'
import MenuItems from './nav/MenuItems'



function Layout({children}) {
  return (
    <div>
      <Header /> 
      <div className="min-h-[67vh] sm:min-h-[78vh]">
        {children}
      </div>
      <MenuItems />
      <Footer />
    </div>
  )
}

export default Layout