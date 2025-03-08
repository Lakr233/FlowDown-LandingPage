import { AiOutlineCode } from 'react-icons/ai'
import { BiRocket } from 'react-icons/bi'
import { BsFillBookmarkCheckFill } from 'react-icons/bs'
import { FaLaptopCode } from 'react-icons/fa'

export const appConfig = {
  app: {
    github: 'https://github.com/Lakr233/FlowDown-App',
    download_link:
      'https://apps.qaq.wiki/docs/flowdown/documents/app_store.html',
  },
}

export interface Testimonial {
  id: number
  content: React.ReactNode
  name: string
  designation: string
  link: string
  image: string
}
export const testimonials: Testimonial[] = [
  {
    id: 0,
    content: (
      <>
        "FlowDown is a game-changer for AI interactions. The blazing fast text
        rendering and markdown support make conversations feel natural and
        responsive. As someone who uses AI tools daily, the lightweight design
        and privacy-focused approach are exactly what I needed.
        <br />
        <br />
        The ability to bring my own LLM service provider gives me complete
        control over my AI experience."
      </>
    ),
    name: 'Lakr Aream',
    designation: 'FlowDown Team',
    link: 'https://github.com/Lakr233',
    image: '/avatars/lakr.png',
  },
  {
    id: 1,
    link: 'https://github.com/Lakr233/FlowDown-Beta',
    content: (
      <>
        "What sets FlowDown apart is its thoughtful design and performance. The
        automated chat titles streamline my workflow, and the universal
        compatibility with OpenAI-compatible services gives me flexibility.
        Whether you're using the Community or Pro edition, the core experience
        remains smooth and efficient."
      </>
    ),
    name: 'Lakr Aream',
    designation: 'AI Enthusiast',
    image: '/avatars/lakr.png',
  },
]

export const services = [
  {
    id: 0,
    title: 'Native & Lightweight',
    description:
      'Built with Swift and SwiftUI for macOS, FlowDown is incredibly lightweight and responsive, providing a seamless native experience.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        className="size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    id: 1,
    title: 'Blazing Fast Rendering',
    description:
      'Experience lightning-fast text rendering with smooth markdown support, making AI conversations feel natural and responsive.',
    icon: <AiOutlineCode className="size-8 text-gray-500" />,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    id: 2,
    title: 'Privacy by Design',
    description:
      'Your conversations stay on your device. FlowDown is designed with privacy in mind, giving you complete control over your data.',
    icon: <BiRocket className="size-8 stroke-gray-500 text-gray-500" />,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  {
    id: 3,
    title: 'Bring Your Own LLM',
    description:
      'Connect to any OpenAI-compatible service provider of your choice, including local models, giving you flexibility and control.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-8 stroke-gray-500 text-gray-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    id: 4,
    title: 'Smart Chat Management',
    description:
      'Automated chat titles and efficient conversation management help you stay organized and focused on what matters.',
    icon: <FaLaptopCode className="size-8 text-gray-500" />,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    id: 5,
    title: 'Community & Pro Editions',
    description:
      'Choose between the free Community Edition or upgrade to Pro for additional features while enjoying the same core experience.',
    icon: <BsFillBookmarkCheckFill className="size-8 text-green-500" />,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
]
