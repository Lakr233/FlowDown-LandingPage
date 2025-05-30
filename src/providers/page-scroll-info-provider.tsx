'use client'

import { throttle } from 'es-toolkit'
import { useIsomorphicLayoutEffect } from 'framer-motion'
import { atom, useAtomValue, useSetAtom } from 'jotai'
import type { FC, PropsWithChildren } from 'react'
import { useMemo, useRef } from 'react'

import { createAtomSelector } from '@/lib/jotai'

const pageScrollLocationAtom = atom(0)
const pageScrollDirectionAtom = atom<'up' | 'down' | null>(null)

export const PageScrollInfoProvider: FC<PropsWithChildren> = ({ children }) => (
  <>
    <ScrollDetector />
    {children}
  </>
)

const ScrollDetector = () => {
  const setPageScrollLocation = useSetAtom(pageScrollLocationAtom)
  const setPageScrollDirection = useSetAtom(pageScrollDirectionAtom)
  const prevScrollY = useRef(0)
  const setIsInteractiveOnceRef = useRef(false)

  useIsomorphicLayoutEffect(() => {
    const scrollHandler = throttle(() => {
      if (!setIsInteractiveOnceRef.current) {
        setIsInteractiveOnceRef.current = true
      }
      const element = document.documentElement
      let currentTop = element.scrollTop

      // 当 radix modal 被唤出，body 会被设置为 fixed，此时需要获取 body 的 top 值。
      // 只有在 mobile 端会出现这种逻辑
      if (currentTop === 0) {
        const bodyStyle = document.body.style
        if (bodyStyle.position === 'fixed') {
          const bodyTop = bodyStyle.top
          currentTop = Math.abs(Number.parseInt(bodyTop, 10))
        }
      }
      setPageScrollDirection(
        prevScrollY.current - currentTop > 0 ? 'up' : 'down',
      )
      prevScrollY.current = currentTop

      setPageScrollLocation(prevScrollY.current)
    }, 16)

    window.addEventListener('scroll', scrollHandler)

    scrollHandler()

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return null
}

const usePageScrollLocation = () => useAtomValue(pageScrollLocationAtom)
const usePageScrollDirection = () => useAtomValue(pageScrollDirectionAtom)

const usePageScrollLocationSelector = createAtomSelector(pageScrollLocationAtom)
const usePageScrollDirectionSelector = createAtomSelector(
  pageScrollDirectionAtom,
)

const useIsScrollUpAndPageIsOver = (threshold: number) =>
  useAtomValue(
    useMemo(
      () =>
        atom((get) => {
          const scrollLocation = get(pageScrollLocationAtom)
          const scrollDirection = get(pageScrollDirectionAtom)
          return scrollLocation > threshold && scrollDirection === 'up'
        }),
      [threshold],
    ),
  )
export {
  useIsScrollUpAndPageIsOver,
  usePageScrollDirection,
  usePageScrollDirectionSelector,
  usePageScrollLocation,
  usePageScrollLocationSelector,
}
