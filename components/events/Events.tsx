//data
import { getEvents } from '@/lib/utils'
//components
import SectionHeader from '../SectionHeader'
import EventsBox from '../EventBox'

const Events = async () => {
  const events = await getEvents()
  return (
    <section className="section " id="tours">
      <div className="container mx-auto pt-12 xl:pt-0">
        {/* header */}
        <SectionHeader title="Uncoming Events" pretitle="World Tour" />
        {/* event box */}
        <EventsBox events={events} />
      </div>
    </section>
  )
}

export default Events
