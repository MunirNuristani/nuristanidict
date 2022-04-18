import React from 'react'
import LgFooter from './nav/LgFooter'
import LgHeader from './nav/LgHeader'
import ScrollToTop from './nav/ScrollToTop'


function Layout({children}) {
  return (
    <div>
      <LgHeader />  
        {children}
      <ScrollToTop />
      <LgFooter />
    </div>
  )
}

export default Layout