const e=`## Problem\r
\r
A bot was needed for broadcast messages and notifications with an admin panel: creating campaigns, selecting audiences, scheduled launch, and basic analytics (delivered, read, errors).\r
\r
## Solution\r
\r
A bot was built in Python with aiogram. Task queue and cache: Redis. A simple web admin panel allows creating broadcasts, uploading segments, and viewing stats. Message templates and rate limiting are supported.\r
\r
## Tech\r
\r
- **Python** — main language\r
- **aiogram** — async Telegram Bot API\r
- **Redis** — queues and cache\r
\r
## Result\r
\r
Stable broadcasts and analytics: campaigns can be scheduled and delivery tracked. Errors and retries are handled automatically.\r
\r
## Notes\r
\r
For very large volumes, workers can be moved to separate processes and Redis scaled; the current setup handles thousands of recipients without issues.\r
`;export{e as default};
