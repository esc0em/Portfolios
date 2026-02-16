import type { ProjectId } from '../data/projects'

type CaseLang = 'ru' | 'en'

const caseModules = import.meta.glob('../content/projects/*/*.md', {
  query: '?raw',
  import: 'default',
  eager: false,
}) as Record<string, () => Promise<string>>

function getCaseKey(projectId: ProjectId, lang: CaseLang): string {
  return `../content/projects/${projectId}/${lang}.md`
}

export async function getProjectCaseMarkdown(projectId: ProjectId, lang: CaseLang): Promise<string> {
  const key = getCaseKey(projectId, lang)
  const loader = caseModules[key]
  if (!loader) return ''
  try {
    const mod = await loader()
    return typeof mod === 'string' ? mod : ''
  } catch {
    return ''
  }
}
