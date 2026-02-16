import { useTranslation } from 'react-i18next'
import { Section } from './Section'

export function Skills() {
  const { t } = useTranslation()
  const items = t('sections.skills.items', { returnObjects: true }) as string[]

  return (
    <Section id="skills" title={t('sections.skills.title')}>
      <ul className="flex flex-wrap gap-2">
        {items.map((skill, i) => (
          <li
            key={i}
            className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-800 border border-gray-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </Section>
  )
}
