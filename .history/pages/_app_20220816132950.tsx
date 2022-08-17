import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useEffect, useState} from 'react'
import axios from 'axios'
import { Button } from '../src/components/button'

function MyApp({ Component, pageProps }: AppProps) {
  const [adv, advSet] = useState([])
  useEffect(() => {
    axios.get("https://api.adviceslip.com/advice")
    .then((response) => {
      advSet(response.data.slip)
    }).catch(() => {
      console.log('ERRO')
    })
  },[])
  return (
    
    {slip.map((adv, key) => {
      return(
        <div>
        
        </div>
      )
    })}
  )
}

export default MyApp
