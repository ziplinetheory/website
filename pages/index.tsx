import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'

const Home = () => {
	return (
		<>
			<Nav active="home" />
			<Hero />
			<About />
		</>
	)
}

export default Home
