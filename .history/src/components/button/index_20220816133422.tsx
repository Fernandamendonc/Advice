import {useEffect, useState} from 'react'
import axios from 'axios'
import { Container } from './styles'

export function Button(){
  const [adv, advSet] = useState([])
  useEffect(() => {
    axios.get("https://api.adviceslip.com/advice")
    .then((response) => {
      advSet(response.data.slip)
    }).catch(() => {
      console.log('ERRO')
    })
  },[])
  return(
    <Container>
      {advice.map((adv, key) => {
        return(
          <div key={key}>
            <h1>{adv.advice}</h1>
          </div>
        )
      })}

    </Container>
  )
}