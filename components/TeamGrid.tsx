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
									Akshay is passionate about his love for computer science and cybersecurity. He believes that
									his passions are the future of society for a long time to come and wishes to share his knoweledge
									and experience with others. He often shares his own experiences and advice with others and
									hopes to provide thousands of other students with similar experiences and opportunities through Zipline Theory 
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
									Alvin is passionate about programming, and the good it can bring the world. Moreover, he loves 
									to share this passion for code with others to help better the world through technology. As part 
									of Zipline Theory, Alvin hopes to bring Computer Science curriculum to around the world.
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
									Aadit is passionate about entrepreneurship and software development ideas that can help impact many students in our community. Moreover, he loves 
									to help and inspire the next generation of coders and leaders of our society. As part 
									of Zipline Theory, Aadit hopes to pass on the numerous amount of skills he has learned.
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
