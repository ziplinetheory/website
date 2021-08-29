import style from '../styles/Events.module.scss'

const Events = () => {
	return (
		<div className={style.mainbox}>
			<div className={style.topcontent}>
				<div className={style.leftbox}>
					<img
						className={style.gamegraphic}
						src="./gamegraphic_rounded_top.png"
						alt="game graphic"
					/>
                </div>
				<div className={style.rightbox}></div>
			</div>
		</div>
	)
}

export default Events
