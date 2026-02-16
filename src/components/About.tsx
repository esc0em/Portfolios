import { useTranslation } from 'react-i18next'
import { Section } from './Section'

export function About() {
  const { t } = useTranslation()
  const paragraphs = t('sections.about.paragraphs', { returnObjects: true }) as string[]
  const highlights = t('sections.about.highlights', { returnObjects: true }) as string[]

  return (
    <Section id="about" title={t('sections.about.title')}>
      <div className="space-y-4">
        <p className="text-gray-800 leading-relaxed">
          {t('sections.about.intro')}
        </p>
        {paragraphs.map((text, i) => (
          <p key={i} className="text-gray-800 leading-relaxed">
            {text}
          </p>
        ))}
        <ul className="list-disc list-inside text-gray-800 leading-relaxed space-y-1 mt-4">
          {highlights.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
