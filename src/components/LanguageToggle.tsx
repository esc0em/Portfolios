import { useTranslation } from 'react-i18next'

export function LanguageToggle() {
  const { i18n } = useTranslation()
  const isRu = i18n.language === 'ru'

  return (
    <div className="flex gap-1 rounded-md p-1 bg-gray-100">
      <button
        type="button"
        onClick={() => i18n.changeLanguage('ru')}
        className={`rounded px-2 py-1 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${isRu ? 'bg-accent text-white' : 'text-gray-700 hover:text-gray-900'}`}
        aria-pressed={isRu}
      >
        RU
      </button>
      <button
        type="button"
        onClick={() => i18n.changeLanguage('en')}
        className={`rounded px-2 py-1 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${!isRu ? 'bg-accent text-white' : 'text-gray-700 hover:text-gray-900'}`}
        aria-pressed={!isRu}
      >
        EN
      </button>
    </div>
  )
}
