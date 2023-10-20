//componens
import SectionHeader from '../SectionHeader'
import AlbumSlider from './AlbumSlider'

const Albums = () => {
  return (
    <section id="discography">
      <div className="container mx-auto pt-24 xl:p-12">
        {/* title */}
        <SectionHeader pretitle="Discography" title="Popular Albums" />
        {/* album slider */}
        <div>
          <AlbumSlider />
        </div>
      </div>
    </section>
  )
}

export default Albums
