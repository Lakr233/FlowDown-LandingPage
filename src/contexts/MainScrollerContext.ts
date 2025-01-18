import { createContext, type RefObject } from 'react'

export const MainContainerElementContext = createContext<
  RefObject<HTMLDivElement | null>
>(null!)
