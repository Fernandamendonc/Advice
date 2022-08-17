import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useEffect, useState} from 'react'
import axios from 'axios'
import { Button } from '../src/components/button'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    
    {advice.map((adv, key) => {
      return(
        <div key={key}>
          <h1>{adv.advice}</h1>
        </div>
      )
    })}
  )
}

export default MyApp
