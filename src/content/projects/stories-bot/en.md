# Story Keeper — Telegram bot for anonymous story collection

## Project Description

Telegram bot for anonymously collecting personal stories as part of the «Million Untold Stories» project. Users share their stories with the bot; after anonymization, the stories are sent to moderators for publication in the channel and possible use in short film or novel scripts.

## Core Features

### 1. Step-by-step flow (FSM)

- **Greeting** — introduction to the bot, explanation of safety and anonymity conditions.
- **Rules agreement** — confirmation of 18+ age, publication terms, consent for story use in scripts.
- **Story input** — user writes text in one or several messages.
- **Confirmation of completion** — «Yes, I'm done» button.
- **Send confirmation** — final consent before sending to moderators.
- **Thank you** — message about successful submission and invitation to subscribe to the channel.

### 2. Text anonymization

Before sending to moderators, the following are automatically hidden:

- Phone numbers (any format)
- Email addresses
- @username handles
- Links (including t.me)

All listed fragments are replaced with «[contact removed]».

### 3. Delivery to moderators

Stories are sent to the moderators' group with topic support (`message_thread_id`) for organized discussion.

### 4. Menu

- Rules — project rules summary
- How it works — process description
- About project — information about «Million Untold Stories»
- Channel link — link to the channel
- PDF documents: rules, terms of use, privacy policy

### 5. Navigation

- «Back», «Menu», «Start over» buttons depending on context.
- After refusal to send — choice: «Send now» or «Rewrite story».

## Technical Solutions

### Stack

- **Python 3.13** — main language.
- **aiogram 3.x** — Telegram Bot API, FSM, keyboards.
- **python-dotenv** — configuration from .env (bot token, moderators chat ID, topic ID, channel link, PDF paths).

### FSM

`MemoryStorage` for flow states. States defined in `states/story.py`.

### Anonymization

Module `utils/anonymizer.py`:

- Regex patterns for phones, email, @username, URL.
- `split_for_telegram()` — split long texts (>4096 chars) into parts for Telegram limits.

### Deployment

- PowerShell script `upload_to_server.ps1` — automatic file upload to server.
- systemd service `stories-bot.service` — run bot as daemon.

## Implementation Features

1. **No database** — bot does not store stories, only forwards them to moderators after anonymization.
2. **Flexible PDF paths** — support for document paths via environment variables with fallback to default files in `files/` folder.
3. **Topic-based moderation** — delivery to group topic for structured discussion.
4. **Command /get_chat_id** — helper command to get group ID.

## Results

- Anonymous story collection with personal data protection.
- Step-by-step flow with rules and terms confirmation.
- Convenient moderation via group topics.
- Menu with rules and legal documents (PDF) for project transparency.
