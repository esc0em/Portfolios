# Hub — Telegram Mini App (Business Platform)

## Project Description

A Telegram Mini App (web application inside Telegram) for manufacturers, distributors, and dealers. A single platform with an AI advisor, networking, consultations, events calendar, knowledge base, and admin panel. Built with React, Express, and PostgreSQL, with a Telegraf bot for entry and commands.

## Target Audience

- Manufacturers
- Distributors
- Dealers

Access to sections is controlled by tariffs (free / premium) and roles (member / company employee). Registration is via an application form with subsequent approval by an administrator.

## Core Features

### 1. AI Advisor

Integration with Dify: users ask questions and receive answers, with optional file attachments. Tariff and permission checks (employees get access only after employer profile approval).

### 2. Networking

Connection requests between users, filters, statuses (pending / accepted / declined). Tariff-based limits (e.g. 10 requests per month on free). Incoming requests shown on the home screen.

### 3. Consultations

Booking consultations via available slots. Requests stored in the database and displayed in the admin panel. Slot calendar and management.

### 4. Events Calendar

View and manage events. Integration with events API and calendar-style display.

### 5. Knowledge Base and Video Channel

Section with materials and videos. For premium users, access to a private Telegram channel: membership checked via API, invite link provided when needed.

### 6. Tariffs and Applications

Tariff screen (free / premium). Applications to join the Hub (types: company, consultation, stanislav). Application moderation, company profile and employee profile approval.

### 7. My Company

Company profile form after Hub application approval. Intermediate access level before full registration.

### 8. Ask Stanislav

Submitting questions as a dedicated request type, visible in the admin panel.

### 9. News

News feed with publishing and moderation via the admin panel.

### 10. Admin Panel

User, ticket, event, consultation, broadcast, and networking request management. Admin assignment, user blocking, content management (news, videos, previews).

### 11. Employee Profile

Dedicated screen for the “employee” role: filling in the employee profile and waiting for employer approval. After approval, access to the AI advisor and other sections according to tariff.

## Technical Implementation

### Frontend

- **React 19**, **Vite** (build)
- **Tailwind CSS**, **Lucide React** (icons)
- **@twa-dev/sdk** — Telegram Web App integration (theme, viewport, initData, user)
- Multi-screen navigation (home, about, tariffs, ai_advisor, networking, calendar, knowledge_base, my_company, news, admin, etc.)
- Localization (ru/en), language from Telegram or localStorage

### Backend

- **Node.js**, **Express 5**
- **PostgreSQL** — users, profiles, requests, networking, tariffs, events, consultations, news, moderation, telegram_id linkage
- **Telegraf** — bot: /start, /help, /profile, /stats (admins), opening the Mini App
- REST API: health, requests, events, networking, consultation slots, admin endpoints (users, tickets, events, consultations, broadcasts, networking-requests), channel (check-access, invite for video channel), uploads for previews and AI attachments

### Roles and Access

- Roles: member, employee. Checks for is_admin, is_blocked, hub_approved, employer_approved, video_channel_joined.
- Registration status cached in localStorage (5 minutes) for fast UI, then synced with the server.

### DevOps and Security

- **Docker & Docker Compose** — backend, frontend, PostgreSQL, telegram-bot, Nginx
- **Nginx** — reverse proxy, SSL (Let's Encrypt), rate limiting, security headers
- Automated backups (cron), deploy script (deploy.sh): setup, update, backup, status
- Environment variables in .env (not in git), non-root users in containers

## Results

- 15+ app screens, 12+ functional modules
- Full REST API and Dify integration for AI
- Tariff model and two-level moderation (Hub + company/employee)
- Production-ready deployment with Docker, Nginx, and backups
