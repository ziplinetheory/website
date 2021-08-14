import style from '../styles/Hero.module.scss'

const Hero = () => {
	return (
		<div className={style.mainbox}>
			<div className={style.splitboxes}>
				<div className={style.leftbox}>
					<h1>
						<span>Ziplining</span> Towards a Better Future
					</h1>
					<p>
						We connect students to <span>technology</span>
						<br />
						and <span>business</span> mentorship.
					</p>
					<button>Upcoming Events</button>
					<button>Learn More</button>
				</div>
				<div className={style.rightbox}>
					<img
						className={style.navlogosmall}
						src="./mountains.png"
						alt="zipline logo"
					/>
				</div>
			</div>
		</div>
	)
}

export default Hero
