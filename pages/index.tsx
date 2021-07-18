import Image from 'next/image'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

const Home = () => {
	return (
		<div className="main-box">
			<div>
				<Image src="/logo2.png" alt="Site Icon" width={1191.6} height={241.8} />
				<p className="message">
					Exposing a community of young learners to non-traditional domains,
					<br /> professional mentorship, and transformative experiences!
				</p>
				<Popup
					className="mail-popup"
					trigger={<button className="mail-button"> Join Mailing List! </button>}
					modal
				>
					<form className="mail-form">
						<input
							id="email"
							type="text"
							autoComplete="name"
							placeholder="Email"
							required
						/>
						<br></br>
						<button type="submit">Join</button>
					</form>
				</Popup>
			</div>
		</div>
	)
}

export default Home
