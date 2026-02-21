import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { LanguageToggle } from './LanguageToggle'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { scrollToSection } from '../lib/scroll'

const navKeys = ['home', 'about', 'projects', 'services', 'skills', 'contact'] as const
const anchorMap = { home: 'hero', about: 'about', skills: 'skills', projects: 'projects', services: 'services', contact: 'contact' } as const

const focusVisibleNav =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2'

export function Header() {
  const { t } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const activeId = useScrollSpy()
  const reducedMotion = useReducedMotion()
  const scrollBehavior = reducedMotion ? 'auto' : 'smooth'

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const offset = headerRef.current?.offsetHeight ?? 64
    scrollToSection(sectionId, offset, scrollBehavior)
    setMobileOpen(false)
  }

  const linkClass = (key: (typeof navKeys)[number]) =>
    `text-gray-800 hover:text-accent px-3 py-2 text-sm font-medium rounded-md ${focusVisibleNav} ${activeId === anchorMap[key] ? 'text-accent font-semibold' : ''}`

  const dropdownItemClass =
    'block px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded outline-none focus:bg-gray-100 focus-visible:ring-2 focus-visible:ring-accent'

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur"
    >
      <div className="content-container">
        <div className="flex items-center justify-between h-14 md:h-16">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            className={`flex items-center gap-2 text-lg font-semibold text-gray-900 ${focusVisibleNav}`}
          >
            <span className="logo-container flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white" aria-hidden>
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M5 8l4-4 1.5 1.5L7 9l3.5 3.5L9 14z" />
                <rect className="logo-cursor" x="13" y="6" width="2.5" height="12" rx="0.5" />
              </svg>
            </span>
            <span>esc<span className="gradient-zero">0</span>em</span>
          </a>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main">
            {navKeys.map((key) => (
              <a
                key={key}
                href={`#${anchorMap[key]}`}
                className={linkClass(key)}
                onClick={(e) => handleNavClick(e, anchorMap[key])}
              >
                {t(`nav.${key}`)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageToggle />

            <DropdownMenu.Root open={mobileOpen} onOpenChange={setMobileOpen}>
              <DropdownMenu.Trigger asChild>
                <button
                  type="button"
                  className={`md:hidden rounded p-2 text-gray-800 hover:bg-gray-100 ${focusVisibleNav}`}
                  aria-label={t('nav.menu')}
                  aria-expanded={mobileOpen}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content
                className="min-w-[180px] rounded-lg bg-white border border-gray-200 shadow-lg p-2 md:hidden z-50"
                sideOffset={8}
                align="end"
              >
                {navKeys.map((key) => (
                  <DropdownMenu.Item key={key} asChild>
                    <a
                      href={`#${anchorMap[key]}`}
                      className={dropdownItemClass}
                      onClick={(e) => handleNavClick(e, anchorMap[key])}
                    >
                      {t(`nav.${key}`)}
                    </a>
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        </div>
      </div>
    </header>
  )
}
