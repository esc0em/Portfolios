# Active Group Realty — Telegram Bot with LLM

## Project Description

Telegram bot for Active Group Realty — real estate consultations powered by LLM (GPT-5.1). Users get answers via menu and free dialogue; escalation to a specialist is available when needed. Orchestrator adds disclaimers and filters undesirable phrases. Feedback collection (👍/👎), admin panel with statistics and CSV export.

## Core Features

### 1. Menu (5 Sections)

- **Rent** — rent / list property.
- **Buy and Sell** — buy / sell real estate.
- **Analytics and Market** — market questions.
- **Documents and Taxes** — documents and taxes (strict disclaimer).
- **About Company / Specialist Contact** — company info and consultation flow.

### 2. Free Dialogue with LLM

Handles arbitrary user questions. Answers generated via ProxyAPI or OpenRouter (GPT-5.1). Session context is preserved — previously collected data is considered.

### 3. Orchestrator

- Disclaimers: soft by default, strict for tax and document topics.
- Filtering: remove or replace undesirable phrases (database access, file requests).
- «Connect specialist» button shown conditionally (no more than once per 10 messages).

### 4. Feedback (👍/👎)

- **👍 Helpful** — thank you.
- **👎 Incorrect** — select reason: factual error, unclear, risky advice, other (with comment). On negative feedback, admin receives reason, question, answer, and dialogue history.

### 5. Specialist Consultation

Step-by-step collection: city, property type, request type, budget, urgency, details. Limit 2 requests per user per day, 12-hour cooldown. Requests sent to admin chat with full data.

### 6. Admin Panel

- `/report` — feedback stats: total, positive/negative, reasons, problematic sections.
- `/admin` — export feedback to CSV (today, yesterday, all time).
- Manage additional admins by username.

## Technical Solutions

### Stack

- **Python** — main language.
- **aiogram 3.x** — Telegram Bot API, FSM, keyboards.
- **SQLite** — feedback, admins, sessions, user slots, escalations.
- **OpenAI API** (ProxyAPI / OpenRouter) — LLM response generation (GPT-5.1 model).
- **httpx** — HTTP requests to API.
- **python-dotenv** — configuration from .env.

### Database

- **feedback** — ratings (👍/👎), reason, question, answer, section.
- **admins** — additional admins by username.
- **sessions** — dialogue sessions with message history.
- **user_slots** — slots: city, budget, property type, goal.
- **user_escalations** — specialist escalation count (2/day limit).

### Rate Limiting

- 40 messages per day per user.
- 5 messages per minute.
- Up to 2 specialist escalations per day.

### FSM

States for feedback collection, specialist consultation, and admin operations.

## Implementation Features

1. **Orchestrator**: response quality control — disclaimers, filtering, escalation button conditions.
2. **Session context**: reuse collected data when requesting specialist consultation.
3. **Logging**: incoming messages and RAW/FINAL LLM responses (first 200 chars).
4. **Topic-based admin**: leads and feedback in separate forum chat topics.

## Results

- 24/7 real estate consultations via LLM.
- Feedback collection to improve answers.
- Specialist escalation with controlled load (2/day).
- Feedback analytics and CSV export for reporting.
