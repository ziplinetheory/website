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
						<img
							className={style.profilepic}
							src="./teampics/IMG_8584.jpg"
							alt="team member"
						/>
					</div>
					<div className={style.card}>
						<img
							className={style.profilepic}
							src="./teampics/IMG_8664.jpg"
							alt="team member"
						/>
					</div>
					<div className={style.card}>
						<img
							className={style.profilepic}
							src="./teampics/IMG_8625.jpg"
							alt="team member"
						/>
					</div>
					<div className={style.card}>
						<img
							className={style.profilepic}
							src="./teampics/IMG_8692.jpg"
							alt="team member"
						/>
					</div>
					<div className={style.card}>
						<img
							className={style.profilepic}
							src="./teampics/IMG_8766.jpg"
							alt="team member"
						/>
					</div>
					<div className={style.card}>
						<img
							className={style.profilepic}
							src="./teampics/IMG_8772.jpg"
							alt="team member"
						/>
					</div>
					<div className={style.card}>
						<img
							className={style.profilepic}
							src="./teampics/IMG_8710.jpg"
							alt="team member"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TeamGrid
