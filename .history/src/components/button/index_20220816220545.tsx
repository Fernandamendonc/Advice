import {useEffect, useState} from 'react'
import axios from 'axios'

import { Container } from './styles'

export function Button(){
  const [advice, adviceSet] = useState("")
  let text = 0
  
  
  useEffect(() => {
    newAdvice()
  },[])


  function newAdvice(){
    axios.get("https://api.adviceslip.com/advice")
    .then((response) => {
      adviceSet(response.data.slip.advice)
      console.log(response.data.slip.advice)
    }).catch(() => {
      console.log('ERRO')
    })
  }
  return(
    <Container>
      <h1>an advice for you</h1>
      <h2>{advice}</h2>
      <button onClick={newAdvice}>Other advice</button>
    </Container>
  )
}