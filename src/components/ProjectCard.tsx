import { useTranslation } from 'react-i18next'
import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
  onOpen: (trigger: HTMLButtonElement) => void
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const { t } = useTranslation()

  return (
    <button
      type="button"
      onClick={(e) => onOpen(e.currentTarget)}
      className="text-left rounded-lg border border-gray-200 bg-white p-4 sm:p-5 hover:border-accent hover:shadow-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
    >
      {project.cover && (
        <img
          src={project.cover}
          alt=""
          className="w-full h-32 object-cover rounded-md mb-3"
        />
      )}
      <h3 className="text-lg font-semibold text-gray-900">
        {t(project.titleKey)}
      </h3>
      <p className="mt-2 text-sm text-gray-700">
        {t(project.shortKey)}
      </p>
    </button>
  )
}
