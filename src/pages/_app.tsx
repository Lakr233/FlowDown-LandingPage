import '../styles/globals.css'

import { TooltipProvider } from '@radix-ui/react-tooltip'
import { LazyMotion } from 'framer-motion'
import { Provider } from 'jotai'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { NextIntlClientProvider, useTranslations } from 'next-intl'
import { NextSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import { jotaiStore } from 'src/lib/jotai'
import { EventProvider } from 'src/providers/event-provider'
import { PageScrollInfoProvider } from 'src/providers/page-scroll-info-provider'

const loadFeatures = () =>
  import('../lazy/framer-lazy-feature').then((res) => res.default)

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <NextIntlClientProvider
      // @ts-expect-error
      locale={router.locale || router.query?.locale || 'en-US'}
      timeZone="Asia/Shanghai"
      messages={pageProps.messages || {}}
    >
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" type="image/icon" href="/favicon.ico" />

        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#41BEAB" />
        <meta name="msapplication-TileColor" content="#41BEAB" />
        <meta name="theme-color" content="#41BEAB" />
      </Head>
      <Seo />

      <LazyMotion features={loadFeatures}>
        <Provider store={jotaiStore}>
          <TooltipProvider delayDuration={150}>
            <EventProvider />
            <PageScrollInfoProvider />
            <ThemeProvider>
              <Component {...pageProps} />
            </ThemeProvider>
          </TooltipProvider>
        </Provider>
      </LazyMotion>
    </NextIntlClientProvider>
  )
}

export default MyApp

const Seo = () => {
  return (
    <NextSeo
      title="FlowDown - Open & Fast AI"
      openGraph={{
        type: 'website',
        siteName: 'FlowDown - Open & Fast AI',
        description:
          'A blazing fast and smooth client app for AI conversations. Switch between AI services or use local models on your device.',
        title: 'FlowDown - Open & Fast AI',
      }}
    />
  )
}
