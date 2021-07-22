import '../styles/global.scss'
import Meta from '../components/Meta'

import type { AppProps } from 'next/app'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
	<>
		<Meta />
		<Component {...pageProps} />
	</>
)

export default App
