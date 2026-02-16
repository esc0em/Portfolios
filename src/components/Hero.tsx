import { useTranslation } from 'react-i18next'
import { useSectionReveal } from '../hooks/useSectionReveal'

export function Hero() {
  const { t } = useTranslation()
  const { ref, revealClass } = useSectionReveal()

  return (
    <section
      ref={ref}
      id="hero"
      className={`relative w-full overflow-hidden min-h-[calc(100svh-72px)] md:min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-88px)] ${revealClass}`.trim()}
    >
      {/* Background layers (full-bleed) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Background image */}
        <img
          src="/images/hero.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[45%_10%] md:object-[45%_16%] lg:object-[45%_20%]"
        />
        {/* Darkening overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/55" />
        {/* Vignette for readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.45)_70%,rgba(0,0,0,0.65)_100%)]" />
      </div>
      {/* Content */}
      <div className="relative z-10 flex min-h-[calc(100svh-72px)] md:min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-88px)] flex-col items-center justify-center py-16 sm:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-md">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-white/90">
              {t('hero.subtitle')}
            </p>
            <a
              href="#contact"
              className="inline-block rounded-lg bg-accent px-6 py-3 font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label={t('hero.cta')}
            >
              {t('hero.cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
