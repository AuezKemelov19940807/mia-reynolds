'use client'
import { useState, useEffect } from 'react'
//image next
import Image from 'next/image'
//link next
import Link from 'next/link'
//components
import NavMobile from './NavMobile'
import Nav from './Nav'
import MenuBtn from './MenuBtn'
import Socials from './Socials'

const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 100)
    }
    //add event listener
    window.addEventListener('scroll', handleScroll)
    //remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed w-full  z-50 transition-all ${
        isActive ? 'bg-[#030315] py-6' : 'bg-transparent py-8'
      } `}
    >
      <div className="container mx-auto flex flex-col items-center xl:flex-row justify-between">
        {/* logo */}
        <div>
          <Link
            href={'#'}
            className="relative w-[226px] h-[37.64px] flex transition-all mb-4 xl:mb-0"
          >
            <Image
              src="/assets/header/logo.svg"
              fill
              alt=""
              className="object-contain"
            />
          </Link>
        </div>
        <div className="flex">
          {/* nav desktop */}
          <Nav containerStyle="hidden xl:flex gap-x-8" linkStyles="" />
          {/* nav mobile */}
          <NavMobile />
          {/* mobile btn */}
          <div className="xl:hidden absolute top-9 right-6">
            <MenuBtn />
          </div>
        </div>
        {/* socials */}
        <div>
          <Socials
            containerStyle="flex text-[24px] gap-x-4 items-center"
            iconStyle="hover:text-accent transition-all"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
