import { useRouter } from 'next/router'
import { useInsertionEffect } from 'react'

export default function Home() {
  const router = useRouter()
  useInsertionEffect(() => {
    const locale = navigator.language

    switch (true) {
      case locale.startsWith('en'): {
        router.push(`/en-US`)
        break
      }
      case locale.startsWith('zh'): {
        router.push(`/zh-CN`)
        break
      }
      default: {
        router.push(`/en-US`)
        break
      }
    }
  }, [])
  return null
}

export { getStaticProps } from 'src/lib/get-i18n-props'
