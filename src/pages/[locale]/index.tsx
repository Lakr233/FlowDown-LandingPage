import type { NextPage } from 'next'
import { Container } from 'src/components/Container'
import { FAQ } from 'src/components/FAQ'
import { Features } from 'src/components/Features'
import { Hero } from 'src/components/Hero'

import { Team } from '@/components/Team'

const Home: NextPage = () => {
  return (
    <Container>
      <Hero />
      <Features />
      <FAQ />
      <Team />
    </Container>
  )
}
export { getStaticPaths, getStaticProps } from 'src/lib/get-i18n-props'

export default Home
