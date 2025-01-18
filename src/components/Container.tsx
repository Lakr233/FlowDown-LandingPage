import clsx from 'clsx'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import { Footer } from './Footer'
import Navbar from './Navbar'
import { MainContainerElementContext } from 'src/contexts/MainScrollerContext'
import { APP_NAME } from 'src/constants/app'

export const Container = (props: any) => {
  const { children, className, ...customMeta } = props
  const router = useRouter()

  const title = `${APP_NAME} - AI that works for you.`
  const meta = {
    title,
    description: `${APP_NAME} is an AI assistant that works for you.`,
    type: 'website',
    image: 'https://agency.aceternity.com/banner.png',
    ...customMeta,
  }
  const mainScrollerRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://agency.aceternity.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://agency.aceternity.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={APP_NAME} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`@${APP_NAME}`} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <MainContainerElementContext.Provider value={mainScrollerRef}>
        <main
          ref={mainScrollerRef}
          className={clsx(
            'bg-white flex-1 flex flex-col min-h-screen antialiased px-6',
            className,
          )}
        >
          <Navbar />
          {children}
          <Footer />
        </main>
      </MainContainerElementContext.Provider>
    </>
  )
}
