export const HEADER_OFFSET_PX = 64

export function scrollToSection(
  id: string,
  headerOffsetPx: number,
  behavior: ScrollBehavior = 'smooth'
): void {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffsetPx
  window.scrollTo({ top, behavior })
}
