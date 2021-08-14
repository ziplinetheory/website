import style from '../styles/About.module.scss'

const About = () => {
	return (
		<div className={style.mainbox}>
			<div className={style.content}>
				<h1><span>.</span>About Us<span>.</span></h1>
					<img
						className={style.aboutgraphic}
						src="./aboutgraphic.png"
						alt="about graphic"
					/>
				<div className={style.theory}>
					<p>
						<span>Our Theory:</span> Students <span>learn best</span> when taught <br />{' '}
						subjects they are <span>genuinely interested in</span>.
					</p>
				</div>
			</div>
		</div>
	)
}

export default About
