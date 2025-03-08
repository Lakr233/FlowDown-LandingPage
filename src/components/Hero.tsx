import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useEffect, useMemo, useState } from 'react'
import { useOS } from 'src/hooks/useOS'

export const Hero = () => {
  const t = useTranslations('landing')
  return (
    <div className="relative mt-16 flex flex-col items-center justify-center overflow-hidden pb-10 md:px-8">
      <motion.div
        className="relative mt-10 flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="relative mb-4 text-center text-4xl font-bold text-zinc-700 dark:text-zinc-200 md:text-7xl">
          <motion.span
            className="relative z-10 bg-gradient-to-r from-blue-400 to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('hero1')}
          </motion.span>{' '}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {t('hero2')}
          </motion.span>
        </h1>
        <motion.h2
          className="relative mx-auto mb-4 max-w-3xl text-center text-lg font-normal tracking-wide text-zinc-500 antialiased dark:text-zinc-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {t('hero3')}
        </motion.h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <DownloadButtonGroup />
      </motion.div>

      <ScreenShot />
    </div>
  )
}

const DownloadButtonGroup = () => {
  const t = useTranslations('common')
  const { isMacOS } = useOS()
  return (
    <div className="mb-10">
      <div className="flex flex-col items-center">
        <button className="group relative z-10">
          <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-300 to-accent opacity-25 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200" />

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:shadow-accent/50 relative z-10 block rounded-full bg-accent px-6 py-3 font-bold text-white shadow-lg transition-shadow duration-300"
            href={t('download_link')}
          >
            {t('download_button')}
          </motion.a>
        </button>

        <motion.a
          href={t('document_link')}
          className="mt-3 flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-accent dark:text-zinc-400 dark:hover:text-accent"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span>{t('document_link_text')}</span>
        </motion.a>

        <motion.div
          className="mt-5 text-xs text-zinc-500 dark:text-zinc-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p>
            {isMacOS
              ? t('platform_availability_macOS')
              : t('platform_availability_iOS')}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

const deviceShowCaseImageRatio = {
  macOS: [2560, 1600],
  iOS: [1320, 2868],
  iPadOS: [2752, 2064],
  unknown: [1, 1],
}
const INTERVAL = 6000

const ScreenShot = () => {
  const { device } = useOS()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const slides = useMemo(() => {
    switch (device) {
      case 'macOS': {
        return [
          {
            src: '/images/Screenshot_macOS_00001.png',
          },
          {
            src: '/images/Screenshot_macOS_00002.png',
          },
          {
            src: '/images/Screenshot_macOS_00003.png',
          },
          {
            src: '/images/Screenshot_macOS_00004.png',
          },
          {
            src: '/images/Screenshot_macOS_00005.png',
          },
          {
            src: '/images/Screenshot_macOS_00006.png',
          },
        ]
      }
      case 'iOS': {
        return [
          {
            src: '/images/Screenshot_iOS_00001.png',
          },
          {
            src: '/images/Screenshot_iOS_00002.png',
          },
          {
            src: '/images/Screenshot_iOS_00003.png',
          },
          {
            src: '/images/Screenshot_iOS_00004.png',
          },
          {
            src: '/images/Screenshot_iOS_00005.png',
          },
          {
            src: '/images/Screenshot_iOS_00006.png',
          },
          {
            src: '/images/Screenshot_iOS_00007.png',
          },
        ]
      }
      case 'iPadOS': {
        return [
          {
            src: '/images/Screenshot_iPadOS_00001.png',
          },
          {
            src: '/images/Screenshot_iPadOS_00002.png',
          },
          {
            src: '/images/Screenshot_iPadOS_00003.png',
          },
          {
            src: '/images/Screenshot_iPadOS_00004.png',
          },
          {
            src: '/images/Screenshot_iPadOS_00005.png',
          },
        ]
      }
      default: {
        return []
      }
    }
  }, [device])

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, INTERVAL)

    return () => clearInterval(interval)
  }, [slides.length, isPaused])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className={clsx(
        'my-12 flex w-full items-center justify-center',
        'relative mx-auto max-w-6xl',
      )}
      style={{
        aspectRatio: `${deviceShowCaseImageRatio[device as keyof typeof deviceShowCaseImageRatio][0]} / ${deviceShowCaseImageRatio[device as keyof typeof deviceShowCaseImageRatio][1]}`,
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <figure
          key={slide.src}
          className={clsx(
            'absolute flex size-full justify-center transition-opacity duration-500',
            index === currentImageIndex ? 'opacity-100' : 'opacity-0',
          )}
        >
          <img
            src={slide.src}
            alt={`FlowDown Screenshot ${index + 1}`}
            className="w-full rounded object-contain dark:brightness-90"
          />
        </figure>
      ))}

      <div className="absolute -bottom-14 flex space-x-2">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            onClick={() => setCurrentImageIndex(index)}
            className={clsx(
              'size-2 rounded-full transition-colors',
              index === currentImageIndex
                ? 'bg-accent'
                : 'bg-zinc-300 dark:bg-zinc-700',
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  )
}
