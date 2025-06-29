import { useTranslations } from 'next-intl'
import { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

import { Collapse } from './Collapse'

interface Faq {
  question: string
  answer: string
  link: string | null
  link_text: string | null
}

export const FAQ = () => {
  const t = useTranslations('faq')

  const faqs: Faq[] = Array.from({ length: 5 }, (_, i) => ({
    question: t(`items.${i}.question`),
    answer: t(`items.${i}.answer`),
    link: t(`items.${i}.link`),
    link_text: t(`items.${i}.link_text`),
  }))

  return (
    <div
      id="faq"
      className="mx-auto flex w-full max-w-7xl flex-col items-center py-10 antialiased md:py-20"
    >
      <h2 className="text-center text-3xl font-medium tracking-tight text-gray-900 dark:text-zinc-100">
        {t('title')}
      </h2>

      <div className="relative mt-12 w-full max-w-full grow lg:w-[65ch]">
        {faqs.map((faq, index) => (
          <Fragment key={faq.question}>
            <Collapse title={faq.question}>
              <div className="w-full">
                <ReactMarkdown className="prose w-full opacity-80 dark:prose-invert">
                  {faq.answer}
                </ReactMarkdown>
                {faq.link && (
                  <div className="mt-2">
                    <a
                      href={faq.link}
                      className="hover:text-accent/80 inline-flex items-center text-accent hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{faq.link_text || faq.link || '-'}</span>
                      <svg
                        className="ml-1 size-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </Collapse>
            {index !== faqs.length - 1 && (
              <div className="my-2 h-px scale-y-50 bg-zinc-500/40" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
