import style from '../styles/EventsAbout.module.scss'

const EventsAbout = () => {
	return (
		<div className={style.mainbox}>
			<div className={style.content}>
				<h1>About the Event</h1>
				<img
					className={style.eventsaboutbackground}
					src="./events_about_background.png"
					alt="events about background"
				/>
				<img
					className={style.eventsaboutcontent}
					src="./events_about_content.png"
					alt="events about content"
				/>
			</div>
		</div>
	)
}

export default EventsAbout
