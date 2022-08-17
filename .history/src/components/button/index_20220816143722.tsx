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
      {advice.((slip) => {
          return(
            <div>
              <h1>{slip}</h1>
            </div>
          )
        })
      }
    </Container>
  )
}