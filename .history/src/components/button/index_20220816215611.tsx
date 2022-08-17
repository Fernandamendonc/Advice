import {useEffect, useState} from 'react'
import axios from 'axios'

import { Container } from './styles'

export function Button(){
  const [advice, adviceSet] = useState({})
  
  useEffect(() => {
    newAdvice()
  },[])

  function newAdvice(){
    axios.get("https://api.adviceslip.com/advice")
    .then((response) => {
      adviceSet(response.data)
    }).catch(() => {
      console.log('ERRO')
    })
  }
  return(
    <Container>
      <h1>an advice for you</h1>
      <h2>{advice.slip.advice}</h2>
      <button onClick={newAdvice}>Other advice</button>
    </Container>
  )
}