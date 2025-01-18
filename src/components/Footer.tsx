import React from 'react'
import LogoWithText from './LogoWithText'
import { APP_NAME } from 'src/constants/app'

export const Footer = () => {
  return (
    <div className="border-t border-slate-900/5 py-10 max-w-6xl mx-auto px-8">
      <div className="flex flex-col justify-center items-center py-10 ">
        <LogoWithText
          textClassName="font-bold !text-base tracking-normal text-zinc-700"
          logoClassName="h-3 w-3 font-bold"
        />
        <p className="text-slate-500 my-4 text-sm font-light text-center">
          © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </p>
      </div>
    </div>
  )
}
