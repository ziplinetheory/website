import style from '../styles/Hero.module.scss'

const Hero = () => {
	return (
		<div className={style.mainbox}>
			<div className={style.splitboxes}>
				{/* <div className={style.leftbox}>
					<img src="/mountains2.png" />
				</div> */}
				<div className={style.rightbox}>
					{/* <img src="/full_logo_transparentbg.png" /> */}
					<p className={style.bigwords}>
						<span className={style.tech}>Tech.</span><br></br>
						<span className={style.business}>Business.</span><br></br>
						<span className={style.creativity}>Creativity.</span>
					</p>
					<p className={style.message}>
						We connect students to{' '}
						<span className={style.color}>
							technology
						</span>
						<br></br>
						{' '}and{' '}
						<span className={style.color}>
							business
						</span>
						{' '}mentorship.
					</p>
					{/* <p>
						Connecting students to{' '}
						<span className={style.color}>
							transformative
							<br /> experiences
						</span>{' '}
						and <span className={style.color}>new fields of study</span>
					.</p> */}
					<button>Learn More</button>
				</div>
			</div>
		</div>
	)
}

export default Hero
