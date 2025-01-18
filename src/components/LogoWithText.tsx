import clsx from 'clsx'
import { APP_NAME } from 'src/constants/app'
import LogoMain from 'src/icons/logo'
import Link from 'next/link'
import React from 'react'

const LogoWithText = ({
  textClassName,
  logoClassName,
}: {
  textClassName?: string
  logoClassName?: string
}) => {
  return (
    <div className="flex flex-row justify-between items-center space-x-1">
      <LogoMain className={clsx(logoClassName)} />
      <Link href="/" legacyBehavior>
        <a className={clsx('font-bold text-2xl tracking-wide', textClassName)}>
          {APP_NAME}
        </a>
      </Link>
    </div>
  )
}

export default LogoWithText
