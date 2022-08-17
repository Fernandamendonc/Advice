import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useEffect, useState} from 'react'
import axios from 'axios'
import { Button } from '../src/components/button'

function MyApp({ Component, pageProps }: AppProps) {
  const adv = []
  useEffect(() => {
    axios.get("https://api.adviceslip.com/advice")
    .then((response) => {

    }).catch(() => {
      console.log('ERRO')
    })
},[])
  return <Component {...pageProps} />
}

export default MyApp
