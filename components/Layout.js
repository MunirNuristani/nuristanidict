import React from 'react'
import Footer from './nav/Footer'
import Header from './nav/Header'
import ScrollToTop from './nav/ScrollToTop'


function Layout({children}) {
  return (
    <div>
      <Header /> 
        {children}
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default Layout