//data
import { getPosts } from '@/lib/utils'
//components
import SectionHeader from '../SectionHeader'
import PostList from './PostList'
const Blog = async () => {
  const posts = await getPosts()
  return (
    <section className="section" id="blog">
      <div className="container mx-auto pt-12 xl:pt-0">
        {/* title */}
        <SectionHeader pretitle="Our Blog" title="Latest News" />
        {/* posts Lists */}
        <PostList posts={posts} />
      </div>
    </section>
  )
}

export default Blog
