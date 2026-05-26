import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const EASE = [0.25, 0.1, 0.25, 1] as const

type FadeInProps = {
  as?: keyof JSX.IntrinsicElements
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
  children?: ReactNode
} & Record<string, unknown>

export function FadeIn(props: FadeInProps) {
  const {
    as = 'div',
    delay = 0,
    duration = 0.7,
    x = 0,
    y = 30,
    ...rest
  } = props
  const MotionTag = motion.create(as)

  return (
    <MotionTag
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: EASE }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      {...(rest as Record<string, unknown>)}
    />
  )
}
