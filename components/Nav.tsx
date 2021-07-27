import style from '../styles/Nav.module.scss'

const Nav = () => {
	return (
		<div className={style.navbox}>
			<div className={style.nav}>
				<div className={style.navlinks}>
					<ul>
						<li>
							<a className={style.navlinkactive} href="/">
								Home
							</a>
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
			</div>
		</div>
	)
}

export default Nav
