import React from 'react'
import Footer from './nav/Footer'
import Header from './nav/Header'
import MenuItems from './nav/MenuItems'



function Layout({children}) {
  return (
    <div>
      <Header /> 
      <div className='pb-24'>
        {children}
      </div>
      <MenuItems />
      <Footer />
    </div>
  )
}

export default Layout