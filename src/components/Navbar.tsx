import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { Squash as Hamburger } from 'hamburger-react'
import { useTranslations } from 'next-intl'
import * as React from 'react'
import { useState } from 'react'
import { useIsMobile } from 'src/atoms/hooks/viewport'
import { appConfig } from 'src/configs'
import { usePageScrollLocation } from 'src/providers/page-scroll-info-provider'

import { CustomLink } from './CustomLink'
import { LogoWithText } from './LogoWithText'

export const Navbar = () => {
  const scrollY = Math.round(usePageScrollLocation())

  const t = useTranslations('navbar')

  const navItems = [
    {
      id: 1,
      name: t('document'),
      link: 'https://apps.qaq.wiki/docs/flowdown/documents/welcome.html',
    },
    {
      id: 2,
      name: t('pricing'),
      link: 'https://apps.qaq.wiki/docs/flowdown/documents/app_store.html',
    },
    {
      id: 3,
      name: t('privacy'),
      link: 'https://apps.qaq.wiki/docs/flowdown/documents/privacy_protection/design.html',
    },
    {
      id: 4,
      name: t('open_source'),
      link: '/open-source',
    },
  ]

  const isMobile = useIsMobile()

  return (
    <div className="sticky top-0 z-[99] mx-0 lg:-top-6 lg:px-5">
      <div
        className="inset-x-0 mx-auto flex w-full flex-row items-center justify-between py-3 duration-100 lg:py-8"
        style={{
          paddingBottom: !isMobile
            ? `calc(2rem - ${Math.max(Math.min(scrollY, 24), 0)}px)`
            : void 0,
        }}
      >
        <BackDrop />
        <div className="relative z-[1] mx-auto flex w-full max-w-[83rem] flex-row items-center justify-between px-6 lg:px-0">
          <LogoWithText
            textClassName="font-bold text-lg tracking-normal text-zinc-700 dark:text-zinc-200 !ml-4 lg:ml-0"
            logoClassName="size-8"
          />
          <div className="hidden flex-1 flex-row items-center space-x-14 text-sm font-medium text-zinc-600 transition duration-200 dark:text-zinc-400 lg:flex lg:px-12">
            <DesktopNav navItems={navItems} />
          </div>

          <div className="hidden flex-row items-center space-x-3 lg:flex">
            <motion.a
              initial={true}
              whileFocus={{ scale: 1.02 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              href={appConfig.app.github}
              transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              target="_blank"
              rel="noreferrer"
              className="relative flex items-center rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-600 dark:border-zinc-700 dark:text-zinc-300 lg:flex"
            >
              <i className="i-mingcute-github-2-fill mr-2 size-4" />
              {t('community_edition')}
            </motion.a>

            <motion.a
              initial={true}
              whileFocus={{ scale: 1.02 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              href={appConfig.app.download_link}
              target="_blank"
              rel="noreferrer"
              className="relative flex items-center rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white lg:flex"
            >
              <i className="i-mingcute-apple-fill mr-2 size-4" />
              {t('download')}
            </motion.a>
          </div>
          <div className="flex lg:hidden">
            <MobileNav navItems={navItems} />
          </div>
        </div>
      </div>
    </div>
  )
}

const item = {
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.3,
      height: { delay: 0.1 },
    },
  },
  show: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
      height: { duration: 0.4 },
    },
  },
  hidden: {
    opacity: 0,
    height: 0,
  },
}

const childItems = {
  hidden: { y: -10, opacity: 0 },
  show: { y: 0, opacity: 1 },
}

const MobileNav = ({ navItems }: any) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="relative -right-2">
        <Hamburger toggled={open} size={20} toggle={setOpen} />
      </div>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 bottom-0 top-[var(--navbar-height)] z-40 bg-black/20 backdrop-blur-sm dark:bg-black/40"
              style={
                {
                  '--navbar-height': 'calc(var(--header-height, 60px))',
                } as React.CSSProperties
              }
              onClick={() => setOpen(false)}
            />
            <motion.div
              variants={item}
              initial="hidden"
              animate="show"
              exit="exit"
              className="absolute inset-x-0 top-full z-50 overflow-hidden bg-white/95 shadow-sm backdrop-blur-sm dark:bg-zinc-900/95"
            >
              <div className="flex w-full flex-col items-center p-6">
                {navItems.map((navItem: any) => (
                  <motion.div
                    key={`nav-item-${navItem.id}`}
                    variants={childItems}
                    className="w-full border-b border-zinc-100 py-3 dark:border-zinc-800"
                    onClick={() => setOpen(false)}
                  >
                    <CustomLink href={navItem.link}>
                      <span className="block text-center text-base font-medium text-zinc-800 dark:text-zinc-200">
                        {navItem.name}
                      </span>
                    </CustomLink>
                  </motion.div>
                ))}

                <motion.div
                  variants={childItems}
                  className="mt-4 flex w-full flex-row justify-center space-x-3"
                >
                  <a
                    href={appConfig.app.github}
                    className="flex items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
                  >
                    <i className="i-mingcute-github-2-fill mr-2 size-3.5" />
                    GitHub
                  </a>

                  <a
                    href={appConfig.app.download_link}
                    className="flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white"
                  >
                    <i className="i-mingcute-apple-fill mr-2 size-3.5" />
                    Download
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

const DesktopNav = ({ navItems }: any) => {
  return (
    <>
      {navItems.map((navItem: any) => (
        <CustomLink
          className="duration-200 hover:text-zinc-800 dark:hover:text-zinc-200"
          key={`link-${navItem.id}`}
          href={navItem.link}
        >
          <span>{navItem.name}</span>
        </CustomLink>
      ))}
    </>
  )
}

const BackDrop = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [30, 150], [0, 1])

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80"
    />
  )
}
