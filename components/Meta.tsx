import Head from 'next/head'

const Meta = () => {
	return (
		<Head>
			{/* Essentials */}
			<meta charSet="utf-8" />
			<title>Zipline Theory</title>

			{/* SEO */}
			<meta
				name="description"
				content="Exposing a community of young learners to non-traditional domains, professional mentorship, and transformative experiences"
			/>
			<meta name="author" content="Zipline Theory" />
			<meta
				name="keywords"
				content="zipline theory, zipline, theory, Zipline Theory, ZT"
			/>

			{/* Open Graph */}
			<meta
				property="og:description"
				content="Exposing a community of young learners to non-traditional domains, professional mentorship, and transformative experiences"
			/>
			<meta property="og:url" content="https://ziplinetheory.com" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="Zipline Theory" />
			<meta property="og:site_name" content="Zipline Theory" />
			<meta property="og:image" content="/icon.png" />
			<meta property="og:image:alt" content="/icon.png" />
			<meta property="og:image:type" content="image/png" />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="1200" />
			<meta property="og:locale" content="en_US" />

			{/* Twitter */}
			<meta
				name="twitter:card"
				content="Exposing a community of young learners to non-traditional domains, professional mentorship, and transformative experiences"
			/>
			<meta name="twitter:url" content="https://ziplinetheory.com" />
			<meta name="twitter:title" content="Zipline Theory" />
			<meta
				name="twitter:description"
				content="Exposing a community of young learners to non-traditional domains, professional mentorship, and transformative experiences"
			/>
			<meta name="twitter:image" content="/icon.png" />

			{/* WeChat */}
			<meta itemProp="name" content="Zipline Theory" />
			<meta itemProp="image" content="/icon.png" />
			<meta
				name="description"
				itemProp="description"
				content="Exposing a community of young learners to non-traditional domains, professional mentorship, and transformative experiences"
			/>

			{/* Apple */}
			<link rel="apple-touch-icon" href="/icon.png" />
			<link rel="apple-touch-startup-image" href="/icon.png" />
			<meta name="apple-mobile-web-app-title" content="Zipline Theory" />
			<meta name="apple-mobile-web-app-capable" content="yes" />

			{/* IE */}
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />

			{/* QQ */}
			<meta name="x5-orientation" content="portrait" />
			<meta name="x5-fullscreen" content="true" />

			{/* UC Mobile */}
			<meta name="screen-orientation" content="portrait" />
			<meta name="full-screen" content="yes" />
			<meta name="wap-font-scale" content="no" />

			{/* Icons */}
			<meta name="image" content="/icon.png" />
			<link rel="icon" href="/icon.png" />

			{/* Misc */}
			<meta name="viewport" content="width=device-width,initial-scale=1" />
			<meta name="theme-color" content="#9035eb" />
			<link rel="canonical" href="https://ziplinetheory.com" />
			<script
				async
				defer
				data-website-id="a119a0ff-0419-4589-8717-597e86874f68"
				src="https://analytics.aadit.dev/umami.js"
			></script>
		</Head>
	)
}

export default Meta
