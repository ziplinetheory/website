import style from '../styles/Hero.module.scss'

const scrollDown = () => {
	document.getElementById('about')?.scrollIntoView()
}

const Hero = () => {
	return (
		<>
			<div className={style.mainbox}>
				<div className={style.splitboxes}>
					<div className={style.leftbox}>
						<h1>
							<span>Ziplining</span>
							<br /> Towards a<br /> Better Future
						</h1>
						<p>
							We empower a global community of learners
							<br />to <span>explore</span> and <span>innovate</span> beyond the conventional curriculum.
						</p>
						<a href="/events">
							<button>Upcoming Events</button>
						</a>
						<button onClick={scrollDown}>Learn More</button>
					</div>
					<div className={style.rightbox}>
						<img className={style.navlogosmall} src="./mountains.gif" alt="mountains" />
					</div>
				</div>
			</div>
			<div className={style.logobanner}>
				<div className={style.container}>
					<div className={style.label}>we have been supported by</div>
					<div className={style.logogrid}>
						<a href="https://www.defense.gov/" rel="noreferrer" target="_blank">
							<img src="./sponsors/defense.png" />
						</a>
						<a href="https://www.upenn.edu/" rel="noreferrer" target="_blank">
							<img src="./sponsors/upenn.png" />
						</a>
						<a href="https://northropgrumman.com" rel="noreferrer" target="_blank">
							<img src="./sponsors/northrop.svg" />
						</a>
						<a href="https://apple.com" rel="noreferrer" target="_blank">
							<img className={style.fixlogo} src="./sponsors/apple.png" />
						</a>
						<a href="https://google.com" rel="noreferrer" target="_blank">
							<img src="./sponsors/google.jpg" />
						</a>
						<a href="https://walmart.com" rel="noreferrer" target="_blank">
							<img src="./sponsors/walmart.jpg" />
						</a>
						<a href="https://amazon.com" rel="noreferrer" target="_blank">
							<img src="./sponsors/amazon.png" />
						</a>
						<a href="https://www.aspirations.org/" rel="noreferrer" target="_blank">
							<img src="./sponsors/ncwit.png" />
						</a>
						<a href="https://www.cognizant.com/" rel="noreferrer" target="_blank">
							<img src="./sponsors/cognizant.png" />
						</a>
						<a href="https://www.csforall.org/" rel="noreferrer" target="_blank">
							<img src="./sponsors/cs-for-all.png" />
						</a>
						<a href="https://televisafoundation.org/" rel="noreferrer" target="_blank">
							<img className={style.fixlogo} src="./sponsors/televisia.png" />
						</a>
					</div>
				</div>
			</div>
			<div className={style.mainboxmobile}>
				<div className={style.contentbox}>
					<h1>
						<span>Ziplining</span>
						<br /> Towards a<br /> Better Future
					</h1>
					<p>
						We connect students to <span>technology</span>
						<br />
						and <span>business</span> knowledge.
					</p>
					<a href="/events">
						<button>Upcoming Events</button>
					</a>
					<button onClick={scrollDown}>Learn More</button>
				</div>
			</div>
		</>
	)
}

export default Hero
