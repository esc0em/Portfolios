# Crypto — Market Monitor (Telegram Mini App)

## Project Description

A Telegram Mini App for traders, investors and crypto enthusiasts. The app aggregates news from leading crypto outlets (CoinDesk, CoinTelegraph, CryptoSlate), generates AI summaries for each article, displays current market conditions — top gainers and losers, total market cap, trading volume, Fear & Greed index — and provides trading conditions analytics: pros and cons of entering the market right now. Backend in Python (aiogram + FastAPI), scheduled parsing with Redis caching, frontend in React + Recharts + Tailwind CSS.

## Core Features

### 1. Market Dashboard

The main screen of the app. Cards with key metrics: total crypto market cap, 24-hour trading volume, Bitcoin dominance, Fear & Greed index with a color scale (Extreme Fear → Extreme Greed). Mini charts showing market cap and volume changes over the last 7 days. Data updates every 5 minutes via CoinGecko API.

### 2. Top Coins — Gainers and Losers

A screen with two tabs: "Top Gainers" and "Top Losers". Sorting by price change over 1 hour, 24 hours, or 7 days. Each coin card: name, ticker, price, percentage change, mini sparkline chart, trading volume. Support for 50+ coins from the top by market cap. Display currency switcher (USD, EUR, RUB).

### 3. News Feed with AI Summaries

A news feed collected by the parser from CoinDesk, CoinTelegraph and CryptoSlate. Each news item contains: headline, source, publication time, AI summary (a brief 2–3 sentence summary generated via OpenAI API), sentiment tag (Bullish / Bearish / Neutral). Filtering by source and tag. Infinite scroll loading. Up to 200+ news items per day.

### 4. Coin Detail Page

Tapping a coin opens a detailed page: interactive price chart (1d / 7d / 30d / 1y) built with Recharts, key metrics (Market Cap, Volume 24h, Circulating Supply, ATH, ATL), a "Pros and Cons of Buying Now" block — automatically generated analysis based on RSI, price trend, volumes, and news sentiment. Related news filtered by coin ticker.

### 5. Trading Conditions Analytics

A dedicated screen with an overview of current trading conditions. "Pros" section: upward trend across key coins, increasing volumes, positive news sentiment, low Fear & Greed (opportunity zone). "Cons" section: overheated RSI, declining volumes, negative regulatory news, extreme greed (correction risk). Each factor includes an icon, brief explanation, and impact level (high / medium / low).

### 6. Watchlist and Alerts

Watchlist: add coins to favorites for quick access. Alert settings: Telegram notification when a target price is reached (above/below threshold), on sharp price changes (±5% per hour), on breaking news about a tracked coin. Notifications via Telegram bot (aiogram + scheduler).

### 7. Settings

Display currency selection (USD, EUR, RUB). Notification frequency (instant / hourly / morning digest). Dark and light theme (synced with Telegram theme). Interface language (Russian / English).

### 8. Admin Panel

Parsing source management (enable/disable sources, add new RSS/URLs). News moderation (hide irrelevant items). Statistics: user count, popular coins, open frequency. Manual parser trigger and cache clearing.

## Technical Implementation

### Backend

- **Python**, **aiogram** — Telegram bot (/start, /help, /alerts commands, Mini App launch via Web App button).
- **FastAPI** — REST API: endpoints for coins (list, details, charts), news (feed, filters), analytics (trading conditions, pros/cons), watchlist, alerts, user settings, admin functions.
- **Redis** — CoinGecko data caching (5 min TTL), news cache (15 min TTL), parser task queue.
- **APScheduler** — scheduler: news parsing every 15 minutes, market data updates every 5 minutes, alert checks every minute, AI summary generation for new articles.
- **CoinGecko API** — coin data: prices, volumes, market cap, historical charts.
- **NewsAPI / RSS parsing** — news collection from CoinDesk, CoinTelegraph, CryptoSlate via RSS feeds and API.
- **OpenAI API** — generating brief summaries and sentiment tags for news, building the "pros/cons" block for coins.

### Frontend (Mini App)

- **React 18**, **TypeScript**, **Vite** — build and tooling.
- **React Router** — routes: dashboard, top coins, news feed, coin details, analytics, watchlist, settings, admin.
- **Tailwind CSS** — responsive styles, dark/light theme. **Recharts** — price and analytics charts.
- **axios** — API client. **SWR** — client-side data caching and revalidation.
- Telegram Web App SDK integration: viewport, theme, haptic feedback, initData for user identification.

### Security and Data

- User identification by `telegram_id` from Mini App initData.
- API rate limiting (abuse protection).
- Backend data validation; admin functions restricted by allowed Telegram IDs.

## Results

- 8 Mini App screens, 50+ tracked coins, 200+ daily news items with AI summaries.
- Real-time market analytics: Fear & Greed, top gainers/losers, trading conditions.
- Personalization: watchlist, price alerts, currency and theme selection.
- Single bot entry point: Mini App access, alert notifications, and digests via Telegram.
