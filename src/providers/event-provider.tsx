import { jotaiStore } from 'src/lib/jotai'
import { viewportAtom } from 'src/atoms/viewport'
import { useIsomorphicLayoutEffect } from 'framer-motion'
import type { FC } from 'react'

import { throttle } from 'es-toolkit'
export const initViewport = throttle(() => {
  const { innerWidth: w, innerHeight: h } = window
  const sm = w >= 640
  const md = w >= 768
  const lg = w >= 1024
  const xl = w >= 1280
  const _2xl = w >= 1536
  jotaiStore.set(viewportAtom, {
    sm,
    md,
    lg,
    xl,
    '2xl': _2xl,
    h,
    w,
  })
}, 16)

export const EventProvider: FC = () => {
  useIsomorphicLayoutEffect(() => {
    initViewport()

    window.addEventListener('resize', initViewport)
    return () => {
      window.removeEventListener('resize', initViewport)
    }
  }, [])

  return null
}
