import type { RefObject } from 'react'
import { createContext } from 'react'

export const MainContainerElementContext = createContext<
  RefObject<HTMLDivElement | null>
>(null!)
