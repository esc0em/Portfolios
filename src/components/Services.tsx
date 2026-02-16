import { useTranslation } from 'react-i18next'
import { Section } from './Section'

export function Services() {
  const { t } = useTranslation()
  const items = t('sections.services.items', { returnObjects: true }) as string[]

  return (
    <Section id="services" title={t('sections.services.title')}>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-gray-800">
            <span className="text-accent" aria-hidden>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
