import { NavContext } from '@/context/NavContext'
import { useContext } from 'react'

const MenuBtn = () => {
  const { open, setOpen } = useContext(NavContext)
  const handleOpenMenu = () => setOpen(true)
  return (
    <div
      onClick={handleOpenMenu}
      className="group flex flex-col gap-y-2 cursor-pointer group items-end z-10"
    >
      <div className="w-7 h-[2px] bg-white transition-all"></div>
      <div className="w-4 group-hover:w-7 h-[2px] bg-white transition-all"></div>
      <div className="w-7 h-[2px] bg-white transition-all"></div>
    </div>
  )
}

export default MenuBtn
