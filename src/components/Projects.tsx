import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Section } from './Section'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'
import { projects } from '../data/projects'
import type { ProjectId } from '../data/projects'

export function Projects() {
  const { t } = useTranslation()
  const [modalProjectId, setModalProjectId] = useState<ProjectId | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null)

  const openModal = (projectId: ProjectId, trigger: HTMLButtonElement) => {
    lastTriggerRef.current = trigger
    setModalProjectId(projectId)
    setModalOpen(true)
  }

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      const trigger = lastTriggerRef.current
      setModalOpen(open)
      setModalProjectId(null)
      requestAnimationFrame(() => trigger?.focus())
    } else {
      setModalOpen(open)
    }
  }

  return (
    <>
      <Section id="projects" title={t('sections.projects.title')}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={(trigger) => openModal(project.id, trigger)}
            />
          ))}
        </div>
        <p className="text-center mt-6 text-gray-600 italic">
          {t('sections.projects.more')}
        </p>
      </Section>
      <ProjectModal
        open={modalOpen}
        onOpenChange={handleOpenChange}
        projectId={modalProjectId}
      />
    </>
  )
}
