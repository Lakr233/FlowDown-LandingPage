import { APP_NAME } from 'src/constants/app'
import { Collapse } from './Collapse'

interface Faq {
  question: string
  answer: string
}
const faqs: Faq[] = [
  {
    question: 'How does this work?',
    answer: `${APP_NAME} uses OpenAI's GPT to provide AI assistance within your macOS apps.

After setting your OpenAI API key, ${APP_NAME} is ready to help in any text field. Call on ${APP_NAME} for AI suggestions as you work on tasks, be it emails, reports, coding, or idea generation.

Additional features include a prompt library, custom AI assistants, Stable Diffusion support (via replicate.com) and automatic sensitive data redaction for enhanced security.

`,
  },

  {
    question: 'What is an AI Assistant?',
    answer: `An AI Assistant is a custom AI model that you can create and train on your own data. You can use it to help you with your work, or you can use it to help you with your personal life.`,
  },
  {
    question: 'Is my data protected?',
    answer: `Yes, your data is protected. We do not store any of your data on our servers. All data is stored locally on your machine.`,
  },
  {
    question: 'Can I create a custom AI Assistant?',
    answer: `Yes, you can create a custom AI Assistant. You can use the prompt library to create a custom AI Assistant.
    
This feature allows you to adjust various parameters to modify the AI's behavior and responses according to your specific needs. Whether you need a creative brainstorming partner or a technical coding aide, you can tailor your AI Assistant to enhance your productivity and creativity.`,
  },
  {
    question: 'Can I use this with my ChatGPT Plus subscription?',
    answer: `Yes, you can use this with your ChatGPT Plus subscription.`,
  },
]

import ReactMarkdown from 'react-markdown'
import { Fragment } from 'react'

export const FQA = () => {
  return (
    <div id="fqa" className="max-w-7xl mx-auto antialiased py-10 md:py-20">
      <h2 className="text-3xl font-medium text-center tracking-tight text-gray-900">
        Frequently Asked Questions
      </h2>

      <div className="max-w-full mt-12 w-[65ch]">
        {faqs.map((faq, index) => (
          <Fragment key={faq.question}>
            <Collapse title={faq.question}>
              <ReactMarkdown className="prose opacity-80">
                {faq.answer}
              </ReactMarkdown>
            </Collapse>
            {index !== faqs.length - 1 && (
              <div className="h-px bg-zinc-500/40 scale-y-50 my-2" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
