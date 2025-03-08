/* eslint-disable react-hooks/rules-of-hooks */
import { setGlobalStore } from 'jojoo'
import type { Atom } from 'jotai'
import { createStore, useAtomValue } from 'jotai'
import { selectAtom } from 'jotai/utils'

export const jotaiStore = createStore()

setGlobalStore(jotaiStore)

const o = { store: jotaiStore }
export const createAtomSelector = <T>(atom: Atom<T>) => {
  const hook = <R>(selector: (a: T) => R) =>
    useAtomValue(selectAtom(atom, selector), o)

  hook.__atom = atom
  return hook
}
