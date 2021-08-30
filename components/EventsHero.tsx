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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec
						tristique ante, ac egestas sem. Praesent euismod vulputate odio, at commodo
						urna hendrerit ac.
					</p>

					<div className={style.rightboxbuttons}>
						<button>January 1st, 2000</button>
						<button>Lorem Ipsum Dolor</button>
					</div>

					<button>Sign Up Today</button>
				</div>
			</div>
		</div>
	)
}

export default EventsHero
