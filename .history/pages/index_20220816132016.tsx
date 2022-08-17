import type { NextPage } from 'next'

useEffect(() => (
  axios("https://api.adviceslip.com/advice")
))

const Home: NextPage = () => {
  return (
    <>
    </>
  )
}

export default Home
