import {useEffect, useState} from 'react'
import axios from 'axios'

import { Container } from './styles'

export function Button(){
  const [advice, adviceSet] = useState([])
  
  useEffect(() => {
    
  },[])

  function newAdvice(){
    
  }
  return(
    <Container>
      <h1>an advice for you</h1>
      <h2>{JSON.stringify(advice)}</h2>
      <button onClick={newAdvice}>Other advice</button>
    </Container>
  )
}