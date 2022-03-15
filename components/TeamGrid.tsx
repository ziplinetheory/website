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
								<h2>Director of Strategy</h2>
								<p>
									Ellen is passionate about educational access and running awesome
									programs at Zipline Theory. Since founding and launching the first
									event in the summer of 2020, she has led event strategy, growth, and
									obtained support/funding from organizations such as the DoD and NCWiT.
									In her free time, she loves competitive fencing, hosting a podcast,
									and writing/reading (hit her up with any good book recommendations!)
									:)
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
								<h2>Director of Technology</h2>
								<p>
									Raadwan loves discovering more about the world using technology. More
									than that, he loves teaching others how to discover more about the
									world and themselves using technology. Seeing students come into
									events knowing nothing about a topic and leaving with the ability to
									create new, amazing things is what Raadwan loves most about Zipline
									Theory.
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
								<h2>Director of Marketing</h2>
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
								<h2>Director of Curriculum</h2>
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
								<h2>Director of Technology</h2>
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
								<h2>Director of Curriculum</h2>
								<p>
									As a founding member of Zipline Theory, Rohan is passionate about developing a curriculum that 
									engages and empowers the global community. Having worked with dynamic teams to deliver high 
									impact projects, Rohan brings unique insights to help create a rich curriculum that excites and 
									motivates the next generation of learners.
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
								<h2>Director of Finances</h2>
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
