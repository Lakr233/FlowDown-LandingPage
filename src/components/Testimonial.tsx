import Image from 'next/image'
import React from 'react'
import { BlurImage } from './BlurImage'

export const Testimonial = ({ testimonial }: any) => {
  return (
    <div className="pt-10 pb-20  flex flex-col items-center justify-center  relative mb-20 w-full">
      <div
        className="absolute inset-0 -top-40 bg-grid-slate-100/70 z-0 pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, white, white)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent, white, white)',
        }}
      ></div>
      <div className="relative flex flex-col items-center">
        <div className="rounded-full relative inline-block h-14 w-14  border-2 border-white shadow overflow-hidden mb-8">
          <BlurImage
            src={testimonial.image}
            layout="fill"
            className="inline-block"
            alt={testimonial.name}
          />
        </div>
        <blockquote className="max-w-4xl mx-auto text-sm md:text-2xl text-center !leading-9 text-slate-700 mb-8">
          {testimonial.content}
        </blockquote>
        <h4 className="max-w-4xl mx-auto text-xs md:text-lg text-center !leading-9 text-black font-medium">
          {testimonial.name}
        </h4>
        <span className="max-w-4xl mx-auto text-xs md:text-base text-center !leading-9 text-slate-500">
          {testimonial.designation}
        </span>
      </div>
      <BottomBorderGradient />
      <FancyGradient />
    </div>
  )
}

export const BottomBorderGradient = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 h-px overflow-hidden">
      <div className="absolute -right-8 bottom-0 -left-8 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
    </div>
  )
}

export const FancyGradient = () => {
  return (
    <div className="absolute bottom-0 right-48 flex h-8 items-end overflow-hidden">
      <div className="flex -mb-px h-[2px] w-80 -scale-x-100">
        <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
        <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
      </div>
    </div>
  )
}
