import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../public/logo_original.png'
import MenuItems from './MenuItems'
import { Turn as Hamburger } from 'hamburger-react'
import LargeMenu from './LargeMenu'
import MobileMenu from './MobileMenu'

function Header() {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
        <div className="md:hidden">
        <LargeMenu />
        </div>
        <div className="lg:hidden md:flex md:fixed md:top-0 md:right-0 md:w-full md:z-50">
          <MobileMenu isOpen={isOpen} setOpen={setOpen} />
        </div>
    </>

  )
}

export default Header