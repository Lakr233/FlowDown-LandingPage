import Link from 'next/link'

export const CustomLink = (props: any) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href} passHref legacyBehavior>
        <a {...props} />
      </Link>
    )
  }

  return <a target="__blank" rel="noopener noreferrer" {...props} />
}
