import style from '../styles/Nav.module.scss'

const Nav = () => {
	return (
		<div className={style.navbox}>
			<div className={style.nav}>
				<div className={style.navlogos}>
					<a href="/">
						<img
							className={style.navlogosmall}
							src="./short_logo_whitebg.PNG"
							alt="zipline logo"
						/>
					</a>
					<a href="/">
						<img
							className={style.navlogolarge}
							src="./full_logo_transparentbg.png"
							alt="zipline logo"
						/>
					</a>
				</div>
				<div className={style.navlinks}>
					<ul>
						<li>
							<a href="/" className={style.navlinkactive}>Home</a>
						</li>
						<li>
							<a href="/">Team</a>
						</li>
						<li>
							<a href="/">Events</a>
						</li>
						<li>
							<a href="/">Donate</a>
						</li>
					</ul>
				</div>
				<div className={style.navbutton}>
					<button>Contact</button>
				</div>
			</div>
		</div>
	)
}

export default Nav
