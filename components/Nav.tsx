import style from '../styles/Nav.module.scss'

const Nav = () => {
	return (
		<div className={style.navbox}>
			{/* put logo here */}
			<img className={style.navlogo} src="./short_logo_whitebg.PNG" alt="zipline logo" />
			<div className={style.nav}>
				<div className={style.navlinks}>
					<ul>
						<li>
							<a href="/">
								Team
							</a>
						</li>
						<li>
							<a href="/">Events</a>
						</li>
						<li>
							<a href="/">Donate</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Nav
