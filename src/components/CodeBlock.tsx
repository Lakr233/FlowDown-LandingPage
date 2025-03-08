import { Highlight, themes } from 'prism-react-renderer'
import { useDark } from 'src/hooks/useDark'

interface CodeBlockProps {
  code: string
  language: string
  className?: string
}

export function CodeBlock({ code, language, className = '' }: CodeBlockProps) {
  const isDark = useDark()

  const theme = isDark ? themes.oneDark : themes.github

  const trimmedCode = code.trim()

  return (
    <div className={`overflow-hidden rounded-lg ${className}`}>
      <div className="relative">
        {language && (
          <div className="absolute right-3 top-3 rounded-md bg-zinc-100/80 px-2 py-0.5 font-mono text-xs text-zinc-600 backdrop-blur-sm dark:bg-zinc-700/80 dark:text-zinc-300">
            {language.toUpperCase()}
          </div>
        )}

        <Highlight
          theme={theme}
          code={trimmedCode}
          language={language || 'text'}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} overflow-auto p-4 text-sm`}
              style={style}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {/* 行号 */}
                  <span className="mr-4 inline-block w-8 select-none text-right text-zinc-400">
                    {i + 1}
                  </span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>

        {/* 复制按钮 */}
        <button
          className="absolute bottom-3 right-3 flex size-8 items-center justify-center rounded-md bg-zinc-100/80 text-zinc-600 backdrop-blur-sm transition-colors hover:bg-zinc-200 dark:bg-zinc-700/80 dark:text-zinc-300 dark:hover:bg-zinc-600"
          onClick={() => {
            navigator.clipboard.writeText(trimmedCode)
          }}
          aria-label="Copy code"
          title="Copy code"
        >
          <i className="i-mingcute-copy-2-line text-lg" />
        </button>
      </div>
    </div>
  )
}
