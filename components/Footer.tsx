'use client'
//fadeIn
import fadeIn from '@/variants'
//motiom
import { motion } from 'framer-motion'
//next link
import Link from 'next/link'
//next image
import Image from 'next/image'
//components
import Socials from './Socials'
import Nav from './Nav'

const Footer = () => {
  return (
    <footer className="bg-accent section">
      <div className="container mx-auto flex flex-col items-center justify-center gap-y-8">
        {/* imail */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Link href="#">
            <h2 className="text-[24px] xl:text-[38px] font-semibold leading-tight">
              @hello.miareinolds.@mail.com
            </h2>{' '}
          </Link>
        </motion.div>
        {/* nav */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
        >
          <Nav
            containerStyle="flex flex-col xl:flex-row  items-center justify-center py-4 gap-y-4 xl:gap-x-8 text-sm uppercase font-semibold "
            linkStyles="hover:text-primary/80 transition-all"
          />
        </motion.div>
        {/* social */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
        >
          <Socials
            containerStyle="flex gap-x-8 text-[24px]"
            iconStyle="hover:text-primary/80 transition-all"
          />
        </motion.div>
        {/* logo */}
        <motion.div
          variants={fadeIn('up', 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.8 }}
          className="relative w-[250px] h-[50px] flex transition-all mb-4 xl:mb-0"
        >
          <Image
            className="object-contain"
            src="/assets/header/logo.svg"
            fill
            priority
            alt="logo"
          />
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
