import clsx from 'clsx'
import { GeistSans } from 'geist/font/sans'
import * as React from 'react'
import { useRef } from 'react'
import { MainContainerElementContext } from 'src/contexts/MainScrollerContext'

import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const Container = (props: any) => {
  const { children, className } = props

  const mainScrollerRef = useRef<HTMLDivElement>(null)

  return (
    <MainContainerElementContext value={mainScrollerRef}>
      <Navbar />
      <main
        ref={mainScrollerRef}
        className={clsx(
          'flex min-h-screen flex-1 flex-col px-6 antialiased',

          GeistSans.className,
          className,
        )}
      >
        {children}
        <Footer />
      </main>
    </MainContainerElementContext>
  )
}
