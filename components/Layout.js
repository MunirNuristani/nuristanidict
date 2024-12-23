import React from 'react'
import Footer from './nav/Footer'
import Header from './nav/Header'
import MenuItems from './nav/MenuItems'
import styles from '../styles/Home.module.css'
import LanguageModal from './Modal/LanguageModal'



function Layout({ children }) {
  return (
    <div >
      <Header />
      <div className={styles.backGroundContainer}>
        <div className={styles.mainContainer}>
          {children}
        </div>
      </div>
      <MenuItems />
      <Footer />
      <LanguageModal />
    </div>
  )
}

export default Layout