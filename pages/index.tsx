import Image from 'next/image'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

const Home = () => {
	return (
		<div className="main-box">
			<div>
				<Image src="/logo2.png" alt="Site Icon" width={1000} height={300} />
				<p className="message">
					Exposing a community of young learners to non-traditional domains,
					<br /> professional mentorship, and transformative experiences!
				</p>
				<Popup
					trigger={<button className="mail-button"> Join Mailing List! </button>}
					modal
				>
					<form>
						<input
							id="email"
							type="text"
							autoComplete="name"
							placeholder="Email"
							required
						/>
						<button type="submit">Join</button>
					</form>
				</Popup>
			</div>
		</div>
	)
}

export default Home
