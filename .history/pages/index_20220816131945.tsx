import type { NextPage } from 'next'
import {useEffect, useState} from 'react'
import axios from 'axios'
import { Button } from '../src/components/button'

useEffect(() => (
  axios("https://api.adviceslip.com/advice")
))

const Home: NextPage = () => {
  return (
    <>
      <Button></Button>
    </>
  )
}

export default Home
