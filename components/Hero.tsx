import style from '../styles/Hero.module.scss'

const Hero = () => {
	return (
		<div className={style.mainbox}>
			<div className={style.splitboxes}>
			<div className={style.leftbox}>
				<img src="/full_logo_transparentbg.png"/>
				{/* <p>Connecting students to <span className={style.color}>new experiences</span> and <span className={style.color}>impactful fields</span>.</p> */}
				<p>Exposing a community of young learners to <span className={style.color}>non-traditional domains</span>, <span className={style.color}>professional mentorship</span>, and <span className={style.color}>transformative experiences</span>.</p>
				<button>LEARN MORE</button>
			</div>
			<div className={style.rightbox}>
				<img src="/mountains.png" />
			</div>

			</div>
		</div>
	)
}

export default Hero
