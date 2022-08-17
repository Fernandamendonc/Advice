import {useEffect, useState} from 'react'
import axios from 'axios'

import { Container } from './styles'

export function Button(){

  function newAdvice(){
    
  }
  const [advice, adviceSet] = useState([])
  useEffect(() => {
    axios.get("https://api.adviceslip.com/advice")
    .then((response) => {
      adviceSet(response.data.slip.advice)
    }).catch(() => {
      console.log('ERRO')
    })
  },[])
  
  
  return(
    <Container>
      <h1>an advice for you</h1>
      <h2>{JSON.stringify(advice)}</h2>
      <button onClick={newAdvice}>Other advice</button>
    </Container>
  )
}