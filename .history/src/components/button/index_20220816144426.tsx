import {useEffect, useState} from 'react'
import axios from 'axios'

import { Container } from './styles'

export function Button(){
  const [advice, adviceSet] = useState([])
  useEffect(() => {
    axios.get("https://api.adviceslip.com/advice")
    .then((response) => {
      adviceSet(response.data.advice)
    }).catch(() => {
      console.log('ERRO')
    })
  },[])
  return(
    <Container>
      <h1>{advice}</h1>
      <h2>cu</h2>
    </Container>
  )
}