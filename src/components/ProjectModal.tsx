import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useTranslation } from 'react-i18next'
import type { ProjectId } from '../data/projects'
import { getProjectById } from '../data/projects'
import { getProjectCaseMarkdown } from '../lib/getProjectCaseMarkdown'

type ProjectModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  projectId: ProjectId | null
}

type CaseLang = 'ru' | 'en'

function toCaseLang(lang: string): CaseLang {
  return lang === 'en' ? 'en' : 'ru'
}

function CaseSkeleton() {
  return (
    <div className="animate-pulse space-y-3">
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-5/6" />
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-4/5" />
    </div>
  )
}

export function ProjectModal({ open, onOpenChange, projectId }: ProjectModalProps) {
  const { t, i18n } = useTranslation()
  const project = projectId ? getProjectById(projectId) : null
  const [caseContent, setCaseContent] = useState<string>('')
  const [caseLoading, setCaseLoading] = useState(false)
  const lang = toCaseLang(i18n.language)

  useEffect(() => {
    if (!projectId || !open) return
    setCaseLoading(true)
    getProjectCaseMarkdown(projectId, lang)
      .then(setCaseContent)
      .finally(() => setCaseLoading(false))
  }, [projectId, lang, open])

  if (!project) return null

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg max-h-[90vh] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white border border-gray-200 shadow-xl overflow-y-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          onEscapeKeyDown={() => onOpenChange(false)}
          onPointerDownOutside={() => onOpenChange(false)}
          aria-modal="true"
          aria-labelledby="project-modal-title"
          aria-describedby="project-modal-description"
        >
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <Dialog.Title id="project-modal-title" className="text-xl font-semibold text-gray-900">
                {t(project.titleKey)}
              </Dialog.Title>
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="rounded p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label={t('common.close')}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </Dialog.Close>
            </div>

            <div id="project-modal-description" className="mt-4 space-y-4 text-gray-800 text-sm">
              <p>{t(project.shortKey)}</p>

              <div>
                <dt className="font-medium text-gray-900">{t('projectModal.role')}</dt>
                <dd className="mt-0.5">{t(project.roleKey)}</dd>
              </div>

              <div>
                <dt className="font-medium text-gray-900 mb-1.5">{t('projectModal.stack')}</dt>
                <dd className="flex flex-wrap gap-2">
                  {project.stack.map((key) => (
                    <span
                      key={key}
                      className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                    >
                      {t(key)}
                    </span>
                  ))}
                </dd>
              </div>

              {project.links.length > 0 && (
                <div>
                  <dt className="font-medium text-gray-900 mb-1.5">{t('projectModal.links')}</dt>
                  <dd className="flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-md bg-accent/10 text-accent px-3 py-1.5 text-sm font-medium hover:bg-accent/20 transition-colors"
                      >
                        {t(link.label)}
                      </a>
                    ))}
                  </dd>
                </div>
              )}

              {project.metrics && project.metrics.length > 0 && (
                <div>
                  <dt className="font-medium text-gray-900 mb-1.5">{t('projectModal.metrics')}</dt>
                  <dd className="space-y-1">
                    {project.metrics.map((m, i) => (
                      <div key={i}>
                        {t(m.label)}: {t(m.value)}
                      </div>
                    ))}
                  </dd>
                </div>
              )}

              <div>
                <h3 className="font-medium text-gray-900 mb-2">{t('projectModal.case')}</h3>
                {caseLoading ? (
                  <CaseSkeleton />
                ) : caseContent ? (
                  <div className="prose prose-gray prose-sm max-w-none prose-p:my-1.5 prose-headings:my-2 prose-ul:my-1.5 prose-li:my-0">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{caseContent}</ReactMarkdown>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
