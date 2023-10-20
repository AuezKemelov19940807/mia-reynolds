import { socials } from '@/_data/data'
import Link from 'next/link'
import { ISocialsProps } from '@/types/type'

const Socials = ({ containerStyle, iconStyle }: ISocialsProps) => {
  return (
    <div className={`${containerStyle}`}>
      {socials.map((social, index) => {
        //destcucture social
        const { path, icon } = social
        return (
          <Link key={index} href={path}>
            <span className={`${iconStyle}`}>{icon}</span>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials
