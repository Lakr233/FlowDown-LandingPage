import { MdDeveloperMode } from 'react-icons/md'
import { AiOutlineCode } from 'react-icons/ai'
import { BsFillBookmarkCheckFill, BsPen } from 'react-icons/bs'
import { GrDeploy, GrVmMaintenance } from 'react-icons/gr'
import { BiRocket } from 'react-icons/bi'
import { FaLaptopCode } from 'react-icons/fa'
import { APP_NAME } from './app'

export const services = [
  {
    id: 0,
    title: 'Native, Fast & Powerful',
    description: `Not another 200MB Electron app. Natively intergrated with your favorite apps.`,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
        className="h-8 w-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        ></path>
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
    title: 'Custom AI Assistants',
    description: `With ${APP_NAME}, you can create custom AI assistants, tailoring the AI's behavior to suit specific tasks or roles.`,
    icon: <AiOutlineCode className="h-8 w-8 text-gray-500" />,
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
    title: 'Deployments and Hosting',
    description: `Get your website out there in the world, where it belongs, with our lightning-fast deployment services.`,
    icon: <BiRocket className="h-8 w-8 text-gray-500 stroke-gray-500" />,
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
    title: 'Maintenence',
    description: `We keep your website running like a well-oiled machine. From optimizing performance to ensuring security, we've got you covered`,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 text-gray-500 stroke-gray-500"
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
    title: 'Full-Stack Development',
    description: `Take your website to the next level with our full-stack development services. We've got all the skills to make your vision a reality.`,
    icon: <FaLaptopCode className="h-8 w-8 text-gray-500" />,
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
    title: 'And everything else',
    description: `Ecommerce, Landing pages, Back-end heavy, Dashboards. You name it, we've done it AND we'll do it for you.`,
    icon: <BsFillBookmarkCheckFill className="h-8 w-8 text-green-500" />,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
]
