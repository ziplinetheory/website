import style from '../styles/Nav.module.scss'
import Image from 'next/image'

const Nav = () => {
	return (
		<div className={style.navbox}>
			<div className={style.nav}>
				<div className={style.navlogodiv}>
					<a href="/">
						<img src="/short_logo_whitebg.PNG" />
					</a>
				</div>
				<div className={style.navlinks}>
					<ul>
						<li>
							<a href="https://google.com">MISSION</a>
						</li>
						<li>
							<a href="https://google.com">EVENTS</a>
						</li>
						<li>
							<a href="https://google.com">IMPACT</a>
						</li>
						<li>
							<a href="https://google.com">DONATE</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Nav
