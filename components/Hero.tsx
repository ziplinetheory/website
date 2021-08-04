import style from '../styles/Hero.module.scss'

const Hero = () => {
	return (
		<div className={style.mainbox}>
			<div className={style.splitboxes}>
				<div className={style.leftbox}>
					<img src="./ziplineman.png" alt="zipline" />
				</div>
				<div className={style.rightbox}>
					<p className={style.bigwords}>
						<span className={style.tech}>Tech.</span>
						<br></br>
						<span className={style.business}>Business.</span>
						<br></br>
						<span className={style.creativity}>Creativity.</span>
					</p>
					<p className={style.message}>
						We connect students to <span className={style.color}>technology</span>
						<br></br> and <span className={style.color}>business</span> mentorship.
					</p>
					<button>Learn More</button>
				</div>
			</div>
		</div>
	)
}

export default Hero
