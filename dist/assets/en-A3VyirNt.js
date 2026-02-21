const e=`# Active Group Realty — Telegram Bot with LLM\r
\r
## Project Description\r
\r
Telegram bot for Active Group Realty — real estate consultations powered by LLM (GPT-5.1). Users get answers via menu and free dialogue; escalation to a specialist is available when needed. Orchestrator adds disclaimers and filters undesirable phrases. Feedback collection (👍/👎), admin panel with statistics and CSV export.\r
\r
## Core Features\r
\r
### 1. Menu (5 Sections)\r
\r
- **Rent** — rent / list property.\r
- **Buy and Sell** — buy / sell real estate.\r
- **Analytics and Market** — market questions.\r
- **Documents and Taxes** — documents and taxes (strict disclaimer).\r
- **About Company / Specialist Contact** — company info and consultation flow.\r
\r
### 2. Free Dialogue with LLM\r
\r
Handles arbitrary user questions. Answers generated via ProxyAPI or OpenRouter (GPT-5.1). Session context is preserved — previously collected data is considered.\r
\r
### 3. Orchestrator\r
\r
- Disclaimers: soft by default, strict for tax and document topics.\r
- Filtering: remove or replace undesirable phrases (database access, file requests).\r
- «Connect specialist» button shown conditionally (no more than once per 10 messages).\r
\r
### 4. Feedback (👍/👎)\r
\r
- **👍 Helpful** — thank you.\r
- **👎 Incorrect** — select reason: factual error, unclear, risky advice, other (with comment). On negative feedback, admin receives reason, question, answer, and dialogue history.\r
\r
### 5. Specialist Consultation\r
\r
Step-by-step collection: city, property type, request type, budget, urgency, details. Limit 2 requests per user per day, 12-hour cooldown. Requests sent to admin chat with full data.\r
\r
### 6. Admin Panel\r
\r
- \`/report\` — feedback stats: total, positive/negative, reasons, problematic sections.\r
- \`/admin\` — export feedback to CSV (today, yesterday, all time).\r
- Manage additional admins by username.\r
\r
## Technical Solutions\r
\r
### Stack\r
\r
- **Python** — main language.\r
- **aiogram 3.x** — Telegram Bot API, FSM, keyboards.\r
- **SQLite** — feedback, admins, sessions, user slots, escalations.\r
- **OpenAI API** (ProxyAPI / OpenRouter) — LLM response generation (GPT-5.1 model).\r
- **httpx** — HTTP requests to API.\r
- **python-dotenv** — configuration from .env.\r
\r
### Database\r
\r
- **feedback** — ratings (👍/👎), reason, question, answer, section.\r
- **admins** — additional admins by username.\r
- **sessions** — dialogue sessions with message history.\r
- **user_slots** — slots: city, budget, property type, goal.\r
- **user_escalations** — specialist escalation count (2/day limit).\r
\r
### Rate Limiting\r
\r
- 40 messages per day per user.\r
- 5 messages per minute.\r
- Up to 2 specialist escalations per day.\r
\r
### FSM\r
\r
States for feedback collection, specialist consultation, and admin operations.\r
\r
## Implementation Features\r
\r
1. **Orchestrator**: response quality control — disclaimers, filtering, escalation button conditions.\r
2. **Session context**: reuse collected data when requesting specialist consultation.\r
3. **Logging**: incoming messages and RAW/FINAL LLM responses (first 200 chars).\r
4. **Topic-based admin**: leads and feedback in separate forum chat topics.\r
\r
## Results\r
\r
- 24/7 real estate consultations via LLM.\r
- Feedback collection to improve answers.\r
- Specialist escalation with controlled load (2/day).\r
- Feedback analytics and CSV export for reporting.\r
`;export{e as default};
