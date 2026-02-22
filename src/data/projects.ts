export type ProjectLink = {
  label: string
  url: string
}

export type ProjectMetrics = {
  label: string
  value: string
}

export const projects = [
  {
    id: 'flow-shop',
    titleKey: 'projects.flowShop.title',
    shortKey: 'projects.flowShop.short',
    roleKey: 'projects.flowShop.role',
    stack: ['projects.stack.python', 'projects.stack.aiogram', 'projects.stack.sqlite', 'projects.stack.googleSheetsApi'],
    links: [],
    metrics: [
      { label: 'projects.flowShop.metrics.users', value: '400+' },
      { label: 'projects.flowShop.metrics.orders', value: '200+' },
      { label: 'projects.flowShop.metrics.statuses', value: '7' }
    ]
  },
  {
    id: 'active-realty-bot',
    titleKey: 'projects.activeRealtyBot.title',
    shortKey: 'projects.activeRealtyBot.short',
    roleKey: 'projects.activeRealtyBot.role',
    stack: ['projects.stack.python', 'projects.stack.aiogram', 'projects.stack.sqlite', 'projects.stack.openai'],
    links: [],
    metrics: [
      { label: 'projects.activeRealtyBot.metrics.menuItems', value: '5' },
      { label: 'projects.activeRealtyBot.metrics.dbTables', value: '5' },
      { label: 'projects.activeRealtyBot.metrics.escalations', value: '2' }
    ]
  },
  {
    id: 'autoking',
    titleKey: 'projects.autoking.title',
    shortKey: 'projects.autoking.short',
    roleKey: 'projects.autoking.role',
    stack: ['projects.stack.python', 'projects.stack.aiogram', 'projects.stack.sqlite', 'projects.stack.googleSheetsApi', 'projects.stack.googleCalendarApi', 'projects.stack.smsRu'],
    links: [],
    metrics: [
      { label: 'projects.autoking.metrics.categories', value: '8+' },
      { label: 'projects.autoking.metrics.integrations', value: '3' },
      { label: 'projects.autoking.metrics.reminders', value: '2' }
    ]
  },
  {
    id: 'finance-manager',
    titleKey: 'projects.financeManager.title',
    shortKey: 'projects.financeManager.short',
    roleKey: 'projects.financeManager.role',
    stack: ['projects.stack.react', 'projects.stack.vite', 'projects.stack.typescript', 'projects.stack.tailwind', 'projects.stack.python', 'projects.stack.aiogram', 'projects.stack.fastapi', 'projects.stack.sqlalchemy', 'projects.stack.postgresql', 'projects.stack.recharts'],
    links: [{ label: 'projects.financeManager.linkBot', url: 'https://t.me/finanstrackerbot' }],
    metrics: [
      { label: 'projects.financeManager.metrics.screens', value: '13+' },
      { label: 'projects.financeManager.metrics.modules', value: '10+' }
    ]
  },
  {
    id: 'crypto-miniapp',
    titleKey: 'projects.cryptoMiniapp.title',
    shortKey: 'projects.cryptoMiniapp.short',
    roleKey: 'projects.cryptoMiniapp.role',
    stack: ['projects.stack.react', 'projects.stack.typescript', 'projects.stack.vite', 'projects.stack.tailwind', 'projects.stack.python', 'projects.stack.aiogram', 'projects.stack.fastapi', 'projects.stack.redis', 'projects.stack.recharts'],
    links: [],
    metrics: [
      { label: 'projects.cryptoMiniapp.metrics.coins', value: '50+' },
      { label: 'projects.cryptoMiniapp.metrics.newsPerDay', value: '200+' },
      { label: 'projects.cryptoMiniapp.metrics.screens', value: '8' }
    ]
  },
  {
    id: 'stories-bot',
    titleKey: 'projects.storiesBot.title',
    shortKey: 'projects.storiesBot.short',
    roleKey: 'projects.storiesBot.role',
    stack: ['projects.stack.python', 'projects.stack.aiogram'],
    links: [],
    metrics: [
      { label: 'projects.storiesBot.metrics.steps', value: '6' },
      { label: 'projects.storiesBot.metrics.anonymizedTypes', value: '4' },
      { label: 'projects.storiesBot.metrics.pdfDocs', value: '3' }
    ]
  }
] as const

export type ProjectId = (typeof projects)[number]['id']

export type Project = {
  id: ProjectId
  titleKey: string
  shortKey: string
  roleKey: string
  stack: readonly string[]
  links: readonly ProjectLink[]
  metrics?: readonly ProjectMetrics[]
  cover?: string
}

export function getProjectById(id: ProjectId): Project | undefined {
  return projects.find((p) => p.id === id) as Project | undefined
}
