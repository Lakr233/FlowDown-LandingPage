import clsx from 'clsx'
import { Tooltip } from './Tooltip'

const Hero = () => {
  return (
    <div className="relative pb-10 flex flex-col items-center justify-center  md:px-8 overflow-hidden">
      <div className="relative flex flex-col items-center justify-center mt-10">
        <h1 className="text-4xl md:text-7xl font-bold mb-8 relative text-center text-zinc-700">
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-500 z-10">
            AI client
          </span>{' '}
          for power users
        </h1>
        <h2 className="relative font-regular text-lg text-zinc-500 tracking-wide mb-20 text-center max-w-3xl mx-auto antialiased">
          Switch between top AI services and local models.
          <br /> All from a single native app on your Mac.
        </h2>
      </div>

      <DownloadButtonGroup />

      <AiProviders />

      <ScreenShot />
    </div>
  )
}

const DownloadButtonGroup = () => {
  return (
    <div className="mb-20">
      <div className="flex flex-col items-center">
        <button className="relative z-10 group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <a className="relative z-10 px-6 py-3 bg-accent text-white font-bold rounded-full block">
            Download For macOS
          </a>
        </button>

        <p className="mt-3 text-xs text-zinc-500">
          Intel & Apple Silicon · macOS 12+
        </p>
      </div>
    </div>
  )
}

const AiProviders = () => {
  const providers = [
    {
      name: 'Anthropic',
      logo: './logo-cluster/anthropic.svg?r=1',
      link: 'https://www.anthropic.com',
    },
    {
      name: 'Mistral',
      logo: './logo-cluster/mistral.svg?r=1',
      link: 'https://mistral.ai',
    },
    {
      name: 'Ollama',
      logo: './logo-cluster/ollama.svg?r=1',
      link: 'https://ollama.ai',
    },
    {
      name: 'OpenAI',
      logo: './logo-cluster/openai.svg?r=1',
      link: 'https://openai.com',
    },
    {
      name: 'XAI',
      logo: './logo-cluster/xai.svg?r=1',
      link: 'https://xai.com',
      extraClasses: 'p-0 md:p-2',
    },
    {
      name: 'Perplexity',
      logo: './logo-cluster/perplexity.svg?r=1',
      link: 'https://perplexity.ai',
    },
    {
      name: 'Google Gemini',
      logo: './logo-cluster/google-gemini.svg?r=1',
      link: 'https://gemini.google.com',
    },
    {
      name: 'Azure',
      logo: './logo-cluster/azure.svg?r=1',
      link: 'https://azure.microsoft.com',
    },
  ]

  return (
    <div className="flex md:gap-6">
      {providers.map((provider) => (
        <Tooltip sideOffset={-10} key={provider.name} content={provider.name}>
          <div className="relative grayscale hover:grayscale-0 cursor-pointer">
            <a href={provider.link}>
              <img
                alt={provider.name}
                src={provider.logo}
                className={`w-10 h-10 p-2 md:w-16 md:h-16 md:p-4 block ${
                  provider.extraClasses || ''
                }`}
              />
            </a>
          </div>
        </Tooltip>
      ))}
    </div>
  )
}

const ScreenShot = () => {
  return (
    <div
      className={clsx(
        'w-full mt-12 mb-24 flex items-center justify-center',
        'h-[500px] bg-zinc-500',
      )}
    >
      ScreenShot Placeholder
    </div>
  )
}

export default Hero
