import Image from 'next/image'


const Home = () => {
  return (
    <div className="main-box">
      <div>
      <Image
					src="/logo2.png"
					alt="Site Icon"
          width={1000}
					height={300}
				/>
        <p className="message">
          Exposing a community of young learners to non-traditional domains,
          <br /> professional mentorship, and transformative experiences!
        </p>
        <button className="mail-button">Join Mailing List!</button>
      </div>
    </div>
  );
};

export default Home;
