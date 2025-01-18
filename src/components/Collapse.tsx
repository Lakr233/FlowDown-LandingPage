'use client'

import clsx from 'clsx'
import type { Variants } from 'framer-motion'
import { AnimatePresence, motion } from 'framer-motion'
import * as React from 'react'
import { microReboundPreset } from 'src/constants/spring'

export const Collapse: React.FC<
  {
    title: React.ReactNode
  } & React.PropsWithChildren
> = (props) => {
  const [isOpened, setIsOpened] = React.useState(false)
  return (
    <div className="flex flex-col">
      <div
        className="flex w-full py-4 cursor-pointer items-center justify-between"
        onClick={() => setIsOpened((v) => !v)}
      >
        <span className="font-medium w-0 shrink grow truncate">
          {props.title}
        </span>
        <div
          className={clsx(
            'shrink-0 text-gray-400 duration-200 origin-center flex items-center justify-center',
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
        transition: microReboundPreset,
      },
      collapsed: {
        opacity: 0,
        height: 0,
        overflow: 'hidden',
      },
    } satisfies Variants

    return v
  }, [])
  return (
    <>
      <AnimatePresence initial={false}>
        {isOpened && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={variants}
            className={className}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
