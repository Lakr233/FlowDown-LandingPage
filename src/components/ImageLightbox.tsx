import { AnimatePresence, m } from 'framer-motion'
import { useEffect } from 'react'
import { smoothPreset } from 'src/constants/spring'

type ImageType = {
  src: string
  alt: string
  width: number
  height: number
}

interface ImageLightboxProps {
  isOpen: boolean
  onClose: () => void
  images: ImageType[]
  currentIndex: number
  onPrev: () => void
  onNext: () => void
  translations: {
    close: string
    previous: string
    next: string
  }
}

const lightboxVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: smoothPreset,
  },
  exit: {
    opacity: 0,
    transition: smoothPreset,
  },
}

const lightboxImageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: smoothPreset,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: smoothPreset,
  },
}

export function ImageLightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onPrev,
  onNext,
  translations,
}: ImageLightboxProps) {
  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case 'Escape': {
          onClose()
          break
        }
        case 'ArrowRight': {
          onNext()
          break
        }
        case 'ArrowLeft': {
          onPrev()
          break
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, onNext, onPrev])

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          variants={lightboxVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <button
            className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            onClick={onClose}
            aria-label={translations.close}
          >
            <i className="i-mingcute-close-line text-2xl" />
          </button>

          {images.length > 1 && (
            <button
              className="absolute left-4 top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation()
                onPrev()
              }}
              aria-label={translations.previous}
            >
              <i className="i-mingcute-arrow-left-line text-2xl" />
            </button>
          )}

          {images.length > 1 && (
            <button
              className="absolute right-4 top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation()
                onNext()
              }}
              aria-label={translations.next}
            >
              <i className="i-mingcute-arrow-right-line text-2xl" />
            </button>
          )}

          <m.div
            className="relative max-h-[90vh] max-w-[90vw]"
            variants={lightboxImageVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-h-[90vh] max-w-full object-contain"
            />
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  )
}
