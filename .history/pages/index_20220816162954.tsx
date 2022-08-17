import type { NextPage } from 'next'

import { Button } from '../src/components/button'
import { GlobalStyleComponent } from 'styled-components'

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyleComponent/>
      <Button />
    </>
  )
}

export default Home
