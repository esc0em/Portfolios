import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { copyToClipboard } from '../lib/clipboard'
import { useToast } from '../hooks/useToast'

type CopyButtonProps = {
  text: string
  className?: string
}

export function CopyButton({ text, className = '' }: CopyButtonProps) {
  const { t } = useTranslation()
  const { showToast } = useToast()
  const [copied, setCopied] = useState(false)

  const handleClick = async () => {
    const ok = await copyToClipboard(text)
    if (ok) {
      setCopied(true)
      showToast(t('common.copied'))
      setTimeout(() => setCopied(false), 1800)
    }
  }

  return (
    <span className={`inline-flex items-center ${className}`}>
      <button
        type="button"
        onClick={handleClick}
        className="rounded px-2 py-1 text-xs font-medium bg-gray-200 text-gray-800 hover:bg-accent hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {copied ? t('common.copied') : t('common.copy')}
      </button>
    </span>
  )
}
