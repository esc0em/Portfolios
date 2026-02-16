import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-gray-200 py-6">
      <div className="content-container text-center text-sm text-gray-600">
        {t('footer.copyright')}
      </div>
    </footer>
  )
}
