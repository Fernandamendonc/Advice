import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useEffect, useState} from 'react'
import axios from 'axios'
import { Button } from '../src/components/button'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => (
    axios("https://api.adviceslip.com/advice")
  ))
  return <Component {...pageProps} />
}

export default MyApp
