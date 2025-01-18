import { Container } from 'src/components/Container'

import Hero from 'src/components/Hero'

import { Services } from 'src/components/Services'
import { Testimonial } from 'src/components/Testimonial'
import { testimonials } from 'src/constants/testimonials'
import type { NextPage } from 'next'
import { FQA } from '@/components/FQA'

const Home: NextPage = () => {
  return (
    <Container>
      <Hero />
      <Testimonial testimonial={testimonials[0]} />
      <div id="work" className=" max-w-6xl mx-auto antialiased">
        <h2 className="font-bold text-4xl text-center text-slate-700 capitalize">
          Recent{' '}
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-500 z-10">
            Work
          </span>
        </h2>
        <p className="text-base text-slate-500 font-normal text-center max-w-2xl mx-auto my-4">
          A look at some of the amazing websites that we've built recently.
        </p>
      </div>
      <Testimonial testimonial={testimonials[1]} />
      <Services />
      <FQA />
    </Container>
  )
}

export default Home
