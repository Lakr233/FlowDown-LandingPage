import { services } from 'src/constants/services'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import React from 'react'
import { GridPattern } from './GridPattern'

export const Services = () => {
  return (
    <div id="services" className="max-w-7xl mx-auto antialiased py-10 md:py-20">
      <div className="mx-auto max-w-2xl sm:text-center pb-10 ">
        <h2 className="text-3xl font-medium tracking-tight text-gray-900">
          The AI era is here
        </h2>
        <p className="mt-2 text-balance text-center text-zinc-500">
          AI won't replace humans. But those who know how to use it effectively
          will be more productive than those who don't. Integrate AI into your
          workflow with BoltAI today.
        </p>
      </div>
      <ul
        role="list"
        className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
      >
        {services.map((service, idx) => (
          <Service key={`service-${idx}`} service={service} />
        ))}
      </ul>
    </div>
  )
}

const Service = ({ service }: any) => {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <li
      onMouseMove={onMouseMove}
      className="group rounded-2xl border border-gray-200 p-8 relative"
    >
      <ServicePattern {...service.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="relative z-10">
        <span>{service.icon}</span>
        <h3 className="mt-6 font-semibold text-gray-900 tracking-wide leading-6 antialiased">
          {service.title}
        </h3>
        <p className="mt-2 text-gray-700 tracking-wide leading-6 antialiased">
          {service.description}
        </p>
      </div>
    </li>
  )
}

function ServicePattern({ mouseX, mouseY, ...gridProps }: any) {
  let maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 "
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 "
          {...gridProps}
        />
      </motion.div>
    </div>
  )
}

export const HiddenClassesHack = () => {
  return (
    <div className="text-green-500 h-8 w-8 hidden text-gray-500 stroke-gray-500"></div>
  )
}
