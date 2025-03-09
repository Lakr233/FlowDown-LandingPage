import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { NextSeo } from 'next-seo'
import { useCallback, useState } from 'react'

import { Container } from '@/components/Container'
import { CustomLink } from '@/components/CustomLink'
import { ImageLightbox } from '@/components/ImageLightbox'
import { MarkdownRenderer } from '@/components/MarkdownRenderer'

type Author = {
  name: string
  avatar: string
  link: string
}

type OpenSource = {
  id: number
  title: string
  description: string
  content: string
  date: string
  link: string
  tags: string[]
  images: {
    src: string
    alt: string
    width: number
    height: number
  }[]
  author: Author | Author[]
}[]

const openSourceProjects: OpenSource = [
  {
    id: 1,
    title: 'GlyphixTextFx',
    description:
      "FlowDown's text animation framework. We backported SwiftUI numeric transition features to UIKit for older iOS versions",
    content: `
  ## Key Features
  - **High-performance numeric transitions**: Smooth digit scrolling and animation effects
  - **UIKit compatible**: Designed for older iOS systems without requiring SwiftUI
  - **Easy integration**: Simple and intuitive API interface
  - **Highly customizable**: Supports custom animation parameters and styles

  ### Implementation Example

  \`\`\`swift
  import GlyphixTextFx
  let glyphixLabel: GlyphixTextLabel = .init()
  let labelConfiguration: LabelConfiguration = .init()
  glyphixLabel.font = labelFont
  glyphixLabel.text = "Hello World"
  view.addSubview(glyphixLabel)
  \`\`\`
      `,
    date: '2025-03-10',
    link: 'https://github.com/ktiays/GlyphixTextFx',
    tags: ['iOS', 'UIKit', 'Animation', 'Text Effects'],
    images: [
      {
        src: '/opensource/glyphix-text-fx-1.jpg',
        alt: 'GlyphixTextFx numeric transition animation demo',
        width: 800,
        height: 400,
      },
    ],
    author: {
      name: '@ktiays',
      avatar: '/avatars/ktiays.jpg',
      link: 'https://github.com/ktiays',
    },
  },
]

const toBeContinue = true

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

export default function OpenSource() {
  const t = useTranslations('openSource')
  const commonT = useTranslations('common')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const currentImages =
    (lightboxOpen && openSourceProjects[currentProjectIndex]?.images) || []

  const openLightbox = (projectIndex: number, imageIndex: number) => {
    setCurrentProjectIndex(projectIndex)
    setCurrentImageIndex(imageIndex)
    setLightboxOpen(true)

    // eslint-disable-next-line react-compiler/react-compiler
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }

  const nextImage = useCallback(() => {
    if (currentImages.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % currentImages.length)
    }
  }, [currentImages.length])

  const prevImage = useCallback(() => {
    if (currentImages.length > 1) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + currentImages.length) % currentImages.length,
      )
    }
  }, [currentImages.length])

  const [shouldShowAvatarName, setShouldShowAvatarName] = useState(false)
  return (
    <>
      <NextSeo title={t('pageTitle')} description={t('pageDescription')} />

      <Container className="mt-8 sm:mt-16">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {t('title')}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 text-left lg:text-center text-balance">
            {t('description')}
          </p>

          <p className="mt-5 text-sm underline decoration-zinc-600/50 opacity-50 dark:decoration-zinc-400/50">
            {t('onlyEnglish')}
          </p>
        </motion.div>

        <div className="mt-8 sm:mt-16">
          <div className="relative mx-auto max-w-3xl">
            <motion.ul
              className="space-y-16"
              variants={containerVariants}
              initial="hidden"
              animate={'visible'}
            >
              {openSourceProjects.map((project, projectIndex) => (
                <motion.li
                  key={project.id}
                  className="group relative"
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <div className="mb-3">
                    <motion.time
                      className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {new Date(project.date).toLocaleDateString('zh-CN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </motion.time>
                  </div>

                  <motion.div
                    className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm backdrop-blur transition-all duration-300 group-hover:shadow-md dark:border-zinc-700/80 dark:bg-zinc-800/80"
                    layoutId={`project-card-${project.id}`}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <motion.h2
                          className="text-xl font-semibold text-zinc-900 dark:text-zinc-100"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          {project.title}
                        </motion.h2>

                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="ml-4 shrink-0"
                        >
                          <CustomLink
                            href={project.link}
                            className="hover:text-accent/80 dark:hover:text-accent/90 inline-flex items-center text-sm font-medium text-accent transition-colors dark:text-accent"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="i-mingcute-github-line mr-1" />
                            {t('viewProject')}
                          </CustomLink>
                        </motion.div>
                      </div>

                      <motion.p
                        className="mt-2 text-zinc-600 dark:text-zinc-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {project.description}
                      </motion.p>

                      {/* 标签 - Apple 风格的标签 */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <motion.span
                            key={tag}
                            className="inline-flex items-center rounded-md bg-zinc-50 px-2 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-700/50 dark:text-zinc-300"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.1 * index,
                              duration: 0.3,
                              ease: 'easeOut',
                            }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      {/* 预览图区域 */}
                      {project.images && project.images.length > 0 && (
                        <motion.div
                          className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        >
                          {project.images.map((image, imageIndex) => (
                            <motion.div
                              key={imageIndex}
                              className="relative aspect-[16/9] cursor-pointer overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800/50"
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                              onClick={() =>
                                openLightbox(projectIndex, imageIndex)
                              }
                            >
                              <img
                                src={image.src}
                                alt={image.alt}
                                width={image.width}
                                height={image.height}
                                className="size-full object-cover"
                                sizes="(min-width: 640px) 384px, 100vw"
                              />
                              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 dark:ring-white/10" />

                              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity hover:opacity-100 dark:bg-black/40">
                                <div className="flex size-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm dark:bg-zinc-800/90">
                                  <i className="i-mingcute-zoom-in-line text-lg text-zinc-800 dark:text-zinc-200" />
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}

                      <motion.div
                        className="mt-6 border-t border-zinc-100 pt-6 dark:border-zinc-700/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <MarkdownRenderer>{project.content}</MarkdownRenderer>
                      </motion.div>

                      <motion.div
                        onHoverStart={() => setShouldShowAvatarName(true)}
                        onHoverEnd={() => setShouldShowAvatarName(false)}
                        className="mt-8 border-t group/avatars border-zinc-100 pt-6 dark:border-zinc-700/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                          {project.author && (
                            <motion.div
                              className="flex items-center"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 }}
                            >
                              {!Array.isArray(project.author) ? (
                                <>
                                  <span className="mr-2 text-sm text-zinc-500 dark:text-zinc-400">
                                    {t('authoredBy')}
                                  </span>
                                  <CustomLink
                                    href={project.author.link}
                                    className="group flex items-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <div className="relative mr-3 size-8 overflow-hidden rounded-full">
                                      <img
                                        src={project.author.avatar}
                                        alt={project.author.name}
                                        className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
                                      />
                                    </div>
                                    <span className="text-sm font-medium text-zinc-700 transition-colors group-hover:text-accent dark:text-zinc-300 dark:group-hover:text-accent">
                                      {project.author.name}
                                    </span>
                                  </CustomLink>
                                </>
                              ) : (
                                <>
                                  <span className="mr-2 text-sm text-zinc-500 dark:text-zinc-400">
                                    {t('coAuthoredBy')}
                                  </span>
                                  {project.author.map((author) => (
                                    <CustomLink
                                      key={author.name}
                                      href={author.link}
                                      className="group flex items-center mr-3"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <div className="relative mr-2 size-8 overflow-hidden rounded-full">
                                        <img
                                          src={author.avatar}
                                          alt={author.name}
                                          className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                      </div>
                                      <span className="text-sm font-medium text-zinc-700 transition-colors group-hover:text-accent dark:text-zinc-300 dark:group-hover:text-accent">
                                        {author.name}
                                      </span>
                                    </CustomLink>
                                  ))}
                                </>
                              )}
                            </motion.div>
                          )}

                          <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <CustomLink
                              href={commonT('download_link')}
                              className="hover:bg-accent/90 inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="i-mingcute-apple-fill mr-2" />
                              {commonT('download_button')}
                            </CustomLink>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.li>
              ))}

              {toBeContinue && (
                <motion.li className="relative" variants={itemVariants}>
                  <motion.div
                    className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/50 p-8 backdrop-blur dark:border-zinc-700 dark:bg-zinc-800/20"
                    whileHover={{ scale: 1.01 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <div className="flex flex-col items-center justify-center text-center">
                      <motion.div
                        className="relative mb-6"
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: 'loop',
                          ease: 'easeInOut',
                        }}
                      >
                        <i className="i-mingcute-code-line text-4xl text-accent opacity-80" />
                        <motion.div
                          className="absolute -right-1 -top-1 size-3 rounded-full bg-accent"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: 'loop',
                          }}
                        />
                      </motion.div>

                      <motion.h3
                        className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {t('toBeContinueTitle')}
                      </motion.h3>

                      <motion.p
                        className="max-w-md text-zinc-600 dark:text-zinc-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {t('toBeContinueDescription')}
                      </motion.p>

                      <motion.div
                        className="mt-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <CustomLink
                          href={commonT('document_link')}
                          className="inline-flex items-center rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="i-mingcute-book-6-line mr-2" />
                          {commonT('document_link_text')}
                        </CustomLink>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.li>
              )}
            </motion.ul>
          </div>
        </div>
      </Container>

      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        images={currentImages}
        currentIndex={currentImageIndex}
        onPrev={prevImage}
        onNext={nextImage}
        translations={{
          close: t('closeLightbox'),
          previous: t('previousImage'),
          next: t('nextImage'),
        }}
      />
    </>
  )
}

export { getStaticPaths, getStaticProps } from 'src/lib/get-i18n-props'

// const AnimatedAvatar: React.FC<{ name: string }> = ({ name }) => {

//   return (
//     <motion.span
//       layout
//       className="group-hover/avatars:inline text-sm font-medium text-zinc-700 transition-colors group-hover:text-accent dark:text-zinc-300 dark:group-hover:text-accent"
//     >
//       {name}
//     </motion.span>
//   )
// }
