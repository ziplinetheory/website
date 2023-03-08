import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import style from '../styles/EventsHero.module.scss'

const EventsHero = () => {
	return (
		<div className={style.container}>
			<div className={style.mainbox}>
				<div className={style.topcontent}>
					<div className={style.leftbox}>
						<img
							className={style.gamegraphic}
							src="./bioinfo_graphic.jpg"
							alt="bioinformatics graphic"
						/>
					</div>
					<div className={style.rightbox}>
						<p>APR. 8th</p>
						<p>
							<span>Bioinformatics Webinar</span> for Middle and High School students
						</p>
						<p>
            Learn about the rapidly growing and in demand field of bioinformatics that sits at the intersection of Biology, Math and Computer Science with guest speaker Dr. Su, a professor from Scripps Reserach
						</p>

						<div className={style.rightboxbuttons}>
							<button>
								<FontAwesomeIcon className={style.calendaricon} icon={faCalendarAlt} />
								April 8th 2-3 PM (PDT)
							</button>
							<button>
								<FontAwesomeIcon className={style.mapicon} icon={faMapMarkerAlt} />
								Online
							</button>
						</div>

						<a
							href="https://tinyurl.com/bioinfowebinar"
							target="_blank"
							rel="noreferrer"
						>
							<button>Sign Up</button>
						</a>
					</div>
				</div>
			</div>
			<h1>Past Events</h1>
		</div>
	)
}

export default EventsHero
