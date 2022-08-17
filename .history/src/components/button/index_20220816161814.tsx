import {useEffect, useState} from 'react'
import axios from 'axios'

import { Container } from './styles'

export function Button(){
  const [advice, adviceSet] = useState([advice])
  useEffect(() => {
    axios.get("https://api.adviceslip.com/advice")
    .then((response) => {
      adviceSet(response.data)
    }).catch(() => {
      console.log('ERRO')
    })
  },[])
  
  return(
    <Container>
      <button 
        type='button'
        onClick={Button}>
          Advice
      </button >
      <h1>{JSON.stringify(advice)}</h1>
    </Container>
  )
}