'use client'
//next image
import Image from 'next/image'
//fadeIn
import fadeIn from '@/variants'
//motion
import { motion } from 'framer-motion'
//parallax
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse'
//type animation
import { TypeAnimation } from 'react-type-animation'
//data
import { locationSequence } from '@/_data/data'

const Hero = () => {
  return (
    <section className=" h-[80vh] xl:h-[850px]" id="home">
      <div className="container mx-auto h-full flex items-center justify-center xl:justify-start">
        {/* text */}
        <div className=" h-full flex flex-col w-full items-center justify-center xl:items-start z-20 pt-12">
          <MouseParallaxContainer
            globalFactorX={0.1}
            globalFactorY={0.2}
            resetOnLeave
            className="relative flex items-center h-[120px] xl:h-max xl:w-[840px]"
          >
            {/* image MIA */}
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.4}
              className="relative"
            >
              <motion.div
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="w-[300px] xl:w-[725px] h-[101.37px] xl:h-[244.97px]"
              >
                <Image
                  src="/assets/hero/typo-1.svg"
                  fill
                  className="object-contain"
                  alt="typo 1"
                />
              </motion.div>
            </MouseParallaxChild>
            {/* image Reynolds */}
            <MouseParallaxChild
              factorX={0.6}
              factorY={0.4}
              className="absolute z-30 xl:left-6"
            >
              <motion.div
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="  w-[300px] xl:w-[725px] h-[101.37px] xl:h-[244.97px]"
              >
                <Image
                  src="/assets/hero/typo-2.svg"
                  fill
                  className="object-contain"
                  alt="typo 2"
                />
              </motion.div>
            </MouseParallaxChild>
            {/* image Bird */}
            <MouseParallaxChild
              factorX={0.6}
              factorY={0.4}
              className="hidden xl:flex right-0 absolute z-20 opacity-80"
            >
              <motion.div
                variants={fadeIn('left', 1.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="w-[232px] h-[188px] mix-blend-luminosity"
              >
                <Image
                  src="/assets/hero/bird.png"
                  fill
                  className="object-contain"
                  alt="typo 2"
                />
              </motion.div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
          {/* World Tour 2023 & Animation text */}
          <motion.div
            variants={fadeIn('up', 1)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="max-h-[60px] flex items-center mb-6 text-[26px] mt-5"
          >
            <div className="hidden xl:flex items-center xl:gap-x-0">
              <div>World</div>
              <div className="relative w-2 h-2 mx-2 flex items-center justify-center">
                <Image src="/assets/hero/dot.svg" fill alt="" />
              </div>
              <div>Tour</div>
              <div className="relative w-2 h-2 mx-2 flex items-center justify-center">
                <Image src="/assets/hero/dot.svg" fill alt="" />
              </div>
              <div>2024</div>
            </div>
            {/* icon */}
            <div className="relative hidden xl:flex items-center justify-center w-7 h-7 mx-4">
              <Image src="/assets/hero/mic.svg" fill alt="" />
            </div>
            {/* animation */}
            <TypeAnimation
              sequence={locationSequence}
              wrapper="div"
              speed={10}
              repeat={Infinity}
              cursor={false}
              className=""
            />
          </motion.div>
          {/* btn */}
          <motion.div
            variants={fadeIn('up', 1.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
          >
            <button className="btn btn-lg btn-accent">Get tickets</button>
          </motion.div>
        </div>
        {/* image Big */}
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="hidden xl:flex absolute right-0 top-0 before:w-[784px] before:h-[893px] before:absolute before:top-0 before:right-0 before:bg-singerOverlay before:z-10"
        >
          <Image
            src="/assets/hero/singer.png"
            width={617}
            height={893}
            priority
            quality={100}
            alt=""
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
