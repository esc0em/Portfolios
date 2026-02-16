# Finance Manager — Telegram Bot + MiniApp

## Project Description

A Telegram bot for personal finance management with a Mini App interface. Users track income and expenses by category, set savings goals, log work shifts, define category budgets and daily limits, manage subscriptions and debts. Analytics and calendar help visualize trends and plan spending. Backend in Python (aiogram + FastAPI), frontend in React + Recharts, database PostgreSQL (SQLAlchemy).

## Core Features

### 1. Dashboard and Transactions

Main screen with balance, recent transactions and progress toward goals. Quick add for income or expense via a dedicated screen with category, amount and date. Transaction list with filtering and history.

### 2. Categories and Budgets

Configurable income/expense categories. Per-category monthly budgets with optional notifications at 95%, 100% or over budget. Monthly daily limits with optional rollover to the next day.

### 3. Savings Goals

Create goals with target amount, deadline and emoji. Deposit and withdraw per goal; progress shown on the dashboard and on a dedicated goal detail screen.

### 4. Work Shifts

Shift logging: date, start/end time, hourly rate, automatic earnings calculation. Shift templates for quick entry of recurring patterns.

### 5. Subscriptions

Track subscriptions (name, amount, category, billing day). Next billing date and reminders.

### 6. Debts

Track “I owe” and “I am owed”: contact, amount, description, due date. Partial payments with payment history; statuses active/paid/overdue.

### 7. Analytics and Calendar

Analytics by period and category (Recharts). Calendar to view transactions and plan by date.

### 8. Notifications

In-app notifications (budget exceeded, subscription and debt reminders). Telegram integration to send notifications (scheduler + notification service).

### 9. Admin

Admin screen: user list and user detail view (transactions, goals, shifts, etc.) for support and moderation.

## Technical Implementation

### Backend

- **Python**, **aiogram** — Telegram bot (/start, /help, open Mini App).
- **FastAPI** — REST API: transactions, shifts, goals, budgets, subscriptions, daily limits, analytics, debts, notifications, admin endpoints.
- **SQLAlchemy** — models and CRUD. Models: User, Transaction, WorkShift, Goal, GoalTransaction, Budget, Subscription, DailyLimit, Debt, DebtPayment, Notification, ShiftTemplate.
- **PostgreSQL** (asyncpg/psycopg2) — data storage.
- **Scheduler** — background tasks (reminders, Telegram notifications).

### Frontend (Mini App)

- **React 18**, **TypeScript**, **Vite** — build and tooling.
- **React Router** — routes: dashboard, add transaction, history, shifts, goals, calendar, menu, categories, analytics, monthly limits, admin.
- **Tailwind CSS** — styling. **Recharts** — analytics charts.
- **axios** — API client. Telegram Web App integration (viewport, theme, initData for user identification).

### Security and Data

- User identification by `telegram_id` from Mini App initData.
- Validation and permission checks on the backend; admin functions restricted by allowed IDs.

## Results

- 13+ Mini App screens, 10+ API modules (transactions, goals, shifts, budgets, subscriptions, limits, analytics, debts, notifications, admin).
- Single bot entry point: Mini App and Telegram notifications.
- Flexible data model (categories, budgets, goals, debts) and visualization with Recharts.
