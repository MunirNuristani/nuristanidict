import React from 'react'
import Footer from './nav/Footer'
import Header from './nav/Header'



function Layout({children}) {
  return (
    <div>
      <Header /> 
      <div className='pb-24'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout