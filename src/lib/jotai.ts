import { setGlobalStore } from 'jojoo'
import { createStore } from 'jotai'

export const jotaiStore = createStore()

setGlobalStore(jotaiStore)
