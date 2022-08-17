import {useEffect, useState} from 'react'
import axios from 'axios'

import { Container } from './styles'

export function Button(){
  const [advice, adviceSet] = useState({})
  useEffect(() => {
    axios.get("https://api.adviceslip.com/advice")
    .then((response) => {
      adviceSet(response.data)
    }).catch(() => {
      console.log('ERRO')
    })
  },[Event])
  return(
    <Container>
      <button 
        type='button'
        onClick={EventAdvice}>
          Advice
      </button >
      <h1>{JSON.stringify(advice)}</h1>
    </Container>
  )
}