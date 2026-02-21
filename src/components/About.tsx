import { useTranslation } from 'react-i18next'
import { Section } from './Section'

export function About() {
  const { t } = useTranslation()
  const paragraphs = t('sections.about.paragraphs', { returnObjects: true }) as string[]
  const highlights = t('sections.about.highlights', { returnObjects: true }) as string[]

  return (
    <Section id="about" title={t('sections.about.title')}>
      <div className="space-y-5 sm:space-y-6">
        <div className="border-l-4 border-accent bg-accent/5 rounded-r-lg py-4 px-5">
          <p className="text-gray-800 leading-relaxed sm:leading-loose">
            {t('sections.about.intro')}
          </p>
        </div>

        {paragraphs.map((text, i) => (
          <div key={i} className="bg-white rounded-lg p-4 sm:p-5 shadow-sm">
            <p className="text-gray-700 leading-relaxed sm:leading-loose">
              {text}
            </p>
          </div>
        ))}

        <ul className="space-y-2.5 mt-2">
          {highlights.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
