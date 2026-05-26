import { motion, useScroll, useTransform } from 'framer-motion'
import { useMemo, useRef } from 'react'

type AnimatedTextProps = {
  text: string
  className?: string
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const characters = useMemo(() => text.split(''), [text])
  const words = useMemo(() => text.split(' '), [text])
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.8', 'end 0.2'],
  })
  let charIndex = 0

  return (
    <p ref={paragraphRef} className={`relative ${className ?? ''}`.trim()}>
      {words.map((word, wordIndex) => {
        return (
          <span key={`${word}-${wordIndex}`} className="inline-flex whitespace-nowrap">
            {word.split('').map((char) => {
              const start = charIndex / characters.length
              const end = start + 0.2
              const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])
              const key = `${char}-${charIndex}`
              charIndex += 1

              return (
                <span key={key} className="relative inline-block">
                  <span className="invisible">{char}</span>
                  <motion.span
                    style={{ opacity }}
                    className="absolute left-0 top-0"
                  >
                    {char}
                  </motion.span>
                </span>
              )
            })}
            {wordIndex < words.length - 1 && (() => {
              const start = charIndex / characters.length
              const end = start + 0.2
              const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])
              charIndex += 1

              return (
                <span key={`space-${wordIndex}`} className="relative inline-block">
                  <span className="invisible">&nbsp;</span>
                  <motion.span
                    style={{ opacity }}
                    className="absolute left-0 top-0"
                  >
                    &nbsp;
                  </motion.span>
                </span>
              )
            })()}
          </span>
        )
      })}
    </p>
  )
}
