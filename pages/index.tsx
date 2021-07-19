import Image from 'next/image'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { useState } from 'react'

const Home = () => {
	const [email, setEmail] = useState('')

	const addEmail = async (e: any) => {
		e.preventDefault()

		try {
			//   const stuff = await createContact(email)
			//   console.log(await stuff.json())
			//sucess popup
		} catch (e) {
			console.error(e)
			//error popup
		}

		console.log('added!')
	}
	return (
		<div className="main-box">
			<div>
				<Image
					className="logo"
					src="/logo2.png"
					alt="Site Icon"
					width={1191.6}
					height={241.8}
				/>
				<p className="message">
					Exposing a community of young learners to non-traditional domains,
					<br /> professional mentorship, and transformative experiences.
				</p>
				{/* <Popup
					trigger={<button className="mail-button"> Join Mailing List! </button>}
					className="mail-popup"
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
				</Popup> */}
				<a rel="noreferrer" target="_blank" href="https://forms.gle/mDMNmMfS5EBmq3We8">
					<button className="mail-button">Join Mailing List!</button>
				</a>
			</div>
		</div>
	)
}

export default Home
