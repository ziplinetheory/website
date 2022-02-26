import Nav from '../components/Nav'
import EventsHero from '../components/EventsHero'
import EventsAbout from '../components/EventsTimeline'

const EventsPage = () => {
	return (
		<>
			<Nav active="events" />
			<EventsHero />
			<EventsAbout />
		</>
	)
}

export default EventsPage
