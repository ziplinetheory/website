import style from '../styles/Hero.module.scss'

const scrollDown = () => {
	window.location = '#about'
}

const Hero = () => {
	return (
		<div className={style.mainbox}>
			<div className={style.splitboxes}>
				<div className={style.leftbox}>
					<h1>
						<span>Ziplining</span><br/> Towards a<br/> Better Future
					</h1>
					<p>
						We connect students to <span>technology</span>
						<br />
						and <span>business</span> knowledge.
					</p>
					<button>Upcoming Events</button>
					<button onClick={scrollDown}>Learn More</button>
				</div>
				<div className={style.rightbox}>
					<img
						className={style.navlogosmall}
						src="./mountains.gif"
						alt="mountains"
					/>
				</div>
			</div>
		</div>
	)
}

export default Hero
