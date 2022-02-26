import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import style from '../styles/EventsHero.module.scss'

const EventsHero = () => {
	return (
		<div className={style.mainbox}>
			<div className={style.topcontent}>
				<div className={style.leftbox}>
					<img
						className={style.gamegraphic}
						src="./pcv_graphic.png"
						alt="pcv graphic"
					/>
				</div>
				<div className={style.rightbox}>
					<p>MAR. 25th — APR. 16th</p>
					<p>
						<span>Penn Climate Ventures Prize</span> in Collaboration With Penn Climate
						Ventures!
					</p>
					<p>
						The PCV Prize is an annual competition where students can pitch a climate
						tech startup for a chance at $5K in non-dilutive funding, as well as
						mentorship and publicity opportunities.
					</p>

					<div className={style.rightboxbuttons}>
						<button>
							<FontAwesomeIcon className={style.calendaricon} icon={faCalendarAlt} />
							March 2022
						</button>
						<button>
							<FontAwesomeIcon className={style.mapicon} icon={faMapMarkerAlt} />
							Online
						</button>
					</div>

					<a href="https://airtable.com/shrQq8MF0QxH2ydwf" target="_blank" rel="noreferrer">
						<button>Sign Up Today</button>
					</a>
				</div>
			</div>
		</div>
	)
}

export default EventsHero
