import { m } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { NextSeo } from 'next-seo'
import { useCallback, useState } from 'react'
import { snappy, snappyPreset } from 'src/constants/spring'

import { AutoResizeWidth } from '@/components/AutoResizeWidth'
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
  {
    id: 2,
    title: 'ConfigurableKit',
    description: 'The simple but yet powerful way to build settings page.',
    content: `
  ## Key Features
  - Simple Setup: define what you want and we handle the rest.
  - Ultra fast written in Swift and UIKit. (No SwiftUI)
  - Rich value type support, including Codable.
  - Sync your settings with UserDefaults.
  - Support for customizing the storage engine other than UserDefaults.
  - Support for nested values and controllers.
  - Support for disabling setting element based on condition.

  ### Implementation Example

  \`\`\`swift
  ConfigurableObject(
    icon: "switch.2",
    title: "Toggle Item Below",
    explain: "Item with boolean value to be edited",
    key: "wiki.qaq.test.boolean",
    defaultValue: true,
    annotation: .boolean
  )
  \`\`\`
      `,
    date: '2025-03-11',
    link: 'https://github.com/Lakr233/ConfigurableKit',
    tags: ['iOS', 'UIKit', 'Settings', 'Swift', 'UserDefaults'],
    images: [
      {
        src: '/opensource/configurable-kit-1.png',
        alt: 'ConfigurableKit settings page demo',
        width: 800,
        height: 400,
      },
      {
        src: '/opensource/configurable-kit-2.jpg',
        alt: 'ConfigurableKit settings page demo',
        width: 800,
        height: 400,
      },
    ],
    author: {
      name: '@Lakr233',
      avatar: '/avatars/lakr.png',
      link: 'https://github.com/Lakr233',
    },
  },
  {
    id: 3,
    title: 'AlertController',
    description:
      'A modern, customizable alert controller implementation for iOS and macCatalyst applications.',
    content: `
  ## Key Features
  - Custom styled alert views with clean UI
  - Support for iOS and macCatalyst platforms
  - Multiple action buttons with customizable styles (normal and dangerous)
  - We handles dismiss and callback for you
  - Text input support with clipboard integration
  - Progress indicator for loading states
  - Customizable accent colors and appearance
  - Smooth animations with spring effects
  - Escape key and outside tap dismissal options
  - Localization support

  ### Implementation Example

  \`\`\`swift
  let alert = AlertViewController(
      title: "Hello World",
      message: "This is a sample alert message"
  ) { context in
      context.addAction(title: "Cancel") {
          context.dispose()
      }
      context.addAction(title: "Confirm", attribute: .dangerous) {
          context.dispose {
              // Your code here after confirmation
          }
      }
  }
  present(alert, animated: true)
  \`\`\`
      `,
    date: '2025-03-12',
    link: 'https://github.com/Lakr233/AlertController',
    tags: ['iOS', 'UIKit', 'Swift', 'macCatalyst', 'Alert'],
    images: [
      {
        src: '/opensource/alert-controller-1.png',
        alt: 'AlertController alert view demo',
        width: 800,
        height: 400,
      },
      {
        src: '/opensource/alert-controller-2.jpeg',
        alt: 'AlertController alert view demo',
        width: 800,
        height: 400,
      },
    ],
    author: [
      {
        name: '@Lakr233',
        avatar: '/avatars/lakr.png',
        link: 'https://github.com/Lakr233',
      },
      {
        name: '@ktiays',
        avatar: '/avatars/ktiays.jpg',
        link: 'https://github.com/ktiays',
      },
    ],
  },
  {
    id: 4,
    title: 'Litext',
    description: 'Tiny rich-text supporting library for iOS & macOS',
    content: `
  ## Key Features

  - High performance text layout and rendering
  - Text attachments with native view supports
  - Interactable links
  - Custom draw callbacks
  - Auto layout integration
    `,
    date: '2025-03-13',
    link: 'https://github.com/Helixform/Litext',
    tags: ['CoreText', 'Text', 'Rich Text', 'Objective-C'],
    images: [
      {
        src: '/opensource/litext-1.png',
        alt: 'Litext Banner',
        width: 800,
        height: 400,
      },
      {
        src: '/opensource/litext-2.png',
        alt: 'Litext Banner',
        width: 800,
        height: 400,
      },
    ],
    author: {
      name: '@unixzii',
      avatar: '/avatars/unixzii.jpg',
      link: 'https://github.com/unixzii',
    },
  },
  {
    id: 5,
    title: 'ScrubberKit',
    description:
      'ScrubberKit is a robust framework designed to scrape and process web content using keywords, transforming complex HTML pages into clean, plain text suitable for AI model consumption.',
    content: `
  ## Key Features

  - Keyword-based web content discovery
  - SwiftSoup-based HTML parsing and cleaning
  - Plain text extraction optimized for AI consumption
  - Cross-platform support (iOS, macOS, macCatalyst, visionOS)
  - Asynchronous operations for efficient performance
  - Automatically block font and media resources
    `,
    date: '2025-03-14',
    link: 'https://github.com/Lakr233/ScrubberKit',
    tags: ['Swift', 'Web Scraping', 'HTML Parsing', 'AI'],
    images: [
      {
        src: '/opensource/scrubberkit-1.jpg',
        alt: 'ScrubblerKit Playground',
        width: 800,
        height: 400,
      },
    ],
    author: {
      name: '@Lakr233',
      avatar: '/avatars/lakr.png',
      link: 'https://github.com/Lakr233',
    },
  },
  {
    id: 6,
    title: 'FlowDown Community',
    description:
      "FlowDown Community serves as the predecessor project of FlowDown, designed to validate core functionalities' feasibility and evaluate competitive positioning within current software market offerings.",
    content: `
  ## Key Features
    
  - **Basic Chat Functionality**: Standard AI conversation capabilities
  - **Fast Rendering Engine (v1)**: Lightweight text display system
  - **Open Source Code**: Complete access to source code
  - **Markdown Support**: Handles formatted text (headings, lists, code, tables...)
  - **Simple Title**: Simple title generation
    `,
    date: '2025-03-15',
    link: 'https://github.com/Lakr233/FlowDown-App',
    tags: ['Swift', 'UIKit', 'App', 'Community'],
    images: [
      {
        src: '/opensource/flowdown-community-1.png',
        alt: 'FlowDown Community App Screenshot',
        width: 800,
        height: 400,
      },
    ],
    author: {
      name: '@Lakr233',
      avatar: '/avatars/lakr.png',
      link: 'https://github.com/Lakr233',
    },
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

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
    transition: snappy(0.6, 0.2),
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

  return (
    <>
      <NextSeo title={t('pageTitle')} description={t('pageDescription')} />

      <Container className="mt-8 sm:mt-16">
        <m.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={snappy(0.6)}
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
        </m.div>

        <div className="mt-8 sm:mt-16">
          <div className="relative mx-auto max-w-3xl">
            <m.ul
              className="space-y-16"
              variants={containerVariants}
              initial="hidden"
              animate={'visible'}
            >
              {openSourceProjects.map((project, projectIndex) => (
                <m.li
                  key={project.id}
                  className="group relative"
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  transition={snappy(0.6, 0.2)}
                >
                  <div className="mb-3">
                    <m.time
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
                    </m.time>
                  </div>

                  <m.div
                    className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm backdrop-blur transition-all duration-300 group-hover:shadow-md dark:border-zinc-700/80 dark:bg-zinc-800/80"
                    layoutId={`project-card-${project.id}`}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <m.h2
                          className="text-xl font-semibold text-zinc-900 dark:text-zinc-100"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          {project.title}
                        </m.h2>

                        <m.div
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
                        </m.div>
                      </div>

                      <m.p
                        className="mt-2 text-zinc-600 dark:text-zinc-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {project.description}
                      </m.p>

                      {/* 标签 - Apple 风格的标签 */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <m.span
                            key={tag}
                            className="inline-flex items-center rounded-md bg-zinc-50 px-2 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-700/50 dark:text-zinc-300"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.1 * index,
                              ...snappyPreset,
                            }}
                          >
                            {tag}
                          </m.span>
                        ))}
                      </div>

                      {/* 预览图区域 */}
                      {project.images && project.images.length > 0 && (
                        <m.div
                          className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        >
                          {project.images.map((image, imageIndex) => (
                            <m.div
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
                            </m.div>
                          ))}
                        </m.div>
                      )}

                      <m.div
                        className="mt-6 border-t border-zinc-100 pt-6 dark:border-zinc-700/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, ...snappyPreset }}
                      >
                        <MarkdownRenderer>{project.content}</MarkdownRenderer>
                      </m.div>

                      <m.div
                        className="mt-8 border-t group/avatars border-zinc-100 pt-6 dark:border-zinc-700/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, ...snappy(0.5, 0.2) }}
                      >
                        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                          {project.author && (
                            <m.div
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
                                      className="group flex items-center"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <div className="relative mr-3 size-8 overflow-hidden rounded-full">
                                        <img
                                          src={author.avatar}
                                          alt={author.name}
                                          className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                      </div>
                                      <div className="flex gap-2 items-center">
                                        <AutoResizeWidth
                                          spring
                                          className="text-sm font-medium text-zinc-700 transition-colors group-hover:text-accent dark:text-zinc-300 dark:group-hover:text-accent mr-2"
                                        >
                                          <span className="block group-hover:w-auto w-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            {author.name}
                                          </span>
                                        </AutoResizeWidth>
                                      </div>
                                    </CustomLink>
                                  ))}
                                </>
                              )}
                            </m.div>
                          )}

                          <m.div
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
                          </m.div>
                        </div>
                      </m.div>
                    </div>
                  </m.div>
                </m.li>
              ))}

              {toBeContinue && (
                <m.li className="relative" variants={itemVariants}>
                  <m.div
                    className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/50 p-8 backdrop-blur dark:border-zinc-700 dark:bg-zinc-800/20"
                    whileHover={{ scale: 1.01 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <div className="flex flex-col items-center justify-center text-center">
                      <m.div
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
                        <m.div
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
                      </m.div>

                      <m.h3
                        className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {t('toBeContinueTitle')}
                      </m.h3>

                      <m.p
                        className="max-w-md text-zinc-600 dark:text-zinc-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {t('toBeContinueDescription')}
                      </m.p>

                      <m.div
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
                      </m.div>
                    </div>
                  </m.div>
                </m.li>
              )}
            </m.ul>
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
