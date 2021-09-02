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
						src="./gamegraphic_rounded_top.png"
						alt="game graphic"
					/>
				</div>
				<div className={style.rightbox}>
					<p>— OCT. 2021</p>
					<p>
						Come Experience Zipline Theory’s First Ever <span>Game Design Event</span>
					</p>
					<p>
						Learn the basics of Game Design and Development in Zipline Theory's first
						event! Sign up to gain relevant skills and interact with industry leaders.
					</p>

					<div className={style.rightboxbuttons}>
						<button>
							<FontAwesomeIcon className={style.calendaricon} icon={faCalendarAlt} />
							October 2021
						</button>
						<button>
							<FontAwesomeIcon className={style.mapicon} icon={faMapMarkerAlt} />
							Online
						</button>
					</div>

					<a href="http://gamedev.ziplinetheory.com/" target="_blank" rel="noreferrer">
						<button>Sign Up Today</button>
					</a>
				</div>
			</div>
		</div>
	)
}

export default EventsHero
