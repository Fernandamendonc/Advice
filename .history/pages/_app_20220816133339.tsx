import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Button } from '../src/components/button'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}/>
}

export default MyApp
