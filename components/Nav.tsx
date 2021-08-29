import Link from 'next/link'

import style from '../styles/Nav.module.scss'

const Nav = () => {
	return (
		<div className={style.navbox}>
			<div className={style.nav}>
				<div className={style.navlogos}>
					<Link href="/">
						<a>
							<img
								className={style.navlogosmall}
								src="./short_logo_whitebg.PNG"
								alt="zipline logo"
							/>
						</a>
					</Link>
					<Link href="/">
						<a>
							<img
								className={style.navlogolarge}
								src="./full_logo_transparentbg.png"
								alt="zipline logo"
							/>
						</a>
					</Link>
				</div>
				<div className={style.navlinks}>
					<ul>
						<li>
							<Link href="/">
								<a className={style.navlinkactive}>Home</a>
							</Link>
						</li>
						<li>
							<Link href="/team">
								<a>Team</a>
							</Link>
						</li>
						<li>
							<Link href="/events">
								<a href="/">Events</a>
							</Link>
						</li>
						<li>
							<Link href="/donate">
								<a href="/">Donate</a>
							</Link>
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
