import * as React from 'react'
import { CgWebsite } from 'react-icons/cg'
import { IoIosPeople } from 'react-icons/io'
import { MdOutlineDesignServices } from 'react-icons/md'

const HeroFeatures = () => {
  return (
    <div className=" relative mx-auto mb-4 grid w-full max-w-6xl grid-cols-1 gap-10 px-2 md:grid-cols-2 md:px-8 lg:grid-cols-3">
      <Card
        title={`Modern Web Apps`}
        description={`Web apps that are discoverable, easy to customize with a modern tech stack to optimize your website for performance.`}
        icon={<CgWebsite className="size-4 text-zinc-700" />}
      />
      <Card
        title={` Tailored design`}
        description={`Custom designs tailored to your needs, providing you with a Figma file that is easy to navigate and comfortable to work with.`}
        icon={<MdOutlineDesignServices className="size-4 text-zinc-700" />}
      />
      <Card
        title={`Built by experts`}
        description={`We are a team of Senior Software Engineers that have built and developed web apps at scale. You can trust us.`}
        icon={<IoIosPeople className="size-4 text-zinc-700" />}
      />
    </div>
  )
}

const Card = ({ title, description, icon }: any) => {
  return (
    <div className="flex flex-row items-start space-x-4">
      <div className="rounded-xl border-2 border-teal-500 bg-white p-2 shadow-sm dark:bg-zinc-900">
        {icon}
      </div>
      <div className="flex flex-col">
        <h2 className="mb-4 text-sm font-bold tracking-wide text-zinc-700">
          {title}
        </h2>
        <h4 className="text-sm font-normal leading-6 text-zinc-700">
          {description}
        </h4>
      </div>
    </div>
  )
}

export default HeroFeatures
