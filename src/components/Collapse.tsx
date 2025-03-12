'use client'

import clsx from 'clsx'
import type { Variants } from 'framer-motion'
import { AnimatePresence, m } from 'framer-motion'
import * as React from 'react'

export const Collapse: React.FC<
  {
    title: React.ReactNode
  } & React.PropsWithChildren
> = (props) => {
  const [isOpened, setIsOpened] = React.useState(false)
  return (
    <div className="flex w-full flex-col">
      <div
        className="flex w-full cursor-pointer items-center justify-between py-4"
        onClick={() => setIsOpened((v) => !v)}
      >
        <span className="shrink grow font-medium">{props.title}</span>
        <div
          className={clsx(
            'ml-2 flex shrink-0 origin-center items-center justify-center text-gray-400 duration-200',
            isOpened && 'rotate-180',
          )}
        >
          <i className="i-mingcute-down-line" />
        </div>
      </div>
      <CollapseContent isOpened={isOpened}>{props.children}</CollapseContent>
    </div>
  )
}

export const CollapseContent: React.FC<
  {
    isOpened: boolean
    withBackground?: boolean
    className?: string
  } & React.PropsWithChildren
> = ({ isOpened, className, children }) => {
  const variants = React.useMemo(() => {
    const v = {
      open: {
        opacity: 1,
        height: 'auto',
        transition: {
          type: 'spring',
          damping: 32,
          stiffness: 256,
          velocity: 4,
        },
      },
      collapsed: {
        opacity: 0,
        height: 0,
        overflow: 'hidden',
        transition: {
          type: 'spring',
          damping: 32,
          stiffness: 256,
          velocity: 4,
        },
      },
    } satisfies Variants

    return v
  }, [])
  return (
    <>
      <AnimatePresence initial={false}>
        {isOpened && (
          <m.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={variants}
            className={className}
          >
            {children}
          </m.div>
        )}
      </AnimatePresence>
    </>
  )
}
