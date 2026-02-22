const e=`# Crypto — Market Monitor (Telegram Mini App)\r
\r
## Project Description\r
\r
A Telegram Mini App for traders, investors and crypto enthusiasts. The app aggregates news from leading crypto outlets (CoinDesk, CoinTelegraph, CryptoSlate), generates AI summaries for each article, displays current market conditions — top gainers and losers, total market cap, trading volume, Fear & Greed index — and provides trading conditions analytics: pros and cons of entering the market right now. Backend in Python (aiogram + FastAPI), scheduled parsing with Redis caching, frontend in React + Recharts + Tailwind CSS.\r
\r
## Core Features\r
\r
### 1. Market Dashboard\r
\r
The main screen of the app. Cards with key metrics: total crypto market cap, 24-hour trading volume, Bitcoin dominance, Fear & Greed index with a color scale (Extreme Fear → Extreme Greed). Mini charts showing market cap and volume changes over the last 7 days. Data updates every 5 minutes via CoinGecko API.\r
\r
### 2. Top Coins — Gainers and Losers\r
\r
A screen with two tabs: "Top Gainers" and "Top Losers". Sorting by price change over 1 hour, 24 hours, or 7 days. Each coin card: name, ticker, price, percentage change, mini sparkline chart, trading volume. Support for 50+ coins from the top by market cap. Display currency switcher (USD, EUR, RUB).\r
\r
### 3. News Feed with AI Summaries\r
\r
A news feed collected by the parser from CoinDesk, CoinTelegraph and CryptoSlate. Each news item contains: headline, source, publication time, AI summary (a brief 2–3 sentence summary generated via OpenAI API), sentiment tag (Bullish / Bearish / Neutral). Filtering by source and tag. Infinite scroll loading. Up to 200+ news items per day.\r
\r
### 4. Coin Detail Page\r
\r
Tapping a coin opens a detailed page: interactive price chart (1d / 7d / 30d / 1y) built with Recharts, key metrics (Market Cap, Volume 24h, Circulating Supply, ATH, ATL), a "Pros and Cons of Buying Now" block — automatically generated analysis based on RSI, price trend, volumes, and news sentiment. Related news filtered by coin ticker.\r
\r
### 5. Trading Conditions Analytics\r
\r
A dedicated screen with an overview of current trading conditions. "Pros" section: upward trend across key coins, increasing volumes, positive news sentiment, low Fear & Greed (opportunity zone). "Cons" section: overheated RSI, declining volumes, negative regulatory news, extreme greed (correction risk). Each factor includes an icon, brief explanation, and impact level (high / medium / low).\r
\r
### 6. Watchlist and Alerts\r
\r
Watchlist: add coins to favorites for quick access. Alert settings: Telegram notification when a target price is reached (above/below threshold), on sharp price changes (±5% per hour), on breaking news about a tracked coin. Notifications via Telegram bot (aiogram + scheduler).\r
\r
### 7. Settings\r
\r
Display currency selection (USD, EUR, RUB). Notification frequency (instant / hourly / morning digest). Dark and light theme (synced with Telegram theme). Interface language (Russian / English).\r
\r
### 8. Admin Panel\r
\r
Parsing source management (enable/disable sources, add new RSS/URLs). News moderation (hide irrelevant items). Statistics: user count, popular coins, open frequency. Manual parser trigger and cache clearing.\r
\r
## Technical Implementation\r
\r
### Backend\r
\r
- **Python**, **aiogram** — Telegram bot (/start, /help, /alerts commands, Mini App launch via Web App button).\r
- **FastAPI** — REST API: endpoints for coins (list, details, charts), news (feed, filters), analytics (trading conditions, pros/cons), watchlist, alerts, user settings, admin functions.\r
- **Redis** — CoinGecko data caching (5 min TTL), news cache (15 min TTL), parser task queue.\r
- **APScheduler** — scheduler: news parsing every 15 minutes, market data updates every 5 minutes, alert checks every minute, AI summary generation for new articles.\r
- **CoinGecko API** — coin data: prices, volumes, market cap, historical charts.\r
- **NewsAPI / RSS parsing** — news collection from CoinDesk, CoinTelegraph, CryptoSlate via RSS feeds and API.\r
- **OpenAI API** — generating brief summaries and sentiment tags for news, building the "pros/cons" block for coins.\r
\r
### Frontend (Mini App)\r
\r
- **React 18**, **TypeScript**, **Vite** — build and tooling.\r
- **React Router** — routes: dashboard, top coins, news feed, coin details, analytics, watchlist, settings, admin.\r
- **Tailwind CSS** — responsive styles, dark/light theme. **Recharts** — price and analytics charts.\r
- **axios** — API client. **SWR** — client-side data caching and revalidation.\r
- Telegram Web App SDK integration: viewport, theme, haptic feedback, initData for user identification.\r
\r
### Security and Data\r
\r
- User identification by \`telegram_id\` from Mini App initData.\r
- API rate limiting (abuse protection).\r
- Backend data validation; admin functions restricted by allowed Telegram IDs.\r
\r
## Results\r
\r
- 8 Mini App screens, 50+ tracked coins, 200+ daily news items with AI summaries.\r
- Real-time market analytics: Fear & Greed, top gainers/losers, trading conditions.\r
- Personalization: watchlist, price alerts, currency and theme selection.\r
- Single bot entry point: Mini App access, alert notifications, and digests via Telegram.\r
`;export{e as default};
