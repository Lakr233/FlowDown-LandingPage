import type { NextPage } from 'next'
import { Container } from 'src/components/Container'
import { FAQ } from 'src/components/FAQ'
import { Hero } from 'src/components/Hero'

import { Team } from '@/components/Team'

const Home: NextPage = () => {
  return (
    <Container>
      <Hero />
      <Team />
      <FAQ />
    </Container>
  )
}
export { getStaticPaths, getStaticProps } from 'src/lib/get-i18n-props'

export default Home
