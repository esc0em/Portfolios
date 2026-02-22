const n=`# Story Keeper — Telegram bot for anonymous story collection\r
\r
## Project Description\r
\r
Telegram bot for anonymously collecting personal stories as part of the «Million Untold Stories» project. Users share their stories with the bot; after anonymization, the stories are sent to moderators for publication in the channel and possible use in short film or novel scripts.\r
\r
## Core Features\r
\r
### 1. Step-by-step flow (FSM)\r
\r
- **Greeting** — introduction to the bot, explanation of safety and anonymity conditions.\r
- **Rules agreement** — confirmation of 18+ age, publication terms, consent for story use in scripts.\r
- **Story input** — user writes text in one or several messages.\r
- **Confirmation of completion** — «Yes, I'm done» button.\r
- **Send confirmation** — final consent before sending to moderators.\r
- **Thank you** — message about successful submission and invitation to subscribe to the channel.\r
\r
### 2. Text anonymization\r
\r
Before sending to moderators, the following are automatically hidden:\r
\r
- Phone numbers (any format)\r
- Email addresses\r
- @username handles\r
- Links (including t.me)\r
\r
All listed fragments are replaced with «[contact removed]».\r
\r
### 3. Delivery to moderators\r
\r
Stories are sent to the moderators' group with topic support (\`message_thread_id\`) for organized discussion.\r
\r
### 4. Menu\r
\r
- Rules — project rules summary\r
- How it works — process description\r
- About project — information about «Million Untold Stories»\r
- Channel link — link to the channel\r
- PDF documents: rules, terms of use, privacy policy\r
\r
### 5. Navigation\r
\r
- «Back», «Menu», «Start over» buttons depending on context.\r
- After refusal to send — choice: «Send now» or «Rewrite story».\r
\r
## Technical Solutions\r
\r
### Stack\r
\r
- **Python 3.13** — main language.\r
- **aiogram 3.x** — Telegram Bot API, FSM, keyboards.\r
- **python-dotenv** — configuration from .env (bot token, moderators chat ID, topic ID, channel link, PDF paths).\r
\r
### FSM\r
\r
\`MemoryStorage\` for flow states. States defined in \`states/story.py\`.\r
\r
### Anonymization\r
\r
Module \`utils/anonymizer.py\`:\r
\r
- Regex patterns for phones, email, @username, URL.\r
- \`split_for_telegram()\` — split long texts (>4096 chars) into parts for Telegram limits.\r
\r
### Deployment\r
\r
- PowerShell script \`upload_to_server.ps1\` — automatic file upload to server.\r
- systemd service \`stories-bot.service\` — run bot as daemon.\r
\r
## Implementation Features\r
\r
1. **No database** — bot does not store stories, only forwards them to moderators after anonymization.\r
2. **Flexible PDF paths** — support for document paths via environment variables with fallback to default files in \`files/\` folder.\r
3. **Topic-based moderation** — delivery to group topic for structured discussion.\r
4. **Command /get_chat_id** — helper command to get group ID.\r
\r
## Results\r
\r
- Anonymous story collection with personal data protection.\r
- Step-by-step flow with rules and terms confirmation.\r
- Convenient moderation via group topics.\r
- Menu with rules and legal documents (PDF) for project transparency.\r
`;export{n as default};
