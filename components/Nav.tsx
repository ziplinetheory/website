import Link from 'next/link'

import style from '../styles/Nav.module.scss'
import { NavProps } from '../lib/types'

const Nav = (props: NavProps) => {
	const { active } = props
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
								<a className={active === 'home' ? `navlinkactive` : ''}>Home</a>
							</Link>
						</li>
						<li>
							<Link href="/team">
								<a className={active === 'team' ? `navlinkactive` : ''}>Team</a>
							</Link>
						</li>
						<li>
							<Link href="/events">
								<a className={active === 'events' ? `navlinkactive` : ''} href="/">
									Events
								</a>
							</Link>
						</li>
						<li>
							<Link href="/donate">
								<a className={active === 'donate' ? `navlinkactive` : ''} href="/">
									Donate
								</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className={style.navbutton}>
					<a target="_blank" rel="noreferrer" href="https://discord.gg/PC9ppbApD6">
						<button>Join Us</button>
					</a>
				</div>
			</div>
			<div className={style.navMobile}>
				
			</div>
		</div>
	)
}

export default Nav
