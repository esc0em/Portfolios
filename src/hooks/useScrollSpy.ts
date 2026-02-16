import { useState, useEffect } from 'react'

export const SECTION_IDS = [
  'hero',
  'about',
  'skills',
  'projects',
  'services',
  'contact',
] as const

export type SectionId = (typeof SECTION_IDS)[number]

export function useScrollSpy(): SectionId | null {
  const [activeId, setActiveId] = useState<SectionId | null>(null)

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el != null
    )
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => ({ id: e.target.id as SectionId, ratio: e.intersectionRatio }))
        if (visible.length === 0) return
        const best = visible.reduce((a, b) => (a.ratio >= b.ratio ? a : b))
        setActiveId(best.id)
      },
      {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return activeId
}
