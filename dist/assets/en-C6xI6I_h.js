const e=`# Hub — Telegram Mini App (Business Platform)\r
\r
## Project Description\r
\r
A Telegram Mini App (web application inside Telegram) for manufacturers, distributors, and dealers. A single platform with an AI advisor, networking, consultations, events calendar, knowledge base, and admin panel. Built with React, Express, and PostgreSQL, with a Telegraf bot for entry and commands.\r
\r
## Target Audience\r
\r
- Manufacturers\r
- Distributors\r
- Dealers\r
\r
Access to sections is controlled by tariffs (free / premium) and roles (member / company employee). Registration is via an application form with subsequent approval by an administrator.\r
\r
## Core Features\r
\r
### 1. AI Advisor\r
\r
Integration with Dify: users ask questions and receive answers, with optional file attachments. Tariff and permission checks (employees get access only after employer profile approval).\r
\r
### 2. Networking\r
\r
Connection requests between users, filters, statuses (pending / accepted / declined). Tariff-based limits (e.g. 10 requests per month on free). Incoming requests shown on the home screen.\r
\r
### 3. Consultations\r
\r
Booking consultations via available slots. Requests stored in the database and displayed in the admin panel. Slot calendar and management.\r
\r
### 4. Events Calendar\r
\r
View and manage events. Integration with events API and calendar-style display.\r
\r
### 5. Knowledge Base and Video Channel\r
\r
Section with materials and videos. For premium users, access to a private Telegram channel: membership checked via API, invite link provided when needed.\r
\r
### 6. Tariffs and Applications\r
\r
Tariff screen (free / premium). Applications to join the Hub (types: company, consultation, stanislav). Application moderation, company profile and employee profile approval.\r
\r
### 7. My Company\r
\r
Company profile form after Hub application approval. Intermediate access level before full registration.\r
\r
### 8. Ask Stanislav\r
\r
Submitting questions as a dedicated request type, visible in the admin panel.\r
\r
### 9. News\r
\r
News feed with publishing and moderation via the admin panel.\r
\r
### 10. Admin Panel\r
\r
User, ticket, event, consultation, broadcast, and networking request management. Admin assignment, user blocking, content management (news, videos, previews).\r
\r
### 11. Employee Profile\r
\r
Dedicated screen for the “employee” role: filling in the employee profile and waiting for employer approval. After approval, access to the AI advisor and other sections according to tariff.\r
\r
## Technical Implementation\r
\r
### Frontend\r
\r
- **React 19**, **Vite** (build)\r
- **Tailwind CSS**, **Lucide React** (icons)\r
- **@twa-dev/sdk** — Telegram Web App integration (theme, viewport, initData, user)\r
- Multi-screen navigation (home, about, tariffs, ai_advisor, networking, calendar, knowledge_base, my_company, news, admin, etc.)\r
- Localization (ru/en), language from Telegram or localStorage\r
\r
### Backend\r
\r
- **Node.js**, **Express 5**\r
- **PostgreSQL** — users, profiles, requests, networking, tariffs, events, consultations, news, moderation, telegram_id linkage\r
- **Telegraf** — bot: /start, /help, /profile, /stats (admins), opening the Mini App\r
- REST API: health, requests, events, networking, consultation slots, admin endpoints (users, tickets, events, consultations, broadcasts, networking-requests), channel (check-access, invite for video channel), uploads for previews and AI attachments\r
\r
### Roles and Access\r
\r
- Roles: member, employee. Checks for is_admin, is_blocked, hub_approved, employer_approved, video_channel_joined.\r
- Registration status cached in localStorage (5 minutes) for fast UI, then synced with the server.\r
\r
### DevOps and Security\r
\r
- **Docker & Docker Compose** — backend, frontend, PostgreSQL, telegram-bot, Nginx\r
- **Nginx** — reverse proxy, SSL (Let's Encrypt), rate limiting, security headers\r
- Automated backups (cron), deploy script (deploy.sh): setup, update, backup, status\r
- Environment variables in .env (not in git), non-root users in containers\r
\r
## Results\r
\r
- 15+ app screens, 12+ functional modules\r
- Full REST API and Dify integration for AI\r
- Tariff model and two-level moderation (Hub + company/employee)\r
- Production-ready deployment with Docker, Nginx, and backups\r
`;export{e as default};
