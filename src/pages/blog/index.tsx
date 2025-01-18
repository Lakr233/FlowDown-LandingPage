import { Container } from 'src/components/Container'

import { getAllFilesFrontMatter } from 'src/lib/mdx'

import { BiTimeFive } from 'react-icons/bi'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

import { useRouter } from 'next/router'
import { BlurImage } from 'src/components/BlurImage'

import moment from 'moment'
import { APP_NAME } from 'src/constants/app'

const resources = ({ resources }: any) => {
  return (
    <Container
      title={`Blogs | ${APP_NAME}`}
      className="pb-20"
      description={`Latest articles on web development and how a website can help you 10x your revenue.`}
    >
      <div className="pb-4 pt-4 md:pb-20 md:pt-10 relative">
        <div className="mx-auto max-w-2xl sm:text-center pb-10 ">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Everything you need to know about web apps
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            We write about everything from design to deployment to get your
            website shipped and ready to go!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
        {resources.map((resource: any) => (
          <ResourceCard
            link={'/blog/' + resource.slug}
            title={resource.title}
            description={resource.description}
            image={resource.image}
            author={resource.author}
            authorAvatar={resource.authorAvatar}
            publishedAt={resource.publishedAt}
          />
        ))}
      </div>
    </Container>
  )
}

const ResourceCard = ({
  title,
  description,
  image,
  link,
  author,
  authorAvatar,
  publishedAt,
}: any) => {
  const truncate = (text: string) => {
    if (text.length > 100) {
      return text.substring(0, 200) + '...'
    } else {
      return text
    }
  }
  return (
    <Link
      legacyBehavior
      href={link}
      className="relative  rounded-2xl p-4 transition duration-200"
    >
      <div className="flex flex-col cursor-pointer">
        <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
          <BlurImage
            src={image}
            alt="thumbnail"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex space-x-2  my-2 items-center"></div>
        <h2 className="font-bold my-4 text-2xl text-zinc-700">{title}</h2>
        <h4 className="text-base text-zinc-600">{truncate(description)}</h4>
      </div>
    </Link>
  )
}

export async function getStaticProps() {
  const resources = await getAllFilesFrontMatter('blogs')

  let sortedResources = resources.sort(
    (a, b) =>
      new Date(b?.publishedAt)?.getTime() - new Date(a?.publishedAt)?.getTime(),
  )

  return { props: { resources: sortedResources } }
}

export default resources
