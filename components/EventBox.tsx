'use client'
//next image
import Image from 'next/image'
//icons
import { RiMapPin2Fill } from 'react-icons/ri'
//framer-motion
import { motion } from 'framer-motion'
//fadeIn
import fadeIn from '@/variants'
import { EventsBoxProps } from '@/types/type'

const EventsBox = ({ events }: EventsBoxProps) => {
  return (
    <motion.div
      variants={fadeIn('up', 0.6)}
      initial="hidden"
      whileInView="show"
      className="bg-secondary/60 rounded-[10px] relative p-4 xl:p-12"
    >
      <div className="flex flex-col xl:flex-row justify-between h-[620px] xl:h-full gap-x-4">
        <div className="hidden xl:flex w-[400px]">
          {/* image */}
          <Image
            src="/assets/events/singer.png"
            width={358}
            height={489}
            priority
            quality={100}
            alt="singer"
          />
        </div>
        {/* event list */}
        <div className="flex-1 h-[500px] flex flex-col overflow-y-auto scrollbar-thin scrollbar-track-white/10 scrollbar-thumb-accent xl:pr-6">
          {/* event item */}
          {events.map((event) => {
            //destructure event
            const { id, price } = event
            const { day, month } = event.date
            const { city, country, address } = event.location

            return (
              <div
                key={id}
                className="flex flex-col xl:flex-row items-center justify-between gap-y-4 xl:gap-y-0 text-center xl:text-left my-4 xl:my-0 border-b border-white/10 pb-10 xl:py-3 last-of-type:border-none"
              >
                <div className="flex flex-col xl:flex-row items-center gap-x-4">
                  {/* day & month */}
                  <div className="flex flex-col items-center justify-center w-[80px] leading-tight mb-4 xl:mb-0">
                    <p className="text-[44px] font-black text-accent">{day}</p>
                    <p className="text-[20px] font-extrabold">{month}</p>
                  </div>
                  {/* location */}
                  <div className="flex flex-col w-64 gap-y-2">
                    <p className="text-lg leading-none font-bold">
                      <span>{city}</span>, <span>{country}</span>
                    </p>
                    <div className="flex items-center gap-x-1 justify-center xl:justify-start">
                      <p className="text-lg text-accent">
                        <RiMapPin2Fill />
                      </p>
                      <p className="text-light">{address}</p>
                    </div>
                  </div>
                </div>
                {/* price */}
                <div className="w-[100px] text-[17px] text-center font-bold text-accent">
                  {price}
                </div>
                <button className="btn btn-accent btn-sm">Get Tickets</button>
              </div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default EventsBox
