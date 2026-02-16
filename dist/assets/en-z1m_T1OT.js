const n=`# Finance Manager — Telegram Bot + MiniApp\r
\r
## Project Description\r
\r
A Telegram bot for personal finance management with a Mini App interface. Users track income and expenses by category, set savings goals, log work shifts, define category budgets and daily limits, manage subscriptions and debts. Analytics and calendar help visualize trends and plan spending. Backend in Python (aiogram + FastAPI), frontend in React + Recharts, database PostgreSQL (SQLAlchemy).\r
\r
## Core Features\r
\r
### 1. Dashboard and Transactions\r
\r
Main screen with balance, recent transactions and progress toward goals. Quick add for income or expense via a dedicated screen with category, amount and date. Transaction list with filtering and history.\r
\r
### 2. Categories and Budgets\r
\r
Configurable income/expense categories. Per-category monthly budgets with optional notifications at 95%, 100% or over budget. Monthly daily limits with optional rollover to the next day.\r
\r
### 3. Savings Goals\r
\r
Create goals with target amount, deadline and emoji. Deposit and withdraw per goal; progress shown on the dashboard and on a dedicated goal detail screen.\r
\r
### 4. Work Shifts\r
\r
Shift logging: date, start/end time, hourly rate, automatic earnings calculation. Shift templates for quick entry of recurring patterns.\r
\r
### 5. Subscriptions\r
\r
Track subscriptions (name, amount, category, billing day). Next billing date and reminders.\r
\r
### 6. Debts\r
\r
Track “I owe” and “I am owed”: contact, amount, description, due date. Partial payments with payment history; statuses active/paid/overdue.\r
\r
### 7. Analytics and Calendar\r
\r
Analytics by period and category (Recharts). Calendar to view transactions and plan by date.\r
\r
### 8. Notifications\r
\r
In-app notifications (budget exceeded, subscription and debt reminders). Telegram integration to send notifications (scheduler + notification service).\r
\r
### 9. Admin\r
\r
Admin screen: user list and user detail view (transactions, goals, shifts, etc.) for support and moderation.\r
\r
## Technical Implementation\r
\r
### Backend\r
\r
- **Python**, **aiogram** — Telegram bot (/start, /help, open Mini App).\r
- **FastAPI** — REST API: transactions, shifts, goals, budgets, subscriptions, daily limits, analytics, debts, notifications, admin endpoints.\r
- **SQLAlchemy** — models and CRUD. Models: User, Transaction, WorkShift, Goal, GoalTransaction, Budget, Subscription, DailyLimit, Debt, DebtPayment, Notification, ShiftTemplate.\r
- **PostgreSQL** (asyncpg/psycopg2) — data storage.\r
- **Scheduler** — background tasks (reminders, Telegram notifications).\r
\r
### Frontend (Mini App)\r
\r
- **React 18**, **TypeScript**, **Vite** — build and tooling.\r
- **React Router** — routes: dashboard, add transaction, history, shifts, goals, calendar, menu, categories, analytics, monthly limits, admin.\r
- **Tailwind CSS** — styling. **Recharts** — analytics charts.\r
- **axios** — API client. Telegram Web App integration (viewport, theme, initData for user identification).\r
\r
### Security and Data\r
\r
- User identification by \`telegram_id\` from Mini App initData.\r
- Validation and permission checks on the backend; admin functions restricted by allowed IDs.\r
\r
## Results\r
\r
- 13+ Mini App screens, 10+ API modules (transactions, goals, shifts, budgets, subscriptions, limits, analytics, debts, notifications, admin).\r
- Single bot entry point: Mini App and Telegram notifications.\r
- Flexible data model (categories, budgets, goals, debts) and visualization with Recharts.\r
`;export{n as default};
