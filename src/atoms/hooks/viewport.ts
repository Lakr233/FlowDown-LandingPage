import type { ExtractAtomValue } from 'jotai'
import { useAtomValue } from 'jotai'
import { selectAtom } from 'jotai/utils'
import { useCallback } from 'react'

import { viewportAtom } from '../viewport'
import { jotaiStore } from 'src/lib/jotai'

export const useViewport = <T>(
  selector: (value: ExtractAtomValue<typeof viewportAtom>) => T,
): T =>
  useAtomValue(
    selectAtom(
      viewportAtom,
      useCallback((atomValue) => selector(atomValue), []),
    ),
  )

export const useIsMobile = () => useViewport(useCallback(isMobile, []))

const isMobile = (v: ExtractAtomValue<typeof viewportAtom>) =>
  v.w !== 0 && v.w <= 1024
export const currentIsMobile = () => {
  const v = jotaiStore.get(viewportAtom)
  return isMobile(v)
}

export const getViewport = () => jotaiStore.get(viewportAtom)
