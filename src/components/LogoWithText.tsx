import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import * as React from 'react'
import LogoMain from 'src/icons/logo'

import { CustomLink } from './CustomLink'

export const LogoWithText = ({
  textClassName,
  logoClassName,
}: {
  textClassName?: string
  logoClassName?: string
}) => {
  const t = useTranslations('app')

  return (
    <div className="flex flex-row items-center justify-between space-x-2">
      <LogoMain className={clsx(logoClassName)} />
      <CustomLink href="/">
        <div
          className={clsx(
            'text-2xl font-bold tracking-wide text-zinc-800 dark:text-zinc-100',
            textClassName,
          )}
        >
          {t('name')}
        </div>
      </CustomLink>
    </div>
  )
}
