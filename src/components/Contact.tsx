import { useTranslation } from 'react-i18next'
import { Section } from './Section'
import { CopyButton } from './CopyButton'

const TELEGRAM_URL = 'https://t.me/esc0em'
const EMAIL = 'adressworks@gmail.com'

export function Contact() {
  const { t } = useTranslation()

  return (
    <Section id="contact" title={t('sections.contact.title')}>
      <div className="space-y-4 flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="font-medium text-gray-800">
            {t('sections.contact.telegram')}:
          </span>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 rounded"
          >
            {t('contact.telegramHandle')}
          </a>
          <CopyButton text={TELEGRAM_URL} />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="font-medium text-gray-800">
            {t('sections.contact.email')}:
          </span>
          <a href={`mailto:${EMAIL}`} className="text-accent font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 rounded">
            {EMAIL}
          </a>
          <CopyButton text={EMAIL} />
        </div>
      </div>
    </Section>
  )
}
