//components
import Hero from '@/components/Hero'
import Player from '@/components/Player'
import Events from '@/components/events/Events'
import Albums from '@/components/albums/Albums'
import Blog from '@/components/blog/Blog'
import NewsLetter from '@/components/NewsLetter'

export default function Home() {
  return (
    <main>
      <Hero />
      <Player />
      <Events />
      <Albums />
      <Blog />
      <NewsLetter />
    </main>
  )
}
