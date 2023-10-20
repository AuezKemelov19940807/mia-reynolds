'use client'
//framer-motion
import { motion } from 'framer-motion'
//fadeIn
import fadeIn from '@/variants'
//type
import { ISectionHeaderProps } from '@/types/type'

const SectionHeader = ({ pretitle, title }: ISectionHeaderProps) => {
  return (
    <header>
      {/* pretitle */}
      <div className="mb-8 text-center">
        <motion.h3
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          className="pretitle"
        >
          {pretitle}
        </motion.h3>
        {/* title */}
        <motion.h2
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="h2"
        >
          {title}
        </motion.h2>
      </div>
    </header>
  )
}

export default SectionHeader
