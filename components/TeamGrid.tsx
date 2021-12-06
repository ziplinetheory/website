import style from '../styles/TeamGrid.module.scss'

const TeamGrid = () => {
	return (
		<div id="teamgrid" className={style.mainbox}>
			<div className={style.content}>
				<img
					className={style.teampic}
					src="./teampics/IMG_8795.jpg"
					alt="team member"
				/>
				<div className={style.grid}>
					<div className={style.card}>
						<div className={style.cardinner}>
							<div className={style.cardfront}>
								<img
									className={style.profilepic}
									src="./teampics/IMG_8584.jpg"
									alt="team member"
								/>
							</div>
							<div className={style.cardback}>
								<h1>Ellen Xu</h1>
								<h2>Position</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
							</div>
						</div>
					</div>
					<div className={style.card}>
						<div className={style.cardinner}>
							<div className={style.cardfront}>
								<img
									className={style.profilepic}
									src="./teampics/IMG_8664.jpg"
									alt="team member"
								/>
							</div>
							<div className={style.cardback}>
								<h1>Raadwan Masum</h1>
								<h2>Position</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
							</div>
						</div>
					</div>
					<div className={style.card}>
						<div className={style.cardinner}>
							<div className={style.cardfront}>
								<img
									className={style.profilepic}
									src="./teampics/IMG_8625.jpg"
									alt="team member"
								/>
							</div>
							<div className={style.cardback}>
								<h1>Nicole Pi</h1>
								<h2>Position</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
							</div>
						</div>
					</div>
					<div className={style.card}>
						<div className={style.cardinner}>
							<div className={style.cardfront}>
								<img
									className={style.profilepic}
									src="./teampics/IMG_8692.jpg"
									alt="team member"
								/>
							</div>
							<div className={style.cardback}>
								<h1>Akshay Rohatgi</h1>
								<h2>Position</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
							</div>
						</div>
					</div>
					<div className={style.card}>
						<div className={style.cardinner}>
							<div className={style.cardfront}>
								<img
									className={style.profilepic}
									src="./teampics/IMG_8766.jpg"
									alt="team member"
								/>
							</div>
							<div className={style.cardback}>
								<h1>Alvin Zheng</h1>
								<h2>Position</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
							</div>
						</div>
					</div>
					<div className={style.card}>
						<div className={style.cardinner}>
							<div className={style.cardfront}>
								<img
									className={style.profilepic}
									src="./teampics/IMG_8772.jpg"
									alt="team member"
								/>
							</div>
							<div className={style.cardback}>
								<h1>Rohan Juneja</h1>
								<h2>Position</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
							</div>
						</div>
					</div>
					<div className={style.card}>
						<div className={style.cardinner}>
							<div className={style.cardfront}>
								<img
									className={style.profilepic}
									src="./teampics/IMG_8710.jpg"
									alt="team member"
								/>
							</div>
							<div className={style.cardback}>
								<h1>Aadit Gupta</h1>
								<h2>Position</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TeamGrid
