import { useTranslations } from 'next-intl'
import * as React from 'react'

import { LogoWithText } from './LogoWithText'

export const Footer = () => {
  const t = useTranslations('footer')
  return (
    <div className="mx-auto max-w-6xl px-8 py-10">
      <div className="flex flex-col items-center justify-center py-10 ">
        <LogoWithText
          textClassName="font-bold !text-base tracking-normal text-zinc-700 dark:text-zinc-200"
          logoClassName="size-6"
        />
        <p className="my-10 text-center text-sm font-light text-slate-500 dark:text-zinc-400">
          {t('copyright')}
        </p>
      </div>
    </div>
  )
}
