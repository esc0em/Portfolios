# Деплой

## Стек

- **Фронтенд:** React + TypeScript + Vite + Tailwind CSS
- **Сервер:** Ubuntu VPS, Nginx (статика)
- **SSL:** Let's Encrypt (certbot, автопродление)
- **CI/CD:** GitHub Actions → rsync по SSH

## Где запущено

| Параметр | Значение |
|----------|----------|
| Домен | `2026.esc0emportfolio.ru` |
| VPS IP | `45.67.56.149` |
| Путь на сервере | `/var/www/portfolio/` |
| Nginx-конфиг | `/etc/nginx/sites-available/portfolio` |
| Репозиторий | `github.com/esc0em/Portfolios` |

## Как работает деплой

`git push origin main` → GitHub Actions автоматически:

1. Устанавливает зависимости (`npm ci`)
2. Собирает проект (`npm run build`)
3. Отправляет `dist/` на VPS через `rsync`

Workflow: `.github/workflows/deploy.yml`

## Секреты GitHub Actions

В настройках репозитория (Settings → Secrets → Actions):

- `VPS_HOST` — IP сервера
- `VPS_USER` — `deploy`
- `VPS_SSH_KEY` — приватный SSH-ключ (`~/.ssh/deploy_key` на локальной машине)

## SSH-доступ

- Деплой-пользователь на VPS: `deploy`
- Ключ сгенерирован: `ed25519`, хранится локально в `~/.ssh/deploy_key`
- Публичный ключ добавлен в `/home/deploy/.ssh/authorized_keys`

## Ручной деплой (при необходимости)

```bash
npm run build
rsync -avz --delete ./dist/ deploy@45.67.56.149:/var/www/portfolio/
```
