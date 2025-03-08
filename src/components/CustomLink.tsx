import Link from 'next/link'
import { useRouter } from 'next/router'

export const CustomLink = (props: any) => {
  const { href } = props
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))
  const router = useRouter()
  const { locale } = router.query
  if (isInternalLink) {
    return (
      <Link href={href} passHref legacyBehavior>
        <a
          {...props}
          onClick={(e) => {
            e.preventDefault()
            router.push(`/${locale}${href}`)
          }}
        />
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}
