const e=`## Problem\r
\r
A Telegram bot was needed to handle support requests and answer FAQs. Requests had to become tickets with assignable agents and status tracking.\r
\r
## Solution\r
\r
A bot was built on Node.js with the Telegraf framework. Users send a message and a ticket is created. Admins get notifications and can reply from the bot or a web panel. A simple FAQ was added via inline buttons and commands.\r
\r
## Tech\r
\r
- **Node.js** — server runtime\r
- **Telegraf** — Telegram Bot API integration\r
- **PostgreSQL** — storage for tickets and users\r
\r
## Result\r
\r
Support load decreased thanks to automatic routing and a base of canned responses. Hundreds of requests per day are handled without losing context.\r
\r
## Notes\r
\r
The bot is integrated with an internal CRM via webhook; a website widget using the same backend can be added if needed.\r
`;export{e as default};
