'use client'
//components
import SectionHeader from './SectionHeader'
//fadeIn motion
import fadeIn from '@/variants'
//framer motion
import { motion } from 'framer-motion'
const NewsLetter = () => {
  return (
    <section
      className="bg-newsletter bg-fixed h-[480px] section bg-cover w-full bg-no-repeat bg-center"
      id="contact"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col h-full items-center justify-center">
          {/* title */}
          <SectionHeader
            pretitle="Get in touch"
            title="Sing up to our newsletter"
          />
          {/* input */}
          <motion.div
            className="relative flex items-center w-full max-w-xl"
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <input
              className="w-full h-[64px] outline-none bg-primary/60 rounded-full backdrop-blur-[15px] px-8"
              type="text"
              placeholder="Email address"
            />
            {/* btn */}
            <button
              className="bg-accent h-[46px] absolute right-2 rounded-full px-6 hover:bg-accent-hover transition-all"
              type="submit"
            >
              Subscribe
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter
