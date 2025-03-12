import clsx from 'clsx'
import type { Spring } from 'framer-motion'
import { m } from 'framer-motion'
import type * as React from 'react'
import { useEffect, useRef, useState } from 'react'

interface AnimateChangeInWidthProps {
  children: React.ReactNode
  className?: string
  duration?: number

  spring?: boolean
}

export const AutoResizeWidth: React.FC<AnimateChangeInWidthProps> = ({
  children,
  className,
  duration = 0.6,
  spring = false,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [width, setWidth] = useState<number | 'auto'>('auto')

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        // We only have one entry, so we can use entries[0].
        const observedWidth = entries[0].contentRect.width
        setWidth(observedWidth)
      })

      resizeObserver.observe(containerRef.current)

      return () => {
        // Cleanup the observer when the component is unmounted
        resizeObserver.disconnect()
      }
    }
  }, [])

  return (
    <m.div
      className={clsx('overflow-hidden', className)}
      style={{ width }}
      initial={false}
      animate={{ width }}
      transition={spring ? softSpringPreset : { duration }}
    >
      <div className="w-fit" ref={containerRef}>
        {children}
      </div>
    </m.div>
  )
}
const softSpringPreset: Spring = {
  duration: 0.35,
  type: 'spring',
  stiffness: 120,
  damping: 20,
}
