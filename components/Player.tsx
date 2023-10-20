'use client'
//react-audio-player
import { AudioPlayer } from 'react-audio-play'
//image
import Image from 'next/image'
//fadeIn
import fadeIn from '@/variants'
//motion
import { motion } from 'framer-motion'
const Player = () => {
  return (
    <motion.div
      variants={fadeIn('up', 0.1)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.1 }}
      className="bg-gradient-to-r from-tertiary/70 to-primary/10 backdrop-blur-[15px] h-[112px] flex items-center relative z-40"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center xl:gap-x-4">
          {/* avatar & text */}
          <div className="hidden w-[300px] xl:flex items-center gap-x-4">
            {/* avatar */}
            <div className="relative w-16 h-16">
              <Image src="/assets/player/avatar.png" fill alt="avatar" />
            </div>
            {/* text */}
            <div className="leading-none">
              <p className="text-lg font-medium">Mia Reynolds</p>
              <p className="text-sm font-light">Freedom</p>
            </div>
          </div>

          {/* music */}
          <div className="w-full flex-1">
            <AudioPlayer
              src="/assets/freedom.mp3"
              loop
              preload="none"
              color="#7F1CFC"
              sliderColor="#7F1CFC"
              style={{
                background: 'transparent',
                maxWidth: '100%',
                paddingLeft: '0px',
                paddingRight: '0px',
              }}
              volume={40}
              volumePlacement="top"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Player
