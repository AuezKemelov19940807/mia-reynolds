'use client'
import { useState } from 'react'
//swr
import useSWR from 'swr'
//image next
import Image from 'next/image'
//audio play react
import { AudioPlayer } from 'react-audio-play'
//swiper
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react'
//swiper modules
import { EffectCoverflow, FreeMode, Navigation, Thumbs } from 'swiper/modules'
//motion
import { motion } from 'framer-motion'
import fadeIn from '@/variants'
//swiper css
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
//type
import { IAlbumProps, ITrackProps } from '@/types/type'
//fetcher
const fetcher = (url: string) => fetch(url).then((res) => res.json())

const AlbumSlider = () => {
  //state swiper thumbs
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null)
  //fetcher data
  const { data, error } = useSWR('http://localhost:4000/albums', fetcher)
  if (!data) return 'Loading...'
  if (error) return 'Failed to fetch data'
  return (
    <motion.div
      variants={fadeIn('up', 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      <Swiper
        effect={'coverflow'}
        speed={1000}
        spaceBetween={80}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, EffectCoverflow]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="album-slider"
      >
        {data.map((album: IAlbumProps) => {
          //destructure album
          const { id, name, img, tracks } = album
          return (
            <SwiperSlide key={id} className="mb-12">
              <div className="flex flex-col xl:flex-row w-full p-6 items-center xl:p-12 gap-x-12 bg-secondary/80 rounded-[10px]">
                {/* image */}
                <div className="hidden xl:flex w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] relative cursor-pointer rounded-[10px] overflow-hidden">
                  <Image
                    className="object-contain"
                    src={img}
                    fill
                    priority
                    alt=""
                  />
                </div>
                {/* track container */}
                <div className="flex flex-1 w-full h-[500px] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-white/10 scrollbar-thumb-accent xl:pr-6">
                  {/* tracks */}
                  <div className="flex-1 flex flex-col xl:px-12">
                    {tracks?.map((track: ITrackProps, index) => {
                      const { name, src } = track
                      return (
                        <div className="flex items-center" key={index}>
                          {/* track name */}
                          <div className="capitalize font-semibold xl:font-extrabold flex-1">
                            <span className="text-accent text-sm xl:text-lg">
                              0{index + 1}.{' '}
                            </span>
                            <span className="text-sm xl:text-base">{name}</span>
                          </div>
                          {/* player */}
                          <div>
                            <AudioPlayer
                              src={src}
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
                              volumePlacement="bottom"
                              className="album-player"
                            />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Navigation, Thumbs]}
        spaceBetween={20}
        slidesPerView={5}
        freeMode
        watchSlidesProgress
        className="thumb-slider"
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1300: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        <div>
          {data?.map((thumb: IAlbumProps, index: number) => {
            return (
              <SwiperSlide
                key={index}
                className="relative group overflow-hidden border-2 border-transparent w-[254px] rounded-[10px]"
              >
                {/* image */}
                <div className="relative w-[195px] h-[195px] sm:w-[360px] sm:h-[360px] md:w-[240px] md:max-h-[240px] cursor-pointer ">
                  <Image
                    className="object-contain group-hover:scale-105 transition-all duration-300 rounded-[10px]"
                    src={thumb.img}
                    fill
                    priority
                    alt="thumb"
                  />
                </div>
              </SwiperSlide>
            )
          })}
        </div>
      </Swiper>
    </motion.div>
  )
}

export default AlbumSlider
