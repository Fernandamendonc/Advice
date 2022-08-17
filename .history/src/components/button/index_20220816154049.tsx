import {useEffect, useState} from 'react'
import axios from 'axios'

import { Container } from './styles'

export function Button(){
  const [slip, adviceSet] = useState({})
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
      <h1>{JSON.stringify(advice)}</h1>
    </Container>
  )
}