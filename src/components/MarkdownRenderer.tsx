import ReactMarkdown from 'react-markdown'

import { CodeBlock } from './CodeBlock'

interface MarkdownRendererProps {
  children: string
  className?: string
}

export function MarkdownRenderer({
  children,
  className = '',
}: MarkdownRendererProps) {
  return (
    <div
      className={`hover:prose-a:text-accent/90 dark:hover:prose-a:text-accent/90 prose prose-zinc max-w-none dark:prose-invert prose-headings:mt-0 prose-headings:first:mt-0 prose-a:text-accent prose-a:no-underline prose-code:text-zinc-700 dark:prose-code:text-zinc-300 ${className}`}
    >
      <ReactMarkdown
        components={{
          pre({ node, className, children, ...props }) {
            return <div className="bg-transparent p-0">{children}</div>
          },
          // 自定义代码块渲染
          code({ node, className, children, ...props }) {
            // 获取语言
            const match = /language-(\w+)/.exec(className || '')
            const language = match ? match[1] : ''

            return (
              <CodeBlock
                code={String(children).replace(/\n$/, '')}
                language={language}
              />
            )
          },
          // 自定义链接渲染
          a({ node, children, href, ...props }) {
            return (
              <a
                href={href}
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={
                  href?.startsWith('http') ? 'noopener noreferrer' : undefined
                }
                {...props}
              >
                {children}
              </a>
            )
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
