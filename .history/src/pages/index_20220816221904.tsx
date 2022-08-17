import type { NextPage } from 'next';

import {
  useEffect, 
  useState } from 'react';
import axios from 'axios';

import { Container } from '../styles/styles'

const Home: NextPage = () => {
  const [advice, adviceSet] = useState("")
  
  useEffect(() => {
    newAdvice()
  },[])

  function newAdvice(){
    axios.get("https://api.adviceslip.com/advice")
    .then((response) => {
      adviceSet(response.data.slip.advice)
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

export default Home
