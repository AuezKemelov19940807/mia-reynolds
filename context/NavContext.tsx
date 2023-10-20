'use client'
import { createContext, useState } from 'react'
//type
import { INavContextProps, INavContextProviderProps } from '@/types/type'

const defaultValue = {
  open: false,
  setOpen: () => {},
}

export const NavContext = createContext<INavContextProps>(defaultValue)

const NavContextProvider = ({ children }: INavContextProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <NavContext.Provider value={{ open: isOpen, setOpen: setIsOpen }}>
      {children}
    </NavContext.Provider>
  )
}

export default NavContextProvider
