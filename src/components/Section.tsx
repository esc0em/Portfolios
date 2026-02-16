import { type ReactNode } from 'react'
import { useSectionReveal } from '../hooks/useSectionReveal'

type SectionProps = {
  id: string
  title?: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  const { ref, revealClass } = useSectionReveal()

  return (
    <section
      ref={ref}
      id={id}
      className={`content-container py-12 sm:py-16 ${revealClass} ${className}`.trim()}
    >
      {title && (
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-accent/30 pb-2 text-center">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}
