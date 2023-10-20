'use client'
import { useContext, useEffect } from 'react'
//context
import { NavContext } from '@/context/NavContext'
//icons
import { RiCloseLine } from 'react-icons/ri'
//components
import Nav from './Nav'

const NavMobile = () => {
  const { open, setOpen } = useContext(NavContext)
  const handleCloseMenu = () => setOpen(false)
  useEffect(() => {
    if (open) {
      document.body.classList.add('lock')
    } else {
      document.body.classList.remove('lock')
    }
  }, [open])

  return (
    <nav
      className={`xl:hidden bg-primary fixed top-0 bottom-0 w-full transition-all duration-300 z-20 overflow-auto ${
        open ? 'right-0' : '-right-full'
      }`}
    >
      {/* icon */}
      <div
        className="absolute right-4 top-5 cursor-pointer"
        onClick={handleCloseMenu}
      >
        <RiCloseLine className="text-5xl" />
      </div>
      {/* nav */}
      <Nav
        containerStyle="flex flex-col text-[30px] uppercase font-bold h-full gap-y-8  items-center justify-center py-10"
        linkStyles=""
      />
    </nav>
  )
}

export default NavMobile
