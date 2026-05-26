import { motion, useScroll, useTransform } from 'framer-motion'
import { useMemo, useRef } from 'react'

type AnimatedTextProps = {
  text: string
  className?: string
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const characters = useMemo(() => text.split(''), [text])
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.8', 'end 0.2'],
  })

  return (
    <p ref={paragraphRef} className={`relative ${className ?? ''}`.trim()}>
      {characters.map((char, index) => {
        const start = index / characters.length
        const end = start + 0.2
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])
        const renderedChar = char === ' ' ? '\u00A0' : char

        return (
          <span key={`${char}-${index}`} className="relative inline-block">
            <span className="invisible">{renderedChar}</span>
            <motion.span
              style={{ opacity }}
              className="absolute left-0 top-0"
            >
              {renderedChar}
            </motion.span>
          </span>
        )
      })}
    </p>
  )
}
