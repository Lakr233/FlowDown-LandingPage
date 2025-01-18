// import {hydrate} from "next-mdx-remote/hydrate";

import { getFiles, getFileBySlug } from 'src/lib/mdx'

import MDXComponents from 'src/components/MDXComponents'
import { MDXRemote } from 'next-mdx-remote'
import { Container } from 'src/components/Container'

import { useEffect } from 'react'
import { BlurImage } from 'src/components/BlurImage'
import moment from 'moment'
import { APP_NAME } from 'src/constants/app'

export default function Resource({ mdxSource, frontMatter }: any) {
  return (
    <Container
      title={`${frontMatter.title} | ${APP_NAME}`}
      description={frontMatter.description}
      className="max-w-7xl mx-auto pb-20 px-4 md:px-16"
    >
      <div className="max-w-5xl mx-auto">
        <Header frontMatter={frontMatter} />
      </div>
      <div className="prose prose-sm lg:prose-lg mx-auto max-w-3xl pb-10">
        <MDXRemote components={MDXComponents} {...mdxSource} />
      </div>
    </Container>
  )
}

const Header = ({ frontMatter }: any) => {
  return (
    <div className="my-10">
      <div className="w-full h-52 md:h-96 rounded-lg relative flex justify-center mb-4 overflow-hidden">
        <BlurImage
          src={frontMatter.image}
          alt="thumbnail"
          className="rounded-lg object-cover"
          layout="fill"
          // width="800"
          // height="800"
        />
      </div>
      <div className="flex space-x-2  my-2 items-center justify-between max-w-7xl mb-20 ">
        <div className="flex flex-row justify-between space-x-2 w-full">
          <div className="flex flex-row space-x-2 items-center">
            <div className="border-2 border-gray-100  rounded-full flex items-center">
              <BlurImage
                src={frontMatter.authorAvatar}
                width="20"
                height="20"
                className="rounded-full object-cover "
              />
            </div>
            <span className="text-zinc-700 font-semibold">
              {' '}
              {frontMatter.author}
            </span>
          </div>

          <span className="text-zinc-400 text-base">
            {moment(frontMatter.publishedAt).format('Do MMM YYYY')}
          </span>
        </div>
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-6xl text-zinc-700 font-extrabold  mx-auto text-left mt-10 mb-10 md:mb-20">
        {frontMatter.title}
      </h1>
    </div>
  )
}

export async function getStaticPaths() {
  const snippets = await getFiles('blogs')

  return {
    paths: snippets.map((s) => ({
      params: {
        slug: s.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const snippet = await getFileBySlug('blogs', params.slug)

  return { props: snippet }
}
