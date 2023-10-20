'use client'
//next link
import Link from 'next/link'
//type
import { PostProps, IPostListProps } from '@/types/type'
//icons
import { BsArrowRight } from 'react-icons/bs'
//fadeIn motion
import fadeIn from '@/variants'
//motion
import { motion } from 'framer-motion'
const PostList = ({ posts }: IPostListProps) => {
  const firstThreePosts = posts.slice(0, 3)

  return (
    <div className="flex flex-col items-center">
      <motion.div
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        className="flex flex-col xl:flex-row justify-between gap-12 py-10 xl:pt-16 xl:pb-24 border-t border-white/10"
      >
        {firstThreePosts.map((post: PostProps) => {
          //destructure post
          const { id, date, title, description } = post
          return (
            <div className="" key={id}>
              <div className="flex-1 flex flex-col h-full">
                <div className="text-accent font-bold mb-1">{date}</div>
                <div className="font-semiblod text-xl flex-auto mb-4">
                  {title}
                </div>
                <div className="text-white/30 mb-6 font-light">
                  {description}
                </div>
              </div>
              <Link className="group flex items-center  gap-x-2" href="#">
                <span>Read More</span>
                <BsArrowRight className="text-xl group-hover:ml-1 transition-all duration-300" />
              </Link>
            </div>
          )
        })}
      </motion.div>
      <motion.div
        variants={fadeIn('up', 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.8 }}
      >
        <button className="btn btn-accent btn-lg">View More</button>
      </motion.div>
    </div>
  )
}

export default PostList
