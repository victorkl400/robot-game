import { MovementProvider } from '../src/contexts/MovementContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <MovementProvider>
    <Component {...pageProps} />
  </MovementProvider>
}

export default MyApp
