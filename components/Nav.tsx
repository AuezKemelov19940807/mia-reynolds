'use client'
//data
import { links } from '@/_data/data'
//context
import { useContext } from 'react'
import { NavContext } from '@/context/NavContext'
//type
import { ILinkProps, INavProps } from '@/types/type'
//link react scroll
import { Link } from 'react-scroll'
//media
import { useMediaQuery } from 'react-responsive'

const Nav = ({ containerStyle, linkStyles }: INavProps) => {
  const { setOpen } = useContext(NavContext)
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1300px)',
  })
  const handleSetActive = (to: string) => {
    if (to) {
      setOpen(false)
    }
  }
  return (
    <nav className={containerStyle}>
      {links.map((link: ILinkProps) => {
        const { path, name } = link
        return (
          <div key={path}>
            <Link
              to={path}
              activeClass="active"
              spy
              smooth={!isDesktopOrLaptop ? false : true}
              offset={-50}
              duration={500}
              onSetActive={handleSetActive}
              className={`${linkStyles} cursor-pointer border-b-2 border-transparent transition-all duration-300`}
            >
              {name}
            </Link>
          </div>
        )
      })}
    </nav>
  )
}

export default Nav
