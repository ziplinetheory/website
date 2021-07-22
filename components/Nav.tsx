import style from '../styles/Nav.module.scss'

const Nav = () => {
	return (
		<div className={style.navbox}>
			<div className={style.nav}>
				<div className={style.navlinks}>
					<ul>
						<li>
							<a className={style.navlinkactive} href="/">HOME</a>
						</li>
						<li>
							<a href="/">TEAM</a>
						</li>
						<li>
							<a href="/">EVENTS</a>
						</li>
						<li>
							<a href="/">DONATE</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Nav
