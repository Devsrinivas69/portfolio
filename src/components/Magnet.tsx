import { useEffect, useRef } from 'react'

type MagnetProps = {
  children: React.ReactNode
  className?: string
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
}

export function Magnet({
  children,
  className,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
}: MagnetProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const activeRef = useRef(false)

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const element = wrapperRef.current
      if (!element) {
        return
      }

      const rect = element.getBoundingClientRect()
      const withinX =
        event.clientX >= rect.left - padding &&
        event.clientX <= rect.right + padding
      const withinY =
        event.clientY >= rect.top - padding &&
        event.clientY <= rect.bottom + padding
      const isActive = withinX && withinY

      if (isActive) {
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const offsetX = (event.clientX - centerX) / strength
        const offsetY = (event.clientY - centerY) / strength
        element.style.transition = activeTransition
        element.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`
        activeRef.current = true
        return
      }

      if (activeRef.current) {
        element.style.transition = inactiveTransition
        element.style.transform = 'translate3d(0px, 0px, 0)'
        activeRef.current = false
      }
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [padding, strength, activeTransition, inactiveTransition])

  return (
    <div ref={wrapperRef} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  )
}
