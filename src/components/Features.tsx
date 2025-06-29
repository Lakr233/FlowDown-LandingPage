import { m } from 'framer-motion'
import { useTranslations } from 'next-intl'
import * as React from 'react'

interface Feature {
  id: number
  title: string
  description: string
}

const FeatureIcon = ({ index }: { index: number }) => {
  const icons = [
    // Lightweight and Efficient
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>,
    // Markdown Support
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>,
    // Universal Compatibility
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
      />
    </svg>,
    // Blazing Fast Text Rendering
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>,
    // Automated Chat Titles
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>,
    // Automated Chat Templates
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    </svg>,
    // Privacy by Design
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>,
    // Open Sourced
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>,
  ]

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-accent/10 text-accent dark:from-blue-900/20 dark:to-accent/20">
      {icons[index] || icons[0]}
    </div>
  )
}

const FeatureCard = ({
  feature,
  index,
}: {
  feature: Feature
  index: number
}) => {
  return (
    <m.div
      className="group relative h-48"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-accent/30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-900/10 dark:to-accent/10" />

        <div className="relative z-10 flex h-full flex-col">
          <FeatureIcon index={index} />

          <h3 className="mt-4 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            {feature.title}
          </h3>

          <p className="mt-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
            {feature.description}
          </p>
        </div>
      </div>
    </m.div>
  )
}

export const Features = () => {
  const t = useTranslations('features')

  const features: Feature[] = React.useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      title: t(`items.${i}.title`),
      description: t(`items.${i}.description`),
    }))
  }, [t])

  return (
    <div id="features" className="mx-auto w-full max-w-7xl py-16 md:py-24">
      <m.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <m.h2
          className="text-3xl font-medium tracking-tight text-zinc-700 dark:text-zinc-200 md:text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t('title')}
        </m.h2>
        <m.p
          className="mt-4 text-lg text-zinc-500 dark:text-zinc-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {t('subtitle')}
        </m.p>
      </m.div>

      <m.div
        className="grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} feature={feature} index={index} />
        ))}
      </m.div>
    </div>
  )
}
