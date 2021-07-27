import style from '../styles/Hero.module.scss'

const Hero = () => {
	return (
		<div className={style.mainbox}>
			<div className={style.splitboxes}>
				<div className={style.leftbox}>
					<img src="/full_logo_transparentbg.png" />
					<p>
						Connecting students to{' '}
						<span className={style.color}>
							new
							<br /> experiences
						</span>{' '}
						and <span className={style.color}>impactful fields</span>
					</p>
					<button>Learn More</button>
				</div>
				<div className={style.rightbox}>
					<img src="/mountains2.png" />
				</div>
			</div>
		</div>
	)
}

export default Hero
