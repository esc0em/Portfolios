import { useRef, useState, useEffect } from 'react'
import { useReducedMotion } from './useReducedMotion'

export function useSectionReveal() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true)
      return
    }
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { rootMargin: '0px 0px -50px 0px', threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [reducedMotion])

  const revealClass = reducedMotion ? '' : isVisible ? 'section-reveal is-visible' : 'section-reveal'
  return { ref, revealClass }
}
