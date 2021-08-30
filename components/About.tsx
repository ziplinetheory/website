import style from '../styles/About.module.scss'

const About = () => {
	return (
		<div id="about" className={style.mainbox}>
			<img
				className={style.aboutbackground}
				src="./aboutbackground.png"
				alt="about background"
			/>
			<div className={style.content}>
				<h1>About Us</h1>
				<img
					className={style.aboutgraphic}
					src="./aboutgraphic.png"
					alt="about graphic"
				/>
				<div className={style.theory}>
					<img
						className={style.aboutmessagebackground}
						src="./aboutmessagebackground.png"
						alt="about message background"
					/>
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
